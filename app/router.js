import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('students');
  this.route('student', { path: 'student/:student_id'});
  this.route('coins');
  this.route('coin', { path: 'coin/:coin_id'});
  this.route('dashboard');
});

export default Router;
