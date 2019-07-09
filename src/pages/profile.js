import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography";
import mq from "../utils/emotion"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"

const PostContainer = styled.div`
  padding: 0 ${rhythm(8/12)} ${rhythm(8/12)};
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
      <PostInner>
        <ReactMarkdown escapeHtml={false} source={`
<img src="https://www.gravatar.com/avatar/e5ef3698ccb90ecd2a50b1440dd7ee37?s=128" />

猪野湧斗 / Yuto Ino

学生です。

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

最近やりたいことはざっと以下の通りです。

- ~~ブログ／ポートフォリオサイトの作成~~ (このサイト)
- ハリボテ3Dエンジン制作
- 音楽を演奏する装置の制作
- HTTP上に流れる画像を別のものにすり替えてしまう悪いルーターの制作
- アプリ2本の制作
- 音楽理論知りたい

## 事情

高校時代ろくに勉強せずに入学したため(AC入学)、再履修の数学の単位すら落としまくっています。
冬休みの間に数学I・Aを完了したので夏休みの間に数学IIIまでできるようにならないといけません。

`} />
      </PostInner>
    </PostContainer>
  </Layout>
)

export default SecondPage
