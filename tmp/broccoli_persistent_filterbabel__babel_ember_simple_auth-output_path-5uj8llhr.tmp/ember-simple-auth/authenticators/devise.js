define('ember-simple-auth/authenticators/devise', ['exports', 'ember-simple-auth/authenticators/base', 'fetch'], function (exports, _base, _fetch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const assign = Ember.assign || Ember.merge;

  const JSON_CONTENT_TYPE = 'application/json';

  /**
    Authenticator that works with the Ruby gem
    [devise](https://github.com/plataformatec/devise).
  
    __As token authentication is not actually part of devise anymore, the server
    needs to implement some customizations__ to work with this authenticator -
    see [this gist](https://gist.github.com/josevalim/fb706b1e933ef01e4fb6).
  
    @class DeviseAuthenticator
    @module ember-simple-auth/authenticators/devise
    @extends BaseAuthenticator
    @public
  */
  exports.default = _base.default.extend({
    /**
      The endpoint on the server that the authentication request is sent to.
       @property serverTokenEndpoint
      @type String
      @default '/users/sign_in'
      @public
    */
    serverTokenEndpoint: '/users/sign_in',

    /**
      The devise resource name. __This will be used in the request and also be
      expected in the server's response.__
       @property resourceName
      @type String
      @default 'user'
      @public
    */
    resourceName: 'user',

    /**
      The token attribute name. __This will be used in the request and also be
      expected in the server's response.__
       @property tokenAttributeName
      @type String
      @default 'token'
      @public
    */
    tokenAttributeName: 'token',

    /**
      The identification attribute name. __This will be used in the request and
      also be expected in the server's response.__
       @property identificationAttributeName
      @type String
      @default 'email'
      @public
    */
    identificationAttributeName: 'email',

    /**
      When authentication fails, the rejection callback is provided with the whole
      Fetch API [Response](https://fetch.spec.whatwg.org/#response-class) object
      instead of its responseJSON or responseText.
       This is useful for cases when the backend provides additional context not
      available in the response body.
       @property rejectWithXhr
      @type Boolean
      @default false
      @deprecated DeviseAuthenticator/rejectWithResponse:property
      @public
    */
    rejectWithXhr: Ember.computed.deprecatingAlias('rejectWithResponse', {
      id: `ember-simple-auth.authenticator.reject-with-xhr`,
      until: '2.0.0'
    }),

    /**
      When authentication fails, the rejection callback is provided with the whole
      Fetch API [Response](https://fetch.spec.whatwg.org/#response-class) object
      instead of its responseJSON or responseText.
       This is useful for cases when the backend provides additional context not
      available in the response body.
       @property rejectWithResponse
      @type Boolean
      @default false
      @public
    */
    rejectWithResponse: false,

    /**
      Restores the session from a session data object; __returns a resolving
      promise when there are non-empty
      {{#crossLink "DeviseAuthenticator/tokenAttributeName:property"}}token{{/crossLink}}
      and
      {{#crossLink "DeviseAuthenticator/identificationAttributeName:property"}}identification{{/crossLink}}
      values in `data`__ and a rejecting promise otherwise.
       @method restore
      @param {Object} data The data to restore the session from
      @return {Ember.RSVP.Promise} A promise that when it resolves results in the session becoming or remaining authenticated
      @public
    */
    restore(data) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return this._validate(data) ? Ember.RSVP.Promise.resolve(data) : Ember.RSVP.Promise.reject();
    },

    /**
      Authenticates the session with the specified `identification` and
      `password`; the credentials are `POST`ed to the
      {{#crossLink "DeviseAuthenticator/serverTokenEndpoint:property"}}server{{/crossLink}}.
      If the credentials are valid the server will responds with a
      {{#crossLink "DeviseAuthenticator/tokenAttributeName:property"}}token{{/crossLink}}
      and
      {{#crossLink "DeviseAuthenticator/identificationAttributeName:property"}}identification{{/crossLink}}.
      __If the credentials are valid and authentication succeeds, a promise that
      resolves with the server's response is returned__, otherwise a promise that
      rejects with the server error is returned.
       @method authenticate
      @param {String} identification The user's identification
      @param {String} password The user's password
      @return {Ember.RSVP.Promise} A promise that when it resolves results in the session becoming authenticated
      @public
    */
    authenticate(identification, password) {
      return new Ember.RSVP.Promise((resolve, reject) => {
        const useResponse = this.get('rejectWithResponse');
        const { resourceName, identificationAttributeName, tokenAttributeName } = this.getProperties('resourceName', 'identificationAttributeName', 'tokenAttributeName');
        const data = {};
        data[resourceName] = { password };
        data[resourceName][identificationAttributeName] = identification;

        this.makeRequest(data).then(response => {
          if (response.ok) {
            response.json().then(json => {
              if (this._validate(json)) {
                const resourceName = this.get('resourceName');
                const _json = json[resourceName] ? json[resourceName] : json;
                Ember.run(null, resolve, _json);
              } else {
                Ember.run(null, reject, `Check that server response includes ${tokenAttributeName} and ${identificationAttributeName}`);
              }
            });
          } else {
            if (useResponse) {
              Ember.run(null, reject, response);
            } else {
              response.json().then(json => Ember.run(null, reject, json));
            }
          }
        }).catch(error => Ember.run(null, reject, error));
      });
    },

    /**
      Does nothing
       @method invalidate
      @return {Ember.RSVP.Promise} A resolving promise
      @public
    */
    invalidate() {
      return Ember.RSVP.Promise.resolve();
    },

    /**
      Makes a request to the Devise server using
      [ember-fetch](https://github.com/stefanpenner/ember-fetch).
       @method makeRequest
      @param {Object} data The request data
      @param {Object} options request options that are passed to `fetch`
      @return {Promise} The promise returned by `fetch`
      @protected
    */
    makeRequest(data, options = {}) {
      let url = options.url || this.get('serverTokenEndpoint');
      let requestOptions = {};
      let body = JSON.stringify(data);
      assign(requestOptions, {
        body,
        method: 'POST',
        headers: {
          'accept': JSON_CONTENT_TYPE,
          'content-type': JSON_CONTENT_TYPE
        }
      });
      assign(requestOptions, options || {});

      return (0, _fetch.default)(url, requestOptions);
    },

    _validate(data) {
      const tokenAttributeName = this.get('tokenAttributeName');
      const identificationAttributeName = this.get('identificationAttributeName');
      const resourceName = this.get('resourceName');
      const _data = data[resourceName] ? data[resourceName] : data;

      return !Ember.isEmpty(_data[tokenAttributeName]) && !Ember.isEmpty(_data[identificationAttributeName]);
    }
  });
});