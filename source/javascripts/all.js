//= require_tree .

App = Ember.Application.create();

App.Router.map(function() {
	this.resource('about');
	this.resource('projects');
	this.resource('resume');
	this.resource('contact');
});
