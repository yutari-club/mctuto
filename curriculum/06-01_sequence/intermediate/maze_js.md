# エージェントの迷路(めいろ): JavaScript

## ステップ 1
``||player:チャットコマンド||``のコードを書(か)いて、**tp** という名前(なまえ)を付(つ)けて、エージェントが ``||agent:teleport to player||`` するようにコードを書(か)きます。

```javascript
player.onChat("tp", function () {
})
```

## ステップ 2

別(べつ)の ``||player:チャットコマンド||``のコードを書(か)いて、**side1** という名前(なまえ)を付(つ)けて、エージェントが ``||agent:place on move||`` するようにコードを書(か)いて、**true** に設定(せってい)しましょう。``||agent:agent set item||`` コマンドを追加(ついか)し、カウントを **64** に設定(せってい)します。

```javascript
player.onChat("side1", function () { 
    agent.setAssist(PLACE_ON_MOVE, true)
    agent.setItem(GRASS, 64, 1) 
   
}) 
```

## ステップ 3

エージェントが **4** で ``||agent:move forward||`` し、次(つぎ)に **turn left** するようにコードを書(か)きます。

```javascript
player.onChat("side1", function () { 
    agent.setAssist(PLACE_ON_MOVE, true) 
    agent.move(FORWARD, 4) 
    agent.turn(LEFT_TURN) 
}) 
```

## ステップ 4

エージェントが **5** で ``||agent:move forward||``、``||agent:agent turn||`` **right**、そして再(ふたた)び ``||agent:移動(いどう)させる||`` **forward by 5** するようにコードを書(か)きます。

```javascript
player.onChat("side1", function () { 
    agent.setAssist(PLACE_ON_MOVE, true) 
    agent.move(FORWARD, 4) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
    agent.move(FORWARD, 5) 
    })
```

## ステップ 5

エージェントが ``||agent:place on move||`` し、**false** に設定(せってい)するようにコードを書(か)きます。

```javascript
player.onChat("side1", function () { 
    agent.setAssist(PLACE_ON_MOVE, true) 
    agent.move(FORWARD, 4) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
    agent.move(FORWARD, 5) 
    agent.setAssist(PLACE_ON_MOVE, false) 
    }) 
```

## ステップ 6

エージェントが ``||agent:turn||`` **left**、``||agent:移動(いどう)させる||`` **forward by 2**、そして再(ふたた)び ``||agent:turn||`` **left** するようにコードを書(か)きます。

```javascript
player.onChat("side1", function () { 
    agent.setAssist(PLACE_ON_MOVE, true) 
    agent.move(FORWARD, 4) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
    agent.move(FORWARD, 5) 
    agent.setAssist(PLACE_ON_MOVE, false) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 2) 
    agent.turn(LEFT_TURN) 
})
```

## ステップ 7

新(あたら)しい ``||player:チャットコマンド||``のコードを書(か)いて、**side2** という名前(なまえ)を付(つ)けます。エージェントが ``||agent:place on move||`` を **true** にするようにコードを書(か)きます。``||agent:agent set item||`` コマンドを追加(ついか)し、カウントを **64** に設定(せってい)します。

```javascript
player.onChat("side2", function () { 
    agent.setAssist(PLACE_ON_MOVE, true) 
    agent.setItem(GRASS, 64, 1) 
    }) 
```

## ステップ 8

エージェントが ``||agent:移動(いどう)させる||`` **forward by 7** し、次(つぎ)に ``||agent:turn||`` **left** するようにコードを書(か)きます。

```javascript
player.onChat("side2", function () { 
    agent.setAssist(PLACE_ON_MOVE, true) 
    agent.move(FORWARD, 7) 
    agent.turn(LEFT_TURN) 
})
```

## ステップ 9

エージェントが ``||agent:移動(いどう)させる||`` **forward by 5** し、次(つぎ)に ``||agent:turn||`` **right** するようにコードを書(か)きます。

```javascript
player.onChat("side2", function () { 
    agent.setAssist(PLACE_ON_MOVE, true) 
    agent.move(FORWARD, 7) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
})
```

## ステップ 10

最後(さいご)に、エージェントが ``||agent:移動(いどう)させる||`` **forward by 3** するようにコードを書(か)きます。

```javascript
player.onChat("side2", function () { 
    agent.setAssist(PLACE_ON_MOVE, true) 
    agent.move(FORWARD, 7) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
})
```

## ステップ 11

Minecraftに戻(もど)り、**tp** を押(お)して「tp」と入力(にゅうりょく)してから、チャット行(いき)に **side2** を押(お)して「side2」と入力(にゅうりょく)して、エージェントが2番目(ばんめ)の壁(かべ)を作(つく)るのを見(み)てみましょう。

```javascript
player.onChat("tp", function () { 
    agent.teleportToPlayer() 
}) 
player.onChat("side1", function () { 
    agent.setAssist(PLACE_ON_MOVE, true) 
    agent.move(FORWARD, 4) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
    agent.move(FORWARD, 5) 
    agent.setAssist(PLACE_ON_MOVE, false) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 2) 
    agent.turn(LEFT_TURN) 
}) 
player.onChat("side2", function () { 
    agent.setAssist(PLACE_ON_MOVE, true) 
    agent.move(FORWARD, 7) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
    agent.move(FORWARD, 3) 
})
```