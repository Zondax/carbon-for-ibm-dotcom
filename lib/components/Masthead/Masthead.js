"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _FeatureFlags = require("../../internal/FeatureFlags");

var _settings = _interopRequireDefault(require("@carbon/ibmdotcom-utilities/lib/utilities/settings/settings"));

var _global = require("@carbon/ibmdotcom-services/lib/services/global/global");

var _Header = _interopRequireDefault(require("../../internal/vendor/carbon-components-react/components/UIShell/Header"));

var _HeaderContainer = _interopRequireDefault(require("../../internal/vendor/carbon-components-react/components/UIShell/HeaderContainer"));

var _HeaderGlobalBar = _interopRequireDefault(require("../../internal/vendor/carbon-components-react/components/UIShell/HeaderGlobalBar"));

var _HeaderMenuButton = _interopRequireDefault(require("../../internal/vendor/carbon-components-react/components/UIShell/HeaderMenuButton"));

var _Icon = require("../Icon");

var _MastheadL = _interopRequireDefault(require("./MastheadL1"));

var _MastheadLeftNav = _interopRequireDefault(require("./MastheadLeftNav"));

var _MastheadProfile = _interopRequireDefault(require("./MastheadProfile"));

var _MastheadSearch = _interopRequireDefault(require("./MastheadSearch"));

var _MastheadTopNav = _interopRequireDefault(require("./MastheadTopNav"));

