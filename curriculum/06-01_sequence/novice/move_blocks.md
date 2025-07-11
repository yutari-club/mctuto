# エージェントの移動: ブロック

## ステップ 1
``||player:チャットコマンド||``を作成し、**"tp"** という名前を付けます。

```blocks
player.onChat("tp", function () {
})
```

## ステップ 2

``||agent:agent teleport to player||`` を取得し、**tp** ``||player:チャットコマンド||``の内側にドラッグします。

```blocks
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## ステップ 3

別の ``||player:チャットコマンド||``を取得し、**"fd"** という名前を付けます。

```blocks
player.onChat("fd", function () {
})
```

## ステップ 4

``||agent:agent move||`` を取得し、**forward by 5** に設定します。

```blocks
player.onChat("fd", function () {
    agent.move(FORWARD, 5)
})
```

## ステップ 5

別の ``||player:チャットコマンド||``を取得し、**"lt"** という名前を付けます。

```blocks
player.onChat("lt", function () {
})
```

## ステップ 6

``||agent:agent turn||`` を取得し、**turn left** に設定します。それを ``||player:チャットコマンド||`` **lt** コマンドにドラッグします。

```blocks
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
```

## ステップ 7

別の ``||player:チャットコマンド||``を取得し、**"rt"** という名前を付けます。

```blocks
player.onChat("rt", function () {
    agent.turn(RIGHT_TURN)
})
```

## ステップ 8

別の ``||agent:agent turn||`` ブロックを取得し、**turn right** に設定してから、``||agent:agent||`` **turn right** を ``||player:チャットコマンド||`` **rt** コマンドにドラッグします。

```blocks
player.onChat("rt", function () {
    agent.turn(RIGHT_TURN)
})
```


## ステップ 9

**Play** ボタンを押し、Minecraftに戻り、**t** を押してチャットを開き、コマンド **tp**、**rt**、**lt**、**fd** を一つずつ入力して何が起こるかを見てみましょう。


```blocks
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
player.onChat("fd", function () {
    agent.move(FORWARD, 5)
})
player.onChat("tp", function () {
    agent.teleportToPlayer()
player.onChat("rt", function () { 
    agent.turn(RIGHT_TURN) 

})
```