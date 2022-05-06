import React from "react";
import { Link, graphql } from "gatsby";
import { Post, Posts } from "../components/post";
import { Layout } from "../components/layout";

import { rhythm } from "../utils/typography";
import mq from "../utils/emotion";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Seo from "../components/seo";

const Side = styled.div`
  flex: 1 1;
  margin: ${rhythm(10 / 12)} 0 0;
  display: flex;
  flex-direction: column;
  ${mq[1]} {
    flex-direction: row;
    margin: ${rhythm(10 / 12)} auto 0;
    width: 740px;
  }
  ${mq[3]} {
    flex-direction: column;
    margin: 0 0 0 1.5rem;
  }
`;
const SideInner = styled.div`
  flex: 1 1 auto;
  min-width: 25%;
  margin: 0 ${rhythm(8 / 12)} ${rhythm(12 / 12)};
  ${mq[3]} {
    flex: 0 1 auto;
  }
`;
const Features = ({ features }) => {
  const HeaderContainer = styled.div`
    display: flex;
    padding-bottom: ${rhythm(6 / 12)};
    border-bottom: 1px solid #ddd;
  `;
  const Square = styled.div`
    &::before {
      content: "";
      vertical-align: middle;
      display: inline-block;
      padding: ${rhythm(4 / 12)};
      border: 4px solid hsl(150, 65%, 79%);
      margin-right: ${rhythm(8 / 12)};
    }
  `;
  const Header = styled.h1`
    margin: 0;
    font-size: ${rhythm(17 / 24)};
    line-height: calc(1.5rem + 4px);
  `;
  const FeatureList = styled.ul`
    list-style: none;
    padding-top: ${rhythm(8 / 12)};
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 740px;
    ${mq[3]} {
      flex-direction: column;
    }
  `;
  const Item = styled.li`
    flex: 1 1 45%;
    margin: 0 0 ${rhythm(8 / 12)};
    border-left: 3px solid hsl(150, 65%, 79%);
    padding: 0 0 0 ${rhythm(4 / 12)};
    min-width: 30%;
    /*
    ${mq[1]} {
      margin: 0 ${rhythm(8 / 12)} ${rhythm(14 / 12)};
      flex: 1 1 30%;
    }
    */
  `;
  const Title = styled.h1`
    font-weight: normal;
    font-size: ${rhythm(8 / 12)};
    line-height: ${rhythm(10 / 12)};
    letter-spacing: 0;
    margin: 0;
    & > a {
      text-decoration: none;
      color: #191919;
    }
    ${mq[1]} {
      font-size: ${rhythm(8 / 12)};
      line-height: ${rhythm(14 / 12)};
    }
    ${mq[3]} {
      font-size: ${rhythm(8 / 12)};
      line-height: ${rhythm(12 / 12)};
    }
  `;
  const PublishDate = styled.div`
  font-size: ${rhythm(8 / 16)};
  margin: 0;
  `;

  return (
    <SideInner>
      <HeaderContainer>
        <Square />
        <Header>生活系エントリ新着</Header>
      </HeaderContainer>
      <FeatureList>
        {features.edges.map(({ node }, index) => (
          <Item key={index}>
            <Title>
              <Link to={`/posts/${node.slug}`}>{node.title}</Link>
            </Title>
            <PublishDate>{node.publish_date}</PublishDate>
          </Item>
        ))}
      </FeatureList>
    </SideInner>
  );
};

const AllTag = ({ tags, tagPostCount }) => {
  const Header = styled.h1`
    font-size: ${rhythm(17 / 24)};
    line-height: calc(1.5rem + 4px);
    padding-bottom: ${rhythm(6 / 12)};
    border-bottom: 1px solid #ddd;
    margin-bottom: ${rhythm(8 / 12)};
  `;
  const TagList = styled.ul`
    list-style: none;
    margin-left: ${rhythm(4 / 12)};
    max-width: 740px;
  `;
  const Tag = styled.li`
    font-weight: normal;
    font-size: ${rhythm(7 / 12)};
    line-height: ${rhythm(10 / 12)};
    letter-spacing: ${rhythm(1 / 24)};
    margin: 0 0 ${rhythm(3 / 12)};
    & > a {
      text-decoration: none;
      color: hsl(208, 100%, 66%);
    }
  `;
  return (
    <SideInner>
      <Header>タグ一覧</Header>
      <TagList>
        {tags.edges.map(({ node }, index) => {
          const tagCountPair = tagPostCount.group.find(elem => {
            return elem.fieldValue === node.slug;
          });
          const count = tagCountPair.totalCount || 0;
          return (
            <Tag key={index}>
              <Link to={`/tags/${node.slug}`}>
                <span
                  css={css`
                    margin-right: 0.2rem;
                  `}
                >
                  #
                </span>
                {`${node.tagname} (${count})`}
              </Link>
            </Tag>
          );
        })}
      </TagList>
    </SideInner>
  );
};

const TwoColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 1080px;
  ${mq[3]} {
    flex-direction: row;
    align-items: start;
  }
`;

const IndexPage = ({ data }) => {
  const tagPostCount = data.tagPostCount;

  return (
    <Layout>
      <Seo
        title={data.site.siteMetadata.title}
        ogDescription={data.site.siteMetadata.description}
      />
      <TwoColumn>
        <Posts>
          {data.allStrapiArticle.edges.map(article => {
            const entry = article.node;
            return (
              <Post
                link={`/posts/${entry.slug}`}
                title={entry.title}
                publish_date={entry.publish_date}
                tags={entry.tags}
                summary={entry.summary}
                image={
                  entry.image?.localFile.childImageSharp.gatsbyImageData || null
                }
                key={entry.id}
              />
            );
          })}
        </Posts>
        <Side>
          <Features features={data.life} />
          <AllTag tags={data.allStrapiTag} tagPostCount={tagPostCount} />
        </Side>
      </TwoColumn>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allStrapiArticle(
      filter: {
        slug: { ne: "dummy-post" }
        tags: { elemMatch: { slug: { ne: "life" } } }
      }
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
                  transformOptions: { cropFocus: CENTER }
                )
              }
            }
          }
          title
          publish_date(formatString: "YYYY-MM-DD")
          content
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
    life: allStrapiArticle(
      filter: { tags: { elemMatch: { slug: { in: "life" } } } }
      sort: { order: DESC, fields: publish_date }
      limit: 12
    ) {
      edges {
        node {
          id
          title
          publish_date(formatString: "YYYY-MM-DD")
          slug
        }
      }
    }
    allStrapiTag(filter: { slug: { ne: "dummy-tag" } }) {
      edges {
        node {
          tagname
          slug
        }
      }
    }
    tagPostCount: allStrapiArticle(
      filter: { tags: { elemMatch: { slug: { nin: "dummy-tag" } } } }
    ) {
      group(field: tags___slug) {
        fieldValue
        totalCount
      }
    }
  }
`;
