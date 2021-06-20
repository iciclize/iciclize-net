import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Iframely from "../components/Iframely"
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
  max-width: 700px;
  & pre {
    margin-left: -${rhythm(8 / 12)};
    margin-right: -${rhythm(8 / 12)};
    padding-left: ${rhythm(8 / 12)};
    padding-right: ${rhythm(8 / 12)};
    & > code {
      font-family: Consolas, Monaco, monospace,
        -apple-system, "BlinkMacSystemFont", "Helvetica Neue", "游ゴシック体",
        "Yugothic", "游ゴシック", "Yu Gothic", "Verdana", "メイリオ", sans-serif;
      margin: 0;
      padding: 0;
    }
  }
`
const PostTitle = styled.h1`
  font-size: ${rhythm(12 / 12)};
  letter-spacing: ${rhythm(1 / 24)};
  line-height: 1.25;
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
  margin: ${rhythm(8 / 12)} 0 ${rhythm(14 / 12)};
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
    margin: ${rhythm(9 / 12)} 0;
  }
  blockquote p {
    margin: 0;
    & + p {
      margin: ${rhythm(3 / 12)} auto 0;
    }
  }
  img {
    margin: ${rhythm(4 / 12)} 0;
  }
  h3 {
    border-left: 5px solid hsl(204, 100%, 82%);
    padding-left: 0.8rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    font-weight: bold;
    font-size: 1.3rem;
    margin: 3rem 0 1.6rem;
  }
  h2 + h3 {
    margin-top: 0;
  }
  h4 {
    font-weight: bold;
    margin: 2rem 0 1.6rem;
    line-height: 1.6rem;
    font-size: 1.2rem;
    display: flex;
  }
  h4::before {
    content: "○";
    font-size: 1.4rem;
    margin-right: 0.5rem;
    color: hsl(204, 100%, 76%);
  }
  h3 + h4 {
    margin-top: 2rem;
  }
  ul ul {
    margin-left: 1.5rem;
    margin-bottom: 0;
  }
  figure img {
    margin: 0;
    border: 1px solid hsl(0, 0%, 90%);
  }
  figure {
    margin: 1rem 0;
  }
  figcaption {
    margin-bottom: 2rem;
    font-size: 80%;
    border-left: 1px solid hsl(0, 0%, 70%);
    border-right: 1px solid hsl(0, 0%, 70%);
    padding: 0 1rem;
    color: hsl(0, 0%, 40%);
  }
  pre code {
    font-size: ${rhythm(7 / 12)};
  }

  ${mq[1]} {
    font-size: ${rhythm(8 / 12)};
    p {
      margin: ${rhythm(12 / 12)} 0;
    }
    ol,
    ul {
      margin-bottom: ${rhythm(11 / 12)};
    }
    pre > code {
      font-size: ${rhythm(7 / 12)};
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
      <Iframely />
      {entry.image && (
        <Img
          fluid={entry.image.childImageSharp.fluid}
          css={css`
            max-width: 640px;
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
          {entry.tags.length > 0 && (
            <PostTags>
              {entry.tags.map(tag => (
                <PostTag key={tag.id}>
                  <Link to={`/tag/${tag.slug}`}>#{tag.tagname}</Link>
                </PostTag>
              ))}
            </PostTags>
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
