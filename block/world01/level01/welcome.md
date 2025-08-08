### @activities false
### @explicitHints true
### @flyoutOnly false 
### @hideIteration true

# MakeCodeの使(つか)い方(かた)
<!-- ====================== -->
##  覚(おぼ)えよう @showdialog
### ①プログラムに名前(なまえ)をつける
エージェントをキラキラさせるプログラムだよ。

簡単(かんたん)に実行(じっこう)できるように名前(なまえ)を「 **jump** 」⇒「 **1** 」に変(か)えてみよう
1. マウスで``||player:チャットコマンド||``の「 **jump** 」をクリックする
1. キーボードの[ **1** ]キーを押(お)す
1. ``||player:チャットコマンド||``の名前(なまえ)が「 **1** 」に変(か)わったことを確(たし)かめる
1. 再生(さいせい)ボタンを押(お)してマイクラ画面(がめん)に戻(もど)る

### ②プログラムを実行(じっこう)してみよう
1. キーボードの [ **T** ]キーを押(お)してチャットを開(ひら)く
1. キーボードの [**1** ]キーを押(お)してプログラムの名前(なまえ)を入力(にゅうりょく)する
1. キーボードの [**Enter**]キーを押(お)して実行(じっこう)する

![MakeCodeの使(つか)い方(かた)](https://raw.githubusercontent.com/yutari-club/mctuto/refs/heads/master/block/world01/level01/welcome.webp)

## やってみよう
1. マウスで``||player:チャットコマンド||``の「 **jump** 」をクリックする
1. キーボードの[ **1** ]キーを押(お)す
1. ``||player:チャットコマンド||``の名前(なまえ)が「 **1** 」に変(か)わったことを確(たし)かめる
1. 再生(さいせい)ボタンを押(お)してマイクラ画面(がめん)に戻(もど)る
```blocks
player.onChat("1", function () {
    mobs.spawnParticle(TOTEM_PARTICLE, agent.getPosition())
})
```


```template
player.onChat("jump", function () {
    mobs.spawnParticle(TOTEM_PARTICLE, agent.getPosition())
})
```
