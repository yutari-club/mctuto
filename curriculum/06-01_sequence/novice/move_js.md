# エージェントの移動(いどう): JavaScript

## ステップ 1
``||player:チャットコマンド||``のコードを書(か)いて、**"tp"** という名前(なまえ)を付(つ)けます。

```javascript
player.onChat("tp", function () {
})
```

## ステップ 2

**tp** ``||player:チャットコマンド||``の中(なか)で、エージェントが ``||agent:teleport to player||`` するようにコードを書(か)きます。

```javascript
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## ステップ 3

別(べつ)の ``||player:チャットコマンド||``のコードを書(か)いて、**"fd"** という名前(なまえ)を付(つ)けます。

```javascript
player.onChat("fd", function () {
})
```

## ステップ 4

``||player:チャットコマンド||`` **fd** コマンドの中(なか)で、エージェントが ``||agent:移動(いどう)させる||`` するようにコードを書(か)いて、**forward by 5** に設定(せってい)しましょう。

```javascript
player.onChat("fd", function () {
    agent.move(FORWARD, 5)
})
```

## ステップ 5

別(べつ)の ``||player:チャットコマンド||``のコードを書(か)いて、**"lt"** という名前(なまえ)を付(つ)けます。

```javascript
player.onChat("lt", function () {
})
```

## ステップ 6

``||player:チャットコマンド||`` **lt** コマンドの中(なか)で、エージェントが ``||agent:turn||`` するようにコードを書(か)いて、**turn left** に設定(せってい)しましょう。

```javascript
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
```

## ステップ 7

さらに別(べつ)の ``||player:チャットコマンド||``を作(つく)って、**"rt"** という名前(なまえ)を付(つ)けます。

```javascript
player.onChat("rt", function () {
    agent.turn(RIGHT_TURN)
})
```

## ステップ 8

**rt** チャットコマンドの中(なか)で、``||agent:agent||`` が **turn right** するようにコードを書(か)きます。

```javascript
player.onChat("rt", function () {
    agent.turn(RIGHT_TURN)
})
```

## ステップ 9

**Play** ボタンを押(お)し、Minecraftに戻(もど)り、**t** を押(お)してチャットを開(ひら)いて、コマンド **tp**、**rt**、**lt**、**fd** を一(ひと)つずつ入力(にゅうりょく)して何(なに)が起(お)こるかを見(み)てみましょう。

```javascript
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