import React from "react"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"
import { css } from "@emotion/core"

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
          `}
          source={`
<div style="text-align: center">
  <img width="96px" src="https://www.gravatar.com/avatar/e5ef3698ccb90ecd2a50b1440dd7ee37?s=128" />
  <p>猪野湧斗 / Yuto Ino</p>
  <p>学生です。</p>
</div>

|             |      |
| ----        | ---- |
| 1998        | 神奈川県横浜市で生まれる |
| 2014 - 2017 | 横浜市立横浜サイエンスフロンティア高等学校 |
| 2017 -      | 筑波大学 情報学群情報メディア創成学類 |

## なんだこのサイト！？(驚愕)

このサイトは、猪野湧斗のブログ兼ポートフォリオサイトで、自己満足の権化です。

- 作品集をまとめておきたいな
- 140字を超える記事を書きたいことがあるけどnoteとかはてなとかに頼るのはNG

という気持ちが衝突して爆発した結果できました(天地創造)

## 趣味・興味

プログラミングと、和音が気持ちいい音楽を聴くのが好きです。

あと都会のビルの屋上が好きです。屋上の室外機やパイプを見かけると興奮します。

最近やりたいことはざっと以下の通りです。

- ~~ブログ／ポートフォリオサイトの作成~~ (このサイト)
- ハリボテ3Dエンジン製作
- 音楽を演奏する装置の製作
- HTTP上に流れる画像を別のものにすり替えてしまう悪いルーターの製作
- 考えてるアプリ2本の製作
- 音楽理論知りたい

## 事情

高校時代ろくに勉強せずに入学したため(AC入学)、再履修の数学の単位すら落としまくっています。

冬休みの間に数学I・Aを完了したので夏休みの間に数学IIIまでできるようにならないといけません。

`}
        />
      </PostInner>
    </PostContainer>
  </Layout>
)

export default SecondPage
