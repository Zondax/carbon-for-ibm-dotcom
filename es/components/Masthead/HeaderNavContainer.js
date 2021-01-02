import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { keys, matches } from '../../internal/vendor/carbon-components-react/internal/keyboard';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import CaretLeft20 from '@carbon/icons-react/es/caret--left/20';
import CaretRight20 from '@carbon/icons-react/es/caret--right/20';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings';
var prefix = settings.prefix;
/**
 * Header nav container component.
 */

var HeaderNavContainer = function HeaderNavContainer(_ref) {
  var children = _ref.children;
  var containerRef = useRef(null);
  var contentRef = useRef(null);
  var contentLeftRef = useRef(null);
  var contentRightRef = useRef(null);
  var caretLeftRef = useRef(null);
  var caretRightRef = useRef(null);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      io = _useState2[0],
      setIO = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      position = _useState4[0],
      setPosition = _useState4[1];

  var buttonSize = 48; // 40px(width) + 8px(gradient)

  var paginateLeft = useCallback(function () {
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
  var paginateRight = useCallback(function () {
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
  useEffect(function () {
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
  useEffect(function () {
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
    if (matches(event, [keys.Tab])) {
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

  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "".concat(prefix, "--header__nav-container"),
    ref: containerRef
  }, React.createElement("div", {
    className: "".concat(prefix, "--header__nav-content"),
    ref: contentRef,
    onKeyDown: handleOnKeyDown
  }, React.createElement("div", {
    className: "".concat(prefix, "--sub-content-left"),
    ref: contentLeftRef
  }), React.createElement("div", {
    className: "".concat(prefix, "--sub-content-right"),
    ref: contentRightRef
  }), children), React.createElement("div", {
    ref: caretLeftRef,
    className: "".concat(prefix, "--header__nav-caret-left-container")
  }, React.createElement("button", {
    className: "".concat(prefix, "--header__nav-caret-left"),
    "aria-label": "Masthead left caret",
    onClick: paginateLeft,
    tabIndex: "-1",
    "aria-hidden": "true",
    hidden: true
  }, React.createElement(CaretLeft20, null)), React.createElement("div", {
    className: "".concat(prefix, "--header__nav-caret-left-gradient")
  })), React.createElement("div", {
    ref: caretRightRef,
    className: "".concat(prefix, "--header__nav-caret-right-container")
  }, React.createElement("div", {
    className: "".concat(prefix, "--header__nav-caret-right-gradient")
  }), React.createElement("button", {
    className: "".concat(prefix, "--header__nav-caret-right"),
    "aria-label": "Masthead right caret",
    onClick: paginateRight,
    tabIndex: "-1",
    "aria-hidden": "true",
    hidden: true
  }, React.createElement(CaretRight20, null)))));
};

HeaderNavContainer.propTypes = {
  /**
   * Container for other components.
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
export default HeaderNavContainer;