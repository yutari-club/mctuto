# エージェントの移動: JavaScript

## ステップ 1
``||player:チャットコマンド||``のコードを書いて、**"tp"** という名前を付けます。

```javascript
player.onChat("tp", function () {
})
```

## ステップ 2

**tp** ``||player:チャットコマンド||``の中で、エージェントが ``||agent:teleport to player||`` するようにコードを書きます。

```javascript
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## ステップ 3

別の ``||player:チャットコマンド||``のコードを書いて、**"fd"** という名前を付けます。

```javascript
player.onChat("fd", function () {
})
```

## ステップ 4

``||player:チャットコマンド||`` **fd** コマンドの中で、エージェントが ``||agent:移動させる||`` するようにコードを書いて、**forward by 5** に設定しましょう。

```javascript
player.onChat("fd", function () {
    agent.move(FORWARD, 5)
})
```

## ステップ 5

別の ``||player:チャットコマンド||``のコードを書いて、**"lt"** という名前を付けます。

```javascript
player.onChat("lt", function () {
})
```

## ステップ 6

``||player:チャットコマンド||`` **lt** コマンドの中で、エージェントが ``||agent:turn||`` するようにコードを書いて、**turn left** に設定しましょう。

```javascript
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
```

## ステップ 7

さらに別の ``||player:チャットコマンド||``を作って、**"rt"** という名前を付けます。

```javascript
player.onChat("rt", function () {
    agent.turn(RIGHT_TURN)
})
```

## ステップ 8

**rt** チャットコマンドの中で、``||agent:agent||`` が **turn right** するようにコードを書きます。

```javascript
player.onChat("rt", function () {
    agent.turn(RIGHT_TURN)
})
```

## ステップ 9

**Play** ボタンを押し、Minecraftに戻り、**t** を押してチャットを開いて、コマンド **tp**、**rt**、**lt**、**fd** を一つずつ入力して何が起こるかを見てみましょう。

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