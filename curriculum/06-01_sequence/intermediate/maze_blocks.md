# エージェントの迷路(めいろ): ブロック

## ステップ 1
``||player:チャットコマンド||``を作(つく)って、**tp** という名前(なまえ)を付(つ)けます。

```blocks
player.onChat("tp", function () {
})
```

## ステップ 2

``||agent:agent teleport to player||`` コマンドを取(と)って、``||player:チャットコマンド||`` **tp** コマンドの中(なか)にドラッグしましょう。

**NOTE:** このコマンドは、エージェントをあなたの位置(いち)に呼(よ)ぶために必要(ひつよう)です。

```blocks
player.onChat("tp", function () {  
     agent.teleportToPlayer()  
})  
```

## ステップ 3

別(べつ)の ``||player:チャットコマンド||``を取(と)って、**side1** という名前(なまえ)を付(つ)けます。

```blocks
player.onChat("side1", function () {
})
```

## ステップ 4

``||agent:agent place on move||`` ブロックを取(と)って、**true** に設定(せってい)しましょう。それを ``||player:チャットコマンド||`` **side1** コマンドの中(なか)に置(お)きます。

```blocks
player.onChat("side1", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
     
}) 
```

## ステップ 5

``||agent:agent move forward||`` を取(と)って、**4** に設定(せってい)しましょう。それを ``||player:チャットコマンド||`` **side1** コマンドの中(なか)の前(まえ)のコマンドの下(もと)に置(お)きます。

```blocks
player.onChat("side1", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
    agent.move(FORWARD, 4)  
})  
```

## ステップ 6

``||agent:agent turn||`` コマンドを追加(ついか)し、**turn left** に設定(せってい)しましょう。それを ``||player:チャットコマンド||`` **side1** コマンドにドラッグしましょう。

```blocks
player.onChat("side1", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
    agent.move(FORWARD, 4)  
    agent.turn(LEFT_TURN)  
})  
```

## ステップ 7

別(べつ)の ``||agent:move forward||`` ブロックを追加(ついか)し、**5** に設定(せってい)しましょう。それを ``||player:チャットコマンド||`` **side1** コマンドの中(なか)の前(まえ)のコマンドの下(もと)に置(お)きます。

```blocks
player.onChat("side1", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
    agent.move(FORWARD, 4)  
    agent.turn(LEFT_TURN)  
    agent.move(FORWARD, 5)  
    })  
```

## ステップ 8

別(べつ)の ``||agent:agent turn||`` ブロックを追加(ついか)し、**right** に設定(せってい)しましょう。それを ``||player:チャットコマンド||`` **side1** コマンドの中(なか)の前(まえ)のコマンドの下(もと)に置(お)きます。

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

既存(きそん)の ``||agent:移動(いどう)させる||`` **forward by 5** コマンドを右(みぎ)クリックし、**duplicate** を選択(せんたく)します。複製(ふくせい)したエージェントを ``||player:チャットコマンド||`` **side1** コマンドの前(まえ)のエージェントコマンドの下(した)にドラッグしましょう。

**NOTE:** 複製(ふくせい)機能(きのう)は、ブロックでコードを書(か)く際(さい)に時間(じかん)を節約(せつやく)できます。

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

既存(きそん)の ``||agent:place on move||`` ブロックを複製(ふくせい)し、複製(ふくせい)したものを ``||player:チャットコマンド||`` **side1** コマンドの前(まえ)のエージェントコマンドの下(した)にドラッグしましょう。

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

既存(きそん)の ``||agent:agent turn||`` **left** コマンドを複製(ふくせい)し、複製(ふくせい)したものを ``||player:チャットコマンド||`` **side1** コマンドの前(まえ)のエージェントコマンドの下(した)にドラッグしましょう。

## ステップ 12

既存(きそん)の ``||agent:移動(いどう)させる||`` **forward** コマンドを複製(ふくせい)し、複製(ふくせい)したものを ``||player:チャットコマンド||`` **side1** コマンドの前(まえ)のエージェントコマンドの下(した)にドラッグしましょう。

## ステップ 13

既存(きそん)の ``||agent:agent turn||`` **left** を複製(ふくせい)し、複製(ふくせい)したものを ``||player:チャットコマンド||`` **side1** コマンドの前(まえ)のエージェントコマンドの下(した)にドラッグしましょう。

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

**Play** ボタンを押(お)し、Minecraftに戻(もど)り、**tp** を押(お)して「tp」と入力(にゅうりょく)してから、チャット行(いき)に **side 1** を押(お)して「side1」と入力(にゅうりょく)して、エージェントが最初(さいしょ)の壁(かべ)を作(つく)るのを見(み)てみましょう。

## ステップ 15

``||player:チャットコマンド||`` **side1** コマンド全体(ぜんたい)を複製(ふくせい)し、**side2** という名前(なまえ)に変更(へんこう)します。

## ステップ 16

新(あたら)しい ``||player:チャットコマンド||`` **side2** コマンドから最後(さいご)の4つのコマンドを削除(さくじょ)します。

```blocks
player.onChat("side2", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
    })  
```

## ステップ 17

最初(さいしょ)の ``||agent:移動(いどう)させる||`` ブロックを **forward by 7** に、最後(さいご)の ``||agent:移動(いどう)させる||`` を **forward by 3** に設定(せってい)します。

## ステップ 18

最後(さいご)の ``||agent:agent turn||`` コマンドを **left** から **right** に変更(へんこう)します。

## ステップ 19

Minecraftに戻(もど)り、**tp** を押(お)して「tp」と入力(にゅうりょく)してから、チャット行(いき)に **side2** を押(お)して「side2」と入力(にゅうりょく)して、エージェントが2番目(ばんめ)の壁(かべ)を作(つく)るのを見(み)てみましょう。

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