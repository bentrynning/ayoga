enduro.templating_engine.registerHelper("list_tags", function(
    tags,
    context,
    options
) {
    let list = [];
    for (tag of tags) {
        list.push({
            name: tag.name,
            items: context.filter(item => item.tag === tag.name)
        });
    }
    console.log(list);
    return options.fn(list);
});
