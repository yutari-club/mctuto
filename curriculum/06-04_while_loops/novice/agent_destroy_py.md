# エージェントによる通路破壊: Python


## ステップ 1
``||player:チャットコマンド||``を作成し、**"destroy"** という名前を付けます。

```python
def on_chat():
    pass
player.on_chat("destroy", on_chat)
```

## ステップ 2
``||player:チャットコマンド||``の中に ``||loops:もし〇〇ならくりかえす||``を入れて、エージェントが前にブロックを見つけている間、ループが続くようにします。

```python
def on_chat():
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        pass
player.on_chat("destroy", on_chat)
```

## ステップ 3
``||loops:もし〇〇ならくりかえす||``の中で、エージェントが **前のブロック** を ``||agent:破壊させる||`` するようにコードを書きます。

```python
def on_chat():
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.destroy(FORWARD)
player.on_chat("destroy", on_chat)
```

## ステップ 4

``||loops:もし〇〇ならくりかえす||``の中の ``||agent:destroy forward||`` コードの後で、エージェントが **1** ブロック ``||agent:move forward||`` するようにコードを書きます。

```python
def on_chat():
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
player.on_chat("destroy", on_chat)
```

## ステップ 5

エージェントが ``||agent:moves forward||`` した後で **上のブロック** を ``||agent:破壊させる||`` するようにコードを書き、そして ``||loops:もし〇〇ならくりかえす||``を **終了** します。

```python
def on_chat():
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(UP)
player.on_chat("destroy", on_chat)
```
## ステップ 6

**実行** ボタンを押して、Minecraftに入り、**t** を押して **destroy** と入力して試してみましょう。

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