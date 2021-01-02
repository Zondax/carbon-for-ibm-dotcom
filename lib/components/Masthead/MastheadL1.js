"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("@carbon/ibmdotcom-utilities/lib/utilities/settings/settings"));

var _HeaderMenu = _interopRequireDefault(require("../carbon-components-react/UIShell/HeaderMenu"));

var _HeaderMenuItem = _interopRequireDefault(require("../../internal/vendor/carbon-components-react/components/UIShell/HeaderMenuItem"));

var _HeaderNavContainer = _interopRequireDefault(require("./HeaderNavContainer"));

var _HeaderNavigation = _interopRequireDefault(require("../../internal/vendor/carbon-components-react/components/UIShell/HeaderNavigation"));

var _MegaMenu = _interopRequireDefault(require("./MastheadMegaMenu/MegaMenu"));

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
 * MastHead L1 component.
 */

var MastheadL1 = function MastheadL1(_ref) {
  var title = _ref.title,
      titleLink = _ref.titleLink,
      navigationL1 = _ref.navigationL1,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["title", "titleLink", "navigationL1"]);
  var className = (0, _classnames.default)((0, _defineProperty2.default)({}, "".concat(prefix, "--masthead__l1"), true));
  var mastheadL1Links = navigationL1.map(function (link, index) {
    var autoid = "".concat(stablePrefix, "--masthead-").concat(rest.navType, "__l1-nav").concat(index);

    if (link.hasMenu || link.hasMegapanel) {
      return _react.default.createElement(_HeaderMenu.default, {
        "aria-label": link.title,
        menuLinkName: link.title,
        className: (0, _classnames.default)((0, _defineProperty2.default)({}, "".concat(prefix, "--masthead__megamenu__l1-nav"), link.hasMegapanel)),
        autoId: autoid,
        key: index
      }, renderNav(link, rest.navType, autoid));
    } else {
      return _react.default.createElement(_HeaderMenuItem.default, {
        href: link.url,
        "data-autoid": autoid,
        key: index
      }, link.title);
    }
  });
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: className
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--masthead__l1-name")
  }, _react.default.createElement("span", {
    className: "".concat(prefix, "--masthead__l1-name-title")
  }, _react.default.createElement("a", {
    href: titleLink
  }, title))), _react.default.createElement(_HeaderNavContainer.default, null, _react.default.createElement(_HeaderNavigation.default, {
    className: "".concat(prefix, "--masthead__l1-nav"),
    "aria-label": ""
  }, mastheadL1Links))));
};
/**
 * Loops through and renders a list of links for the masthead nav
 *
 * @param {object} link A list of links to be rendered
 * @param {string} navType navigation type for autoids
 * @param {string} autoid autoid predecessor for megamenu items/menu items data-autoids
 * @returns {object} JSX object
 */


function renderNav(link, navType, autoid) {
  var navItems = [];

  if (link.hasMegapanel) {
    navItems.push(_react.default.createElement(_MegaMenu.default, {
      key: link.title,
      data: link,
      autoid: autoid
    }));
  } else {
    link.menuSections.forEach(function (section, i) {
      section.menuItems.forEach(function (item, j) {
        navItems.push(_react.default.createElement(_HeaderMenuItem.default, {
          href: item.url,
          "data-autoid": "".concat(stablePrefix, "--masthead-").concat(navType, "__l1-nav").concat(i, "-item").concat(j),
          key: item.title
        }, item.title));
      });
    });
  }

  return navItems;
}

MastheadL1.propTypes = {
  /**
   * The title (experimental).
   */
  title: _propTypes.default.string,

  /**
   * The optional title link (experimental)
   */
  titleLink: _propTypes.default.string,

  /**
   * Object containing masthead l1 navigation elements.
   */
  navigationL1: _propTypes.default.arrayOf(_propTypes.default.shape({
    hasMenu: _propTypes.default.bool,
    title: _propTypes.default.string,
    url: _propTypes.default.string,
    menuSections: _propTypes.default.arrayOf(_propTypes.default.shape({
      menuItems: _propTypes.default.arrayOf(_propTypes.default.shape({
        title: _propTypes.default.string,
        url: _propTypes.default.string
      }))
    }))
  }))
};
MastheadL1.defaultProps = {
  navigationL1: [],
  titleLink: null
};
var _default = MastheadL1;
exports.default = _default;