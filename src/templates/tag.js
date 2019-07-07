import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'

import { Posts, Post } from '../pages/index'
import styled from '@emotion/styled';
import { rhythm } from '../utils/typography';
import mq from '../utils/emotion';

const QueryDescription = styled.div`
  font-size: ${rhythm(10/12)};
  text-align: center;
  font-weight: bold;
  letter-spacing: ${rhythm(2/24)};
  color: white;
  /*text-shadow: rgba(0, 0, 0, 0.18) 1px 1px 4px;*/
  /*background: linear-gradient(to right, hsl(204,100%,82%), hsl(184,100%,82%));*/
  background: hsl(199, 100%, 77%);
  padding: ${rhythm(1)};
  margin: 0 0 ${rhythm(1)} 0;
  ${mq[1]} {
    padding: ${rhythm(18/12)};
    font-size: ${rhythm(1)};
  }
`

const UserTemplate = ({ pageContext, data }) => {
  const { tagname } = pageContext
  const articles = data.allStrapiArticle

  return (
    <Layout>
      <QueryDescription>
        #{tagname}
      </QueryDescription>
      <Posts>
      {articles.edges.map(document => (
        <Post entry={document.node} key={document.id} />
      ))}
    </Posts>
    </Layout>
  )
}
  
export default UserTemplate

export const pageQuery = graphql`
  query Article($slug: String!) {
    allStrapiArticle(
      filter: {
        published: {eq: 1},
        tags: {elemMatch: {slug: {eq: $slug}}}
      },
      sort: {order: DESC, fields: publish_date},
    ) {
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
            tagname
            slug
          }
        }
      }
    }
  }
`