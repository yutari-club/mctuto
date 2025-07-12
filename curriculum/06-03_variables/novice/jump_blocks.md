# メガジャンプ: ブロック

## ステップ 1
既存(きそん)の ``||player:チャットコマンド||``の名前(なまえ)を **"jump"** に変更(へんこう)します。

```blocks
player.onChat("jump", function () { 
}) 
```

## ステップ 2

``||player:チャットコマンド||`` **jump** の中(なか)に ``||player:player teleport to||`` を配置(はいち)し、**"y"** 座標(ざひょう)に **100** を入力(にゅうりょく)します。

```blocks
player.onChat("jump", function () { 
   player.teleport(pos(0,100,0))  
}) 
```

## ステップ 3

Minecraftでチャットに **jump** と入力(にゅうりょく)して試(ため)してみましょう。


## ステップ 4

``||player:チャットコマンド||`` jump の中(なか)の (+) をクリックして、**num1** という名前(なまえ)の新(あたら)しい ``||variable: variable||`` を作成(さくせい)します。

```blocks
player.onChat("jump", function (num1) {
    player.teleport(pos(0, 100, 0))
})
```

## ステップ 5

新(あたら)しい ``||variable||`` の num1 を取(と)って、``||player:teleport to||`` の **y** 座標(ざひょう)にドラッグしましょう。

```blocks
player.onChat("jump", function (num1) {
    player.teleport(pos(0, num1, 0))
})
```

## ステップ 6

Minecraftでチャットに **jump** と数字(すうじ)を入力(にゅうりょく)して試(ため)してみましょう。（例(れい)：jump 50 または jump 100）

```blocks
player.onChat("jump", function (num1) {
    player.teleport(pos(0, num1, 0))
})
```
