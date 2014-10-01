if (Meteor.isClient) {
    Meteor.subscribe("pages");
    pages = new Meteor.Collection("pages");
    var query = pages.find("1");
    var handle = query.observeChanges({
        changed: function (id, data) {
            location.hash = data.text;
        }
    });
}

if (Meteor.isServer) {
    pages = new Meteor.Collection("pages");
    Meteor.publish("pages", function () {
        return Rooms.find();
    });
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
