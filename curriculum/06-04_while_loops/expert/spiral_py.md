# 螺旋アクティビティ: Python

## ステップ 1
``||player:チャットコマンド||``を作って、**"3"** という名前を付けます。

```python
def on_chat():
    pass
player.on_chat("3", on_chat)
```

## ステップ 2

エージェントが前にあるブロックを調べて、**金** のブロックではない間続く ``||loops:もし〇〇ならくりかえす||``をコードで書きます。

```python
def on_chat():
    while agent.inspect(AgentInspection.BLOCK, FORWARD) != GOLD_BLOCK:
        pass
player.on_chat("3", on_chat)
```

## ステップ 3

``||loops:もし〇〇ならくりかえす||``の中に ``||logic:もし-でなければ||`` 文をコードで書きます。エージェントが **前** にブロックを見つけない場合、**1** ブロック **前** に移動するという条件から始めます。

```python
def on_chat():
    while agent.inspect(AgentInspection.BLOCK, FORWARD) != GOLD_BLOCK:
        if not (agent.detect(AgentDetection.BLOCK, FORWARD)):
            agent.move(FORWARD, 1)
        else:
            pass
player.on_chat("3", on_chat)
```

## ステップ 4

``||logic:もし-でなければ||`` 文の ``||logic:でなければ||`` 句で、``||agent:agent turns||`` **left** するように記述します。

```python
def on_chat():
    while agent.inspect(AgentInspection.BLOCK, FORWARD) != GOLD_BLOCK:
        if not (agent.detect(AgentDetection.BLOCK, FORWARD)):
            agent.move(FORWARD, 1)
        else:
            agent.turn(LEFT_TURN)
player.on_chat("3", on_chat)
```

## ステップ 5
**実行** ボタンを押して、Minecraftに入り、**t** を入力して **spiral** を試してみましょう。

```python
def on_chat(): 
    for index in range(2): 
        while agent.inspect(AgentInspection.BLOCK, FORWARD) != GOLD_BLOCK: 
            if not (agent.detect(AgentDetection.BLOCK, FORWARD)): 
                agent.move(FORWARD, 1) 
            else: 
                agent.turn(LEFT_TURN) 
        agent.move(UP, 3) 
player.on_chat("3", on_chat) 
```
```ghost
agent.teleportToPlayer()
```