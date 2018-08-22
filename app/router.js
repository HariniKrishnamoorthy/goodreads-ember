import EmberRouter from '@ember/routing/router';
//import { expect } from 'chai';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('user');

  this.route('bookdetails');
  this.route('postBook');
  this.route('discoverBook');
});

export default Router;
