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
        <div
          css={css`
            text-align: right;
            font-size: ${rhythm(6 / 12)};
          `}
        >
          最終更新: 2020-09-23
        </div>
        <ReactMarkdown
          escapeHtml={false}
          css={css`
            td {
              line-height: 1.4rem;
            }
            h3 {
              border-left: 5px solid hsl(204, 100%, 82%);
              padding-left: 0.8rem;
              padding-top: 0.6rem;
              padding-bottom: 0.6rem;
              font-weight: bold;
              margin: 1.5rem 0 1.25rem;
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

22歳、学生です。

<p>
出身: &ensp;神奈川県横浜市<br/>
資格: &ensp;3級アマチュア無線技士(コールサイン: <code>JJ1QJI</code>)<br/>
趣味: &ensp;プログラミング/開発, 音楽/ピアノ/耳コピ<br/>
</p>

最近は目力防犯ブザーを製作中なので初投稿です。

<strong>以下2019年の若干古い情報です。そのうち更新します。</strong>

## 趣味

### プログラミング/開発

どちらかといえば立派なものを作るより全部一から自分の手で作り上げることの方にロマンを感じます。

最近取り組みたいのは以下のテーマです

- ハリボテ3Dエンジンの製作
- ボタンを押して音がなるおもちゃの製作
- 自動演奏装置の製作

### 音楽/ピアノ/耳コピ

コードがエモくて耳が気持ちいい音楽が大好物です。2号兄貴生き返れ生き返れ…

なんか弾いたり耳コピしたりしたらTwitterにあげてます。

10年ちょっとピアノを習ってましたが、理論的な勉強とかはしたことないので、ちゃんと語れるように楽典・音楽理論の勉強したいですね。

## 軽い経歴

中学1年生の終わり頃にプログラミングに出会い、主にHSP言語で遊び、それ以外ではExcel VBAを書いたり、Webページを書いて遊んだりしていました。

高校時代はWebを中心にAndroidアプリなど作って遊んだり、ちょっとコンテストに出たりイベントやハンズオンの聴講に行ったりもしていました。
学校の勉強などお構いなしに好き勝手やっていたので、学校の成績は散々でしたが、なんとAO入学で筑波大学に入れてもらえました。

大学に入学するも、まるで高校数学を勉強していなかったので数学の単位を落としまくっています。ようやく高校数学を勉強し直して、巻き返せるように頑張っています。

大学に入ってからは精神的に余裕がなくてあまり目立った活動はしていません。

## 申し訳程度の受賞歴

- 岩崎学園主催「第30回中高生ソフトウェア・アイデア・コンテスト」横浜市長賞受賞 [http://softicon.iwasaki.ac.jp/prize2013.html](http://softicon.iwasaki.ac.jp/prize2013.html)
- 横浜オープンデータソリューション発展委員会主催「横浜ユースフォーラム　〜若者が起こす横浜のオープンイノベーション〜」アプリ部門 横浜市政策局長賞受賞 [http://idea.linkdata.org/idea/idea1s797i](http://idea.linkdata.org/idea/idea1s797i)
- LOD Challenge 2014 学生奨励賞(高校部門)受賞 [https://2019.lodc.jp/archives/2014/awardCeremony.html](https://2019.lodc.jp/archives/2014/awardCeremony.html)
- LOD Challenge 2015 学生奨励賞(高校部門)受賞 [http://lodc.jp/2015/concrete5/blog/2016-02-19](http://lodc.jp/2015/concrete5/blog/2016-02-19)

## アカウント

[Twitter - @iciclize](https://twitter.com/iciclize)

[Github - iciclize](https://github.com/iciclize)

`}
        />
      </PostInner>
    </PostContainer>
  </Layout>
)

export default SecondPage
