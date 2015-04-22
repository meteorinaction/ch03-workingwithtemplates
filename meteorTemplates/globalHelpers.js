if (Meteor.isClient) {
  Template.registerHelper('gt', function (array, n) {
    return array && array.length > n;
  });
}