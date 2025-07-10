# エージェントによる通路破壊: Python


## ステップ 1
``||player:on chat||`` コマンドを作成し、**"destroy"** という名前を付けます。

```python
def on_chat():
    pass
player.on_chat("destroy", on_chat)
```

## ステップ 2
``||player:on chat||`` コマンドの内側に ``||loops:while||`` ループを追加し、エージェントが前方でブロックを ``||agent:detects||`` している間、ループが続くようにします。

```python
def on_chat():
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        pass
player.on_chat("destroy", on_chat)
```

## ステップ 3
``||loops:while||`` ループの内側で、エージェントが **forward** を ``||agent:destroy||`` するようにコーディングします。

```python
def on_chat():
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.destroy(FORWARD)
player.on_chat("destroy", on_chat)
```

## ステップ 4

``||loops:while||`` ループの内側の ``||agent:destroy forward||`` コードの後で、エージェントが **1** ブロック ``||agent:move forward||`` するようにコーディングします。

```python
def on_chat():
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
player.on_chat("destroy", on_chat)
```

## ステップ 5

エージェントが ``||agent:moves forward||`` した後で **up** を ``||agent:destroy||`` するようにコーディングし、そして ``||loops:while||`` ループを **終了** します。

```python
def on_chat():
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(UP)
player.on_chat("destroy", on_chat)
```
## ステップ 6

**実行** ボタンを押して、Minecraftに入り、**t** を入力して **destroy** を試してみましょう。

```python
def on_chat(): 
    while agent.detect(AgentDetection.BLOCK, FORWARD): 
        agent.destroy(FORWARD) 
        agent.move(FORWARD, 1) 
        agent.destroy(UP) 
player.on_chat("destroy", on_chat) 
```

```ghost
agent.teleportToPlayer()
```