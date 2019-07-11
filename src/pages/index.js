import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'

import { rhythm } from "../utils/typography"
import mq from "../utils/emotion"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import SEO from '../components/seo'

const PostContainer = styled.li`
  margin: 0 ${rhythm(8/12)} ${rhythm(12/12)};
  border-left: 3px solid hsl(204, 100%, 72%);
  padding: 0 0 0 ${rhythm(8/12)};
  min-width: 30%;
  ${mq[1]} {
    margin: 0 ${rhythm(8/12)} ${rhythm(14/12)};
    flex: 1 1 30%;
    &:first-of-type {
      flex: 1 1 100%;
    }
  }
`
const PostTitle = styled.h1`
  font-weight: 450;
  font-size: ${rhythm(10/12)};
  letter-spacing: ${rhythm(1/24)};
  margin: 0 0 ${rhythm(3/12)};
  & > a {
    text-decoration: none;
    color: #191919;
  }
  ${mq[1]} {
    font-size: ${rhythm(1)};
  }
`
const PostTags = styled.ul`
  list-style: none;
  margin: -${rhythm(1/12)} 0 0;
`
const PostTag = styled.li`
  display: inline-block;
  margin: 0 ${rhythm(2/12)} ${rhythm(1/12)} 0;
  & > a {
    font-size: ${rhythm(9/16)};
    text-decoration: none;
    color: hsl(208, 100%, 60%);
    padding: ${rhythm(1/12)} ${rhythm(1/12)};
  }
  ${mq[1]} {
    & > a {
      font-size: ${rhythm(10/16)};
    }
  }
`
const postSummaryStyle = `
  font-size: ${rhythm(9/16)};
  margin: ${rhythm(4/12)} 0 ${rhythm(2/12)};
  line-height: ${rhythm(14/16)};
  ${mq[1]} {
    font-size: ${rhythm(8/12)};
    line-height: ${rhythm(16/16)};
  }
`
const Post = ({ entry }) => (
  <PostContainer>
    { entry.image &&
      <Link to={`/posts/${entry.slug}`}>
        <Img fluid={entry.image.childImageSharp.fluid}
             css={css`&.gatsby-image-wrapper {
               margin-bottom: ${rhythm(6/12)};
             }`} />
      </Link>
    }
    <PostTitle>
      <Link to={`/posts/${entry.slug}`}>
        { entry.title }
      </Link>
    </PostTitle>
    {entry.tags.length > 0 &&
      <PostTags>
        { entry.tags.map(tag => (
          <PostTag key={tag.id}><Link to={`/tag/${tag.slug}`}>#{ tag.tagname }</Link></PostTag>
        ))}
      </PostTags>
    }
    { entry.summary &&
      <ReactMarkdown
        css={css`${postSummaryStyle}`}
        source={entry.summary}
        escapeHtml={ false }/>
    }
  </PostContainer>
)
const Posts = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0 auto;
  max-width: 840px;
`
const IndexPage = ({ data }) => (
  <Layout>
    <Posts>
      {data.allStrapiArticle.edges.map(document => (
        <Post entry={document.node} key={document.node.id} />
      ))}
    </Posts>
  </Layout>
)

export { Post, Posts }

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiArticle(
      filter: {published: {eq: 1}},
      sort: {order: DESC, fields: publish_date},
    ) {
      edges {
        node {
          id
          image {
            childImageSharp {
              fluid(maxWidth: 870, maxHeight: 160) {
                ...GatsbyImageSharpFluid
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
  }
`