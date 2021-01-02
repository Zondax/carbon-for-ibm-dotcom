"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _FeatureFlags = require("../../internal/FeatureFlags");

var _settings = _interopRequireDefault(require("@carbon/ibmdotcom-utilities/lib/utilities/settings/settings"));

var _featureflag = _interopRequireDefault(require("@carbon/ibmdotcom-utilities/lib/utilities/featureflag/featureflag"));

var _LinkWithIcon = _interopRequireDefault(require("../LinkWithIcon/LinkWithIcon"));

var _markdownToHtml = _interopRequireDefault(require("@carbon/ibmdotcom-utilities/lib/utilities/markdownToHtml/markdownToHtml"));

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

var PromoBanner = function PromoBanner(_ref) {
  var banner = _ref.banner,
      copy = _ref.copy,
      cta = _ref.cta;
  return (0, _featureflag.default)(_FeatureFlags.DDS_PROMO_BANNER, banner && copy && cta ? _react.default.createElement("section", {
    "data-autoid": "".concat(stablePrefix, "--promo-banner"),
    className: "".concat(prefix, "--promo-banner")
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--promo-banner__row")
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--promo-banner__left-column")
  }, banner), _react.default.createElement("div", {
    className: "".concat(prefix, "--promo-banner__content")
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--promo-banner__copy"),
    dangerouslySetInnerHTML: {
      __html: (0, _markdownToHtml.default)(copy, {
        bold: false
      })
    }
  }), _react.default.createElement(_LinkWithIcon.default, {
    href: cta.href
  }, _react.default.createElement("span", null, cta.copy), cta.icon)))) : null);
};

PromoBanner.propTypes = {
  /**
   * The banner positioned on the left side of the section. It is required, otherwise, the section will not render.
   */
  banner: _propTypes.default.node.isRequired,

  /**
   * The promo-banner description. Enabled for markdown to HTML utility. It is required, otherwise, the section will not render.
   */
  copy: _propTypes.default.string.isRequired,

  /**
   * Call to Action of the section. See [LinkWithIcon]('../LinkWithIcon/README.stories.mdx'). It is required, otherwise, the section will not render.
   */
  cta: _propTypes.default.shape({
    href: _propTypes.default.string,
    copy: _propTypes.default.string,
    icon: _propTypes.default.node
  }).isRequired
};
var _default = PromoBanner;
exports.default = _default;