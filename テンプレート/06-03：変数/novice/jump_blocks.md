# メガジャンプ: ブロック

## ステップ 1
既存の ``||player:on chat||`` コマンドの名前を **"jump"** に変更します。

```blocks
player.onChat("jump", function () { 
}) 
```

## ステップ 2

``||player:on chat||`` コマンド **jump** の中に ``||player:player teleport to||`` を配置し、**"y"** 座標に **100** を入力します。

```blocks
player.onChat("jump", function () { 
   player.teleport(pos(0,100,0))  
}) 
```

## ステップ 3

Minecraftでチャットに **jump** と入力して試してみましょう。


## ステップ 4

``||player:on chat||`` コマンド jump の中の (+) をクリックして、**num1** という名前の新しい ``||variable: variable||`` を作成します。

```blocks
player.onChat("jump", function (num1) {
    player.teleport(pos(0, 100, 0))
})
```

## ステップ 5

新しい ``||variable||`` の num1 を取得して、``||player:teleport to||`` の **y** 座標にドラッグします。

```blocks
player.onChat("jump", function (num1) {
    player.teleport(pos(0, num1, 0))
})
```

## ステップ 6

Minecraftでチャットに **jump** と数字を入力して試してみましょう。（例：jump 50 または jump 100）

```blocks
player.onChat("jump", function (num1) {
    player.teleport(pos(0, num1, 0))
})
```
