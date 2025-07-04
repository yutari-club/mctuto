### @activities false
### @explicitHints true
### @flyoutOnly false 
### @hideIteration true

# MakeCodeの使い方
<!-- ====================== -->
##  覚えよう @showdialog
### ①プログラムに名前をつける
エージェントを✨キラキラ✨させるプログラムだよ。

簡単に実行できるように名前を「 **jump** 」⇒「 **1** 」に変えてみよう
1. 🖱️マウスで``||player:チャットコマンド||``の「 **jump** 」をクリックする
1. ⌨️キーボードの[ **1** ]キーを押す
1. ``||player:チャットコマンド||``の名前が「 **1** 」に変わったことを確かめる
1. ``||blocks:▶||``ボタンを押してマイクラ画面に戻る

### ②プログラムを実行してみよう
1. ⌨キーボードの [ **T** ]キーを押してチャットを開く
1. ⌨キーボードの [**1** ]キーを押してプログラムの名前を入力する
1. ⌨キーボードの [**⏎Enter**]キーを押して実行する

![MakeCodeの使い方](https://yutari-club.github.io/mctuto/block01/lesson01/welcome.gif)

## やってみよう
1. 🖱️マウスで``||player:チャットコマンド||``の「 **jump** 」をクリックする
1. ⌨️キーボードの[ **1** ]キーを押す
1. ``||player:チャットコマンド||``の名前が「 **1** 」に変わったことを確かめる
1. ``||blocks:▶||``ボタンを押してマイクラ画面に戻る
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
rubyblock=github:yutari-club/rubyblock#master
```
