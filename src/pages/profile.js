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
    <SEO title="自己紹介" />
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

20歳、学生です。出身は神奈川県横浜市。

FPGAと高校数学を勉強しています。趣味は忘れました。たぶんプログラミングは好きです。

最近は

- ハリボテ3Dエンジン
- 柴又を演奏する装置
- HTTP上に流れる画像を別のものにすり替える悪いルーター

が作りたいです。

実は4級アマチュア無線技士で、コールサインは\`JJ1QJI\`です。

## 所属団体とかアルバイト

### 高校2, 3年

- \`情報工学部(部活)\` - 主に競技プログラミングやる部活でしたがWebばかり書いていました。

### 大学1年

- \`学園祭実行委員会 情報システム局 Web部門\` - 学園祭のホームページを作るところです。コーディングだけしました。

### 大学2年

- \`学園祭実行委員会 情報システム局 Web責任者\` - 学園祭Webページのデザインと、Web製作の指揮？
- \`松屋(外食チェーン)\` - 民度低い客に会えるかと思ったけど案外治安良かった。
- \`筑波大学アマチュア無線クラブ\` - ハードウェアから攻めていきたかった。4アマをとりました。

### 大学3年

- \`筑波大学電気通信研究会(旧アマチュア無線クラブ)\` - 名前が変わりましたがすぐに廃部が決定しました。

## 好きなもの・こと

コードが気持ちいい音楽を聴くのが好きです。2号兄貴大好き、本当に憧れてる。

あと都会のビルの屋上が好きです。屋上の室外機やパイプ、フェンスなどを見かけると興奮します。

`}
        />
      </PostInner>
    </PostContainer>
  </Layout>
)

export default SecondPage
