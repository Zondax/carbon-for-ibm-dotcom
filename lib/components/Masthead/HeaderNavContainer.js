"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _keyboard = require("../../internal/vendor/carbon-components-react/internal/keyboard");

var _react = _interopRequireWildcard(require("react"));

var _ = _interopRequireDefault(require("@carbon/icons-react/lib/caret--left/20"));

var _2 = _interopRequireDefault(require("@carbon/icons-react/lib/caret--right/20"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _settings = _interopRequireDefault(require("carbon-components/umd/globals/js/settings"));

/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var prefix = _settings.default.prefix;
/**
 * Header nav container component.
 */

var HeaderNavContainer = function HeaderNavContainer(_ref) {
  var children = _ref.children;
  var containerRef = (0, _react.useRef)(null);
  var contentRef = (0, _react.useRef)(null);
  var contentLeftRef = (0, _react.useRef)(null);
  var contentRightRef = (0, _react.useRef)(null);
  var caretLeftRef = (0, _react.useRef)(null);
  var caretRightRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      io = _useState2[0],
      setIO = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      position = _useState4[0],
      setPosition = _useState4[1];

  var buttonSize = 48; // 40px(width) + 8px(gradient)

  var paginateLeft = (0, _react.useCallback)(function () {
    var menuItems = contentRef.current.querySelectorAll('.bx--header__menu-bar li');

    for (var i = 0; i < menuItems.length; i++) {
      // checks if first visible item is partially hidden
      if (menuItems[i].offsetLeft + menuItems[i].offsetWidth + position >= buttonSize) {
        // checks if there is space for remaining menuItems
        if (menuItems[i].offsetLeft + menuItems[i].offsetWidth > containerRef.current.offsetWidth - buttonSize) {
          setPosition(containerRef.current.offsetWidth - menuItems[i].offsetLeft - menuItems[i].offsetWidth - buttonSize);
          contentRef.current.style.left = String(containerRef.current.offsetWidth - menuItems[i].offsetLeft - menuItems[i].offsetWidth - buttonSize) + 'px';
        } else {
          setPosition(0);
          contentRef.current.style.left = '0px';
        }

        break;
      }
    }
  }, [position]);
  var paginateRight = (0, _react.useCallback)(function () {
    var menuItems = contentRef.current.querySelectorAll('.bx--header__menu-bar li');

    for (var i = 0; i < menuItems.length; i++) {
      // checks if the right most visible element is partially hidden
      if (menuItems[i].offsetLeft + menuItems[i].offsetWidth + position > containerRef.current.offsetWidth - buttonSize) {
        // checks if there is space for remaining menuItems
        if (contentRef.current.offsetWidth - menuItems[i].offsetLeft < containerRef.current.offsetWidth - buttonSize) {
          setPosition(containerRef.current.offsetWidth - contentRef.current.offsetWidth);
          contentRef.current.style.left = String(containerRef.current.offsetWidth - contentRef.current.offsetWidth) + 'px';
        } else {
          setPosition(buttonSize - menuItems[i].offsetLeft);
          contentRef.current.style.left = String(buttonSize - menuItems[i].offsetLeft) + 'px';
        }

        break;
      }
    }
  }, [position]);
  (0, _react.useEffect)(function () {
    if (window.IntersectionObserver) {
      setIO(new IntersectionObserver(function (records) {
        records.forEach(function (record) {
          if (contentLeftRef.current && record.target.classList.contains(contentLeftRef.current.className)) {
            caretLeftRef.current.hidden = record.isIntersecting;
          }

          if (contentRightRef.current && record.target.classList.contains(contentRightRef.current.className)) {
            caretRightRef.current.hidden = record.isIntersecting;
          }
        });
      }, {
        root: containerRef.current,
        threshold: 1
      }));
    }
  }, [setIO]);
  (0, _react.useEffect)(function () {
    if (io) {
      io.observe(contentLeftRef.current);
      io.observe(contentRightRef.current);
    } else {
      return function () {
        if (io) {
          io.disconnect();
        }
      };
    }
  }, [io]);
  /**
   * Keyboard event handler for menu items.
   */

  var handleOnKeyDown = function handleOnKeyDown(event) {
    if ((0, _keyboard.matches)(event, [_keyboard.keys.Tab])) {
      if (event.shiftKey) {
        //Focus previous input
        if (document.activeElement.parentElement.previousSibling && document.activeElement.parentElement.previousSibling.offsetLeft + position <= buttonSize) {
          paginateLeft();
        }
      } else {
        //Focus next input
        if (document.activeElement.parentElement.nextSibling && document.activeElement.parentElement.nextSibling.offsetLeft + document.activeElement.parentElement.nextSibling.offsetWidth >= containerRef.current.offsetWidth - buttonSize) {
          paginateRight();
        }
      }
    }
  };

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "".concat(prefix, "--header__nav-container"),
    ref: containerRef
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--header__nav-content"),
    ref: contentRef,
    onKeyDown: handleOnKeyDown
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--sub-content-left"),
    ref: contentLeftRef
  }), _react.default.createElement("div", {
    className: "".concat(prefix, "--sub-content-right"),
    ref: contentRightRef
  }), children), _react.default.createElement("div", {
    ref: caretLeftRef,
    className: "".concat(prefix, "--header__nav-caret-left-container")
  }, _react.default.createElement("button", {
    className: "".concat(prefix, "--header__nav-caret-left"),
    "aria-label": "Masthead left caret",
    onClick: paginateLeft,
    tabIndex: "-1",
    "aria-hidden": "true",
    hidden: true
  }, _react.default.createElement(_.default, null)), _react.default.createElement("div", {
    className: "".concat(prefix, "--header__nav-caret-left-gradient")
  })), _react.default.createElement("div", {
    ref: caretRightRef,
    className: "".concat(prefix, "--header__nav-caret-right-container")
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--header__nav-caret-right-gradient")
  }), _react.default.createElement("button", {
    className: "".concat(prefix, "--header__nav-caret-right"),
    "aria-label": "Masthead right caret",
    onClick: paginateRight,
    tabIndex: "-1",
    "aria-hidden": "true",
    hidden: true
  }, _react.default.createElement(_2.default, null)))));
};

HeaderNavContainer.propTypes = {
  /**
   * Container for other components.
   */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node])
};
var _default = HeaderNavContainer;
exports.default = _default;