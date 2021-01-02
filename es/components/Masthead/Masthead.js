import _extends from "@babel/runtime/helpers/extends";
import _typeof from "@babel/runtime/helpers/typeof";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { DDS_CUSTOM_PROFILE_LOGIN } from '../../internal/FeatureFlags';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings';
import { globalInit } from '@carbon/ibmdotcom-services/es/services/global/global';
import Header from '../../internal/vendor/carbon-components-react/components/UIShell/Header';
import HeaderContainer from '../../internal/vendor/carbon-components-react/components/UIShell/HeaderContainer';
import HeaderGlobalBar from '../../internal/vendor/carbon-components-react/components/UIShell/HeaderGlobalBar';
import HeaderMenuButton from '../../internal/vendor/carbon-components-react/components/UIShell/HeaderMenuButton';
import { IbmLogo } from '../Icon';
import MastheadL1 from './MastheadL1';
import MastheadLeftNav from './MastheadLeftNav';
import MastheadProfile from './MastheadProfile';
import MastheadSearch from './MastheadSearch';
import MastheadTopNav from './MastheadTopNav';
import ProfileAPI from '@carbon/ibmdotcom-services/es/services/Profile/Profile';
import PropTypes from 'prop-types';
import root from 'window-or-global';
import settings from 'carbon-components/es/globals/js/settings';
import SkipToContent from '../../internal/vendor/carbon-components-react/components/UIShell/SkipToContent';
import TranslationAPI from '@carbon/ibmdotcom-services/es/services/Translation/Translation';
import User20 from '@carbon/icons-react/es/user/20';
import UserOnline20 from '@carbon/icons-react/es/user--online/20';
var stablePrefix = ddsSettings.stablePrefix;
var prefix = settings.prefix;
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
      mastheadProps = _objectWithoutProperties(_ref, ["navigation", "hasProfile", "hasSearch", "searchOpenOnload", "placeHolderText", "platform", "mastheadL1Data", "selectedMenuItem"]);

  /**
   * Returns IBM.com authenticated status
   *
   * @param {boolean} isAuthenticated Whether the user is authenticated to IBM.com
   * @returns {*} The user status
   */
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isAuthenticated = _useState2[0],
      setStatus = _useState2[1];
  /**
   * Returns state of search status
   *
   * @param {boolean} isSearchActive Whether the search bar is open
   * @returns {*} The active search status
   */


  var _useState3 = useState(searchOpenOnload),
      _useState4 = _slicedToArray(_useState3, 2),
      isSearchActive = _useState4[0],
      setIsSearchActive = _useState4[1];

  var handleSearchActive = function handleSearchActive(e) {
    setIsSearchActive(e);
  };

  useEffect(function () {
    // initialize global execution calls
    globalInit();
  }, []);
  useEffect(function () {
    var unmounted = false;

    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var status;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return ProfileAPI.getUserStatus();

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

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      mastheadData = _useState6[0],
      setMastheadData = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      logo = _useState8[0],
      setlogo = _useState8[1];

  var _useState9 = useState({
    signedin: [],
    signedout: []
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      profileData = _useState10[0],
      setProfileData = _useState10[1];

  useEffect(function () {
    var unmounted = false;

    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      var pageData;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return TranslationAPI.getTranslation();

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

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isMastheadSticky = _useState12[0],
      setIsMastheadSticky = _useState12[1];

  var stickyRef = useRef(null);
  var mastheadL1Ref = useRef(null);
  var mastheadSticky = cx((_cx = {}, _defineProperty(_cx, "".concat(prefix, "--masthead--sticky"), isMastheadSticky), _defineProperty(_cx, "".concat(prefix, "--masthead--sticky__l1"), mastheadL1Ref.current != null), _cx));
  var headerSearchClasses = cx((_cx2 = {}, _defineProperty(_cx2, "".concat(prefix, "--masthead__platform"), platform), _defineProperty(_cx2, "".concat(prefix, "--masthead__header--search-active"), isSearchActive), _cx2));
  useEffect(function () {
    /**
     * Sets sticky masthead. If both L0 and L1 are present, L1 will be sticky.
     *
     */
    var hideTopnavThreshold = 0.25;
    var handleScroll = root.addEventListener('scroll', function () {
      /**
       * L0 will hide/show only in the top 25% of the viewport.
       *
       */
      if (mastheadL1Ref.current != null) {
        setIsMastheadSticky(root.pageYOffset > root.innerHeight * hideTopnavThreshold);
      }
    });
    return function () {
      root.removeEventListener('scroll', function () {
        return handleScroll;
      });
    };
  }, []);

  if (navigation) {
    switch (_typeof(navigation)) {
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

  return React.createElement(HeaderContainer, {
    render: function render(_ref4) {
      var _mastheadL1Data$navig;

      var isSideNavExpanded = _ref4.isSideNavExpanded,
          onClickSideNavExpand = _ref4.onClickSideNavExpand;

      if (isSideNavExpanded) {
        var _root$document, _root$document$body;

        (_root$document = root.document) === null || _root$document === void 0 ? void 0 : (_root$document$body = _root$document.body) === null || _root$document$body === void 0 ? void 0 : _root$document$body.classList.add("".concat(prefix, "--body__lock-scroll"));
      } else {
        var _root$document2, _root$document2$body;

        (_root$document2 = root.document) === null || _root$document2 === void 0 ? void 0 : (_root$document2$body = _root$document2.body) === null || _root$document2$body === void 0 ? void 0 : _root$document2$body.classList.remove("".concat(prefix, "--body__lock-scroll"));
      }

      return React.createElement("div", {
        className: "".concat(prefix, "--masthead ").concat(mastheadSticky),
        ref: stickyRef
      }, React.createElement("div", {
        className: "".concat(prefix, "--masthead__l0")
      }, React.createElement(Header, {
        "aria-label": "IBM",
        "data-autoid": "".concat(stablePrefix, "--masthead")
      }, React.createElement(SkipToContent, null), (mastheadL1Data || navigation) && !isSearchActive && React.createElement(HeaderMenuButton, {
        "aria-label": isSideNavExpanded ? 'Close menu' : 'Open menu',
        "data-autoid": "".concat(stablePrefix, "--masthead-").concat(navType, "-sidenav__l0-menu"),
        onClick: onClickSideNavExpand,
        isActive: isSideNavExpanded
      }), (navigation || mastheadL1Data) && isSideNavExpanded && React.createElement(MastheadLeftNav, _extends({}, mastheadProps, {
        backButtonText: "Back",
        platform: platform,
        navigation: (_mastheadL1Data$navig = mastheadL1Data === null || mastheadL1Data === void 0 ? void 0 : mastheadL1Data.navigationL1) !== null && _mastheadL1Data$navig !== void 0 ? _mastheadL1Data$navig : mastheadData,
        isSideNavExpanded: isSideNavExpanded,
        navType: navType,
        selectedMenuItem: selectedMenuItem
      })), React.createElement(IbmLogo, {
        logoData: logo,
        autoid: "".concat(stablePrefix, "--masthead-").concat(navType, "__l0-logo"),
        isSearchActive: isSearchActive
      }), React.createElement("div", {
        className: "".concat(prefix, "--header__search ").concat(headerSearchClasses)
      }, navigation && !mastheadL1Data && React.createElement(MastheadTopNav, _extends({}, mastheadProps, {
        platform: platform,
        navigation: mastheadData,
        navType: navType,
        selectedMenuItem: selectedMenuItem
      })), hasSearch && React.createElement(MastheadSearch, _extends({
        searchOpenOnload: isSearchActive,
        placeHolderText: placeHolderText,
        navType: navType
      }, mastheadProps.customTypeaheadApi ? {
        customTypeaheadApi: mastheadProps.customTypeaheadApi
      } : {}, {
        isSearchActive: handleSearchActive
      }))), hasProfile && React.createElement(HeaderGlobalBar, {
        className: "".concat(prefix, "--header__profile")
      }, React.createElement(MastheadProfile, _extends({
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
            return isAuthenticated ? React.createElement(UserOnline20, null) : React.createElement(User20, null);
          }
        },
        overflowMenuItemProps: {
          wrapperClassName: "".concat(prefix, "--masthead__profile-item")
        },
        profileMenu: isAuthenticated ? profileData.signedin : profileData.signedout
      }, mastheadProps.customProfileLogin && DDS_CUSTOM_PROFILE_LOGIN ? {
        customProfileLogin: mastheadProps.customProfileLogin
      } : {}, {
        navType: navType
      }))))), mastheadL1Data && React.createElement("div", {
        ref: mastheadL1Ref
      }, React.createElement(MastheadL1, _extends({}, mastheadL1Data, {
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
  navigation: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.shape({
    hasMenu: PropTypes.bool,
    title: PropTypes.string,
    url: PropTypes.string,
    menuSections: PropTypes.arrayOf(PropTypes.shape({
      menuItems: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string
      }))
    }))
  }))]),

  /**
   * `true` to render IBM Profile Menu component.
   */
  hasProfile: PropTypes.bool,

  /**
   * Custom login url in masthead profile menu (experimental)
   */
  customProfileLogin: PropTypes.string,

  /**
   * `true` to render SearchBar component.
   */
  hasSearch: PropTypes.bool,

  /**
   * `true` to have search field open on page load.
   */
  searchOpenOnload: PropTypes.bool,

  /**
   * Platform name that appears on L0.
   * Includes platform name (only available with `default` and `custom navigation`).
   * Object requires `name` and `url`.
   * See [docs](http://ibmdotcom-react.mybluemix.net/?path=/docs/components-masthead--default#platform) for more details.
   */
  platform: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string
  }),

  /**
   * L0 menu item to render with selected state. Needs to match `titleEnglish` field from nav data.
   */
  selectedMenuItem: PropTypes.string,

  /**
   * Placeholder value for search input.
   */
  placeHolderText: PropTypes.string,

  /**
   * All the data that goes to the L1 of the Masthead.
   */
  mastheadL1Data: PropTypes.shape({
    /**
     * Title for the masthead L1 (experimental).
     */
    title: PropTypes.string,

    /**
     * Title optional link for the masthead L1 (experimental).
     */
    titleLink: PropTypes.string,

    /**
     * Text for the eyebrow link in masthead L1 (experimental).
     */
    eyebrowText: PropTypes.string,

    /**
     * URL for the eyebrow link in masthead L1 (experimental).
     */
    eyebrowLink: PropTypes.string,

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
    navigationL1: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.shape({
      hasMenu: PropTypes.bool,
      title: PropTypes.string,
      url: PropTypes.string,
      menuSections: PropTypes.arrayOf(PropTypes.shape({
        menuItems: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string,
          url: PropTypes.string
        }))
      }))
    }))])
  }),

  /**
   * Custom typeahead API function
   */
  customTypeaheadApi: PropTypes.func
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
export default Masthead;