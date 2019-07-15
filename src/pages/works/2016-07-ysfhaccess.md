---
slug: "YSFH-Access"
date: "2016-07"
title: "YSFH Access"
description: "高校のインターネットのフィルタリング機能を回避するためのWebプロキシサイトを作りました。TwitterとかYouTubeとか見られます。"
imagename: "work-YSFH_Access.jpg"
---

YSFH Accessは高校のインターネットのフィルタリング機能を回避するために作ったWebプロキシサイトです。

Proxysite.comの代替として開発しました。

組み込みのXHRオブジェクトを置き換えるスクリプトを仕込むことで、Ajax通信もバイパスできるようになっています。

<p>
  <img alt="YSFH Access overview" src="../../images/work-YSFH_Access-overview.png" />
</p>

YouTube, Twitter, Facebook, Google画像検索などを利用できます。

<p>
  <img alt="YSFH Access compatibility" src="../../images/work-YSFH_Access-sns.jpg" />
</p>

<p>
  <img alt="YSFH Access Google Image Search" src="../../images/work-YSFH_Access-TNOK.jpg" />
</p>

## 開発中の実験の様子

ブラウザがlocalhost以外のホストに接続できない(直接インターネットに繋がらない)ようにファイヤウォールを設定した状態でYouTube動画を再生するテストです。

<blockquote class="twitter-tweet" data-lang="en"><p lang="ja" dir="ltr">やったぜ。<br>ローカルホスト以外との通信を遮断した状態でYoutubeを観ることに成功したゾ。<br><br>これで学校からどんなサイトでも閲覧できるサービスが作れるってはっきり分かんだね。 <a href="https://t.co/Sh1hIGqz3w">pic.twitter.com/Sh1hIGqz3w</a></p>&mdash; いの (@iciclize) <a href="https://twitter.com/iciclize/status/700346247161327617?ref_src=twsrc%5Etfw">February 18, 2016</a></blockquote>

リポジトリ: [https://github.com/iciclize/YSFHAccess](https://github.com/iciclize/YSFHAccess)