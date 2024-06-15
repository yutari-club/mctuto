# 花の道

## はじめに @showdialog
通った後に**花の道**を残していきましょう。
![花の道](https://yutari-club.github.io/mctuto/web/02_SuperPower/01_FlowerTrail.gif)


## 歩いた時…？
``||player:50:プレイヤーが||``を選択して作業エリアに入れましょう。

``||player:▼||``で``||player:10:歩(ある)いた||``を選んでください。

```blocks
player.onTravelled(WALK, function () {
	
})
```

## 花を置いてみよう
``||blocks:10:ブロックを置く||``を選択して``||player:50:プレイヤーが||``の中に配置しましょう。
**草**ブロックを**タンポポ**に変更しましょう。

この数字 (~0 ~0 ~0) は花があなたの今いる場所に配置されることを意味します。
ですので、あなたの歩いた後に花が配置されます。

```blocks
player.onTravelled(WALK, function () {
    blocks.place(YELLOW_FLOWER, pos(0, 0, 0))
})
```
## 歩いてみよう！
Minecraft で少し歩き回ってみましょう。
振り向いてあなたのつくった花の道を見てみましょう。
後ろ向きに歩くと、歩くたびに花が地面から咲くのが見えます。

## 花を増やそう！
さらに花を追加しましょう！新たに``||blocks:10:ブロックを置く||``を選択して現在のブロックの下に追加しましょう。
今度は **草**ブロックを**フランスギク**に変更しましょう。
```blocks
player.onTravelled(WALK, function () {
    blocks.place(YELLOW_FLOWER, pos(0, 0, 0))
    blocks.place(OXEYE_DAISY, pos(0, 0, 0))
})
```


## 歩いてみよう！
Minecraft で少し歩き回ってみましょう。
振り向いてあなたのつくった花の道を見てみましょう。
後ろ向きに歩くと、歩くたびに花が地面から咲くのが見えます。



## 花の種類をさらに増やそう
素晴らしいですね！
でも歩きながら花束ほどの花を配置できたらもっと素敵ですね！
さらに"ブロック"を選択して"プレイヤーが歩いた時"の中に配置しましょう。 
今度はブロックを好きな花に変更してみましょう。
```blocks
player.onTravelled(WALK, function () {
    blocks.place(YELLOW_FLOWER, pos(0, 0, 0))
    blocks.place(OXEYE_DAISY, pos(0, 0, 0))
    blocks.place(POPPY, pos(0, 0, 0))
})
```

## もう一度歩いてみよう

もう一度 Minecraft に戻り、あなたの花の道がどのように作られるかを見てみましょう。

## 花の列を作ろう

最初に配置した``||blocks:10:ブロックを置く||``の最初の**0**を**1**に変更してみましょう。 
3つ目に配置した``||blocks:10:ブロックを置く||``の最初の**0**を**-1**に変更してみましょう。
 これで花は列になって配置されるようになります！


## コマンドを試そう！

Minecraft に戻ってそこら中に花の列を作りましょう！

```package
rubyblock=github:Mming-Lab/rubyblock1#master
```
```template
{}
```