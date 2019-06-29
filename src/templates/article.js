import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'
import { rhythm } from "../utils/typography"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const PostContainer = styled.div`
  margin: 0 ${rhythm(8/12)} ${rhythm(8/12)};
  padding: 0;
  & pre {
    margin-left: -${rhythm(8/12)};
    margin-right: -${rhythm(8/12)};
    padding-left: ${rhythm(8/12)};
    padding-right: ${rhythm(8/12)};
    & > code {
      font-family: Consolas, 'Courier New', Courier, Monaco, monospace;
      font-size: ${rhythm(6/12)};
    }
  }
`
const PostTitle = styled.h1`
  font-weight: 700;
  font-size: ${rhythm(12/12)};
  letter-spacing: ${rhythm(1/24)};
  margin: ${rhythm(12/12)} 0 0;
`
const PostedDate = styled.div`
  font-size: ${rhythm(11/20)};
  color: hsl(0, 0%, 52%);
`
const PostTags = styled.ul`
  list-style: none;
  margin: -${rhythm(1/12)} 0 0;
`
const PostTag = styled.li`
  display: inline-block;
  margin: 0 ${rhythm(2/12)} ${rhythm(1/12)} 0;
  & > a {
    font-size: ${rhythm(10/16)};
    text-decoration: none;
    color: hsl(208, 100%, 60%);
    padding: ${rhythm(1/12)} ${rhythm(1/12)};
  }
`
const mdStyle = `
  font-size: ${rhythm(10/16)};
  line-height: ${rhythm(20/16)};
  margin: ${rhythm(8/12)} 0 0;
`

const ArticleTemplate = ({ data }) => (
  <Layout>
    { data.strapiArticle.image && <Img fluid={data.strapiArticle.image.childImageSharp.fluid}/> }
    <PostContainer>
      <PostTitle>{data.strapiArticle.title}</PostTitle>
      <PostedDate>
        { (date =>
             date.toLocaleDateString('ja-JP')
                 .concat(' ' + date.getHours() + ':')
                 .concat(date.getMinutes()))(new Date(data.strapiArticle.publish_date)) }
      </PostedDate>
      { console.log(data) }
      <ReactMarkdown
        css={css`${mdStyle}`}
        source={data.strapiArticle.content}
        escapeHtml={false} />
      { data.strapiArticle.tags.length > 0 &&
        <PostTags>
          { data.strapiArticle.tags.map(tag => (
            <PostTag key={tag.id}><Link to={`/tag/${tag.slug}`}>#{ tag.tagname }</Link></PostTag>
          ))}
        </PostTags>
      }
    </PostContainer>
  </Layout>
)

// <p>by <Link to={`/authors/User_${data.strapiArticle.author.id}`}>{data.strapiArticle.author.username}</Link></p>

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      publish_date
      content
      image {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      author {
        id
        username
      }
      tags {
        id
        slug
        tagname
      }
    }
  }
`