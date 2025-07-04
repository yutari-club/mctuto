### @hideIteration false
### @flyoutOnly true

# ニワトリの雨

## ニワトリ！ @showdialog

マイクラでプログラミングをはじめよう！

まずはワールドに生き物を出現させてみよう。

たとえば1羽のニワトリ... 

いや、たくさんのニワトリを雨のようにふらせよう！
![ニワトリの雨](https://yutari-club.github.io/mctuto/block/world00/level04/01_ChickenRain.gif)


## チャットコマンド
プログラミングスペースの``||player:チャットコマンド||``を選ぼう。<br>
コマンド名を "**jump**" から "**pp**" に変えよう。

```template
player.onChat("jump", function () {	
})
```
```blocks
player.onChat("pp", function () {
})
```


## ニワトリを出現させる
``||mobs:生き物を出現||``を使って、あなたのいる位置にニワトリが出現するようにしよう。
ツールボックスの``||mobs:生き物を出現||``を選ぼう。<br>
``||player:チャットコマンド||``の中に入れてね。
``||player:チャットコマンド||``の中のブロックプログラムは、マイクラのチャットで "**pp**" と入力すると実行されるよ。

** ~0 ~0 ~0 **は、あなたが今いる位置をあらわすよ。
```blocks
player.onChat("pp", function () {   
    mobs.spawn(CHICKEN, pos(0, 0, 0))   
})
```

## チャットコマンドをやってみよう
1. 右下にある``||blocks:▶||``ボタンを押してマイクラ画面に戻ろう。
1. ⌨キーボードの [ **T** ]キーを押してチャットを開き、"**pp**" と入力しよう。

あなたのいる位置に1羽のニワトリが出現するはずだよ！

実行したら[ **C** ]キーを押して戻ってきてね。

## ニワトリのスポーン位置を高くする
出現位置を10ブロック上に変えよう。

** ~0 ~10 ~0 ** の2番目の数は、あなたから "**10**" ブロック上の位置をあらわしているよ。

"~"(チルダ)の記号はあなたからの位置をあらわすよ。

1羽の空飛ぶニワトリが出現するはずだよ！

```blocks
player.onChat("pp", function () {   
    mobs.spawn(CHICKEN, pos(0, 10, 0))   
})
```

## ニワトリを増やそう！
1羽では寂しいよね。

``||loops:くりかえし|``ブロックを使ってみよう。<br>
``||mobs:生き物を出現||``を "**100**" 回くりかえすようにしてみよう！

ニワトリの雨はふるかな？

```blocks
player.onChat("pp", function () {
    for (let index = 0; index < 100; index++) {
        mobs.spawn(CHICKEN, pos(0, 10, 0))
    }
})
```

## よくできたね！
### ニワトリの雨プログラミングの完成だよ！

```package
rubyblock=github:yutari-club/rubyblock#master
```