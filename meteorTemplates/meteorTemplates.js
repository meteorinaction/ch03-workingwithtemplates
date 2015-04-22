if (Meteor.isClient) {
  Template.expressions.helpers({
    name: function () {
      return "<strong>Michael</strong>";
    }
  });
  Template.partialsUserProfile.helpers({
    name: 'Jim',
    image: '/jim-profile-thumb.jpg'
  });
  Template.dynamicPartials.helpers({
    templateNameLeft: function () {
      return "partialsUserProfile";
    },
    templateNameRight: function () {
      return "partialsNewsStream";
    }
  });

}

if (Meteor.isServer) {

}