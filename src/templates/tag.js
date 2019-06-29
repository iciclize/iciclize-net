import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'

const UserTemplate = ({ data }) => (
    <Layout>
      <h1>{console.log(data) && data}</h1>
      <ul>
        {data.strapiUser&&data.strapiUser.articles.map(article => (
          <li key={article.id}>
            <h2>
              <Link to={`/Article_${article.id}`}>{article.title}</Link>
            </h2>
            <ReactMarkdown
              source={article.content.substring(0, 500)}
              escapeHtml={false} />
          </li>
        ))}
      </ul>
    </Layout>
  )
  
export default UserTemplate

export const query = graphql`
  query UserTemplate($slug: String!) {
    allStrapiArticle(filter: {published: {eq: 1}, tags: {elemMatch: {slug: {eq: $slug}}}}) {
      edges {
        node {
          id
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