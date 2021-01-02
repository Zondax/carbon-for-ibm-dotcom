"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DDS_LEADSPACE_WITH_SEARCH = exports.DDS_PROMO_BANNER = exports.DDS_CONTENTBLOCK_HEADLINES = exports.DDS_CALLOUT_DATA = exports.DDS_SIMPLEBENEFITS = exports.DDS_LANGUAGE_SELECTOR = exports.DDS_CUSTOM_PROFILE_LOGIN = exports.DDS_CARD_WITH_PICTOGRAM = exports.DDS_FLAGS_ALL = void 0;

/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * This file contains the list of the default values of compile-time feature flags.
 */

/**
 * This flag will determine if all feature flags should be enabled
 *
 * @type {boolean}
 */
var DDS_FLAGS_ALL = process.env.DDS_FLAGS_ALL === 'true' || false;
/**
 * Feature flag to turn on the Card with Pictogram
 *
 * @type {boolean}
 */

exports.DDS_FLAGS_ALL = DDS_FLAGS_ALL;
var DDS_CARD_WITH_PICTOGRAM = process.env.DDS_CARD_WITH_PICTOGRAM === 'true' || DDS_FLAGS_ALL || false;
/**
 * Feature flag to enable custom login url in masthead profile menu
 *
 * @type {boolean}
 */

exports.DDS_CARD_WITH_PICTOGRAM = DDS_CARD_WITH_PICTOGRAM;
var DDS_CUSTOM_PROFILE_LOGIN = process.env.DDS_CUSTOM_PROFILE_LOGIN === 'true' || DDS_FLAGS_ALL || false;
/**
 * Feature flag for the optional language selector in the footer
 *
 * @type {boolean}
 */

exports.DDS_CUSTOM_PROFILE_LOGIN = DDS_CUSTOM_PROFILE_LOGIN;
var DDS_LANGUAGE_SELECTOR = process.env.DDS_LANGUAGE_SELECTOR === 'true' || DDS_FLAGS_ALL || false;
/**
 * This determines if the simplebenefits will be rendered or not
 *
 * @type {string | boolean}
 */

exports.DDS_LANGUAGE_SELECTOR = DDS_LANGUAGE_SELECTOR;
var DDS_SIMPLEBENEFITS = process.env.DDS_SIMPLEBENEFITS === 'true' || DDS_FLAGS_ALL || false;
/**
 * This determines if the logo grid will be rendered or not
 *
 * @type {string | boolean}
 */

exports.DDS_SIMPLEBENEFITS = DDS_SIMPLEBENEFITS;
var DDS_CALLOUT_DATA = process.env.DDS_CALLOUT_DATA === 'true' || DDS_FLAGS_ALL || false;
/**
 * This determines if content block - headlines will be rendered or not
 *
 * @type {string | boolean}
 */

exports.DDS_CALLOUT_DATA = DDS_CALLOUT_DATA;
var DDS_CONTENTBLOCK_HEADLINES = process.env.DDS_CONTENTBLOCK_HEADLINES === 'true' || DDS_FLAGS_ALL || false;
/**
 * This determines if Promo Banner will be rendered or not
 *
 * @type {string | boolean}
 */

exports.DDS_CONTENTBLOCK_HEADLINES = DDS_CONTENTBLOCK_HEADLINES;
var DDS_PROMO_BANNER = process.env.DDS_PROMO_BANNER === 'true' || DDS_FLAGS_ALL || false;
/**
 * This determines if Leadspace with search will be rendered or not
 *
 * @type {string | boolean}
 */

exports.DDS_PROMO_BANNER = DDS_PROMO_BANNER;
var DDS_LEADSPACE_WITH_SEARCH = process.env.DDS_LEADSPACE_WITH_SEARCH === 'true' || DDS_FLAGS_ALL || false;
exports.DDS_LEADSPACE_WITH_SEARCH = DDS_LEADSPACE_WITH_SEARCH;