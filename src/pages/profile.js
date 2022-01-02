import React from "react"

import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import styled from "@emotion/styled"
import Seo from "../components/seo"
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
    <Seo title="自己紹介" ogDescription={`24歳、学生です。(大嘘)`} />
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
        <p
          css={css`
            text-align: center;
          `}
        >
          インターネット自分語り許可エリア
        </p>
        <div
          css={css`
            text-align: right;
            font-size: ${rhythm(6 / 12)};
          `}
        >
          最終更新: 2021-01-31
        </div>
        <ReactMarkdown
          escapeHtml={false}
          css={css`
            td {
              line-height: 1.4rem;
            }
            li {
              list-style: circle;
            }
            h3 {
              border-left: 5px solid hsl(204, 100%, 82%);
              padding-left: 0.8rem;
              padding-top: 0.6rem;
              padding-bottom: 0.6rem;
              font-weight: bold;
              margin: 1.5rem 0 1.25rem;
            }
            h4 {
              font-weight: bold;
              margin: 1.6rem 0 0.6rem;
              font-size: 1rem;
            }
            h3 + h4 {
              margin-top: 1rem;
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

1998年生まれ。神奈川県横浜市出身。<br />
DOOMとたまごっちが永遠のあこがれです。

最近の生きがいはミュークルドリーミーを観ることです。

趣味: プログラミング/開発、音楽/ピアノ/耳コピ<br/>
資格: 3級アマチュア無線技士(コールサイン: <code>JJ1QJI</code>)<br />
嫌いな食べ物: パクチー, コーンフレークにかけた後残った甘い牛乳<br />

## 趣味について

忙しくて十分な余暇がないと趣味ってだんだん忘れていくよね。悲しいかな。

### プログラミング/開発

クッソくだらない作品を作ることに生きがいを感じます。あと便利なライブラリとか使わず一から自分の手で作り上げるのが楽しいです。

作ったものをときどき作品集に置いてるので良かったら見て、どうぞ。

最近取り組みたいのは以下のテーマです

#### ボタンを押して音がなるおもちゃの製作 ←製作中

「目力防犯ブザー」と呼んでいるものです。これを作ってメ○カリで売るのが長年の夢でしたが、とうとう叶いました。しかしまだ、コストダウン、作業工程の削減、音量アップなど取り組みたいことがあって満足ではありません。

#### ハリボテ3Dエンジンの製作

幼い頃に実家のWindows 95マシンに入っていたDOOMや、PlayStation 1のゲームで遊んだ経験があります。ああいうガビガビの3D表現、好きなんですよね。既製エンジンに頼らずフルスクラッチで3D描画できたらかっこいいと思うのです。

#### OS自作

最近コンピューター何も分からんということに気づきました。特に分からんのはハードウェア入出力周りです。OSを自作してコンピューター完全に理解したいです。

#### DBMS自作

大学でデータベースの授業を受けたことがあるのですが、その時期他のことで忙しすぎて、全然理解できずに終わってしまいました。特にトランザクション周りを理解したいです。

#### 自動演奏装置の製作

異色演奏シリーズいいですよね。fues兄貴の柴又に憧れてます。ぼくもこういうの作りたい。
  
[柴又.iso - ニコニコ動画](https://www.nicovideo.jp/watch/sm32922177)

### 音楽/ピアノ/耳コピ

好きな曲が山ほどあって紹介しきれないので、曲が好みなことが多いアーティストのリストをちょっとだけ載せます。雰囲気だけ伝わればと思います。

- 2号. (およびその界隈)
- 星野源
- 椎名林檎
- 谷山浩子
- Earth, Wind & Fire
- Yellow Magic Orchestra
- METAFIVE

などなど

特定のアーティストが好きってわけじゃないんですけど雰囲気はこんな感じです。

**Just the Two of Us 進行と枯葉進行が大好物です(こだわりポイント)**
  
ちなみに平沢進はそんな好きじゃないです。

それから、好きな曲をピアノで弾くのが好きです。なんか弾いたり耳コピしたりしたらTwitterかYouTubeにあげてます。

YouTube: [田所 - https://www.youtube.com/channel/UC6-gqITzzm_Eez5SXbQyJrg](https://www.youtube.com/channel/UC6-gqITzzm_Eez5SXbQyJrg)

10年ちょっとピアノを習ってましたが、理論的な勉強とかはしたことないので、楽典・音楽理論の勉強してちゃんと和声とかを分析できるようになりたいですね。

## 軽い経歴

中学1年生の終わり頃にプログラミングに出会い、主にHSP言語で遊び、Excel VBAを書いたり、Webページを書いて遊んだりしていました。あ、中学といえば生徒会長をやっていたのを思い出しました(遠い目)

高校時代はクソWebアプリ制作を中心に、ときどきクソAndroidアプリなど作って遊んだり、「趣味は受賞することです」なんて冗談を言う友達とコンテストに出たりイベントやハンズオンなんかに参加したりもしていました。
学校の勉強などお構いなしに好き勝手やっていたので、理系科目はいつも赤点と、学校の成績は散々でしたが、なんとAO入学で筑波大学に入れてもらえました。

大学に入学するも、まるで高校数学を勉強していなかったので数学の単位を落としまくりました。(4年次の春学期にようやくすべての数学の必修単位が揃いました)

大学時代の大半は、「高校数学をやらなきゃ」と思いつつも「自分には数学ができない」という意識がずっと精神的な枷となりました。その枷が本当に重すぎて、ほとんど自発的に新しいことができませんでした。数学のできない自分が惨めすぎて死のうかと思っていた時期もありました。「勉強すれば自分も数学できるようになるんじゃね？」と思えたのは3年や4年になってからの話です。

## 申し訳程度の受賞歴

これいる？

- 岩崎学園主催「第30回中高生ソフトウェア・アイデア・コンテスト」横浜市長賞受賞 [http://softicon.iwasaki.ac.jp/prize2013.html](http://softicon.iwasaki.ac.jp/prize2013.html)
- 横浜オープンデータソリューション発展委員会主催「横浜ユースフォーラム　〜若者が起こす横浜のオープンイノベーション〜」アプリ部門 横浜市政策局長賞受賞 [http://idea.linkdata.org/idea/idea1s797i](http://idea.linkdata.org/idea/idea1s797i)
- LOD Challenge 2014 学生奨励賞(高校部門)受賞 [https://2019.lodc.jp/archives/2014/awardCeremony.html](https://2019.lodc.jp/archives/2014/awardCeremony.html)
- LOD Challenge 2015 学生奨励賞(高校部門)受賞 [http://lodc.jp/2015/concrete5/blog/2016-02-19](http://lodc.jp/2015/concrete5/blog/2016-02-19)

(それ以降は特に)ないです。

## アカウント

[Twitter - @iciclize](https://twitter.com/iciclize)

[Github - iciclize](https://github.com/iciclize)

[YouTube - 田所](https://www.youtube.com/channel/UC6-gqITzzm_Eez5SXbQyJrg)

`}
        />
      </PostInner>
    </PostContainer>
  </Layout>
)

export default SecondPage
