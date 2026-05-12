import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { Layout, PostContainer, PostInner } from "../components/layout";
import { rhythm } from "../utils/typography";
import Seo from "../components/seo";
import ReactMarkdown from "react-markdown";
import { css } from "@emotion/react";
import mq from "../utils/emotion";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import Iframely from "../components/Iframely";
// import rehypeSanitize from "rehype-sanitize";

const pageWidth = "620px";

const ProfilePage = () => (
  <Layout>
    <Seo title="自己紹介" ogDescription={`24歳、学生です。(大嘘)`} />
    <Iframely />
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
      <PostInner pageWidth={pageWidth}>
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
          最終更新: 2026-05-07
        </div>
        <div
          css={css`
            display: table;
            margin: 1.5rem 0 1rem;
          `}
        >
          <img
            css={css`
              margin: 0;
            `}
            width="64px"
            src="https://www.gravatar.com/avatar/e5ef3698ccb90ecd2a50b1440dd7ee37?s=128"
          />
          <div
            css={css`
              display: table-cell;
              padding: 0 0.8rem;
              vertical-align: middle;
            `}
          >
            <h2
              css={css`
                border: none;
                font-weight: normal;
                font-size: 1.1rem;
                margin: 0;
                padding: 0 0 0.6rem;
              `}
            >
              いの
            </h2>
            <div
              css={css`
                font-size: 0.9rem;
              `}
            >
              <span
                css={css`
                  display: inline-block;
                  margin-right: 1.2rem;
                `}
              >
                Twitter: <a href="https://twitter.com/iciclize">@iciclize</a>{" "}
              </span>
              <span
                css={css`
                  display: inline-block;
                  margin-right: 1.2rem;
                `}
              >
                YouTube:{" "}
                <a href="https://www.youtube.com/channel/UC6-gqITzzm_Eez5SXbQyJrg">
                  @szkfk
                </a>
              </span>
              <span
                css={css`
                  display: inline-block;
                `}
              >
                Instagram:{" "}
                <a href="https://www.instagram.com/iciqle/">
                  @iciqle
                </a>
              </span>
            </div>
          </div>
        </div>

        <b>写真</b>
        <div
          css={css`
            display: flex;
            gap: 0.75rem;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding: 0.5rem 0;
          `}
        >
          <StaticImage
            css={css`
              flex: 0 0 200px;
            `}
            src="https://nnyapi.iciclize.net/uploads/20260426_yino_0_fdc2d5a8cd.jpeg"
            alt="Y.Ino profile image 0 2026-04-26"
          />
          <StaticImage
            css={css`
              flex: 0 0 400px;
            `}
            src="https://nnyapi.iciclize.net/uploads/ino_atlier_renard_ae2f87bc53.jpg"
            alt="Y.Ino profile image 1 2026-05-10"
          />
        </div>

        <p>1998年生まれ。男性。神奈川県横浜市出身。横浜市在住。</p>

        <ul>
          <li>2017年　横浜市立横浜サイエンスフロンティア高校 卒業</li>
          <li>2021年　筑波大学 情報メディア創成学類 卒業</li>
          <li>
            2021年～　ソフトウェアエンジニア
            <ul>
              <li>組み込み機器向けWebブラウザの仕事してます</li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            資格: 3級アマチュア無線技士（名ばかり3アマ。コールサイン:{" "}
            <code>JL1FXU</code>）
          </li>
        </ul>

        <ReactMarkdown
          rehypePlugins={[rehypeRaw, rehypeSlug /* rehypeSanitize */]}
          css={css`
            td {
              line-height: 1.4rem;
            }
            details > summary {
              display: list-item;
              cursor: pointer;
            }
            details > summary,
            details[open] {
              background-color: hsl(204, 100%, 97%);
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
              font-size: 1.1rem;
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
        >
          {`

## 好きなもの・こと

- 🎧 **音楽を聴くこと**
  - 特に **「2号兄貴」** とその周辺界隈が好きです。コードの気持ちいい曲が好きです。
  - 好きなアーティストでいうと **もちうつね** が好きです。  
  - 詳細は [好きな音楽](#-好きな音楽) へ。

<ul>
  <li>🎼 <strong>耳コピ・採譜すること</strong> ／ 🎹 <strong>ピアノを弾くこと</strong> 
    <ul>
      <li>界隈曲や好きな曲の採譜を行って、楽譜動画をYouTubeチャンネル「田所」に上げてます。自分で弾くこともあります。 (2026-05-07現在チャンネル登録者 5071 人)<br />
      <div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.youtube.com/channel/UC6-gqITzzm_Eez5SXbQyJrg" data-iframely-url="//iframely.net/RPAAjqy"></a></div></div> </li>
      <li>詳細は <a href="#-耳コピ採譜すること---ピアノを弾くこと">🎼 耳コピ・採譜すること ／ 🎹 ピアノを弾くこと</a> へ。</li>
    </ul>
  </li>
</ul>

<!---->

- 💻 **コンピューター／プログラミング**
  - 技術を悪用してくだらないものを作るのが好きです。
  - 便利なライブラリを使うよりフルスクラッチ寄りでやるのが好きです。
  - 作ったものは「<a href="../works">作品集</a>」に上げてます。
  - やりたいことや勉強したいことを 「[夢](#夢)」の項目で書いてます。

<!---->

<ul>
  <li>🩵 <strong>かわいいもの</strong>
    <ul>
      <li>可愛いものが好きです。特に水色のもの。</li>
      <li>フリルいっぱいの可愛い服を見るのがが好きです。 <br />
          量産型・地雷系・メイド服が好きです。
        <ul>
          <li>好きなブランド・シリーズは DearMyLove、NOEMIE、リリカルパレットです。</li>
          <li>LIZ LISA はギラギラしててちょっと苦手です…</li>
        </ul>
      </li>
      <li>2026年1月に初めて横浜ビブレの3階に行ったときに一目惚れしてBABYの水色のジャンパースカートをお迎えしてしまいました。マネキン買って着せてます。 <br />
        <img src="https://nnyapi.iciclize.net/uploads/jsk_ac6252333b.jpg" width="300px" />
      </li>
      <li>NOEMIEのシナモンめっちゃ可愛いので見てください…！！ <br />
        <img src="https://nnyapi.iciclize.net/uploads/NOEMIE_Cinnamon_f486894305.jpg" />
      </li>
      <li>最近、気になってた渋谷の Atlier Renard というカフェに行きました。フォトブースがめっちゃ可愛い！ (2026-05-10) <br />
        <img src="https://nnyapi.iciclize.net/uploads/2026_05_10_atlier_renard_d7e0da2631.jpg" />
      </li>
      <li>Instagram に可愛いものいっぱい載せていきたいです。 </li>
    </ul>
  </li>
</ul>

<!---->

- 📖 **本**
  - 青い鳥文庫の児童書「泣いちゃいそうだよ」シリーズ（著：小林深雪）が好きです。ときどき感想をブログに書いています。
  - このシリーズの好きなところは・・・
    - 切ない！
    - 季節の自然風景の描写が綺麗。色彩や情緒が非常に豊か 🌸
    - テンポが良い。面白い。ハラハラドキドキするような展開。
    - 青春！尊く、たまらなく愛おしい
    - 忘れていた子ども時代の気持ちを思い出させてくれる
    - ほっこり温かい気持ちになれる
    - 生きる元気をもらえる
  - もっと詳しい紹介はこちらの記事で：「<a href="../posts/naichaisoudayo-series-reading-notes-part-1/">泣いちゃいそうだよシリーズのメモ・感想その1</a>」

<!---->

- **座右の銘**
  - 「一度きりの人生！さっさと終わらせよう」です。
    - [https://iciclize.net/posts/a-life-is-given-only-once-get-it-over-with/](https://iciclize.net/posts/a-life-is-given-only-once-get-it-over-with/)

## 夢

### 英語と数学をやり直したい。学術論文が読める力をつけたい

恥ずかしい話ですが、私にはずっと、高校数学と英語への強い未練があります。

- **高校数学をやり直して、線形代数・微積分・確率統計あたりに入れるだけの土台を作りたい。**
- **英語の技術文書や学術論文を、身構えずに読めるようになりたい。**

これは人生最大の懸案事項で、これさえ解決できれば…と思って日々生きてます。

大学の情報系学部を卒業したのになぜまだそんなことを言っているのか、その背景は・・・（長いので以下に折りたたみます↓）

<details>
<summary><strong>未練の背景</strong></summary>

<h4>高校数学をやらなかったツケ</h4>

自分は高校生の頃、勉強する習慣がゼロで、全く勉強しませんでした。理数科目は高校入学後の早い段階からドロップアウト状態。

でもプログラミングが好きだったので、それで出した成果を頼りにAO入学で大学へ進学しました。高校数学をまともに理解しないまま大学生になったため、大学生活ではかなり苦労しました。

数学の授業についていけず、単位を落としまくり、必修単位を取るだけで精一杯。  
本当はもっといろいろ勉強したかったのに、そこまで手が回らない。

大学で触れたかったものはいろいろありました。
3Dグラフィックス、音声、画像、信号処理、機械学習、電子工作、電磁気学など。

高校生のときから気づいてはいたけど、コンピューターを使って、単純な四則演算以上の面白いことをするには、どうしても数学が必要になります。  
線形代数、微積分、確率統計学、信号理論、情報理論、数値計算、……。

でも、その前提になる高校数学が足りない。  
基礎がなさすぎて、巻き返しもできそうにない。

周りの一般受験を通ってきた学生は、すんなり先へ進んでいく。  
これがすごく惨めで仕方ありませんでした。

思えば18歳くらいから誕生日は憂鬱でした。  
「ああ、また求められるレベルに到達できないまま1年が過ぎてしまった」と痛感させられるから。  
その頃から、自分の人生は曇っていて、根底で「早く死なせてほしい」という思いをずっと募らせています。

結局、大学生活のかなりの部分を、高校数学のツケを返すことに使ってしまい、それはまるで穴の開いたバケツに水を入れているみたいに空虚な営みでした。  
そして未だツケは返しきれていない。

数学さえちゃんとできていれば、もっと先に進めていたのに。

その未練を、今もずっと引きずって停滞しています。

<h4>英語が仕事の足を引っ張っている</h4>

英語でも詰まっています。
英語は、数学ほど絶望的にできないわけではないけど、受験勉強というトレーニングを積んでいないので、リーディングが遅いし、リスニングもついていけない。

TOEICでいうと600点〜740点くらい。  
悪くないと思うかもしれませんが、実用には耐えない。

卒業研究では、英語の教科書や論文を読むのがとても辛かったです。英語と数学の苦手意識が合体して死にかけてました。

今でも、仕事で英語の能力不足が足を引っ張っています。  
英語のドキュメントを読むのが遅い。リスニングにも自信がない。英文を書くのにも時間がかかる。  
その結果、英語が必要になる業務へのアサインを避けてしまう。

国内市場縮小の流れで、国内向けの仕事は減少する方向なので、将来性にも停滞感が出てきてまずい。

<h4>学術論文が読める力をつけたい</h4>

「学術論文が読み書きできないなんて、エンジニアとして恥ずかしい。」  
「数学と英語さえできれば。」  
とずっと思ってます。

本当は、自分も大学院に行っておきたかった。理系なら大学院に進むのは普通だから。

でも、卒業研究の時点で、英語論文にかなり苦しんでいました。  
論文を読むだけで重い。数式が出てくると止まる。  
研究を続けるための基本的な体力が、自分には足りていませんでした。

その状態では大学院に行くのなんて無理です。
それが今でもコンプレックスになっています。

だから、学術論文が読めるだけの力をつけたい。  
英語の文章に身構えずに済むようになりたい。  
数式を見ただけで閉じるのをやめたい。

<h4>今さらでもやるしかない</h4>

なんとかしたくて、数年前から高校数学と英語の勉強を少しずつ続けています。  
でも、仕事をしながら基礎を積み直すのはかなり大変です。  
時間も取れない上に、勉強する習慣がなかったので効率が悪く、進みが遅い。他にやらなきゃいけないこともあるし。

最近ようやく数学の勉強のコツを掴んできた感じはするけど、数学IIIまで終わるのにどれだけかかるんだろう。。

</details>


高校時代に戻りて〜〜　泣きたい。

「27歳、ITエンジニアです。高校の勉強やってます」って何？周回遅れの人生で辛い。やるしかないわけだけど…でも高校の勉強をやっていて許される時間はもう終わったような気もして。もたもたしてると30になりますからね。30って何？30とかもう人生の賞味期限切れてますからね。多分。ウオー殺してくれー



### 3Dエンジンを作りたい

幼いころに実家の Windows 95 マシンに入っていた DOOM や、PlayStation 1 のゲームで遊んだ体験があり、ああいうガビガビの3D表現が好きです。いつか自分もフルスクラッチで3D描画してみたい！と思ってます。

死ぬまでにこれはやらないといけない。

高校数学のベクトルを理解しているくらいでもできなくはないと思うのですが、線形代数を理解してから取り組む方がより本質的で意義があるのではと思っています。なので早く高校数学を終わらせて線形代数を理解して3Dエンジンを作りたい。

### Linux のグラフィックスタックとハードウェア入出力周りを理解したい

常々、コンピューターの仕事って本質的にはVRAM上に何らかのピクセルの列を出すことだから、どんなハードウェア上でも自力でピクセルを出せればあとはこっちのもんだよなあ、と思っています。

アプリ側で描いた画は、どのように、ウィンドウシステムやデバイスドライバを経由して、ハードウェアレジスタをたたき、最終的にディスプレイの走査線上に現れるのか気になってしょうがない。  
X Window System, Wayland, OpenGL, GLX, EGL, Mesa, DRI, DRM/KMS など、名前は聞いたことあるけどよく分からないやつを理解したいです。

そもそも、OSはどうやってハードウェア入出力を行うのか、デバイスドライバ周りってどうなってるのかも正直よく分かっていないので、ベアメタルプログラミングやってみたいです。

実はこのあたりが知りたくて「ゼロからのOS自作入門」（みかん本）を読み始めたこともあるんですが、肝心のハードウェア描画部分については **「UEFI が自動でフレームバッファ用のメモリ領域を用意してくれてそこに書きこめば画が出てくるよ」** という流れになっていて、  
さらに、マウス入力を取得するところについても、筆者が用意したxHCIドライバを使うだけでできるようになっており、  
個人的には **「任意のピクセルが出せてUSB入力も取得できるならもう、OS作る前からもうOSできてるじゃん！！」** とちょっとがっかりしてしまいました。  
多分自分が知りたいのはOSの作り方というより（BIOS画面みたいな）ファームウェアの作り方なのでしょう。

### Webブラウザへの理解を深めたい

自分は一応組み込み向けWebブラウザのエンジニアをやっていますが、実態は Chromium のソースコードを調査するというもので、ブラウザやエンジンの仕組みに大して詳しいわけではないので、勉強のために以下の教材に取り組んでみたいです。

- [ちいさな Web ブラウザを作ってみよう](https://browserbook.shift-js.info/)
  - これはIPAの2021年のセキュリティキャンプの課題資料で、ずっと気になっています。  

<ul>
  <li>［作って学ぶ］ブラウザの仕組み <br/>
  <div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://gihyo.jp/book/2024/978-4-297-14546-0" data-iframely-url="https://iframely.net/T7Fo4TY2?card=small&theme=light"></a></div></div>
  </li>
</ul>

### Cコンパイラを作れるようになりたい

Cコンパイラは昔からのあこがれです。ずっとこれやりたいと思ってます。

- [低レイヤを知りたい人のためのCコンパイラ作成入門](https://www.sigbus.info/compilerbook)

一応オートマトンの授業とかPL/Iコンパイラ作成の授業を受けたことはありますが、取り扱ったのはLL1文法という文法だけであまり実用的ではない感じでした。

言語自作やパーサー自作できるかというのはソフトウェアエンジニアの試金石のようにも思えるので、できるようになりたいです。

### ピアノの譜読みが速くなりたい

10年ちょっとピアノを習っていたのですが、楽譜を読みながら弾くことが全然できません。全部暗譜で弾いています。譜読みにすごく時間がかかります。

### 音楽理論を学びたい

和声とかを分析できるようになりたいですね。

## 好きなもの・こと (詳細版)

### 🎵 好きな音楽

主に「2号兄貴」とその周辺界隈が好きです。  
小学生～高校生までピアノを習っていたのでクラシック曲も好きです。  
東方 Project の原曲も好きです。中学生の頃は浴びるように聞いていました。

好きな曲は順次 YouTube のプレイリストに入れておきます。（作成中）

**曲の紹介 / 田所 - 
[https://www.youtube.com/playlist?list=PLIcaYf2a4YU9MIxFQlBiRaE_KH5Ao2mmf](https://www.youtube.com/playlist?list=PLIcaYf2a4YU9MIxFQlBiRaE_KH5Ao2mmf)**

TODO: プレイリストを埋め込む

今好きなアーティストはと言われたら「**もちうつね**」ですが、  
**基本的には特定のアーティストが好きというよりも曲単体で好きか否か決めてます。**
**Just the Two of Us 進行と枯葉進行が大好物です(こだわりポイント)**

曲が好みなことが多いアーティストのリストをちょっとだけ載せます。雰囲気はこんな感じ。

- 2号. (およびその周辺界隈。電ǂ鯨、もちうつね、夏毛、すべあな、…)
- 安井洋介
- 宮野弦士
- Yellow Magic Orchestra
- METAFIVE
- 谷山浩子
- 椎名林檎
- 星野源
- Earth, Wind & Fire

などなど。

### 🎼 耳コピ・採譜すること ／ 🎹 ピアノを弾くこと 

2020年頃から YouTube チャンネル「田所」の活動をしています。  
自分の好きな曲を採譜（耳コピ）して楽譜動画を上げたり、ピアノ演奏動画を上げたりしています。

例）おくすり飲んで寝よう、イワシがつちからはえてくるんだ、ヤツメ穴 など

<p> <div>
  <b>おくすり飲んで寝よう（演奏）</b><br />
  <div style="position: relative; width: 100%; height: 0; padding-bottom: 62.5%; overflow: hidden; ">
    <iframe style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;" src="https://www.youtube-nocookie.com/embed/H6RK4FCXQik?si=C9bwcWOk9uIBwStG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</div> </p>

<p> <div>
  <b>おくすり飲んで寝よう（楽譜）</b><br />
  <div style="position: relative; width: 100%; height: 0; padding-bottom: 62.5%; overflow: hidden; ">
    <iframe style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;"  src="https://www.youtube-nocookie.com/embed/1oKf1zDaJE8?si=7u7DDKJAT1xZzpfY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</div> </p>

<p> <div>
  <b>イワシがつちからはえてくるんだ</b><br />
  <div style="position: relative; width: 100%; height: 0; padding-bottom: 62.5%; overflow: hidden; ">
    <iframe style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;" src="https://www.youtube-nocookie.com/embed/f_O6JnHp0wQ?si=-p02wf1Uf3unFhoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</div> </p>


#### 採譜・演奏する理由

自分が採譜や演奏をする理由は主に以下の2つです。

- **自分の好きな、だけどあまり知られていない曲をもっと皆に広めたいから**
- **自分が聞きたい・弾きたい曲を誰も採譜・演奏してくれないのがもどかしいから**
  - **「なんでこの曲誰もやってくれないの（憤怒）」「ないなら俺がやるしかない（使命感）」** と思ってます。

なので基本的には既に誰かが採譜や演奏しているものがあるときは、自分はその曲には取り組まない方針です。

ただし、以下のどれかの場合は、既に先駆者が居ても自分が採譜・演奏することがあります：

- 自分がその曲が好きすぎて、どうしても自分の手で再現したい場合。
- 他人のアレンジに納得いかないところがある場合:
  - 拾ってほしい音が抜け落ちているとき。
  - 楽譜が人間用の難易度でないとき。
  - 難易度を無駄に吊り上げるわりに聴きごたえに寄与しない無駄な音符が多いとき。


### 💻 コンピューター／プログラミング

小さなころからパソコンをいじるのが好きで、中学生から独学でプログラミングを始めて、学生時代はいろいろ作って遊んでいました。くだらないジョーク作品が多いですが。

つくったもの (で見せられそうなもの) の一覧は「<a href="../works/">作品集</a>」に置いてあります。

たとえばこんなの↓↓とか

<p>
  <b><a href="../works/alarm/">目力防犯ブザー</a></b>
  <div style="position: relative; padding-bottom: 60%; margin-bottom: 1.5rem;"><iframe allowfullscreen="allowfullscreen" allow="autoplay" src="https://embed.nicovideo.jp/watch/sm37778066?oldScript=1&referer=&from=0&allowProgrammaticFullScreen=1" style="position: absolute; width: 100%; height: 100%; border: none;"></iframe></div>
</p>

高校のPCのインターネットのフィルタリングを迂回するためのWebプロキシサイト（<a href="../works/ysfh-access/">YSFH Access</a>）とか…


## その他好きな作品など

- 好きなアニメ
  - いちばん好きなアニメは「ミュークルドリーミー」です。まちカドまぞくも好きです。（制作スタッフが同じです）
  - (でもアニメ自体はあまり見ないですね。)

- 好きなゲーム
  - メタルギアシリーズ (1, 2, 3, 4, Portable Ops, PW)
    - 5は未履修です。なんか、先にもう一度過去作をなぞりたいと思っていて…。

- （工事中）

## 見てみたい作品・やってみたい作品

（初見でなくもう一度見たいものも含みます）
 (工事中)

- 映画
  - 下妻物語
  - tron
  - ブレードランナー
  - 時計仕掛けのオレンジ
  - ファイトクラブ
- アニメ
  - ローゼンメイデン（ちょっとは観たことがあるけど全部ではないので）
- ゲーム
  - needy girl overdose
  - Red Dead Redenption シリーズ
- 漫画
  - ふたつのスピカ
  - 闇金ウシジマくん
  - 恋は雨上がりのように
- 本
  - 泣いちゃいそうだよシリーズ（読破 + 感想）
  - 暴力の人類史
  - 受験の叡智


`}
        </ReactMarkdown>
      </PostInner>
    </PostContainer>
  </Layout>
);

export default ProfilePage;
