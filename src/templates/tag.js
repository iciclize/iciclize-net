import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";

import { Posts, Post } from "../components/post";
import styled from "@emotion/styled";
import { rhythm } from "../utils/typography";
import mq from "../utils/emotion";
import { css } from "@emotion/react";
import Seo from "../components/seo";

const QueryDescription = styled.div`
  font-size: ${rhythm(10 / 12)};
  text-align: center;
  font-weight: bold;
  letter-spacing: ${rhythm(2 / 24)};
  color: white;
  /*text-shadow: rgba(0, 0, 0, 0.18) 1px 1px 4px;*/
  /*background: linear-gradient(to right, hsl(204,100%,82%), hsl(184,100%,82%));*/
  background: hsl(199, 100%, 84%);
  padding: ${rhythm(1)};
  margin: 0 0 ${rhythm(1)} 0;
  ${mq[1]} {
    padding: ${rhythm(18 / 12)};
    font-size: ${rhythm(1)};
  }
`;

const UserTemplate = ({ pageContext, data }) => {
  const { tagname, slug } = pageContext;
  const articles = data.allStrapiArticle;

  return (
    <Layout>
      <Seo
        title={`#${tagname}`}
        ogDescription={`#${tagname} のタグの付いた記事一覧`}
      />
      <QueryDescription
        css={
          slug === `life`
            ? css`
                background: hsl(150, 65%, 79%);
              `
            : null
        }
      >
        #{tagname}
      </QueryDescription>
      <Posts
        css={
          slug === `life`
            ? css`
                & > li {
                  border-left-color: hsl(150, 65%, 79%);
                }
              `
            : null
        }
      >
        {articles.edges.length !== 0 &&
          articles.edges.map(article => {
            const entry = article.node;
            return (
              <Post
                link={`/posts/${entry.slug}`}
                title={entry.title}
                tags={entry.tags}
                summary={entry.summary}
                image={
                  entry.image?.localFile.childImageSharp.gatsbyImageData || null
                }
                key={entry.id}
              />
            );
          })}
        {articles.edges.length === 0 && (
          <p
            css={css`
              text-align: center;
              flex-basis: 100%;
            `}
          >
            (該当する記事が)ないです。
          </p>
        )}
      </Posts>
    </Layout>
  );
};

export default UserTemplate;

export const pageQuery = graphql`
  query Article($slug: String!) {
    allStrapiArticle(
      filter: { tags: { elemMatch: { slug: { in: [$slug] } } } }
      sort: { order: DESC, fields: publish_date }
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
                  transformOptions: { cropFocus: CENTER, fit: COVER }
                )
              }
            }
          }
          title
          summary
          slug
          tags {
            id
            tagname
            slug
          }
        }
      }
    }
    strapiTag(slug: { eq: $slug }) {
      tagname
    }
  }
`;
