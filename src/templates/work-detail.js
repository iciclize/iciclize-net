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
const WorkTitle = styled.h1`
  font-weight: 450;
  font-size: ${rhythm(10/12)};
  letter-spacing: ${rhythm(1/24)};
  margin: 0 0 ${rhythm(4/12)};
  ${mq[1]} {
    font-size: ${rhythm(13/12)};
  }
`
const TimingOfWork = styled.div`
  font-size: ${rhythm(11/20)};
  color: hsl(0, 0%, 52%);
`
const mdStyle = css`
  font-size: ${rhythm(10/16)};
  line-height: ${rhythm(20/16)};
  margin: ${rhythm(8/12)} 0 0;
  ${mq[1]} {
    font-size: ${rhythm(8/12)};
  }
`
const ArticleTemplate = ({ pageContext }) => {
  
  const { title, timing, image, content } = pageContext

  return (
    <Layout>  
      <PostContainer>
        <PostInner>
          <TimingOfWork>{ timing }</TimingOfWork>
          <WorkTitle>{ title }</WorkTitle>
        </PostInner>
      </PostContainer>
      { image &&
        <Img fluid={image}
        css={css`
                max-width: 620px;
                margin: 0 auto ${rhythm(8/12)};`} />
      }
      <PostContainer>
        <PostInner>
          <ReactMarkdown
            css={mdStyle}
            source={content}
            escapeHtml={false} />
        </PostInner>
      </PostContainer>
    </Layout>
  )
}

// <p>by <Link to={`/authors/User_${data.strapiArticle.author.id}`}>{data.strapiArticle.author.username}</Link></p>

export default ArticleTemplate