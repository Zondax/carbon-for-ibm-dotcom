import _defineProperty from "@babel/runtime/helpers/defineProperty";

/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ButtonGroup } from '../../components/ButtonGroup';
import classnames from 'classnames';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings';
import { Image } from '../Image';
import PropTypes from 'prop-types';
import React from 'react';
import settings from 'carbon-components/es/globals/js/settings';
var stablePrefix = ddsSettings.stablePrefix;
var prefix = settings.prefix;
/**
 * renders main class name
 *
 * @param {string} type switches between centered or default
 * @param {object} image image object
 * @param {string} theme theme of the pattern
 * @returns {string} classnames
 */

var classNames = function classNames(type, image, theme) {
  var _classnames;

  return classnames("".concat(prefix, "--leadspace__section"), (_classnames = {}, _defineProperty(_classnames, "".concat(prefix, "--leadspace--").concat(theme), theme), _defineProperty(_classnames, "".concat(prefix, "--leadspace--centered"), type === 'centered'), _defineProperty(_classnames, "".concat(prefix, "--leadspace--centered__image"), image && type === 'centered'), _defineProperty(_classnames, "".concat(prefix, "--leadspace--productive"), type === 'small'), _classnames));
};
/**
 *
 * @param {string} type type
 * @param {object} image image
 * @returns {object} returns either image component or the centered image div
 */


function imageClassname(type, image) {
  if (type === 'centered') {
    return React.createElement("div", {
      "data-autoid": "".concat(stablePrefix, "--leadspace--centered--mobile__image"),
      className: "".concat(prefix, "--leadspace--centered--mobile__image")
    }, React.createElement("img", {
      src: image.defaultSrc,
      alt: image.alt
    }));
  } else return React.createElement(Image, image);
}
/**
 * Lead space component (left-aligned)
 *
 * @param {object} props props object
 * @param {Array} props.buttons array of buttons for lead space (max 2 buttons)
 * @param {string} props.copy lead space short copy to support the title
 * @param {boolean} props.gradient determines whether to render gradient overlay
 * @param {object} props.image image object with diff source for diff breakpoints
 * @param {string} props.theme theme of the pattern (g100 or white (default))
 * @param {string} props.title lead space title
 * @param {string} props.type type of lead space
 * @returns {*} Lead space component
 */


var LeadSpace = function LeadSpace(_ref) {
  var buttons = _ref.buttons,
      copy = _ref.copy,
      gradient = _ref.gradient,
      image = _ref.image,
      theme = _ref.theme,
      title = _ref.title,
      type = _ref.type;
  var background = image && {
    backgroundImage: "url(".concat(image.defaultSrc, ")")
  };
  return React.createElement("div", {
    "data-autoid": "".concat(stablePrefix, "--leadspace"),
    className: "".concat(prefix, "--leadspace")
  }, React.createElement("section", {
    style: background,
    className: classNames(type, image, theme)
  }, React.createElement("div", {
    className: "".concat(prefix, "--leadspace__container")
  }, React.createElement("div", {
    className: classnames("".concat(prefix, "--leadspace__overlay"), _defineProperty({}, "".concat(prefix, "--leadspace--gradient"), gradient))
  }, React.createElement("div", {
    className: "".concat(prefix, "--leadspace--content__container")
  }, React.createElement("div", {
    className: "".concat(prefix, "--leadspace__row")
  }, React.createElement("h1", {
    className: "".concat(prefix, "--leadspace__title")
  }, title)), React.createElement("div", {
    className: "".concat(prefix, "--leadspace__content")
  }, copy && React.createElement("div", {
    className: "".concat(prefix, "--leadspace__row")
  }, React.createElement("p", {
    "data-autoid": "".concat(stablePrefix, "--leadspace__desc"),
    className: "".concat(prefix, "--leadspace__desc")
  }, copy)), buttons && buttons.length > 0 && React.createElement(ButtonGroup, {
    buttons: buttons
  })))), image && imageClassname(type, image))));
};

LeadSpace.propTypes = {
  /**
   * Array of button objects to render (max 2).
   * See [`<ButtonGroup>`'s README](http://ibmdotcom-react.mybluemix.net/?path=/docs/components-buttongroup--default#button-item) for full usage details.
   */
  buttons: PropTypes.arrayOf(PropTypes.shape({
    copy: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    renderIcon: PropTypes.elementType
  })),

  /**
   * Short copy of LeadSpace.
   */
  copy: PropTypes.string,

  /**
   * `true` to render overlay gradient.
   */
  gradient: PropTypes.bool,

  /**
   * Object with different ratio options for corresponding breakpoints.
   * See [`<Image>`'s README](http://ibmdotcom-react.mybluemix.net/?path=/docs/components-image--default#props) for full usage details.
   */
  image: PropTypes.shape(PropTypes.shape({
    classname: PropTypes.string,
    sources: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      breakpoint: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })),
    defaultSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    longDescription: PropTypes.string
  })),

  /**
   * Color theme of LeadSpace. Choose from:
   *
   * | Name    | Data Type | Description           |
   * | ------- | --------- | --------------------- |
   * | `white` | String    | Carbon White theme    |
   * | `g100`  | String    | Carbon Gray 100 theme |
   */
  theme: PropTypes.oneOf(['white', 'g100']),

  /**
   * Title of LeadSpace.
   */
  title: PropTypes.string.isRequired,

  /**
   * Sets the type of Leadspace layout. Choose from:
   *
   * | Name              | Data Type | Description                                       |
   * | ----------------- | --------- | ------------------------------------------------- |
   * | `small`/`default` | String    | Left-aligned - small style of the leadspace title |
   * | `left`            | String    | Left-aligned - large style of the leadspace title |
   * | `centered`        | String    | Centered type of the LeadSpace                    |
   */
  type: PropTypes.oneOf(['small', 'left', 'centered'])
};
export default LeadSpace;