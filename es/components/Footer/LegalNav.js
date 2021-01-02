import _defineProperty from "@babel/runtime/helpers/defineProperty";

/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import cx from 'classnames';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings';
import Link from '../../internal/vendor/carbon-components-react/components/Link/Link';
import PropTypes from 'prop-types';
import React from 'react';
import settings from 'carbon-components/es/globals/js/settings';
var stablePrefix = ddsSettings.stablePrefix;
var prefix = settings.prefix;
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

  var listStyle = cx(_defineProperty({}, "".concat(prefix, "--legal-nav__micro"), type === 'micro'));
  return React.createElement("aside", {
    "data-autoid": "".concat(stablePrefix, "--footer-legal-nav"),
    className: "".concat(prefix, "--legal-nav__container")
  }, React.createElement("nav", {
    className: "".concat(prefix, "--legal-nav")
  }, React.createElement("div", {
    className: "".concat(prefix, "--legal-nav__list ").concat(listStyle)
  }, React.createElement("ul", {
    className: "".concat(prefix, "--legal-nav__holder")
  }, links.map(function (_ref2, index) {
    var title = _ref2.title,
        url = _ref2.url;

    if (!title || !url) {
      return null;
    }

    return React.createElement("li", {
      className: "".concat(prefix, "--legal-nav__list-item"),
      key: index
    }, React.createElement(Link, {
      "data-autoid": "".concat(stablePrefix, "--footer-legal-nav__link"),
      className: "".concat(prefix, "--footer__link"),
      href: url
    }, title));
  }), React.createElement("li", {
    className: "".concat(prefix, "--legal-nav__list-item"),
    "data-autoid": "".concat(stablePrefix, "--privacy-cp")
  })), button)));
};

LegalNav.propTypes = {
  /**
   * A list of links to be rendered.
   */
  links: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string
  })),

  /**
   * Footer type
   */
  type: PropTypes.string,

  /**
   * The locale/language selector button.
   * Renders only in micro version
   */
  button: PropTypes.func
};
LegalNav.defaultProps = {
  links: null
};
export default LegalNav;