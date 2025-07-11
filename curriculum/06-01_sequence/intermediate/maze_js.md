# エージェントの迷路: JavaScript

## ステップ 1
``||player:チャットコマンド||``をコーディングし、**tp** という名前を付けて、エージェントが ``||agent:teleport to player||`` するようにコーディングします。

```javascript
player.onChat("tp", function () {
})
```

## ステップ 2

別の ``||player:チャットコマンド||``をコーディングし、**side1** という名前を付けて、エージェントが ``||agent:place on move||`` するようにコーディングし、**true** に設定します。``||agent:agent set item||`` コマンドを追加し、カウントを **64** に設定します。

```javascript
player.onChat("side1", function () { 
    agent.setAssist(PLACE_ON_MOVE, true)
    agent.setItem(GRASS, 64, 1) 
   
}) 
```

## ステップ 3

エージェントが **4** で ``||agent:move forward||`` し、次に **turn left** するようにコーディングします。

```javascript
player.onChat("side1", function () { 
    agent.setAssist(PLACE_ON_MOVE, true) 
    agent.move(FORWARD, 4) 
    agent.turn(LEFT_TURN) 
}) 
```

## ステップ 4

エージェントが **5** で ``||agent:move forward||``、``||agent:agent turn||`` **right**、そして再び ``||agent:agent move||`` **forward by 5** するようにコーディングします。

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

エージェントが ``||agent:place on move||`` し、**false** に設定するようにコーディングします。

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

エージェントが ``||agent:turn||`` **left**、``||agent:移動させる||`` **forward by 2**、そして再び ``||agent:turn||`` **left** するようにコーディングします。

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

新しい ``||player:チャットコマンド||``をコーディングし、**side2** という名前を付けます。エージェントが ``||agent:place on move||`` を **true** にするようにコーディングします。``||agent:agent set item||`` コマンドを追加し、カウントを **64** に設定します。

```javascript
player.onChat("side2", function () { 
    agent.setAssist(PLACE_ON_MOVE, true) 
    agent.setItem(GRASS, 64, 1) 
    }) 
```

## ステップ 8

エージェントが ``||agent:移動させる||`` **forward by 7** し、次に ``||agent:turn||`` **left** するようにコーディングします。

```javascript
player.onChat("side2", function () { 
    agent.setAssist(PLACE_ON_MOVE, true) 
    agent.move(FORWARD, 7) 
    agent.turn(LEFT_TURN) 
})
```

## ステップ 9

エージェントが ``||agent:移動させる||`` **forward by 5** し、次に ``||agent:turn||`` **right** するようにコーディングします。

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

最後に、エージェントが ``||agent:移動させる||`` **forward by 3** するようにコーディングします。

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

Minecraftに戻り、**tp** と入力してから、チャット行に **side2** と入力して、エージェントが2番目の壁を作るのを見てみましょう。

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