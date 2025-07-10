# 螺旋アクティビティ: Python

## ステップ 1
``||player:on chat||`` コマンドを作成し、**"spiral"** という名前を付けます。

```python
def on_chat():
    pass
player.on_chat("spiral", on_chat)
```

## ステップ 2

エージェントが ``||agent:agent inspects||`` ブロック **forward** が **gold** のブロックと等しくない間の ``||loops:while||`` ループをコーディングします。

```python
def on_chat():
    while agent.inspect(AgentInspection.BLOCK, FORWARD) != GOLD_BLOCK:
        pass
player.on_chat("spiral", on_chat)
```

## ステップ 3

``||loops:while||`` ループの内側に入る ``||logic:if-else||`` 文をコーディングします。エージェントが **forward** でブロックを ``||agent:does NOT detect||`` する場合、**1** ブロック **forward** に ``||agent:moves||`` するという条件から始めます。

```python
def on_chat():
    while agent.inspect(AgentInspection.BLOCK, FORWARD) != GOLD_BLOCK:
        if not (agent.detect(AgentDetection.BLOCK, FORWARD)):
            agent.move(FORWARD, 1)
        else:
            pass
player.on_chat("spiral", on_chat)
```

## ステップ 4

``||logic:if-else||`` 文の ``||logic:else||`` 句で、``||agent:agent turns||`` **left** するように記述します。

```python
def on_chat():
    while agent.inspect(AgentInspection.BLOCK, FORWARD) != GOLD_BLOCK:
        if not (agent.detect(AgentDetection.BLOCK, FORWARD)):
            agent.move(FORWARD, 1)
        else:
            agent.turn(LEFT_TURN)
player.on_chat("spiral", on_chat)
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
player.on_chat("spiral", on_chat) 
```
```ghost
agent.teleportToPlayer()
```