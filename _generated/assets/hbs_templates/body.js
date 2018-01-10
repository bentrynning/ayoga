define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html>\n<html>\n	<head>\n		<title>"
    + alias4(((helper = (helper = helpers.page_title || (depth0 != null ? depth0.page_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page_title","hash":{},"data":data}) : helper)))
    + "</title>\n		<link rel=\"stylesheet\" href=\""
    + alias4(((helper = (helper = helpers.absolute_prefix || (depth0 != null ? depth0.absolute_prefix : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"absolute_prefix","hash":{},"data":data}) : helper)))
    + "assets/css/main.css\">\n\n		<link href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,400\" rel=\"stylesheet\">\n\n	</head>\n	<body>\n\n"
    + ((stack1 = container.invokePartial(partials["@partial-block"],depth0,{"name":"@partial-block","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n	</body>\n\n</html>\n";
},"usePartial":true,"useData":true}); });