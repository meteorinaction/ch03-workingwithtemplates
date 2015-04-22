if (Meteor.isClient) {
  Template.layout.events({
    'click button': function (event, template) {
      $('body').css('background-color', 'red');
    },
    'mouseenter #redButton': function (event, template) {
      // start fancy animation
    }
  });
  Template.layout.events({
    'click button': function (event, template) {
      $('body').css('background-color', 'red');
    }
  });
  Template.green.events({
    'click button': function (event, template) {
      event.stopImmediatePropagation();
      $('body').css('background-color', 'green');
    }
  });

}

if (Meteor.isServer) {

}