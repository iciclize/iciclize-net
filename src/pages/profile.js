import React from "react"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"
import { css } from "@emotion/core"
import mq from "../utils/emotion"

const PostContainer = styled.div`
  padding: 0 ${rhythm(8 / 12)} ${rhythm(8 / 12)};
  min-height: 100%;
`
const PostInner = styled.div`
  margin: 0 auto;
  padding: 0;
  max-width: 620px;
`
const SecondPage = () => (
  <Layout>
    <SEO title="自己紹介" ogDescription={`24歳、学生です。(大嘘)`} />
    <PostContainer>
      <h1
        css={css`
          text-align: center;
          font-size: ${rhythm(12 / 12)};
          font-weight: 450;
        `}
      >
        自己紹介
      </h1>
      <PostInner>
        <ReactMarkdown
          escapeHtml={false}
          css={css`
            td {
              line-height: 1.4rem;
            }
            font-size: ${rhythm(10 / 16)};
            line-height: 1.75;
            margin: ${rhythm(8 / 12)} 0 0;
            ${mq[1]} {
              font-size: ${rhythm(8 / 12)};
            }
          `}
          source={`
<div style="display: table; margin: 1.5rem 0; ">
  <img style="margin: 0;" width="64px" src="https://www.gravatar.com/avatar/e5ef3698ccb90ecd2a50b1440dd7ee37?s=128" />
  <div style="display: table-cell; padding: 0 0.8rem; vertical-align: middle;">
    <h2 style="border: none; font-weight: normal; font-size: 1.1rem; margin:0; padding: 0 0 0.6rem;">
    猪野湧斗 / Yuto Ino</h2>
    <div style="font-size: 0.9rem;">Twitter: <a href="https://twitter.com/iciclize">@iciclize</a></div>
  </div>
</div>

学生です。出身は神奈川県横浜市。

現在は組み込み技術と高校数学を勉強しています。趣味は忘れました。たぶんプログラミングは好きです。

最近やりたいことは

- ボタンを押して音がなるおもちゃの製作
- HTTP上に流れる画像を別のものにすり替える悪いルーターの製作
- 柴又を演奏する装置の製作
- 楽典・音楽理論の勉強
- ハリボテ3Dエンジンの製作

です。

実は4級アマチュア無線技士です。コールサインは\`JJ1QJI\`です。

## 好きなもの・こと

コードが気持ちいい音楽を聴くのが好きです。2号兄貴大好き、本当に憧れてる。

あと都会のビルの屋上が好きです。屋上の室外機やパイプ、フェンスなどを見かけると興奮します。

## アカウント

[Twitter - @iciclize](https://twitter.com/iciclize)

[Github - iciclize](https://github.com/iciclize)

(お仕事の依頼など受け付け)ないです。

`}
        />
      </PostInner>
    </PostContainer>
  </Layout>
)

export default SecondPage
