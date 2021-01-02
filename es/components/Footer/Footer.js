import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings';
import FooterLogo from './FooterLogo';
import FooterNav from './FooterNav';
import { globalInit } from '@carbon/ibmdotcom-services/es/services/global/global';
import LanguageSelector from './LanguageSelector';
import LegalNav from './LegalNav';
import LocaleAPI from '@carbon/ibmdotcom-services/es/services/Locale/Locale';
import LocaleButton from './LocaleButton';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings';
import TranslationAPI from '@carbon/ibmdotcom-services/es/services/Translation/Translation';
var stablePrefix = ddsSettings.stablePrefix;
var prefix = settings.prefix;
/**
 * Footer component.
 */

var Footer = function Footer(_ref) {
  var _classNames;

  var type = _ref.type,
      navigation = _ref.navigation,
      langCode = _ref.langCode,
      disableLocaleButton = _ref.disableLocaleButton,
      languageOnly = _ref.languageOnly,
      labelText = _ref.labelText,
      languageItems = _ref.languageItems,
      languageInitialItem = _ref.languageInitialItem,
      languageCallback = _ref.languageCallback;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      footerMenuData = _useState2[0],
      setFooterMenuData = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      footerLegalData = _useState4[0],
      setFooterLegalData = _useState4[1];

  var _useState5 = useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      displayLang = _useState6[0],
      setDisplayLang = _useState6[1];

  var _useState7 = useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      localeButtonAria = _useState8[0],
      setLocaleButtonAria = _useState8[1];

  useEffect(function () {
    // initialize global execution calls
    globalInit();
  }, []);
  useEffect(function () {
    var stale = false;

    if (!navigation) {
      _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var response;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return TranslationAPI.getTranslation();

              case 3:
                response = _context.sent;

                if (!stale) {
                  setFooterMenuData(response.footerMenu);
                  setFooterLegalData(response.footerThin);
                }

                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.error('Error populating footer data:', _context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    }

    return function () {
      stale = true;
    };
  }, [navigation]);
  useEffect(function () {
    var stale = false;

    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      var response, locale, list;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return LocaleAPI.getLangDisplay(langCode);

            case 2:
              response = _context2.sent;

              if (!stale) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return");

            case 5:
              setDisplayLang(response);
              _context2.next = 8;
              return LocaleAPI.getLocale();

            case 8:
              locale = _context2.sent;

              if (!stale) {
                _context2.next = 11;
                break;
              }

              return _context2.abrupt("return");

            case 11:
              _context2.next = 13;
              return LocaleAPI.getList(locale);

            case 13:
              list = _context2.sent;

              if (!stale) {
                _context2.next = 16;
                break;
              }

              return _context2.abrupt("return");

            case 16:
              setLocaleButtonAria(list.localeModal.headerTitle);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();

    return function () {
      stale = true;
    };
  }, [langCode]);

  if (navigation) {
    footerMenuData = navigation.footerMenu;
    footerLegalData = navigation.footerThin;
  }

  return React.createElement("footer", {
    "data-autoid": "".concat(stablePrefix, "--footer"),
    className: classNames("".concat(prefix, "--footer"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--footer--short"), type === 'short'), _defineProperty(_classNames, "".concat(prefix, "--footer--micro"), type === 'micro'), _classNames))
  }, React.createElement("section", {
    className: "".concat(prefix, "--footer__main")
  }, React.createElement("div", {
    className: "".concat(prefix, "--footer__main-container")
  }, type !== 'micro' && React.createElement(FooterLogo, null), (type === 'tall' || type === undefined) && React.createElement(FooterNav, {
    groups: footerMenuData
  }), type !== 'micro' && _loadLocaleLanguage(disableLocaleButton, localeButtonAria, displayLang, languageOnly, labelText, languageItems, languageInitialItem, languageCallback))), React.createElement(LegalNav, {
    links: footerLegalData,
    type: type,
    button: type === 'micro' ? _loadLocaleLanguage(disableLocaleButton, localeButtonAria, displayLang, languageOnly, labelText, languageItems, languageInitialItem, languageCallback) : null
  }));
};
/**
 * Loads in the locale modal, language selector, or null
 *
 * @param {boolean} disableLocaleButton Flag to disable to locale button
 * @param {string} localeButtonAria String for the aria label
 * @param {string} displayLang display language for locale button
 * @param {boolean} languageOnly Switches to the language selector
 * @param {string} labelText Label text for locale/language selector
 * @param {Array} languageItems Array of language data for the dropdown
 * @param {object} languageInitialItem Initial language selected
 * @param {Function} languageCallback Callback function when language is selected
 * @returns {null|*} JSX or null
 * @private
 */


function _loadLocaleLanguage(disableLocaleButton, localeButtonAria, displayLang, languageOnly, labelText, languageItems, languageInitialItem, languageCallback) {
  if (languageOnly) {
    return React.createElement(LanguageSelector, {
      items: languageItems,
      initialSelectedItem: languageInitialItem,
      callback: languageCallback,
      labelText: labelText
    });
  } else if (!disableLocaleButton) {
    return React.createElement(LocaleButton, {
      aria: localeButtonAria,
      displayLang: displayLang
    });
  } else {
    return null;
  }
}

Footer.propTypes = {
  /**
   * Navigation data object for Footer, used for server-side rendering.
   */
  navigation: PropTypes.shape({
    footerMenu: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      links: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string
      }))
    })),
    footerThin: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string
    }))
  }),

  /**
   * Type of Footer. Choose from:
   *
   * | Name    | Description                                                                 |
   * | ------- | --------------------------------------------------------------------------- |
   * | `tall`  | Default footer variant includes additional navigation taking up more space. |
   * | `short` | Short footer variant reduces space by removing any additional navigation.   |
   * | `micro` | Micro footer variant includes legal navigation and locale button only.      |
   */
  type: PropTypes.oneOf(['tall', 'short', 'micro']),

  /**
   * Language code for fetching the display name.
   */
  langCode: PropTypes.shape({
    cc: PropTypes.string,
    lc: PropTypes.string
  }),

  /**
   * `true` to disable the Locale button.
   */
  disableLocaleButton: PropTypes.bool,

  /**
   * `true` to switch the locale button with a language selector.
   */
  languageOnly: PropTypes.bool,

  /**
   * Label text for combobox/select
   */
  labelText: PropTypes.string,

  /**
   * Array of items for the language selector,
   * uses [Carbon ComboBox](https://react.carbondesignsystem.com/?path=/story/combobox--combobox) for desktop,
   * and [Carbon Select](https://react.carbondesignsystem.com/?path=/story/select--default) for tablet/mobile.
   */
  languageItems: PropTypes.arrayOf(PropTypes.object),

  /**
   * Sets the initial language selector value when the component is loaded.
   * The default is the first item.
   */
  languageInitialItem: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string
  }),

  /**
   * Callback function onChange of the language selector.
   */
  languageCallback: PropTypes.func
};
/**
 * @property {object} defaultProps default Footer props
 * @type {{navigation: null, langCode: null, disableLocaleButton: boolean,
 * type: string}}
 */

Footer.defaultProps = {
  navigation: null,
  type: 'tall',
  langCode: null,
  disableLocaleButton: false,
  languageOnly: false,
  languageItems: [],
  languageCallback: function languageCallback() {}
};
export default Footer;