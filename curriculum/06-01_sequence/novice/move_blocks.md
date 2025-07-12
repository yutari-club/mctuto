# エージェントの移動(いどう): ブロック

## ステップ 1
``||player:チャットコマンド||``を作(つく)って、**"tp"** という名前(なまえ)を付(つ)けます。

```blocks
player.onChat("tp", function () {
})
```

## ステップ 2

``||agent:agent teleport to player||`` を取(と)って、**tp** ``||player:チャットコマンド||``の中(なか)にドラッグしましょう。

```blocks
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## ステップ 3

別(べつ)の ``||player:チャットコマンド||``を取(と)って、**"fd"** という名前(なまえ)を付(つ)けます。

```blocks
player.onChat("fd", function () {
})
```

## ステップ 4

``||agent:移動(いどう)させる||`` を取(と)って、**forward by 5** に設定(せってい)しましょう。

```blocks
player.onChat("fd", function () {
    agent.move(FORWARD, 5)
})
```

## ステップ 5

別(べつ)の ``||player:チャットコマンド||``を取(と)って、**"lt"** という名前(なまえ)を付(つ)けます。

```blocks
player.onChat("lt", function () {
})
```

## ステップ 6

``||agent:agent turn||`` を取(と)って、**turn left** に設定(せってい)しましょう。それを ``||player:チャットコマンド||`` **lt** コマンドにドラッグしましょう。

```blocks
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
```

## ステップ 7

別(べつ)の ``||player:チャットコマンド||``を取(と)って、**"rt"** という名前(なまえ)を付(つ)けます。

```blocks
player.onChat("rt", function () {
    agent.turn(RIGHT_TURN)
})
```

## ステップ 8

別(べつ)の ``||agent:agent turn||`` ブロックを取(と)って、**turn right** に設定(せってい)してから、``||agent:agent||`` **turn right** を ``||player:チャットコマンド||`` **rt** コマンドにドラッグしましょう。

```blocks
player.onChat("rt", function () {
    agent.turn(RIGHT_TURN)
})
```


## ステップ 9

**Play** ボタンを押(お)し、Minecraftに戻(もど)り、**t** を押(お)してチャットを開(ひら)いて、コマンド **tp**、**rt**、**lt**、**fd** を一(ひと)つずつ入力(にゅうりょく)して何(なに)が起(お)こるかを見(み)てみましょう。


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