# 螺旋(らせん)アクティビティ: Python

## ステップ 1
``||player:チャットコマンド||``を作(つく)って、**"3"** という名前(なまえ)を付(つ)けます。

```python
def on_chat():
    pass
player.on_chat("3", on_chat)
```

## ステップ 2

エージェントが前(まえ)にあるブロックを調(しら)べて、**金(きん)** のブロックではない間(あいだ)続(つづ)く ``||loops:もし〇〇ならくりかえす||``をコードで書(か)きます。

```python
def on_chat():
    while agent.inspect(AgentInspection.BLOCK, FORWARD) != GOLD_BLOCK:
        pass
player.on_chat("3", on_chat)
```

## ステップ 3

``||loops:もし〇〇ならくりかえす||``の中(なか)に ``||logic:もし-でなければ||`` 文(ぶん)をコードで書(か)きます。エージェントが **前(まえ)** にブロックを見(み)つけない場合(ばあい)、**1** ブロック **前(まえ)** に移動(いどう)するという条件(じょうけん)から始(はじ)めます。

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

``||logic:もし-でなければ||`` 文(ぶん)の ``||logic:でなければ||`` 句(く)で、``||agent:agent turns||`` **left** するように記述(きじゅつ)します。

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
**実行(じっこう)** ボタンを押(お)して、Minecraftに入(はい)り、**t** を入力(にゅうりょく)して **spiral** を試(ため)してみましょう。

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