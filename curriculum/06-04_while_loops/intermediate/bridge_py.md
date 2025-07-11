# 橋を建設: Python


## ステップ 1
``||player:チャットコマンド||``を作成し、**"build"** という名前を付けます。

```python
def on_chat():
    pass
player.on_chat("build", on_chat)
```

## ステップ 2
``||player:チャットコマンド||``の内側で、エージェントが **oak wood planks** の ``||agent:set a block||`` を数量 **64**、スロット **1** に設定するようにコーディングします。

```python
def on_chat():
    agent.set_item(PLANKS_OAK, 64, 1)
player.on_chat("build", on_chat)
```

## ステップ 3
エージェントが **1** ブロック ``||agent:move forward||`` するようにコーディングします。

```python
def on_chat():
    agent.set_item(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
player.on_chat("build", on_chat)
```

## ステップ 4

``||player:チャットコマンド||``の内側で、エージェントが **down** で ``||agent:not detect a block||`` かどうかをチェックすることから始まる ``||loops:もし〇〇ならくりかえす||``をコーディングします。

```python
def on_chat():
    agent.set_item(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while not (agent.detect(AgentDetection.BLOCK, DOWN)):
        pass
player.on_chat("build", on_chat)
```

## ステップ 5

``||loops:もし〇〇ならくりかえす||``の内側で、``||agent:agent to place||`` **down** するようにコーディングします。

```python
def on_chat():
    agent.set_item(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while not (agent.detect(AgentDetection.BLOCK, DOWN)):
        agent.place(DOWN)
player.on_chat("build", on_chat)
```

## ステップ 6

``||agent:place down||`` コマンドの後で、``||agent:agent to move||`` **forward by 1** するようにコーディングし、そして ``||loops:もし〇〇ならくりかえす||``を終了します。

```python
def on_chat():
    agent.set_item(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while not (agent.detect(AgentDetection.BLOCK, DOWN)):
        agent.place(DOWN)
        agent.move(FORWARD, 1)
player.on_chat("build", on_chat)
```
## ステップ 7

**実行** ボタンを押して、Minecraftに入り、**t** を入力して **build** を試してみましょう。

```python
def on_chat(): 
    agent.set_item(PLANKS_OAK, 64, 1) 
    agent.move(FORWARD, 1) 
    while not (agent.detect(AgentDetection.BLOCK, DOWN)): 
        agent.place(DOWN) 
        agent.move(FORWARD, 1) 
player.on_chat("build", on_chat) 
```

```ghost
agent.teleportToPlayer()
```