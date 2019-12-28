function display_template(content, data, query) {
	var template = Handlebars.compile(content);
	console.log(data)
	var html = template(data);
	$(query).prepend(html);
}

function display_template_remote(templateName, data, query) {
	jQuery.get("./assets/templates/" + templateName, function(response) {
		display_template(response, data, query)
	});
}


