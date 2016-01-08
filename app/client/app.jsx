Meteor.subscribe('all_links', function() {
  $('morphsearch-input').attr('placeholder', 'Search 61B...');
  Session.set('dataReady', true);
});

Meteor.startup(function() {
  ReactDOM.render(<Search />, document.getElementById('all-list'));
});