var _Profile = _interopRequireDefault(require("@carbon/ibmdotcom-services/lib/services/Profile/Profile"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _windowOrGlobal = _interopRequireDefault(require("window-or-global"));

var _settings2 = _interopRequireDefault(require("carbon-components/umd/globals/js/settings"));

var _SkipToContent = _interopRequireDefault(require("../../internal/vendor/carbon-components-react/components/UIShell/SkipToContent"));

var _Translation = _interopRequireDefault(require("@carbon/ibmdotcom-services/lib/services/Translation/Translation"));

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/user/20"));

var _2 = _interopRequireDefault(require("@carbon/icons-react/lib/user--online/20"));

/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var stablePrefix = _settings.default.stablePrefix;
var prefix = _settings2.default.prefix;
/**
 * MastHead component
 *
 * @param {object} props React props object
 * @param {object} props.navigation Object containing navigation elements
 * @param {boolean} props.hasProfile Determines whether to render Profile component
 * @param {boolean} props.hasSearch Determines whether to render Search Bar
 * @param {boolean} props.searchOpenOnload Determines if the search field is open on page load
 * @param {string} props.placeHolderText Placeholder value for search input
 * @param {object} props.platform Platform name that appears on L0.
 * @param {string} props.title Title for the masthead L1
 * @param {string} props.eyebrowText Text for the eyebrow link in masthead L1
 * @param {string} props.eyebrowLink URL for the eyebrow link in masthead L1
 * @param {string} props.selectedMenuItem L0 menu item to render with selected state
 * @returns {*} Masthead component
 */

var Masthead = function Masthead(_ref) {
  var _cx, _cx2;

  var navigation = _ref.navigation,
      hasProfile = _ref.hasProfile,
      hasSearch = _ref.hasSearch,
      searchOpenOnload = _ref.searchOpenOnload,
      placeHolderText = _ref.placeHolderText,
      platform = _ref.platform,
      mastheadL1Data = _ref.mastheadL1Data,
      selectedMenuItem = _ref.selectedMenuItem,
      mastheadProps = (0, _objectWithoutProperties2.default)(_ref, ["navigation", "hasProfile", "hasSearch", "searchOpenOnload", "placeHolderText", "platform", "mastheadL1Data", "selectedMenuItem"]);

  /**
   * Returns IBM.com authenticated status
   *
   * @param {boolean} isAuthenticated Whether the user is authenticated to IBM.com
   * @returns {*} The user status
   */
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isAuthenticated = _useState2[0],
      setStatus = _useState2[1];
  /**
   * Returns state of search status
   *
   * @param {boolean} isSearchActive Whether the search bar is open
   * @returns {*} The active search status
   */


  var _useState3 = (0, _react.useState)(searchOpenOnload),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isSearchActive = _useState4[0],
      setIsSearchActive = _useState4[1];

  var handleSearchActive = function handleSearchActive(e) {
    setIsSearchActive(e);
  };

  (0, _react.useEffect)(function () {
    // initialize global execution calls
    (0, _global.globalInit)();
  }, []);
  (0, _react.useEffect)(function () {
    var unmounted = false;
    (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var status;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Profile.default.getUserStatus();

            case 2:
              status = _context.sent;

              if (!unmounted) {
                setStatus(status.user === 'Authenticated');
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
    return function () {
      unmounted = true;
    };
  }, []);

  var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      mastheadData = _useState6[0],
      setMastheadData = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      logo = _useState8[0],
      setlogo = _useState8[1];

  var _useState9 = (0, _react.useState)({
    signedin: [],
    signedout: []
  }),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      profileData = _useState10[0],
      setProfileData = _useState10[1];

  (0, _react.useEffect)(function () {
    var unmounted = false;
    (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var pageData;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _Translation.default.getTranslation();

            case 3:
              pageData = _context2.sent;

              if (!unmounted) {
                setMastheadData(pageData.mastheadNav.links);
                setProfileData(pageData.profileMenu);
                setlogo(pageData === null || pageData === void 0 ? void 0 : pageData.logo);
              }

              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.error('Error populating masthead data:', _context2.t0);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }))();
    return function () {
      unmounted = true;
    };
  }, []);
  /**
   * Forces profile menu position to fixed to prevent scrolling
   *
   */

  var _setProfileListPosition = function _setProfileListPosition() {
    var profileMenuList = document.querySelector(".".concat(prefix, "--masthead__profile-item"));
    profileMenuList.closest('ul').style.position = 'fixed';
    profileMenuList.closest('ul').style.top = '48px';
  };

  var _useState11 = (0, _react.useState)(false),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      isMastheadSticky = _useState12[0],
      setIsMastheadSticky = _useState12[1];

  var stickyRef = (0, _react.useRef)(null);
  var mastheadL1Ref = (0, _react.useRef)(null);
  var mastheadSticky = (0, _classnames.default)((_cx = {}, (0, _defineProperty2.default)(_cx, "".concat(prefix, "--masthead--sticky"), isMastheadSticky), (0, _defineProperty2.default)(_cx, "".concat(prefix, "--masthead--sticky__l1"), mastheadL1Ref.current != null), _cx));
  var headerSearchClasses = (0, _classnames.default)((_cx2 = {}, (0, _defineProperty2.default)(_cx2, "".concat(prefix, "--masthead__platform"), platform), (0, _defineProperty2.default)(_cx2, "".concat(prefix, "--masthead__header--search-active"), isSearchActive), _cx2));
  (0, _react.useEffect)(function () {
    /**
     * Sets sticky masthead. If both L0 and L1 are present, L1 will be sticky.
     *
     */
    var hideTopnavThreshold = 0.25;

    var handleScroll = _windowOrGlobal.default.addEventListener('scroll', function () {
      /**
       * L0 will hide/show only in the top 25% of the viewport.
       *
       */
      if (mastheadL1Ref.current != null) {
        setIsMastheadSticky(_windowOrGlobal.default.pageYOffset > _windowOrGlobal.default.innerHeight * hideTopnavThreshold);
      }
    });

    return function () {
      _windowOrGlobal.default.removeEventListener('scroll', function () {
        return handleScroll;
      });
    };
  }, []);

  if (navigation) {
    switch ((0, _typeof2.default)(navigation)) {
      case 'default':
        // eslint-disable-next-line
        mastheadData = mastheadData;
        break;

      case 'object':
        mastheadData = navigation;
        break;

      default:
        break;
    }
  } // set navigation type (default, alternate, or ecosystem) for autoids


  var navType;

  if (!navigation && !platform) {
    navType = 'alt';
  } else if (navigation && !platform) {
    navType = 'default';
  } else if (platform) {
    navType = 'eco';
  }

  return _react.default.createElement(_HeaderContainer.default, {
    render: function render(_ref4) {
      var _mastheadL1Data$navig;

      var isSideNavExpanded = _ref4.isSideNavExpanded,
          onClickSideNavExpand = _ref4.onClickSideNavExpand;

      if (isSideNavExpanded) {
        var _root$document, _root$document$body;

        (_root$document = _windowOrGlobal.default.document) === null || _root$document === void 0 ? void 0 : (_root$document$body = _root$document.body) === null || _root$document$body === void 0 ? void 0 : _root$document$body.classList.add("".concat(prefix, "--body__lock-scroll"));
      } else {
        var _root$document2, _root$document2$body;

        (_root$document2 = _windowOrGlobal.default.document) === null || _root$document2 === void 0 ? void 0 : (_root$document2$body = _root$document2.body) === null || _root$document2$body === void 0 ? void 0 : _root$document2$body.classList.remove("".concat(prefix, "--body__lock-scroll"));
      }

      return _react.default.createElement("div", {
        className: "".concat(prefix, "--masthead ").concat(mastheadSticky),
        ref: stickyRef
      }, _react.default.createElement("div", {
        className: "".concat(prefix, "--masthead__l0")
      }, _react.default.createElement(_Header.default, {
        "aria-label": "IBM",
        "data-autoid": "".concat(stablePrefix, "--masthead")
      }, _react.default.createElement(_SkipToContent.default, null), (mastheadL1Data || navigation) && !isSearchActive && _react.default.createElement(_HeaderMenuButton.default, {
        "aria-label": isSideNavExpanded ? 'Close menu' : 'Open menu',
        "data-autoid": "".concat(stablePrefix, "--masthead-").concat(navType, "-sidenav__l0-menu"),
        onClick: onClickSideNavExpand,
        isActive: isSideNavExpanded
      }), (navigation || mastheadL1Data) && isSideNavExpanded && _react.default.createElement(_MastheadLeftNav.default, (0, _extends2.default)({}, mastheadProps, {
        backButtonText: "Back",
        platform: platform,
        navigation: (_mastheadL1Data$navig = mastheadL1Data === null || mastheadL1Data === void 0 ? void 0 : mastheadL1Data.navigationL1) !== null && _mastheadL1Data$navig !== void 0 ? _mastheadL1Data$navig : mastheadData,
        isSideNavExpanded: isSideNavExpanded,
        navType: navType,
        selectedMenuItem: selectedMenuItem
      })), _react.default.createElement(_Icon.IbmLogo, {
        logoData: logo,
        autoid: "".concat(stablePrefix, "--masthead-").concat(navType, "__l0-logo"),
        isSearchActive: isSearchActive
      }), _react.default.createElement("div", {
        className: "".concat(prefix, "--header__search ").concat(headerSearchClasses)
      }, navigation && !mastheadL1Data && _react.default.createElement(_MastheadTopNav.default, (0, _extends2.default)({}, mastheadProps, {
        platform: platform,
        navigation: mastheadData,
        navType: navType,
        selectedMenuItem: selectedMenuItem
      })), hasSearch && _react.default.createElement(_MastheadSearch.default, (0, _extends2.default)({
        searchOpenOnload: isSearchActive,
        placeHolderText: placeHolderText,
        navType: navType
      }, mastheadProps.customTypeaheadApi ? {
        customTypeaheadApi: mastheadProps.customTypeaheadApi
      } : {}, {
        isSearchActive: handleSearchActive
      }))), hasProfile && _react.default.createElement(_HeaderGlobalBar.default, {
        className: "".concat(prefix, "--header__profile")
      }, _react.default.createElement(_MastheadProfile.default, (0, _extends2.default)({
        overflowMenuProps: {
          ariaLabel: 'User Profile',
          'data-autoid': "".concat(stablePrefix, "--masthead-").concat(navType, "__l0-account"),
          flipped: true,
          style: {
            width: '3rem'
          },
          onOpen: function onOpen() {
            return _setProfileListPosition();
          },
          renderIcon: function renderIcon() {
            return isAuthenticated ? _react.default.createElement(_2.default, null) : _react.default.createElement(_.default, null);
          }
        },
        overflowMenuItemProps: {
          wrapperClassName: "".concat(prefix, "--masthead__profile-item")
        },
        profileMenu: isAuthenticated ? profileData.signedin : profileData.signedout
      }, mastheadProps.customProfileLogin && _FeatureFlags.DDS_CUSTOM_PROFILE_LOGIN ? {
        customProfileLogin: mastheadProps.customProfileLogin
      } : {}, {
        navType: navType
      }))))), mastheadL1Data && _react.default.createElement("div", {
        ref: mastheadL1Ref
      }, _react.default.createElement(_MastheadL.default, (0, _extends2.default)({}, mastheadL1Data, {
        isShort: isMastheadSticky,
        navType: navType
      }))));
    }
  });
};

Masthead.propTypes = {
  /**
   * Navigation data object/string for Masthead. These navigation properties belongs to the Masthead L0 Top navigation. Use one from below:
   *
   * | Behavior           | Data Type | Description                                 | Example                             |
   * | ------------------ | --------- | ------------------------------------------- | ----------------------------------- |
   * | default navigation | String    | Default navigation data from IBM.com        | `<Masthead navigation="default" />` |
   * | custom navigation  | Object    | Pass in custom navigation data as an object | `<Masthead navigation={myNavObj}/>` |
   * | none               | null      | No navigation                               | `<Masthead />`                      |
   *
   * `Custom` navigation data must follow the same structure and key names as `default`.
   * See [this](https://www.ibm.com/common/v18/js/data/jsononly/usen.json) for an example.
   */
  navigation: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.shape({
    hasMenu: _propTypes.default.bool,
    title: _propTypes.default.string,
    url: _propTypes.default.string,
    menuSections: _propTypes.default.arrayOf(_propTypes.default.shape({
      menuItems: _propTypes.default.arrayOf(_propTypes.default.shape({
        title: _propTypes.default.string,
        url: _propTypes.default.string
      }))
    }))
  }))]),

  /**
   * `true` to render IBM Profile Menu component.
   */
  hasProfile: _propTypes.default.bool,

  /**
   * Custom login url in masthead profile menu (experimental)
   */
  customProfileLogin: _propTypes.default.string,

  /**
   * `true` to render SearchBar component.
   */
  hasSearch: _propTypes.default.bool,

  /**
   * `true` to have search field open on page load.
   */
  searchOpenOnload: _propTypes.default.bool,

  /**
   * Platform name that appears on L0.
   * Includes platform name (only available with `default` and `custom navigation`).
   * Object requires `name` and `url`.
   * See [docs](http://ibmdotcom-react.mybluemix.net/?path=/docs/components-masthead--default#platform) for more details.
   */
  platform: _propTypes.default.shape({
    name: _propTypes.default.string,
    url: _propTypes.default.string
  }),

  /**
   * L0 menu item to render with selected state. Needs to match `titleEnglish` field from nav data.
   */
  selectedMenuItem: _propTypes.default.string,

  /**
   * Placeholder value for search input.
   */
  placeHolderText: _propTypes.default.string,

  /**
   * All the data that goes to the L1 of the Masthead.
   */
  mastheadL1Data: _propTypes.default.shape({
    /**
     * Title for the masthead L1 (experimental).
     */
    title: _propTypes.default.string,

    /**
     * Title optional link for the masthead L1 (experimental).
     */
    titleLink: _propTypes.default.string,

    /**
     * Text for the eyebrow link in masthead L1 (experimental).
     */
    eyebrowText: _propTypes.default.string,

    /**
     * URL for the eyebrow link in masthead L1 (experimental).
     */
    eyebrowLink: _propTypes.default.string,

    /**
     * Navigation data object/string for Masthead L1. Use one from below:
     *
     * | Behavior           | Data Type | Description                                 | Example                             |
     * | ------------------ | --------- | ------------------------------------------- | ----------------------------------- |
     * | default navigation | String    | Default navigation data from IBM.com        | `<MastheadL1 navigationL1="default" />` |
     * | custom navigation  | Object    | Pass in custom navigation data as an object | `<MastheadL1 navigationL1={myNavObj}/>` |
     * | none               | null      | No navigation                               | `<MastheadL1 />`                      |
     *
     * `Custom` navigation data must follow the same structure and key names as `default`.
     * See [this](https://www.ibm.com/common/v18/js/data/jsononly/usen.json) for an example.
     */
    navigationL1: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.shape({
      hasMenu: _propTypes.default.bool,
      title: _propTypes.default.string,
      url: _propTypes.default.string,
      menuSections: _propTypes.default.arrayOf(_propTypes.default.shape({
        menuItems: _propTypes.default.arrayOf(_propTypes.default.shape({
          title: _propTypes.default.string,
          url: _propTypes.default.string
        }))
      }))
    }))])
  }),

  /**
   * Custom typeahead API function
   */
  customTypeaheadApi: _propTypes.default.func
};
Masthead.defaultProps = {
  hasProfile: true,
  hasSearch: true,
  searchOpenOnload: false,
  selectedMenuItem: '',
  platform: null,
  placeHolderText: 'Search all of IBM',
  mastheadL1Data: null
};
var _default = Masthead;
exports.default = _default;