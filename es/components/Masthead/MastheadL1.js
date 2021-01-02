import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import cx from 'classnames';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings';
import HeaderMenu from '../carbon-components-react/UIShell/HeaderMenu';
import HeaderMenuItem from '../../internal/vendor/carbon-components-react/components/UIShell/HeaderMenuItem';
import HeaderNavContainer from './HeaderNavContainer';
import HeaderNavigation from '../../internal/vendor/carbon-components-react/components/UIShell/HeaderNavigation';
import MegaMenu from './MastheadMegaMenu/MegaMenu';
import PropTypes from 'prop-types';
import React from 'react';
import settings from 'carbon-components/es/globals/js/settings';
var stablePrefix = ddsSettings.stablePrefix;
var prefix = settings.prefix;
/**
 * MastHead L1 component.
 */

var MastheadL1 = function MastheadL1(_ref) {
  var title = _ref.title,
      titleLink = _ref.titleLink,
      navigationL1 = _ref.navigationL1,
      rest = _objectWithoutProperties(_ref, ["title", "titleLink", "navigationL1"]);

  var className = cx(_defineProperty({}, "".concat(prefix, "--masthead__l1"), true));
  var mastheadL1Links = navigationL1.map(function (link, index) {
    var autoid = "".concat(stablePrefix, "--masthead-").concat(rest.navType, "__l1-nav").concat(index);

    if (link.hasMenu || link.hasMegapanel) {
      return React.createElement(HeaderMenu, {
        "aria-label": link.title,
        menuLinkName: link.title,
        className: cx(_defineProperty({}, "".concat(prefix, "--masthead__megamenu__l1-nav"), link.hasMegapanel)),
        autoId: autoid,
        key: index
      }, renderNav(link, rest.navType, autoid));
    } else {
      return React.createElement(HeaderMenuItem, {
        href: link.url,
        "data-autoid": autoid,
        key: index
      }, link.title);
    }
  });
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: className
  }, React.createElement("div", {
    className: "".concat(prefix, "--masthead__l1-name")
  }, React.createElement("span", {
    className: "".concat(prefix, "--masthead__l1-name-title")
  }, React.createElement("a", {
    href: titleLink
  }, title))), React.createElement(HeaderNavContainer, null, React.createElement(HeaderNavigation, {
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
    navItems.push(React.createElement(MegaMenu, {
      key: link.title,
      data: link,
      autoid: autoid
    }));
  } else {
    link.menuSections.forEach(function (section, i) {
      section.menuItems.forEach(function (item, j) {
        navItems.push(React.createElement(HeaderMenuItem, {
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
  title: PropTypes.string,

  /**
   * The optional title link (experimental)
   */
  titleLink: PropTypes.string,

  /**
   * Object containing masthead l1 navigation elements.
   */
  navigationL1: PropTypes.arrayOf(PropTypes.shape({
    hasMenu: PropTypes.bool,
    title: PropTypes.string,
    url: PropTypes.string,
    menuSections: PropTypes.arrayOf(PropTypes.shape({
      menuItems: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string
      }))
    }))
  }))
};
MastheadL1.defaultProps = {
  navigationL1: [],
  titleLink: null
};
export default MastheadL1;