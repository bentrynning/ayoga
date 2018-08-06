var _ = require("lodash");
var Promise = require("bluebird");

enduro.templating_engine.registerHelper("practices", function(options) {
    // will store all the entries
    var practice_entries;

    // get_cms_list will return a structured list of all pages in a project
    return enduro.api.pagelist_generator
        .get_cms_list()
        .then(pagelist => {
            // will store the promises from reading all the entries
            var get_content_promises = [];

            practice_entries = _
                .chain(pagelist.structured.practices)
                .filter(o => typeof o === "object")
                .value(); // filter pages only

            // goes through all the entries and loads their content
            for (page_id in practice_entries) {
                var page = practice_entries[page_id];

                function get_content(page) {
                    get_content_promises.push(
                        enduro.api.flat.load(page.fullpath).then(content => {
                            page.practice_entry = content;
                        })
                    );
                }

                get_content(page);
            }

            return Promise.all(get_content_promises);
        })
        .then(() => {
            practice_entries = practice_entries.filter(
                entry => entry.hidden !== true
            );
            // pass blog entries as context for the template
            return options.fn(practice_entries);
        });
});
