import React from "react"
import { Link, graphql } from "gatsby"
import { Post, Posts } from "../components/post"
import Layout from "../components/layout"

import { rhythm } from "../utils/typography"
import mq from "../utils/emotion"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Seo from "../components/seo"

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
`
const SideInner = styled.div`
  flex: 1 1 auto;
  min-width: 25%;
  margin: 0 ${rhythm(8 / 12)} ${rhythm(12 / 12)};
  ${mq[3]} {
    flex: 0 1 auto;
  }
`
const Features = ({ features }) => {
  const HeaderContainer = styled.div`
    display: flex;
    padding-bottom: ${rhythm(6 / 12)};
    border-bottom: 1px solid #ddd;
  `
  const Square = styled.div`
    &::before {
      content: "";
      vertical-align: middle;
      display: inline-block;
      padding: ${rhythm(4 / 12)};
      border: 4px solid hsl(150, 65%, 79%);
      margin-right: ${rhythm(8 / 12)};
    }
  `
  const Header = styled.h1`
    margin: 0;
    font-size: ${rhythm(17 / 24)};
    line-height: calc(1.5rem + 4px);
  `
  const FeatureList = styled.ul`
    list-style: none;
    padding-top: ${rhythm(12 / 12)};
    margin: 0 ${rhythm(-8 / 12)};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 740px;
    ${mq[3]} {
      flex-direction: column;
    }
  `
  const Item = styled.li`
    flex: 0 1 auto;
    margin: 0 ${rhythm(8 / 12)} ${rhythm(12 / 12)};
    border-left: 3px solid hsl(150, 65%, 79%);
    padding: 0 0 0 ${rhythm(8 / 12)};
    min-width: 30%;
    /*
    ${mq[1]} {
      margin: 0 ${rhythm(8 / 12)} ${rhythm(14 / 12)};
      flex: 1 1 30%;
    }
    */
  `
  const Title = styled.h1`
    font-weight: normal;
    font-size: ${rhythm(9 / 12)};
    line-height: ${rhythm(12 / 12)};
    letter-spacing: ${rhythm(1 / 24)};
    margin: 0 0 ${rhythm(3 / 12)};
    & > a {
      text-decoration: none;
      color: #191919;
    }
    ${mq[1]} {
      font-size: ${rhythm(10 / 12)};
      line-height: ${rhythm(14 / 12)};
    }
    ${mq[3]} {
      font-size: ${rhythm(9 / 12)};
      line-height: ${rhythm(12 / 12)};
    }
  `

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
          </Item>
        ))}
      </FeatureList>
    </SideInner>
  )
}

const AllTag = ({ tags }) => {
  const Header = styled.h1`
    font-size: ${rhythm(17 / 24)};
    line-height: calc(1.5rem + 4px);
    padding-bottom: ${rhythm(6 / 12)};
    border-bottom: 1px solid #ddd;
    margin-bottom: ${rhythm(8 / 12)};
  `
  const TagList = styled.ul`
    list-style: none;
    margin-left: ${rhythm(4 / 12)};
    max-width: 740px;
  `
  const Tag = styled.li`
    font-weight: normal;
    font-size: ${rhythm(8 / 12)};
    line-height: ${rhythm(10 / 12)};
    letter-spacing: ${rhythm(1 / 24)};
    margin: 0 0 ${rhythm(3 / 12)};
    & > a {
      text-decoration: none;
      color: hsl(208, 100%, 66%);
    }
  `
  return (
    <SideInner>
      <Header>タグ一覧</Header>
      <TagList>
        {tags.edges.map(({ node }, index) => (
          <Tag key={index}>
            <Link to={`/tag/${node.slug}`}>
              <span
                css={css`
                  margin-right: 0.2rem;
                `}
              >
                #
              </span>
              {node.tagname}
            </Link>
          </Tag>
        ))}
      </TagList>
    </SideInner>
  )
}

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
`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo
      title={data.site.siteMetadata.title}
      ogDescription={data.site.siteMetadata.description}
    />
    <TwoColumn>
      <Posts>
        {data.allPost.edges.map(document => {
          if (
            !document.node.tags ||
            !document.node.tags.some(t => t.slug === "life")
          )
            return <Post entry={document.node} key={document.node.id} />
          else return null
        })}
      </Posts>
      <Side>
        <Features features={data.life} />
        <AllTag tags={data.allStrapiTag} />
      </Side>
    </TwoColumn>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        description
      }
    }
    allPost(
      filter: { slug: { ne: "dummy-post" } }
      sort: { order: DESC, fields: publish_date }
    ) {
      edges {
        node {
          id
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 870, maxHeight: 180, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          title
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
    life: allPost(
      filter: { tags: { elemMatch: { slug: { in: "life" } } } }
      sort: { order: DESC, fields: publish_date }
      limit: 6
    ) {
      edges {
        node {
          id
          title
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
  }
`
