define('ember-simple-auth/mixins/oauth2-implicit-grant-callback-route-mixin', ['exports', 'ember-simple-auth/utils/is-fastboot'], function (exports, _isFastboot) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    /**
     The session service.
      @property session
     @readOnly
     @type SessionService
     @public
     */
    session: Ember.inject.service('session'),

    /**
      The authenticator that should be used to authenticate the callback. This
      must be a subclass of the
      {{#crossLink "OAuth2ImplicitGrantAuthenticator"}}{{/crossLink}}
      authenticator.
       @property authenticator
      @type String
      @default null
      @public
    */
    authenticator: null,

    /**
      Any error that potentially occurs during authentication will be stored in
      this property.
       @property error
      @type String
      @default null
      @public
    */
    error: null,

    /**
      Passes the hash received with the redirection from the authentication
      server to the
      {{#crossLink "OAuth2ImplicitGrantAuthenticator"}}{{/crossLink}} and
      authenticates the session with the authenticator.
       @method activate
      @public
    */
    activate() {
      if (this.get('_isFastBoot')) {
        return;
      }

      let authenticator = this.get('authenticator');

      let hash = this._parseResponse(this._windowLocationHash());

      this.get('session').authenticate(authenticator, hash).catch(err => {
        this.set('error', err);
      });
    },

    _isFastBoot: (0, _isFastboot.default)(),

    _windowLocationHash() {
      // we wrap this so we can stub it with sinon
      return window.location.hash;
    },

    _parseResponse(locationHash) {
      let params = {};
      const query = locationHash.substring(locationHash.indexOf('?'));
      const regex = /([^#?&=]+)=([^&]*)/g;
      let match;

      // decode all parameter pairs
      while ((match = regex.exec(query)) !== null) {
        params[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
      }

      return params;
    }
  });
});