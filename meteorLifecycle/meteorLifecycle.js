if (Meteor.isClient) {
  Template.profile.onCreated(function () {
    this.lastCallback = 'created';
    console.log('profile.created', this);
  });
  Template.profile.onRendered(function () {
    this.lastCallback = 'rendered';
    console.log('profile.rendered', this);
  });
  Template.profile.onDestroyed(function () {
    this.lastCallback = 'destroyed';
    console.log('profile.destroyed', this);
  });

  Template.profile.helpers({
    placeholder: function () {
      console.log('profile.placeholder', this);
      console.log('profile.tplInstance',
        Template.instance().lastCallback);
      return 'This is the {{placeholder}} helper';
    }
  });
  Template.profile.events({
    'click button': function (event, template) {
      Template.instance().lastCallback = 'rendered and clicked';
      console.log('profile.clicked', this);
      console.log('profile.clicked.tplInstance', template);
    }
  });

}

if (Meteor.isServer) {

}