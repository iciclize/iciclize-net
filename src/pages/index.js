import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'

import { rhythm } from "../utils/typography"
import mq from "../utils/emotion"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const PostContainer = styled.li`
  margin: 0 ${rhythm(8/12)} ${rhythm(12/12)};
  border-left: 3px solid hsl(204, 100%, 72%);
  padding: 0 0 0 ${rhythm(8/12)};
`

const PostTitle = styled.h1`
  font-weight: 700;
  font-size: ${rhythm(10/12)};
  letter-spacing: ${rhythm(1/24)};
  margin: ${rhythm(4/12)} 0 ${rhythm(3/12)};
  & > a {
    text-decoration: none;
    color: #191919;
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
`

const postSummaryStyle = `
  font-size: ${rhythm(9/16)};
  margin: ${rhythm(4/12)} 0 ${rhythm(2/12)};
  line-height: ${rhythm(14/16)};
`

const Post = ({ entry }) => (
  <PostContainer key={entry.id}>
    { entry.image && <Link to={`/${entry.id}`}><Img fluid={entry.image.childImageSharp.fluid} /></Link>}
    <PostTitle>
      <Link to={`/${entry.id}`}>
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
  list-style: none;
  margin: 0;
`

const IndexPage = ({ data }) => (
  <Layout>
    <Posts>
      {data.allStrapiArticle.edges.map(document => (
        <Post entry={document.node} />
      ))}
    </Posts>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiArticle(filter: {published: {eq: 1}}) {
      edges {
        node {
          id
          image {
            childImageSharp {
              fluid(maxWidth: 200, maxHeight: 60) {
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