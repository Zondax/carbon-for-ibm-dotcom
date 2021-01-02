"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Conditional wrapper internal component
 *
 * @param {object} props React props object
 * @param {boolean} props.condition whether to use wrapper
 * @param {*} props.wrapper JSX components
 * @param {*} props.children element(s)
 * @returns {*} JSX element
 *
 * @example
 * import ConditionalWrapper from '../../internal/components/ConditionalWrapper/ConditionalWrapper';
 *
 * const example = ({ link, copy }) => {
 *   return (
 *     <ConditionalWrapper
 *       condition={link}
 *       wrapper={children => <a href={link}>{children}</a>}
 *     >
 *       <p>{children}</p>
 *     </ConditionalWrapper>
 *   );
 * }
 */
var ConditionalWrapper = function ConditionalWrapper(_ref) {
  var condition = _ref.condition,
      wrapper = _ref.wrapper,
      children = _ref.children;
  return condition ? wrapper(children) : children;
};

ConditionalWrapper.propTypes = {
  /**
   * Condition whether to use wrapper or not
   */
  condition: _propTypes.default.bool,

  /**
   * Wrapper element
   */
  wrapper: _propTypes.default.node,

  /**
   * Children elements
   */
  children: _propTypes.default.node
};
var _default = ConditionalWrapper;
exports.default = _default;