import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('planeacion');
  this.route('voluntario');
  this.route('infante');
  this.route('taller');
  this.route('tutor');
  this.route('sesion');
});

export default Router;
