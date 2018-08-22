define('frontend/router', ['exports', 'frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  //import { expect } from 'chai';


  Router.map(function () {
    this.route('login');
    this.route('user');

    this.route('bookdetails');
    this.route('postBook');
    this.route('discoverBook');
  });

  exports.default = Router;
});