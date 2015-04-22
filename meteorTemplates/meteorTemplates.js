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
  Template.ifBlock.helpers({
    image: function () {
      //return false;
      return "cookies.jpg";
    }
  });
  Template.eachBlock.helpers({
    skills: function () {
      return ['Meteor', 'Sailing', 'Cooking'];
    }
  });
  Template.withBlock.helpers({
    profileJim: function () {
      var jim = {
        name: 'Jim "Sailor Ripley" Johnson',
        skills: ['Meteor', 'Sailing', 'Cooking'],
      };
      return jim;
    }
  });
  Template.localHelpers.helpers({
    name: 'Jim',
    image: {
      large: '/jim-profile-large.jpg',
      thumb: '/jim-profile-thumb.jpg'
    },
    skills: ['Meteor', 'Sailing', 'Cooking'],
    hasMoreSkills: function (skills) {
      return skills && skills.length > 1;
    }
  });
  Template.globalHelpers.helpers({
    skills: function () {
      return ['Meteor', 'Sailing', 'Cooking'];
    },
    images: function () {
      return ['/jim-profile-large.jpg', '/jim-profile-thumb.jpg'];
    }
  });
  Template.templateElseBlock.helpers({
    gender: function () {
      return 'm';
    }
  });
  Template.isFemale.helpers({
    eq: function (a, b) {
      return a === b;
    }
  });
  Template.logicByHelper.helpers({
    gender: 'm',
    genderLabel: function (gender) {
      if (gender === 'm') {
        return 'Mr.';
      } else {
        return 'Mrs.';
      }
    }
  });

}

if (Meteor.isServer) {

}