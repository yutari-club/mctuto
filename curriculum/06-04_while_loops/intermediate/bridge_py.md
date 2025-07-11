# 橋を建設: Python


## ステップ 1
``||player:チャットコマンド||``を作って、**"build"** という名前を付けます。

```python
def on_chat():
    pass
player.on_chat("build", on_chat)
```

## ステップ 2
``||player:チャットコマンド||``の中で、エージェントが **オークの板材** を数量 **64**、スロット **1** に設定するようにコードを書きます。

```python
def on_chat():
    agent.set_item(PLANKS_OAK, 64, 1)
player.on_chat("build", on_chat)
```

## ステップ 3
エージェントが **1** ブロック ``||agent:move forward||`` するようにコードを書きます。

```python
def on_chat():
    agent.set_item(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
player.on_chat("build", on_chat)
```

## ステップ 4

``||player:チャットコマンド||``の中で、エージェントが **下** にブロックがないかどうかをチェックする ``||loops:もし〇〇ならくりかえす||``をコードで書きます。

```python
def on_chat():
    agent.set_item(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while not (agent.detect(AgentDetection.BLOCK, DOWN)):
        pass
player.on_chat("build", on_chat)
```

## ステップ 5

``||loops:もし〇〇ならくりかえす||``の中で、エージェントが **下** にブロックを置くようにコードを書きます。

```python
def on_chat():
    agent.set_item(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while not (agent.detect(AgentDetection.BLOCK, DOWN)):
        agent.place(DOWN)
player.on_chat("build", on_chat)
```

## ステップ 6

``||agent:place down||`` コマンドの後で、エージェントが **前に1ブロック** 移動するようにコードを書き、そして ``||loops:もし〇〇ならくりかえす||``を終了します。

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

**実行** ボタンを押して、Minecraftに入り、**t** を押して **build** と入力して試してみましょう。

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