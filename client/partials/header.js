Router.route('/homelayout');
Router.route('/about');
Router.route('/contact');

Meteor.logout(function(err) {
  // callback
  // Session.set("ses",false);
  Router.go('/');
});
Accounts.onLogout(function () {
    Router.go('/');
});