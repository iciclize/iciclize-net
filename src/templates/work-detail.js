import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import mq from "../utils/emotion"
import SEO from "../components/seo"

import NextPrevNav from "../components/NextPrevNav"

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
const WorkTitle = styled.h1`
  font-weight: bold;
  font-size: ${rhythm(12 / 12)};
  text-align: center;
  letter-spacing: ${rhythm(1 / 24)};
  margin: ${rhythm(4 / 12)} 0 ${rhythm(16 / 12)};
  ${mq[1]} {
    font-size: ${rhythm(14 / 12)};
  }
`
const TimingOfWork = styled.div`
  font-size: ${rhythm(12 / 20)};
  text-align: center;
  color: hsl(0, 0%, 52%);
  ${mq[1]} {
    font-size: ${rhythm(13 / 20)};
  }
`
const mdStyle = css`
  font-size: ${rhythm(10 / 16)};
  line-height: ${rhythm(18 / 16)};
  margin: ${rhythm(8 / 12)} 0 0;
  ${mq[1]} {
    font-size: ${rhythm(8 / 12)};
    line-height: ${rhythm(20 / 16)};
  }
`

const ArticleTemplate = ({ data }) => {
  const markdown = data.markdownRemark

  const content = markdown.html
  const title = markdown.frontmatter.title
  const description = markdown.frontmatter.description
  const timing = markdown.frontmatter.date
  const image = data.image.fluid
  const next = data.next && data.next.frontmatter
  const nextImage = data.nextImage && data.nextImage.fluid
  const prev = data.prev && data.prev.frontmatter
  const prevImage = data.prevImage && data.prevImage.fluid

  return (
    <Layout>
      <SEO
        title={title}
        metaDescription={description}
        ogDescription={description}
        image={image}
        meta={[
          {
            name: `twitter:card`,
            content: `summary_large_image`,
          }
        ]}
      />
      <PostContainer>
        <PostInner>
          <TimingOfWork>{timing}</TimingOfWork>
          <WorkTitle>{title}</WorkTitle>
        </PostInner>
      </PostContainer>
      {image && (
        <Img
          fluid={image}
          css={css`
            max-width: 620px;
            margin: 0 auto ${rhythm(8 / 12)};
          `}
        />
      )}
      <PostContainer>
        <PostInner>
          <div css={mdStyle} dangerouslySetInnerHTML={{ __html: content }} />
          <NextPrevNav
            basePath={`/works`}
            nextLabel={`次の作品`}
            next={next}
            nextImage={nextImage}
            prevLabel={`過去の作品`}
            prev={prev}
            prevImage={prevImage}
          />
        </PostInner>
      </PostContainer>
    </Layout>
  )
}

export default ArticleTemplate

export const pageQuery = graphql`
  query WorkDetail(
    $id: String!
    $imagename: String
    $next: String
    $nextimg: String
    $prev: String
    $previmg: String
  ) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        slug
        date(formatString: "YYYY年M月")
        description
        imagename
      }
    }
    image: imageSharp(fluid: { originalName: { eq: $imagename } }) {
      fluid(maxWidth: 1400) {
        ...GatsbyImageSharpFluid
      }
    }
    next: markdownRemark(id: { eq: $next }) {
      frontmatter {
        title
        slug
        imagename
      }
    }
    nextImage: imageSharp(fluid: { originalName: { eq: $nextimg } }) {
      fluid(maxWidth: 60) {
        ...GatsbyImageSharpFluid
      }
    }
    prev: markdownRemark(id: { eq: $prev }) {
      frontmatter {
        title
        slug
        imagename
      }
    }
    prevImage: imageSharp(fluid: { originalName: { eq: $previmg } }) {
      fluid(maxWidth: 60) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
