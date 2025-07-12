# エージェントの迷路(めいろ): Javascript

## ステップ 1

エージェントが前方(ぜんぽう)にブロックを検出(けんしゅつ)するかどうかを評価(ひょうか)する ``||logic:if then||`` コマンドを作(つく)って。**true** と評価(ひょうか)された場合(ばあい)、左(ひだり)に曲(ま)がります。

```javascript
if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    }
```

## ステップ 2

``||logic: if-statement||`` に ``||logic: else||`` 文(ぶん)を追加(ついか)し、その中(なか)に ``||agent:移動(いどう)させる||`` **forward by 1** の指示(しじ)を含(ふく)めます。

**NOTE:** 完全(かんぜん)な文(ぶん)は ``||logic: if else||`` 文(ぶん)になります。

```javascript
if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
```

## ステップ 3

``||logic: if-else||`` 文(ぶん)を ``||loops: forever||`` ループの中(なか)に置(お)きます。これにより、これらのステップは停止(ていし)するまで続(つづ)きます。

```javascript
loops.forever(function () {
    if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
})
```

## ステップ 5
**Play** ボタンを押(お)し、Minecraftでコードを試(ため)してみましょう。

```ghost 
agent.teleportToPlayer()
```
```javascript
loops.forever(function () {
    if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
})
```