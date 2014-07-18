/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest.createAPIRequest;
var checkRequired = apirequest.checkRequired;
var extend = require('../../lib/utils').extend;

/**
 * Google OAuth2 API
 *
 * Lets you access OAuth2 protocol related APIs.
 * @namespace Oauth2
 * @this Oauth2
 * @param {object=} options Options for Oauth2
 */
function Oauth2(options) {

  var self = this;
  this._options = options || {};

  /**
   * userinfo
   *
   * @memberOf Oauth2
   * @type {object}
   * @namespace Oauth2.userinfo
   */
  this.userinfo = {

    /**
     * oauth2.userinfo.get
     *
     *
     * @memberof userinfo
     * @method get
     * @param  {object} params.resource Request body data
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/oauth2/v2/userinfo',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Oauth2 object
 * @type Oauth2
 */
module.exports = Oauth2;