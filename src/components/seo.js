/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ metaDescription, ogDescription, lang, meta, title, image }) {
  const { site, defaultImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        defaultImage: imageSharp(
          fluid: { originalName: { regex: "/.*IceCircle.*/" } }
        ) {
          fixed(fit: CONTAIN, width: 512, height: 512) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    `
  );

  const seoDescription = metaDescription || ``;
  const shareDescription = ogDescription;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title || site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: seoDescription
        },
        {
          name: `twitter:card`,
          content: meta.every(m => m.name !== `twitter:card`)
            ? `summary`
            : meta.find(m => m.name === `twitter:card`).content
        },
        {
          name: `twitter:title`,
          content: title || site.siteMetadata.title
        },
        {
          name: `twitter:image`,
          content:
            (image && `${site.siteMetadata.siteUrl}${image.src}`) ||
            `${site.siteMetadata.siteUrl}${defaultImage.fixed.src}`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:description`,
          content: shareDescription
        },
        {
          property: `og:title`,
          content: title || site.siteMetadata.title
        },
        {
          property: `og:description`,
          content: shareDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content:
            (image && `${site.siteMetadata.siteUrl}${image.src}`) ||
            `${site.siteMetadata.siteUrl}${defaultImage.fixed.src}`
        }
      ].filter(m => m.content)}
    />
  );
}

Seo.defaultProps = {
  lang: `ja`,
  meta: [],
  description: ``
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default Seo;
