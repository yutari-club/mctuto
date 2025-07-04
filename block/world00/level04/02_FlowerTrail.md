### @hideIteration false
### @flyoutOnly true

# 花の道

## はじめに @showdialog
足跡を**花の道**にしよう。
![花の道](https://yutari-club.github.io/mctuto/block/world00/level04/02_FlowerTrail.gif)


## 歩いた時…？
ツールボックスから``||player:プレイヤーが||``を選ぼう。<br>
プログラミングスペースに入れよう。

``||player:▼||``で``||player:歩いた||``を選択してみよう。

```blocks
player.onTravelled(WALK, function () {
})
```

## 花を置いてみよう
``||blocks:ブロックを置く||``を選ぼう。<br>
``||player:プレイヤーが||``の中に置こう。

**草**ブロックを**タンポポ**に変えよう。

** ~0 ~0 ~0 **はあなたのいる場所を意味するよ。<br>
そこに花が置かれるよ。

だから、あなたの足跡に花が置かれるよ。

```blocks
player.onTravelled(WALK, function () {
    blocks.place(YELLOW_FLOWER, pos(0, 0, 0))
})
```
## 歩いてみよう！
マイクラで少し歩き回ってみよう。

振り向いて花の道を見てみよう。

後ろ向きに歩くと、歩くたびに花が咲くのが見えるよ。

``||blocks:▶||``ボタンを押してマイクラ画面に戻ろう。

実行したら[ **C** ]キーを押して戻ってきてね。

## 花を増やそう！
さらに花を追加しよう！

新しく``||blocks:ブロックを置く||``を選ぼう。<br>
**タンポポ**の下に追加しよう。

今度は **草**ブロックを**フランスギク**に変えよう。

マイクラに戻って、花の道を見てみよう。

どの花が咲くのが見してね。

```blocks
player.onTravelled(WALK, function () {
    blocks.place(YELLOW_FLOWER, pos(0, 0, 0))
    blocks.place(OXEYE_DAISY, pos(0, 0, 0))
})
```


## 花の種類をさらに増やそう
**フランスギク**の道ができたでしょ。

でも色々な花で、大きな道ができたらもっと素敵だよね！

さらに``||blocks:ブロックを置く||``を選ぼう。<br>
**フランスギク**の下に追加しよう。

今度は好きな花に変えてね。

```blocks
player.onTravelled(WALK, function () {
    blocks.place(YELLOW_FLOWER, pos(0, 0, 0))
    blocks.place(OXEYE_DAISY, pos(0, 0, 0))
    blocks.place(POPPY, pos(0, 0, 0))
})
```

## 花の列を作ろう
一番上のタンポポの``||blocks:ブロックを置く||``ブロックを見つけよう。<br>
最初の**0**を**1**に変えよう。

3つ目にある``||blocks:ブロックを置く||``ブロックを見つけよう。<br>
最初の**0**を**-1**に変えよう。

これで花の列になって大きな花の道ができるよ。

マイクラに戻って、大きな花の道を見てみよう。

```blocks
player.onTravelled(WALK, function () {
    blocks.place(YELLOW_FLOWER, pos(1, 0, 0))
    blocks.place(OXEYE_DAISY, pos(0, 0, 0))
    blocks.place(POPPY, pos(-1, 0, 0))
})
```

```package
rubyblock=github:yutari-club/rubyblock#master
```
```template
{}
```