import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  Layout,
  mdStyle,
  PostContainer,
  PostInner,
} from "../components/layout";
import Iframely from "../components/Iframely";
import styled from "@emotion/styled";
import { rhythm } from "../utils/typography";
import { css } from "@emotion/react";
import mq from "../utils/emotion";
import { MyMDXRenderer } from "../components/mdx-renderer";
// import ReactMarkdown from "react-markdown";
// import rehypeRaw from "rehype-raw";

import Seo from "../components/seo";
import { Posts, Post } from "../components/post";

const pageWidth = "700px";

const PostTitle = styled.h1`
  font-size: ${rhythm(12 / 12)};
  letter-spacing: ${rhythm(1 / 24)};
  line-height: 1.25;
  margin: 0 0 0;
  ${mq[1]} {
    font-size: ${rhythm(13 / 12)};
  }
`;
const PostedDate = styled.div`
  font-size: ${rhythm(11 / 20)};
  color: hsl(0, 0%, 52%);
`;
const PostTags = styled.ul`
  list-style: none;
  margin: ${rhythm(8 / 12)} 0 ${rhythm(14 / 12)};
`;
const PostTag = styled.li`
  display: inline-block;
  margin: 0 ${rhythm(4 / 12)} ${rhythm(1 / 12)} 0;
  & > a {
    font-size: ${rhythm(10 / 16)};
    text-decoration: none;
    color: hsl(208, 100%, 66%);
    padding: ${rhythm(1 / 12)} ${rhythm(1 / 12)};
  }
  ${mq[1]} {
    & > a {
      font-size: ${rhythm(11 / 16)};
    }
  }
`;

const ArticleTemplate = (hoge) => {
  const data = hoge.data;

  const entry = data.strapiArticle;
  const relatedPosts = data.relatedPosts;

  return (
    <Layout>
      <Seo
        title={entry.title}
        metaDescription={entry.summary || ``}
        ogDescription={entry.summary || entry.childStrapiArticleContent.excerpt}
        image={
          entry.image && entry.image.localFile.childImageSharp.gatsbyImageData
        }
      />
      <Iframely />
      {entry.image && (
        <div
          css={css`
            max-width: ${pageWidth};
            margin: 0 auto ${rhythm(10 / 12)};
          `}
        >
          <GatsbyImage
            image={entry.image.localFile.childImageSharp.gatsbyImageData}
            alt={entry.title}
          />
        </div>
      )}
      <PostContainer>
        <PostInner pageWidth={pageWidth}>
          <PostTitle>{entry.title}</PostTitle>
          {entry.publish_date && (
            <PostedDate>
              {entry.publish_date}
              {entry.update_date &&
                entry.update_date !== `Invalid date` &&
                `(更新: ${entry.update_date})`}
            </PostedDate>
          )}
          {entry.tags.length > 0 && (
            <PostTags>
              {entry.tags.map((tag) => (
                <PostTag key={tag.id}>
                  <Link to={`/tags/${tag.slug}`}>#{tag.tagname}</Link>
                </PostTag>
              ))}
            </PostTags>
          )}
          {
            //
            // <ReactMarkdown
            //   css={mdStyle}
            //   rehypePlugins={[rehypeRaw /* rehypeSanitize */]}
            //   transformImageUri={(uri) =>
            //     uri.startsWith("http")
            //       ? uri
            //       : `${process.env.IMAGE_BASE_URL}${uri}`
            //   }
            // >
            //   {entry.content}
            // </ReactMarkdown>
          }
          {entry.childStrapiArticleContent.childMdx && (
            <div css={mdStyle}>
              <MyMDXRenderer>
                {entry.childStrapiArticleContent.childMdx.body}
              </MyMDXRenderer>
            </div>
          )}
          <hr
            css={css`
              margin: 1.4rem 0 1rem;
            `}
          />
          {relatedPosts.edges.length > 0 ? (
            <>
              <h3
                css={css`
                  margin: 1.4rem 0 1rem;
                `}
              >
                ほかの記事
              </h3>
              <Posts>
                {relatedPosts.edges.map((edge) => {
                  const entry = edge.node;
                  return (
                    <Post
                      link={`/posts/${entry.slug}`}
                      title={entry.title}
                      publish_date={entry.publish_date}
                      tags={entry.tags}
                      summary={entry.summary}
                      image={
                        entry.image?.localFile.childImageSharp
                          .gatsbyImageData || null
                      }
                      key={entry.id}
                    />
                  );
                })}
              </Posts>
            </>
          ) : (
            <></>
          )}
        </PostInner>
      </PostContainer>
    </Layout>
  );
};

export default ArticleTemplate;

export const q = graphql`
  query ArticleTemplate($id: String!, $relatedPostIds: [String!]) {
    strapiArticle(id: { eq: $id }) {
      title
      slug
      childStrapiArticleContent {
        childMdx {
          body
          excerpt(pruneLength: 100, truncate: true)
        }
      }
      publish_date(formatString: "YYYY-MM-DD")
      update_date(formatString: "YYYY-MM-DD")
      summary
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 840, layout: CONSTRAINED)
            fixed(width: 360) {
              src
            }
          }
        }
      }
      tags {
        id
        slug
        tagname
      }
    }

    relatedPosts: allStrapiArticle(
      sort: { order: DESC, fields: publish_date }
      filter: { slug: { ne: "dummy-post" }, id: { in: $relatedPostIds } }
    ) {
      edges {
        node {
          id
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 870
                  height: 240
                  layout: CONSTRAINED
                  transformOptions: { cropFocus: CENTER }
                )
              }
            }
          }
          title
          publish_date(formatString: "YYYY-MM-DD")
          summary
          slug
          tags {
            id
            slug
            tagname
          }
        }
      }
    }
  }
`;
