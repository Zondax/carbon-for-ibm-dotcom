"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _ButtonGroup = require("../../components/ButtonGroup");

var _classnames3 = _interopRequireDefault(require("classnames"));

var _settings = _interopRequireDefault(require("@carbon/ibmdotcom-utilities/lib/utilities/settings/settings"));

var _Image = require("../Image");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _settings2 = _interopRequireDefault(require("carbon-components/umd/globals/js/settings"));

/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var stablePrefix = _settings.default.stablePrefix;
var prefix = _settings2.default.prefix;
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

  return (0, _classnames3.default)("".concat(prefix, "--leadspace__section"), (_classnames = {}, (0, _defineProperty2.default)(_classnames, "".concat(prefix, "--leadspace--").concat(theme), theme), (0, _defineProperty2.default)(_classnames, "".concat(prefix, "--leadspace--centered"), type === 'centered'), (0, _defineProperty2.default)(_classnames, "".concat(prefix, "--leadspace--centered__image"), image && type === 'centered'), (0, _defineProperty2.default)(_classnames, "".concat(prefix, "--leadspace--productive"), type === 'small'), _classnames));
};
/**
 *
 * @param {string} type type
 * @param {object} image image
 * @returns {object} returns either image component or the centered image div
 */


function imageClassname(type, image) {
  if (type === 'centered') {
    return _react.default.createElement("div", {
      "data-autoid": "".concat(stablePrefix, "--leadspace--centered--mobile__image"),
      className: "".concat(prefix, "--leadspace--centered--mobile__image")
    }, _react.default.createElement("img", {
      src: image.defaultSrc,
      alt: image.alt
    }));
  } else return _react.default.createElement(_Image.Image, image);
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
  return _react.default.createElement("div", {
    "data-autoid": "".concat(stablePrefix, "--leadspace"),
    className: "".concat(prefix, "--leadspace")
  }, _react.default.createElement("section", {
    style: background,
    className: classNames(type, image, theme)
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--leadspace__container")
  }, _react.default.createElement("div", {
    className: (0, _classnames3.default)("".concat(prefix, "--leadspace__overlay"), (0, _defineProperty2.default)({}, "".concat(prefix, "--leadspace--gradient"), gradient))
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--leadspace--content__container")
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--leadspace__row")
  }, _react.default.createElement("h1", {
    className: "".concat(prefix, "--leadspace__title")
  }, title)), _react.default.createElement("div", {
    className: "".concat(prefix, "--leadspace__content")
  }, copy && _react.default.createElement("div", {
    className: "".concat(prefix, "--leadspace__row")
  }, _react.default.createElement("p", {
    "data-autoid": "".concat(stablePrefix, "--leadspace__desc"),
    className: "".concat(prefix, "--leadspace__desc")
  }, copy)), buttons && buttons.length > 0 && _react.default.createElement(_ButtonGroup.ButtonGroup, {
    buttons: buttons
  })))), image && imageClassname(type, image))));
};

LeadSpace.propTypes = {
  /**
   * Array of button objects to render (max 2).
   * See [`<ButtonGroup>`'s README](http://ibmdotcom-react.mybluemix.net/?path=/docs/components-buttongroup--default#button-item) for full usage details.
   */
  buttons: _propTypes.default.arrayOf(_propTypes.default.shape({
    copy: _propTypes.default.string.isRequired,
    href: _propTypes.default.string.isRequired,
    renderIcon: _propTypes.default.elementType
  })),

  /**
   * Short copy of LeadSpace.
   */
  copy: _propTypes.default.string,

  /**
   * `true` to render overlay gradient.
   */
  gradient: _propTypes.default.bool,

  /**
   * Object with different ratio options for corresponding breakpoints.
   * See [`<Image>`'s README](http://ibmdotcom-react.mybluemix.net/?path=/docs/components-image--default#props) for full usage details.
   */
  image: _propTypes.default.shape(_propTypes.default.shape({
    classname: _propTypes.default.string,
    sources: _propTypes.default.arrayOf(_propTypes.default.shape({
      src: _propTypes.default.string,
      breakpoint: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
    })),
    defaultSrc: _propTypes.default.string.isRequired,
    alt: _propTypes.default.string.isRequired,
    longDescription: _propTypes.default.string
  })),

  /**
   * Color theme of LeadSpace. Choose from:
   *
   * | Name    | Data Type | Description           |
   * | ------- | --------- | --------------------- |
   * | `white` | String    | Carbon White theme    |
   * | `g100`  | String    | Carbon Gray 100 theme |
   */
  theme: _propTypes.default.oneOf(['white', 'g100']),

  /**
   * Title of LeadSpace.
   */
  title: _propTypes.default.string.isRequired,

  /**
   * Sets the type of Leadspace layout. Choose from:
   *
   * | Name              | Data Type | Description                                       |
   * | ----------------- | --------- | ------------------------------------------------- |
   * | `small`/`default` | String    | Left-aligned - small style of the leadspace title |
   * | `left`            | String    | Left-aligned - large style of the leadspace title |
   * | `centered`        | String    | Centered type of the LeadSpace                    |
   */
  type: _propTypes.default.oneOf(['small', 'left', 'centered'])
};
var _default = LeadSpace;
exports.default = _default;