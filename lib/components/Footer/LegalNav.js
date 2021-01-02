"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("@carbon/ibmdotcom-utilities/lib/utilities/settings/settings"));

var _Link = _interopRequireDefault(require("../../internal/vendor/carbon-components-react/components/Link/Link"));

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
 * Footer legal nav component.
 */

var LegalNav = function LegalNav(_ref) {
  var links = _ref.links,
      type = _ref.type,
      button = _ref.button;

  if (!(links === null || links === void 0 ? void 0 : links.length)) {
    return null;
  }

  var listStyle = (0, _classnames.default)((0, _defineProperty2.default)({}, "".concat(prefix, "--legal-nav__micro"), type === 'micro'));
  return _react.default.createElement("aside", {
    "data-autoid": "".concat(stablePrefix, "--footer-legal-nav"),
    className: "".concat(prefix, "--legal-nav__container")
  }, _react.default.createElement("nav", {
    className: "".concat(prefix, "--legal-nav")
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--legal-nav__list ").concat(listStyle)
  }, _react.default.createElement("ul", {
    className: "".concat(prefix, "--legal-nav__holder")
  }, links.map(function (_ref2, index) {
    var title = _ref2.title,
        url = _ref2.url;

    if (!title || !url) {
      return null;
    }

    return _react.default.createElement("li", {
      className: "".concat(prefix, "--legal-nav__list-item"),
      key: index
    }, _react.default.createElement(_Link.default, {
      "data-autoid": "".concat(stablePrefix, "--footer-legal-nav__link"),
      className: "".concat(prefix, "--footer__link"),
      href: url
    }, title));
  }), _react.default.createElement("li", {
    className: "".concat(prefix, "--legal-nav__list-item"),
    "data-autoid": "".concat(stablePrefix, "--privacy-cp")
  })), button)));
};

LegalNav.propTypes = {
  /**
   * A list of links to be rendered.
   */
  links: _propTypes.default.arrayOf(_propTypes.default.shape({
    title: _propTypes.default.string,
    url: _propTypes.default.string
  })),

  /**
   * Footer type
   */
  type: _propTypes.default.string,

  /**
   * The locale/language selector button.
   * Renders only in micro version
   */
  button: _propTypes.default.func
};
LegalNav.defaultProps = {
  links: null
};
var _default = LegalNav;
exports.default = _default;