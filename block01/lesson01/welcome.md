### @activities false
### @explicitHints true
### @flyoutOnly false 
### @hideIteration true

# MakeCodeの使(つ)い方(かた)
<!-- ====================== -->
##  覚(おぼ)えよう @showdialog
### ①プログラムに名前(なまえ)をつける
エージェントを✨キラキラ✨させるプログラムです。

簡単(かんたん)に実行(じっこう)できるように名前(なまえ)を「 **jump** 」⇒「 **1** 」に変(か)えよう
1. 🖱️マウスで``||player:10:チャットコマンド||``の「 **jump** 」をクリックする
1. ⌨️キーボードの[ **1** ]キーを押(お)す
1. ``||player:10:チャットコマンド||``の名前(なまえ)が「 **1** 」に変(か)わったことを確(たし)かめる
1. ``||blocks:▶||``ボタンを押(お)してマイクラ画面(がめん)に戻(も)る

### ②プログラムの実行(じっこう)する
1. チャットを開(ひ)く。⌨キーボードの [ **T** ]キーを押(お)す。
1. プログラムの名前(なまえ)を入(いれ)れる。⌨キーボードの [**1** ]キーを押(お)す。
1. 実行(じっこう)する。⌨キーボードの [**⏎Enter**]キーを押(お)す。

![MakeCodeの使(つ)い方(かた)](https://yutari-club.github.io/mctuto/block01/lesson01/welcome.gif)

## やってみよう
1. 🖱️マウスで``||player:10:チャットコマンド||``の「 **jump** 」をクリックする
1. ⌨️キーボードの[ **1** ]キーを押(お)す
1. ``||player:10:チャットコマンド||``の名前(なまえ)が「 **1** 」に変(か)わったことを確(たし)かめる
1. ``||blocks:▶||``ボタンを押(お)してマイクラ画面(がめん)に戻(も)る
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

```package
rubyblock=github:Mming-Lab/rubyblock1#master
```
