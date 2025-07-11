# エージェントの迷路: ブロック

## ステップ 1
``||player:チャットコマンド||``を作成し、**tp** という名前を付けます。

```blocks
player.onChat("tp", function () {
})
```

## ステップ 2

``||agent:agent teleport to player||`` コマンドを取得し、``||player:チャットコマンド||`` **tp** コマンドの内側にドラッグします。

**NOTE:** このコマンドは、エージェントをあなたの位置に呼ぶために必要です。

```blocks
player.onChat("tp", function () {  
     agent.teleportToPlayer()  
})  
```

## ステップ 3

別の ``||player:チャットコマンド||``を取得し、**side1** という名前を付けます。

```blocks
player.onChat("side1", function () {
})
```

## ステップ 4

``||agent:agent place on move||`` ブロックを取得し、**true** に設定します。それを ``||player:チャットコマンド||`` **side1** コマンドの内側に配置します。

```blocks
player.onChat("side1", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
     
}) 
```

## ステップ 5

``||agent:agent move forward||`` を取得し、**4** に設定します。それを ``||player:チャットコマンド||`` **side1** コマンドの内側の前のコマンドの下に配置します。

```blocks
player.onChat("side1", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
    agent.move(FORWARD, 4)  
})  
```

## ステップ 6

``||agent:agent turn||`` コマンドを追加し、**turn left** に設定します。それを ``||player:チャットコマンド||`` **side1** コマンドにドラッグします。

```blocks
player.onChat("side1", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
    agent.move(FORWARD, 4)  
    agent.turn(LEFT_TURN)  
})  
```

## ステップ 7

別の ``||agent:move forward||`` ブロックを追加し、**5** に設定します。それを ``||player:チャットコマンド||`` **side1** コマンドの内側の前のコマンドの下に配置します。

```blocks
player.onChat("side1", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
    agent.move(FORWARD, 4)  
    agent.turn(LEFT_TURN)  
    agent.move(FORWARD, 5)  
    })  
```

## ステップ 8

別の ``||agent:agent turn||`` ブロックを追加し、**right** に設定します。それを ``||player:チャットコマンド||`` **side1** コマンドの内側の前のコマンドの下に配置します。

```blocks
player.onChat("side1", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
    agent.move(FORWARD, 4)  
    agent.turn(LEFT_TURN)  
    agent.move(FORWARD, 5)
    agent.turn(RIGHT_TURN)    
    })  
```

## ステップ 9

既存の ``||agent:agent move||`` **forward by 5** コマンドを右クリックし、**duplicate** を選択します。複製したエージェントを ``||player:チャットコマンド||`` **side1** コマンドの前のエージェントコマンドの下にドラッグします。

**NOTE:** 複製機能は、ブロックでコーディングする際に時間を節約できます。

```blocks
player.onChat("side1", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
    agent.move(FORWARD, 4)  
    agent.turn(LEFT_TURN)  
    agent.move(FORWARD, 5)  
    agent.turn(RIGHT_TURN)  
    agent.move(FORWARD, 5)  
    })  
```

## ステップ 10

既存の ``||agent:place on move||`` ブロックを複製し、複製したものを ``||player:チャットコマンド||`` **side1** コマンドの前のエージェントコマンドの下にドラッグします。

```blocks
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

## ステップ 11

既存の ``||agent:agent turn||`` **left** コマンドを複製し、複製したものを ``||player:チャットコマンド||`` **side1** コマンドの前のエージェントコマンドの下にドラッグします。

## ステップ 12

既存の ``||agent:agent move||`` **forward** コマンドを複製し、複製したものを ``||player:チャットコマンド||`` **side1** コマンドの前のエージェントコマンドの下にドラッグします。

## ステップ 13

既存の ``||agent:agent turn||`` **left** を複製し、複製したものを ``||player:チャットコマンド||`` **side1** コマンドの前のエージェントコマンドの下にドラッグします。

```blocks
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

## ステップ 14

**Play** ボタンを押し、Minecraftに戻り、**tp** と入力してから、チャット行に **side 1** と入力して、エージェントが最初の壁を作るのを見てみましょう。

## ステップ 15

``||player:チャットコマンド||`` **side1** コマンド全体を複製し、**side2** という名前に変更します。

## ステップ 16

新しい ``||player:チャットコマンド||`` **side2** コマンドから最後の4つのコマンドを削除します。

```blocks
player.onChat("side2", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
    })  
```

## ステップ 17

最初の ``||agent:agent move||`` ブロックを **forward by 7** に、最後の ``||agent:agent move||`` を **forward by 3** に設定します。

## ステップ 18

最後の ``||agent:agent turn||`` コマンドを **left** から **right** に変更します。

## ステップ 19

Minecraftに戻り、**tp** と入力してから、チャット行に **side2** と入力して、エージェントが2番目の壁を作るのを見てみましょう。

```blocks
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