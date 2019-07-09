import React, { createElement } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"
import Helmet from "react-helmet"
import { css } from "@emotion/core"
import mq from "../utils/emotion";

const WorksContainer = styled.div`
  margin: 0 auto;
  max-width: 940px;
`
const WorksList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -${rhythm(6/12)} ${rhythm(3/12)} 0;
  ${mq[0]} {
    margin: -${rhythm(6/12)} ${rhythm(6/12)} 0;
  }
`
const WorksListItem = ({ image, title, description, date, link }) => {
  const Item = styled.li`
    margin: 0;
    padding: ${rhythm(8/12)} ${rhythm(3/12)} ${rhythm(8/12)};
    flex: 0 1 100%;
    display: flex;
    flex-direction: column;
    ${mq[0]} {
      flex-basis: 50%;
      padding: ${rhythm(8/12)} ${rhythm(6/12)} ${rhythm(8/12)};
    }
    ${mq[1]} {
      flex-basis: 33.3%;
      padding-bottom: ${rhythm(16/12)};
    }
    ${mq[2]} {
      flex-basis: 32%;
    }
  `
  const ImageArea = styled.div`
    background: silver;
    padding-bottom: ${100 * 16 / (16 + 10)}%; /* 16:10 */
  `
  const titleStyle = css`
    margin: ${rhythm(6/12)} 0 ${rhythm(4/12)};
    & h3 {
      font-size: ${rhythm(7/12)};
      font-weight: bold;
      line-height: ${rhythm(11/12)};
    }
    ${mq[1]} {
      & h3 {
        font-size: ${rhythm(8/12)};
      }
    }
  `
  const Description = styled.div`
    font-size: ${rhythm(13/24)};
    line-height: ${rhythm(20/24)};
    ${mq[1]} {
      font-size: ${rhythm(15/24)};
      line-height: ${rhythm(24/24)};
    }
  `
  const Time = styled.div`
    font-size: ${rhythm(12/24)};
    padding: 0 0 ${rhythm(4/12)} 0;
    text-align: right;
    position: relative;
    ${mq[1]} {
      font-size: ${rhythm(13/24)};
    }
  `
  const inv = !image

  return (
    <Item>
      <Time>{date}</Time>
      { image &&
        <Link to={link} css={css`text-decoration: none; color: inherit;`}>
          <Img fluid={image} />
        </Link>
      }
      { inv && <ImageArea /> }
      <Link to={link} css={css(titleStyle, css`text-decoration: none; color: inherit;`)}>
        <h3>{title}</h3>
      </Link>
      <Description>{description}</Description>
    </Item>
  )
}

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="作品集" />
    <WorksContainer>
      <WorksList>
        <WorksListItem
          title="ブログ・ポートフォリオサイト"
          description={<>
            このサイトのことです。静的サイトジェネレーター<a href="https://www.gatsbyjs.org/">Gatsby</a>で制作しました。
          </>}
          date={`2019年7月`} link={`/`} />
        <WorksListItem
          title="ルーター制作"
          description={`ルーター自作本を写経してRaspberry Piで実行しました。まだ続きを制作中です。`}
          image={data.router.childImageSharp.fluid}
          date={`2018年12月`} link={`/`} />
        <WorksListItem
          title="IoT Express組み立て"
          description={`トランジスタ技術2017年11月号の付録のIoT Expressをはんだ付けして組み立てて、ちょっとだけ遊んでみました。`}
          image={data.iotexpress.childImageSharp.fluid}
          date={`2018年2月`} link={`/`} />
        <WorksListItem
          title="スズメバチには気をつけよう"
          description={<>
            大学のC言語の授業の課題で作ったゲームです。
            <a href="http://kanamori.cs.tsukuba.ac.jp/lecture/2018/prog2/yushu2017/">優秀作品に選ばれ</a>
            ました。嬉しいですね。
          </>}
          image={data.suzumebachi.childImageSharp.fluid}
          date={`2018年2月`} link={`/`} />
        <WorksListItem
          title="迫真ビーフストロガノフ部～春日エリアの裏技"
          description={`学園祭模擬店のプロモーション用のゲームを制作しました。エンジンにはPhina.jsを使いました。`}
          image={data.kasuganoff.childImageSharp.fluid}
          date={`2017年10月`} link={`/`} />
        <WorksListItem
          title="熱盛と出てしまうアプリ"
          description={`起動しておくと、忘れた頃に画面のランダムな場所に「熱盛®」と出てしまうアプリです。一時期Playストアのスポーツカテゴリ(大嘘)で1位を獲得しました。`}
          image={data.atsumoriapp.childImageSharp.fluid}
          date={`2017年9月`} link={`/`} />
        <WorksListItem
          title="腕相撲大会リアルタイム勝敗予想ベットシステム"
          description={`高校の文化祭の後夜祭で行われた腕相撲大会で、勝敗を予想して掛けを行うシステムを作りました。352台同時接続できて感動しました。`}
          image={data.armwrestling.childImageSharp.fluid}
          date={`2016年9月`} link={`/`} />
        <WorksListItem
          title="YSFH Access"
          description={`高校のインターネットのフィルタリング機能を回避するためのWebプロキシサイトを作りました。YouTube見られます。`}
          image={data.ysfh_access.childImageSharp.fluid}
          date={`2016年7月`} link={`/`} />
        <WorksListItem
          title="Splaturn"
          description={`高校の文化祭の部活での出し物として、高校中の教室に貼り付けたQRコードを撮影して行う陣取りゲームを運営しました。自分はサーバーサイドを書きました。`}
          image={data.splaturn.childImageSharp.fluid}
          date={`2015年9月`} link={`/`} />
        <WorksListItem
          title="YSFH Watcher"
          description={`自分の高校の生徒のつぶやきを垂れ流すWebサイトを作りました。`}
          image={data.ysfh_watcher.childImageSharp.fluid}
          date={`2015年8月`} link={`/`} />
        <WorksListItem
          title="2-6席替えオンライン"
          description={`みんながスマートフォンのボタンを押した合計回数分だけシャッフルする楽しい席替えを考えました。`}
          image={data.seat.childImageSharp.fluid}
          date={`2015年5月`} link={`/`} />
        <WorksListItem
          title="V2語録/V2 Online"
          description={`高校のクラスの文化祭で上映した映画をAndroid/Webアプリ化しました。初めて作ったAndroidアプリです。`}
          image={data.v2.childImageSharp.fluid}
          date={`2015年1月`} link={`/`} />
        <WorksListItem
          title="ICE_commander"
          description={`コマンド入力でパソコンを遠隔操作するHSP製のソフトです。中3の頃に作って、第30回中高生ソフトウェアアイデアコンテストで横浜市長賞を受賞しました。`}
          date={`2013年11月`} link={`/`} />
      </WorksList>
    </WorksContainer>
  </Layout>
)

export default SecondPage

export const pageQuery = graphql`
  query {
    armwrestling: file(relativePath: {eq: "Armwrestling.jpg"}) { ...f },
    atsumoriapp: file(relativePath: {eq: "Atsumoriapp.jpg"}) { ...f },
    kasuganoff: file(relativePath: {eq: "Ganoff.jpg"}) { ...f },
    iotexpress: file(relativePath: {eq: "IoT_Express.jpg"}) { ...f },
    router: file(relativePath: {eq: "Router.jpg"}) { ...f },
    seat: file(relativePath: {eq: "Seat.jpg"}) { ...f },
    splaturn: file(relativePath: {eq: "Splaturn.jpg"}) { ...f },
    suzumebachi: file(relativePath: {eq: "Suzumebachi.jpg"}) { ...f },
    v2: file(relativePath: {eq: "V2.jpg"}) { ...f },
    ysfh_access: file(relativePath: {eq: "YSFH_Access.jpg"}) { ...f },
    ysfh_watcher: file(relativePath: {eq: "YSFH_Watcher.jpg"}) { ...f },
  }

  fragment f on File {
    childImageSharp {
      fluid(maxWidth: 320, maxHeight: 200) {
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        originalImg
        originalName
        presentationWidth
        presentationHeight
      }
    }
  }
`