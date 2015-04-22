if (Meteor.isClient) {
  Template.layout.events({
    'click button': function (event, template) {
      $('body').css('background-color', 'red');
    },
    'mouseenter #redButton': function (event, template) {
      // start fancy animation
    }
  });
}

if (Meteor.isServer) {

}