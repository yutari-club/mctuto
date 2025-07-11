# エージェントの迷路: Python


## ステップ 1

エージェントが前方にブロックを検出するかどうかを評価する ``||logic: if then||`` 文を作って。**true** と評価された場合、左に曲がります。

```python
if agent.detect(AgentDetection.BLOCK, FORWARD):
    agent.turn(LEFT_TURN)
```

## ステップ 2

``||logic: if||`` 文に ``||logic: else||`` を追加し、``||agent:移動させる||`` **forward by 1** コマンドの指示を含めます。

**NOTE:** 完全な文は ``||logic: if-else||`` 文になります。

```python
        agent.turn(LEFT_TURN)
    else:
        agent.move(FORWARD, 1)
```

## ステップ 3

``||logic: if-else||`` 文を ``||loops: forever||`` ループの中に置きます。これにより、これらのステップは停止するまで続きます。

```python
def on_forever():
    if agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.turn(LEFT_TURN)
    else:
        agent.move(FORWARD, 1)
loops.forever(on_forever)
```
## ステップ 5
**Play** ボタンを押し、Minecraftでコードを試してみましょう。

```ghost
agent.teleportToPlayer()
```
```python
def on_forever():
    if agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.turn(LEFT_TURN)
    else:
        agent.move(FORWARD, 1)
loops.forever(on_forever)
```