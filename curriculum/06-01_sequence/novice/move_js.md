# エージェントの移動: JavaScript

## ステップ 1
``||player:チャットコマンド||``をコーディングし、**"tp"** という名前を付けます。

```javascript
player.onChat("tp", function () {
})
```

## ステップ 2

**tp** ``||player:チャットコマンド||``の内側で、エージェントが ``||agent:teleport to player||`` するようにコーディングします。

```javascript
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## ステップ 3

別の ``||player:チャットコマンド||``をコーディングし、**"fd"** という名前を付けます。

```javascript
player.onChat("fd", function () {
})
```

## ステップ 4

``||player:チャットコマンド||`` **fd** コマンドの内側で、エージェントが ``||agent:移動させる||`` するようにコーディングし、**forward by 5** に設定します。

```javascript
player.onChat("fd", function () {
    agent.move(FORWARD, 5)
})
```

## ステップ 5

別の ``||player:チャットコマンド||``をコーディングし、**"lt"** という名前を付けます。

```javascript
player.onChat("lt", function () {
})
```

## ステップ 6

``||player:チャットコマンド||`` **lt** コマンドの内側で、エージェントが ``||agent:turn||`` するようにコーディングし、**turn left** に設定します。

```javascript
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
```

## ステップ 7

さらに別の ``||player:チャットコマンド||``を作成し、**"rt"** という名前を付けます。

```javascript
player.onChat("rt", function () {
    agent.turn(RIGHT_TURN)
})
```

## ステップ 8

**rt** チャットコマンドの内側で、``||agent:agent||`` が **turn right** するようにコーディングします。

```javascript
player.onChat("rt", function () {
    agent.turn(RIGHT_TURN)
})
```

## ステップ 9

**Play** ボタンを押し、Minecraftに戻り、**t** を押してチャットを開き、コマンド **tp**、**rt**、**lt**、**fd** を一つずつ入力して何が起こるかを見てみましょう。

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