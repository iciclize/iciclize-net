import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography";
import styled from "@emotion/styled"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"
import Helmet from "react-helmet"
import { css } from "@emotion/core";

import { PostContainer, PostInner, mdStyle } from "../templates/article"

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="作品集" />
    <PostContainer>
      <PostInner>
        <div css={css(mdStyle, css``)}>
          <h1>作品集</h1>
          
          <h1>2019年度</h1>
          
          <h2>ブログ・ポートフォリオサイト</h2>
          <p>このサイトのことです。静的サイトジェネレーター<a href="https://www.gatsbyjs.org/">Gatsby</a>で制作しました。</p>
          
          <h1>2018年度</h1>
          
          <h2>ルーター制作</h2>
          <p>ルーター自作本を写経しました。</p>
          <blockquote class="twitter-tweet" data-lang="en">
            <p lang="ja" dir="ltr">やっと端末がインターネットに繋がった………<br />写経してからここまでたどり着くのにめちゃくちゃ時間かかった <a href="https://t.co/iN7pj2EL5a">pic.twitter.com/iN7pj2EL5a</a></p>&mdash; いの (@iciclize) <a href="https://twitter.com/iciclize/status/1073055995805425664?ref_src=twsrc%5Etfw">December 13, 2018</a>
          </blockquote>
          
          <h2>筑波大学学園祭 雙峰祭 ホームページ</h2>
          
          <h1>2017年度</h1>
          
          <h2>IoT Expressの組み立て</h2>
          <p>トランジスタ技術2017年11月号の付録のIoT Expressをはんだ付けして組み立てて、ちょっと遊んでみました</p>
          <blockquote class="twitter-tweet" data-lang="en">
            <p lang="ja" dir="ltr">やったぜ。 <a href="https://t.co/HmWINZv0mk">pic.twitter.com/HmWINZv0mk</a></p>&mdash; いの (@iciclize) <a href="https://twitter.com/iciclize/status/961522341468499968?ref_src=twsrc%5Etfw">February 8, 2018</a>
          </blockquote>
          <blockquote class="twitter-tweet" data-lang="en">
            <p lang="ja" dir="ltr">できた。長田のSLを思い出すね <a href="https://t.co/lafBklkmHO">pic.twitter.com/lafBklkmHO</a></p>&mdash; いの (@iciclize) <a href="https://twitter.com/iciclize/status/961686326775922689?ref_src=twsrc%5Etfw">February 8, 2018</a>
          </blockquote>
          <blockquote class="twitter-tweet" data-lang="en">
            <p lang="ja" dir="ltr">おマイコンこわれる <a href="https://t.co/6vUznaBLug">pic.twitter.com/6vUznaBLug</a></p>&mdash; いの (@iciclize) <a href="https://twitter.com/iciclize/status/1120386344079876096?ref_src=twsrc%5Etfw">April 22, 2019</a>
          </blockquote>

          <h2>C言語で作ったゲーム</h2>
          <p>
            大学のC言語の授業の課題で作ったゲーム「スズメバチには気をつけよう」です。<br />
            <a href="http://kanamori.cs.tsukuba.ac.jp/lecture/2018/prog2/yushu2017/">優秀作品に選ばれ</a>ました。嬉しい…嬉しい
          </p>
          <blockquote class="twitter-tweet" data-lang="en"><p lang="ja" dir="ltr">素材作成とプログラミングに丸3日間かかってようやくできた…<br /><br />本当は先に音楽から作ったのに、結局音楽を再生する処理の実装までには至りませんでした…悲しいなぁ… <a href="https://t.co/IirfZf8dFg">pic.twitter.com/IirfZf8dFg</a></p>&mdash; いの (@iciclize) <a href="https://twitter.com/iciclize/status/965337873103728640?ref_src=twsrc%5Etfw">February 18, 2018</a></blockquote>
          <p>このゲームを作るにあたって先に音楽から作ったのですが、提出までに音楽再生の実装が間に合いませんでした。</p>
          <p>この1年後に音楽を鳴らす方法を研究して、実装にこぎつけました。後代のためにその方法を記事にまとめてQiitaに公開しました。
            <ul>
              <li><a href="https://qiita.com/iciclize/items/84f168c2f6c4a39610c2">全学計算機でC言語のプログラムから音を出す</a></li>
            </ul>
          </p>
          <p>作った音楽をここに供養します:</p>
          <iframe width="100%" height="140" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/458882742&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

          <h2>筑波大学学園祭 雙峰祭 ホームページ</h2>
          <p>トップページと他1ページのコーディングしたのだけ覚えてます。</p>

          <h2>学園祭模擬店のプロモーション用ゲームの制作</h2>
          <div css={css`& .gatsby-image-wrapper{ box-shadow: 0 0 4px silver; margin: ${rhythm(1/12)}; }`}>
            <Img fixed={data.kasuganoff_howtoplay.childImageSharp.fixed} />
            <Img fixed={data.kasuganoff.childImageSharp.fixed} />
            <Img fixed={data.kasuganoff2.childImageSharp.fixed} />
          </div>
          <a href="https://iciclize.github.io/kasuganoff">迫真ビーフストロガノフ部～春日エリアの裏技</a>
        </div>
      </PostInner>
    </PostContainer>
  </Layout>
)

export default SecondPage

export const pageQuery = graphql`
  query {
      kasuganoff: file(relativePath: {eq: "kasuganoff.jpg"}) {
        childImageSharp{
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      kasuganoff2 :file(relativePath: {eq: "kasuganoff2.png"}) {
        childImageSharp{
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      kasuganoff_howtoplay: file(relativePath: {eq: "kasuganoff_howtoplay.jpg"}) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      },
  }
`