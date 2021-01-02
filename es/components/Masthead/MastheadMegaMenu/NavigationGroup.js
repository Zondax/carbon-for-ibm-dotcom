import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings';
import PropTypes from 'prop-types';
import React from 'react';
import settings from 'carbon-components/es/globals/js/settings';
var stablePrefix = ddsSettings.stablePrefix;
var prefix = settings.prefix;
/**
 * MegaMenu panel
 */

var NavigationGroup = function NavigationGroup(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement("section", _extends({
    className: "".concat(prefix, "--masthead__megamenu"),
    "data-autoid": "".concat(stablePrefix, "--masthead__megamenu")
  }, rest), React.createElement("div", {
    className: "".concat(prefix, "--masthead__megamenu__container")
  }, React.createElement("div", {
    className: "".concat(prefix, "--masthead__megamenu__container--row")
  }, children)));
};

NavigationGroup.propTypes = {
  /**
   * children elements
   */
  children: PropTypes.node
};
export default NavigationGroup;