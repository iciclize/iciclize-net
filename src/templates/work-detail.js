import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  Layout,
  mdStyle,
  PostContainer,
  PostInner
} from "../components/layout";
import { rhythm } from "../utils/typography";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import mq from "../utils/emotion";
import Seo from "../components/seo";

import NextPrevNav from "../components/NextPrevNav";

const pageWidth = "700px";

const WorkTitle = styled.h1`
  font-weight: bold;
  font-size: ${rhythm(12 / 12)};
  text-align: center;
  letter-spacing: ${rhythm(1 / 24)};
  margin: ${rhythm(4 / 12)} 0 ${rhythm(16 / 12)};
  ${mq[1]} {
    font-size: ${rhythm(14 / 12)};
  }
`;
const TimingOfWork = styled.div`
  font-size: ${rhythm(12 / 20)};
  text-align: center;
  color: hsl(0, 0%, 52%);
  ${mq[1]} {
    font-size: ${rhythm(13 / 20)};
  }
`;

const ArticleTemplate = hoge => {
  const data = hoge.data;
  const markdown = data.markdownRemark;

  const title = markdown.frontmatter.title;
  const description = markdown.frontmatter.description;
  const image = markdown.frontmatter.imagename.childImageSharp.gatsbyImageData;
  const date = markdown.frontmatter.date;
  const markdownHtml = markdown.html;

  const next = data.next;
  const nextImage =
    next && data.next.frontmatter.imagename.childImageSharp.gatsbyImageData;
  const nextLink = next && `/works/${next.frontmatter.slug}`;
  const nextTitle = next && next.frontmatter.title;

  const prev = data.prev;
  const prevImage =
    prev && data.prev.frontmatter.imagename.childImageSharp.gatsbyImageData;
  const prevLink = prev && `/works/${prev.frontmatter.slug}`;
  const prevTitle = prev && prev.frontmatter.title;

  return (
    <Layout>
      <Seo
        title={title}
        metaDescription={description}
        ogDescription={description}
        image={image}
        meta={[
          {
            name: `twitter:card`,
            content: `summary_large_image`
          }
        ]}
      />
      <PostContainer>
        <PostInner>
          <TimingOfWork>{date}</TimingOfWork>
          <WorkTitle>{title}</WorkTitle>
        </PostInner>
      </PostContainer>
      {image && (
        <div
          css={css`
            max-width: ${pageWidth};
            margin: 0 auto ${rhythm(8 / 12)};
          `}
        >
          <GatsbyImage image={image} alt={title} />
        </div>
      )}
      <PostContainer>
        <PostInner pageWidth={pageWidth}>
          <div
            css={mdStyle}
            dangerouslySetInnerHTML={{ __html: markdownHtml }}
          />
          <NextPrevNav
            nextLabel={`次の作品`}
            nextLink={nextLink}
            nextTitle={nextTitle}
            nextImage={nextImage}
            prevLabel={`過去の作品`}
            prevLink={prevLink}
            prevTitle={prevTitle}
            prevImage={prevImage}
          />
        </PostInner>
      </PostContainer>
    </Layout>
  );
};

export default ArticleTemplate;

export const pageQuery = graphql`
  query WorkDetail($id: String!, $next: String, $prev: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM")
        description
        imagename {
          childImageSharp {
            gatsbyImageData(width: 1400, layout: CONSTRAINED)
          }
        }
      }
    }
    next: markdownRemark(id: { eq: $next }) {
      frontmatter {
        title
        slug
        imagename {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    prev: markdownRemark(id: { eq: $prev }) {
      frontmatter {
        title
        slug
        imagename {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
