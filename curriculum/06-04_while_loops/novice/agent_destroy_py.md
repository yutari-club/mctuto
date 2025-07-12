# エージェントによる通路(つうろ)破壊(はかい): Python


## ステップ 1
``||player:チャットコマンド||``を作成(さくせい)し、**"1"** という名前(なまえ)を付(つ)けます。

```python
def on_chat():
    pass
player.on_chat("1", on_chat)
```

## ステップ 2
``||player:チャットコマンド||``の中(なか)に ``||loops:もし〇〇ならくりかえす||``を入(い)れて、エージェントが前(まえ)にブロックを見(み)つけている間(あいだ)、ループが続(つづ)くようにします。

```python
def on_chat():
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        pass
player.on_chat("1", on_chat)
```

## ステップ 3
``||loops:もし〇〇ならくりかえす||``の中(なか)で、エージェントが **前(まえ)のブロック** を ``||agent:破壊(はかい)させる||`` するようにコードを書(か)きます。

```python
def on_chat():
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.destroy(FORWARD)
player.on_chat("1", on_chat)
```

## ステップ 4

``||loops:もし〇〇ならくりかえす||``の中(なか)の ``||agent:destroy forward||`` コードの後(あと)で、エージェントが **1** ブロック ``||agent:move forward||`` するようにコードを書(か)きます。

```python
def on_chat():
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
player.on_chat("1", on_chat)
```

## ステップ 5

エージェントが ``||agent:moves forward||`` した後(あと)で **上(うえ)のブロック** を ``||agent:破壊(はかい)させる||`` するようにコードを書(か)き、そして ``||loops:もし〇〇ならくりかえす||``を **終了(しゅうりょう)** します。

```python
def on_chat():
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(UP)
player.on_chat("1", on_chat)
```
## ステップ 6

**実行(じっこう)** ボタンを押(お)して、Minecraftに入(はい)り、**t** を押(お)して **destroy** と入力(にゅうりょく)して試(ため)してみましょう。

```python
def on_chat(): 
    while agent.detect(AgentDetection.BLOCK, FORWARD): 
        agent.destroy(FORWARD) 
        agent.move(FORWARD, 1) 
        agent.destroy(UP) 
player.on_chat("1", on_chat) 
```

```ghost
agent.teleportToPlayer()
```