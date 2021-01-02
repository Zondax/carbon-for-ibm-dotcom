"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _settings = _interopRequireDefault(require("@carbon/ibmdotcom-utilities/lib/utilities/settings/settings"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Search = _interopRequireDefault(require("carbon-components-react/lib/components/Search"));

var _settings2 = _interopRequireDefault(require("carbon-components/umd/globals/js/settings"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var stablePrefix = _settings.default.stablePrefix;
var prefix = _settings2.default.prefix;

var LeadspaceWithSearch = function LeadspaceWithSearch(_ref) {
  var heading = _ref.heading,
      copy = _ref.copy,
      searchProps = _ref.searchProps;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      searchPlaceHolder = _useState2[0],
      setSearchplaceHolder = _useState2[1];

  var leadspaceContainer = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
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
  return heading ? _react.default.createElement("section", {
    "data-autoid": "".concat(stablePrefix, "--leadspace-with-search"),
    className: "".concat(prefix, "--leadspace-with-search"),
    ref: leadspaceContainer
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--leadspace-with-search__row")
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--leadspace-with-search__content")
  }, _react.default.createElement("h1", {
    className: "".concat(prefix, "--leadspace-with-search__heading")
  }, heading), copy && _react.default.createElement("p", {
    className: "".concat(prefix, "--leadspace-with-search__copy")
  }, copy), _react.default.createElement(_Search.default, (0, _extends2.default)({
    className: "".concat(prefix, "--leadspace-with-search__search"),
    placeHolderText: searchPlaceHolder,
    id: "".concat(prefix, "--leadspace-with-search__search-input")
  }, searchProps))))) : null;
};

LeadspaceWithSearch.propTypes = {
  /**
   * Required heading for the Leadspace with search
   */
  heading: _propTypes.default.string.isRequired,

  /**
   *  An optional copy for the Leadspace with search
   */
  copy: _propTypes.default.string,

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
    placeHolder: _propTypes.default.shape({
      mobile: _propTypes.default.string,
      desktop: _propTypes.default.string
    }),
    labelText: _propTypes.default.string
  }, _Search.default.propTypes)
};
LeadspaceWithSearch.defaultProps = {
  searchProps: {
    desktop: 'Search'
  }
};
var _default = LeadspaceWithSearch;
exports.default = _default;