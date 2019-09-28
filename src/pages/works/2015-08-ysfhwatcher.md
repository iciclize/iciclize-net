---
slug: "YSFH-Watcher"
date: "2015-08"
title: "YSFH Watcher"
description: "自分の高校の生徒のつぶやきを垂れ流すWebサイト。Node/express製。"
imagename: "work-YSFH_Watcher.jpg"
---
YSFH Watcherは自分の高校の生徒のつぶやきが垂れ流されるサイトでした。

高校のTwitterの目に余るタイムラインを全世界に晒し上げようと思って作りました。

タイムラインは複数のUserStreamsをソースとし、リアルタイムで更新されるようにしていました。また、Meteor.jsによる検索機能もつけていました。

生徒のアカウントのリストは手動で管理していました。

倫理的に問題ありだったので1年くらいで公開を停止しました。

![timeline feed page](../../images/work-YSFH_Watcher_Feed.png)

![search page](../../images/work-YSFH_Watcher_Search.png)

## 構成 

<img alt="stream" src="../../images/work-YSFH_Watcher_stream.png" style="max-width:100%" />
