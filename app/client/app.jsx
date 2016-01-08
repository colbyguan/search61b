Meteor.subscribe('all_links');

Meteor.startup(function() {
  ReactDOM.render(<Search />, document.getElementById('all-list'));
});
