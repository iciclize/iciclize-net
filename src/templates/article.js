import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'
import { rhythm } from "../utils/typography"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import mq from '../utils/emotion';

const PostContainer = styled.div`
  margin: 0 ${rhythm(8/12)} ${rhythm(8/12)};
`
const PostInner = styled.div`
  margin: 0 auto;
  padding: 0;
  max-width: 620px;
  & pre {
    margin-left: -${rhythm(8/12)};
    margin-right: -${rhythm(8/12)};
    padding-left: ${rhythm(8/12)};
    padding-right: ${rhythm(8/12)};
    & > code {
      font-family: Consolas, 'Courier New', Courier, Monaco, monospace, -apple-system, "BlinkMacSystemFont", "Helvetica Neue", "游ゴシック体", "Yugothic", "游ゴシック", "Yu Gothic", "Verdana", "メイリオ", sans-serif;
      font-size: ${rhythm(6/12)};
    }
  }
  ${mq[1]} {
    & pre > code {
      font-size: ${rhythm(7/12)};
    }
    & blockquote {
      padding-top: ${rhythm(3/12)};
      padding-bottom: ${rhythm(3/12)};
    }
  }
`
const PostTitle = styled.h1`
  font-weight: 450;
  font-size: ${rhythm(12/12)};
  letter-spacing: ${rhythm(1/24)};
  margin: ${rhythm(12/12)} 0 0;
  ${mq[1]} {
    font-size: ${rhythm(13/12)};
  }
`
const PostedDate = styled.div`
  font-size: ${rhythm(11/20)};
  color: hsl(0, 0%, 52%);
`
const PostTags = styled.ul`
  list-style: none;
  margin: ${rhythm(12/12)} 0;
`
const PostTag = styled.li`
  display: inline-block;
  margin: 0 ${rhythm(4/12)} ${rhythm(1/12)} 0;
  & > a {
    font-size: ${rhythm(10/16)};
    text-decoration: none;
    color: hsl(208, 100%, 60%);
    padding: ${rhythm(1/12)} ${rhythm(1/12)};
  }
  ${mq[1]} {
    & > a {
      font-size: ${rhythm(11/16)};
    }
  }
`
const mdStyle = css`
  font-size: ${rhythm(10/16)};
  line-height: ${rhythm(20/16)};
  margin: ${rhythm(8/12)} 0 0;
  ${mq[1]} {
    font-size: ${rhythm(8/12)};
  }
`
const ArticleTemplate = ({ data }) => {
  const myDateString = date => {
    const P = twoDigits => ('00' + twoDigits.toString()).slice(-2)
    return `${date.getFullYear().toString()}-${P(date.getMonth() + 1)}-${P(date.getDate())}`
      //.concat(' ')
      //.concat(`${P(date.getHours())}:${P(date.getMinutes())}`)
  }
  
  const entry = data.strapiArticle

  return (
    <Layout>
      { entry.image && <Img fluid={entry.image.childImageSharp.fluid}
                            css={css`
                              max-width: 620px;
                              margin: 0 auto;`} /> }
      <PostContainer>
        <PostInner>
          <PostTitle>{entry.title}</PostTitle>
          <PostedDate>
            { myDateString(new Date(entry.publish_date)) }
            { entry.update_date && entry.update_date != `Invalid date`
              && `(更新: ${entry.update_date})` }
          </PostedDate>
          <ReactMarkdown
            css={mdStyle}
            source={entry.content}
            escapeHtml={false} />
          { entry.tags.length > 0 &&
            <PostTags>
              { entry.tags.map(tag => (
                <PostTag key={tag.id}><Link to={`/tag/${tag.slug}`}>#{ tag.tagname }</Link></PostTag>
              ))}
            </PostTags>
          }
        </PostInner>
      </PostContainer>
    </Layout>
  )
}

// <p>by <Link to={`/authors/User_${data.strapiArticle.author.id}`}>{data.strapiArticle.author.username}</Link></p>

export default ArticleTemplate
export { PostContainer, PostInner, mdStyle }

export const q = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      publish_date(formatString: "YYYY-MM-DD")
      update_date(formatString: "YYYY-MM-DD")
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