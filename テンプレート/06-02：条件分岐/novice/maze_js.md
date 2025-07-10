# エージェントの迷路: Javascript

## ステップ 1

エージェントが前方にブロックを検出するかどうかを評価する ``||logic:if then||`` コマンドを作成します。**true** と評価された場合、左に曲がります。

```javascript
if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    }
```

## ステップ 2

``||logic: if-statement||`` に ``||logic: else||`` 文を追加し、その中に ``||agent:agent move||`` **forward by 1** の指示を含めます。

**NOTE:** 完全な文は ``||logic: if else||`` 文になります。

```javascript
if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
```

## ステップ 3

``||logic: if-else||`` 文を ``||loops: forever||`` ループの中に配置します。これにより、これらのステップは停止するまで続きます。

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
**Play** ボタンを押し、Minecraftでコードを試してみましょう。

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