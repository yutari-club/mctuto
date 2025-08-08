# エージェントの迷路(めいろ): Python


## ステップ 1

エージェントが前方(ぜんぽう)にブロックを検出(けんしゅつ)するかどうかを評価(ひょうか)する ``||logic: もし〇〇なら||`` 文(ぶん)を作(つく)って。**true** と評価(ひょうか)された場合(ばあい)、左(ひだり)に曲(ま)がります。

```python
if agent.detect(AgentDetection.BLOCK, FORWARD):
    agent.turn(LEFT_TURN)
```

## ステップ 2

``||logic: if||`` 文(ぶん)に ``||でなければ||`` を追加(ついか)し、``||agent:移動(いどう)させる||`` **forward by 1** コマンドの指示(しじ)を含(ふく)めます。

**NOTE:** 完全(かんぜん)な文(ぶん)は ``||logic: if-else||`` 文(ぶん)になります。

```python
        agent.turn(LEFT_TURN)
    else:
        agent.move(FORWARD, 1)
```

## ステップ 3

``||logic: if-else||`` 文(ぶん)を ``||loops: forever||`` ループの中(なか)に置(お)きます。これにより、これらのステップは停止(ていし)するまで続(つづ)きます。

```python
def on_forever():
    if agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.turn(LEFT_TURN)
    else:
        agent.move(FORWARD, 1)
loops.forever(on_forever)
```
## ステップ 5
**Play** ボタンを押(お)し、Minecraftでコードを試(ため)してみましょう。

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