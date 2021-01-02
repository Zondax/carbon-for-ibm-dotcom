"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _settings = _interopRequireDefault(require("@carbon/ibmdotcom-utilities/lib/utilities/settings/settings"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _settings2 = _interopRequireDefault(require("carbon-components/umd/globals/js/settings"));

/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var stablePrefix = _settings.default.stablePrefix;
var prefix = _settings2.default.prefix;
/**
 * MegaMenu panel
 */

var NavigationGroup = function NavigationGroup(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
  return _react.default.createElement("section", (0, _extends2.default)({
    className: "".concat(prefix, "--masthead__megamenu"),
    "data-autoid": "".concat(stablePrefix, "--masthead__megamenu")
  }, rest), _react.default.createElement("div", {
    className: "".concat(prefix, "--masthead__megamenu__container")
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--masthead__megamenu__container--row")
  }, children)));
};

NavigationGroup.propTypes = {
  /**
   * children elements
   */
  children: _propTypes.default.node
};
var _default = NavigationGroup;
exports.default = _default;