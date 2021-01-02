/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { DDS_PROMO_BANNER } from '../../internal/FeatureFlags';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings';
import featureFlag from '@carbon/ibmdotcom-utilities/es/utilities/featureflag/featureflag';
import LinkWithIcon from '../LinkWithIcon/LinkWithIcon';
import markdownToHtml from '@carbon/ibmdotcom-utilities/es/utilities/markdownToHtml/markdownToHtml';
import PropTypes from 'prop-types';
import React from 'react';
import settings from 'carbon-components/es/globals/js/settings';
var stablePrefix = ddsSettings.stablePrefix;
var prefix = settings.prefix;

var PromoBanner = function PromoBanner(_ref) {
  var banner = _ref.banner,
      copy = _ref.copy,
      cta = _ref.cta;
  return featureFlag(DDS_PROMO_BANNER, banner && copy && cta ? React.createElement("section", {
    "data-autoid": "".concat(stablePrefix, "--promo-banner"),
    className: "".concat(prefix, "--promo-banner")
  }, React.createElement("div", {
    className: "".concat(prefix, "--promo-banner__row")
  }, React.createElement("div", {
    className: "".concat(prefix, "--promo-banner__left-column")
  }, banner), React.createElement("div", {
    className: "".concat(prefix, "--promo-banner__content")
  }, React.createElement("div", {
    className: "".concat(prefix, "--promo-banner__copy"),
    dangerouslySetInnerHTML: {
      __html: markdownToHtml(copy, {
        bold: false
      })
    }
  }), React.createElement(LinkWithIcon, {
    href: cta.href
  }, React.createElement("span", null, cta.copy), cta.icon)))) : null);
};

PromoBanner.propTypes = {
  /**
   * The banner positioned on the left side of the section. It is required, otherwise, the section will not render.
   */
  banner: PropTypes.node.isRequired,

  /**
   * The promo-banner description. Enabled for markdown to HTML utility. It is required, otherwise, the section will not render.
   */
  copy: PropTypes.string.isRequired,

  /**
   * Call to Action of the section. See [LinkWithIcon]('../LinkWithIcon/README.stories.mdx'). It is required, otherwise, the section will not render.
   */
  cta: PropTypes.shape({
    href: PropTypes.string,
    copy: PropTypes.string,
    icon: PropTypes.node
  }).isRequired
};
export default PromoBanner;