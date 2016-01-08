Meteor.publish('all_links', function() {
  return Links.find()
});
