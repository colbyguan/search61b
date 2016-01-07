Links = new Mongo.Collection('links');

if (Meteor.isClient) {
  Meteor.subscribe('all_links');

  Meteor.startup(function() {
    ReactDOM.render(<Search />, document.getElementById('all-list'));
  })
}

if (Meteor.isServer) {
  Meteor.publish('all_links', function() {
    return Links.find()
  })
}

