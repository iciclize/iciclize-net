import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import { rhythm } from "../utils/typography"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import mq from "../utils/emotion"

import NextPrevNav from "../components/NextPrevNav"
import SEO from "../components/seo"

const PostContainer = styled.div`
  margin: 0 ${rhythm(8 / 12)} ${rhythm(8 / 12)};
`
const PostInner = styled.div`
  margin: 0 auto;
  padding: 0;
  max-width: 620px;
  & pre {
    margin-left: -${rhythm(8 / 12)};
    margin-right: -${rhythm(8 / 12)};
    padding-left: ${rhythm(8 / 12)};
    padding-right: ${rhythm(8 / 12)};
    & > code {
      font-family: Consolas, "Courier New", Courier, Monaco, monospace,
        -apple-system, "BlinkMacSystemFont", "Helvetica Neue", "游ゴシック体",
        "Yugothic", "游ゴシック", "Yu Gothic", "Verdana", "メイリオ", sans-serif;
      font-size: ${rhythm(6 / 12)};
    }
  }
  ${mq[1]} {
    & pre > code {
      font-size: ${rhythm(7 / 12)};
    }
    & blockquote {
      padding-top: ${rhythm(3 / 12)};
      padding-bottom: ${rhythm(3 / 12)};
    }
  }
`
const PostTitle = styled.h1`
  font-weight: 450;
  font-size: ${rhythm(12 / 12)};
  letter-spacing: ${rhythm(1 / 24)};
  margin: 0 0 0;
  ${mq[1]} {
    font-size: ${rhythm(13 / 12)};
  }
`
const PostedDate = styled.div`
  font-size: ${rhythm(11 / 20)};
  color: hsl(0, 0%, 52%);
`
const PostTags = styled.ul`
  list-style: none;
  margin: ${rhythm(12 / 12)} 0;
`
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
`
const mdStyle = css`
  font-size: ${rhythm(10 / 16)};
  line-height: 1.75;
  margin: ${rhythm(8 / 12)} 0 0;
  p {
    margin-bottom: ${rhythm(9 / 12)};
  }
  ${mq[1]} {
    font-size: ${rhythm(8 / 12)};
    p {
      margin-bottom: ${rhythm(12 / 12)};
    }
    ol,
    ul {
      margin-bottom: ${rhythm(11 / 12)};
    }
  }
`
const ArticleTemplate = ({ data }) => {
  const entry = data.post
  const next = data.next
  const prev = data.prev

  return (
    <Layout>
      <SEO
        title={entry.title}
        metaDescription={entry.summary || ``}
        ogDescription={entry.summary || entry.childMarkdownRemark.excerpt}
        image={entry.image && entry.image.childImageSharp.fluid}
      />
      {entry.image && (
        <Img
          fluid={entry.image.childImageSharp.fluid}
          css={css`
            max-width: 620px;
            margin: 0 auto ${rhythm(10 / 12)};
          `}
        />
      )}
      <PostContainer>
        <PostInner>
          <PostTitle>{entry.title}</PostTitle>
          {entry.publish_date && (
            <PostedDate>
              {entry.publish_date}
              {entry.update_date &&
                entry.update_date !== `Invalid date` &&
                `(更新: ${entry.update_date})`}
            </PostedDate>
          )}
          <ReactMarkdown
            css={mdStyle}
            source={entry.content}
            escapeHtml={false}
            transformImageUri={uri =>
              uri.startsWith("http")
                ? uri
                : `${process.env.IMAGE_BASE_URL}${uri}`
            }
          />
          {entry.tags.length > 0 && (
            <PostTags>
              {entry.tags.map(tag => (
                <PostTag key={tag.id}>
                  <Link to={`/tag/${tag.slug}`}>#{tag.tagname}</Link>
                </PostTag>
              ))}
            </PostTags>
          )}
          <NextPrevNav
            basePath={`/posts`}
            nextLabel={next && `次 `.concat(next.publish_date)}
            next={next}
            prevLabel={prev && `前 `.concat(prev.publish_date)}
            prev={prev}
          />
        </PostInner>
      </PostContainer>
    </Layout>
  )
}

export default ArticleTemplate
export { PostContainer, PostInner, mdStyle }

export const q = graphql`
  query ArticleTemplate($id: String!, $nextId: String, $prevId: String) {
    post(id: { eq: $id }) {
      title
      slug
      content
      publish_date(formatString: "YYYY-MM-DD")
      update_date(formatString: "YYYY-MM-DD")
      summary
      childMarkdownRemark {
        excerpt(format: PLAIN, pruneLength: 100, truncate: true)
      }
      image {
        childImageSharp {
          fluid(maxWidth: 840) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tags {
        id
        slug
        tagname
      }
    }
    next: post(id: { eq: $nextId }) {
      title
      slug
      publish_date(formatString: "YYYY-MM-DD")
    }
    prev: post(id: { eq: $prevId }) {
      title
      slug
      publish_date(formatString: "YYYY-MM-DD")
    }
  }
`
