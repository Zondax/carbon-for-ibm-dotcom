import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState, useEffect, useRef } from 'react';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings';
import PropTypes from 'prop-types';
import Search from 'carbon-components-react/lib/components/Search';
import settings from 'carbon-components/es/globals/js/settings';
var stablePrefix = ddsSettings.stablePrefix;
var prefix = settings.prefix;

var LeadspaceWithSearch = function LeadspaceWithSearch(_ref) {
  var heading = _ref.heading,
      copy = _ref.copy,
      searchProps = _ref.searchProps;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      searchPlaceHolder = _useState2[0],
      setSearchplaceHolder = _useState2[1];

  var leadspaceContainer = useRef(null);
  useEffect(function () {
    if (leadspaceContainer) {
      var current = leadspaceContainer.current;
      var observer = new ResizeObserver(function (entries) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var entry = _step.value;
            var CARBON_MD_BREAKPOINT = 672;
            var leadspaceWidth = entry.borderBoxSize[0].inlineSize;
            var _searchProps$placeHol = searchProps.placeHolder,
                desktop = _searchProps$placeHol.desktop,
                mobile = _searchProps$placeHol.mobile;

            if (leadspaceWidth > CARBON_MD_BREAKPOINT || !mobile) {
              setSearchplaceHolder(desktop);
            }

            if (leadspaceWidth <= CARBON_MD_BREAKPOINT && mobile) {
              setSearchplaceHolder(mobile);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
      observer === null || observer === void 0 ? void 0 : observer.observe(current);
    }
  }, [searchProps.placeHolder]);
  return heading ? React.createElement("section", {
    "data-autoid": "".concat(stablePrefix, "--leadspace-with-search"),
    className: "".concat(prefix, "--leadspace-with-search"),
    ref: leadspaceContainer
  }, React.createElement("div", {
    className: "".concat(prefix, "--leadspace-with-search__row")
  }, React.createElement("div", {
    className: "".concat(prefix, "--leadspace-with-search__content")
  }, React.createElement("h1", {
    className: "".concat(prefix, "--leadspace-with-search__heading")
  }, heading), copy && React.createElement("p", {
    className: "".concat(prefix, "--leadspace-with-search__copy")
  }, copy), React.createElement(Search, _extends({
    className: "".concat(prefix, "--leadspace-with-search__search"),
    placeHolderText: searchPlaceHolder,
    id: "".concat(prefix, "--leadspace-with-search__search-input")
  }, searchProps))))) : null;
};

LeadspaceWithSearch.propTypes = {
  /**
   * Required heading for the Leadspace with search
   */
  heading: PropTypes.string.isRequired,

  /**
   *  An optional copy for the Leadspace with search
   */
  copy: PropTypes.string,

  /**
   *  The search mechanism does not have a built-in behavior. Make sure to provide both onChange and onKeyDown functions to the component with the validations and behavior you want it to have.
   *
   *  | Function    | Parameters | Description                                                                                                  |
   *  |-------------|------------|--------------------------------------------------------------------------------------------------------------|
   *  | `onChange`  | event      | Use this to reach out to `event.target.value`, the value inputed by the user.                                |
   *  | `onKeyDown` | event      | You could use it to detect the user pressing the 'Enter/Return' key and trigger the search mechanism to work |
   *
   * Any other functions and properties passed down to this will be applyed to the [Search component](https://www.carbondesignsystem.com/components/search/usage/).
   *
   */
  searchProps: _objectSpread({
    /**
     * The Leadspace With Search accepts two placeholders. One for mobile view and another for desktop. Both are optional. If you do not provide, it will be set to "Search".
     */
    placeHolder: PropTypes.shape({
      mobile: PropTypes.string,
      desktop: PropTypes.string
    }),
    labelText: PropTypes.string
  }, Search.propTypes)
};
LeadspaceWithSearch.defaultProps = {
  searchProps: {
    desktop: 'Search'
  }
};
export default LeadspaceWithSearch;