# 木(き)を切(き)る: Python

## ステップ 1

``||player:チャットコマンド||``を作(つく)って、**"tp"** という名前(なまえ)を付(つ)けましょう。

```python
def on_chat():
    pass
player.on_chat("tp", on_chat)
```

## ステップ 2

``||player:chat||`` コマンドの中(なか)で、エージェントがプレイヤーに ``||agent:teleport||`` するようにコードを書(か)きましょう。

```python
def on_chat2():
    agent.teleport_to_player()
player.on_chat("tp", on_chat)
```

## ステップ 3

別(べつ)の ``||player:chat||`` コマンドを作(つく)って、**"chop"** という名前(なまえ)を付(つ)けましょう。

```python
def on_chat3():
    pass
player.on_chat("chop", on_chat)
```

## ステップ 4

新(あたら)しい ``||variable:variable||`` を作(つく)って、**height** という名前(なまえ)を付(つ)けて、**0** に設定(せってい)しましょう。

```python
height = 0
def on_chat():
    agent.turn(LEFT_TURN)
player.on_chat("lt", on_chat)
def on_chat2():
    agent.teleport_to_player()
player.on_chat("tp", on_chat2)
def on_chat3():
    height = 0
player.on_chat("chop", on_chat3)
```

## ステップ 5

**chop** ``||player:チャットコマンド||``の中(なか)の **height** 変数(へんすう)の直下(ちょっか)に、**while the agent detects a block forward** で始(はじ)まる ``||loops:もし〇〇ならくりかえす||``を作(つく)って。

```python
def on_chat3():
    height = 0
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        pass
player.on_chat("chop", on_chat3)
```

## ステップ 6

``||loops:もし〇〇ならくりかえす||``を追加(ついか)して、**height** ``||variable:variable||`` を **height plus 1** の値(ね)に変更(へんこう)します。

```python
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        height += 1
player.on_chat("chop", on_chat3)
```

## ステップ 7

``||loops:もし〇〇ならくりかえす||``の中(なか)で、変数(へんすう) **height** の下(した)に、エージェントが **destroy up** するようにコードを書(か)きましょう。

また、**agent move up by 1** の行(ぎょう)を追加(ついか)します。

```python
        height += 1
        agent.destroy(UP)
        agent.move(UP, 1)
player.on_chat("chop", on_chat3)
```

## ステップ 8

``||loops:もし〇〇ならくりかえす||``の後(あと)に ``||loops:for||`` ループを追加(ついか)しましょう。**height** 変数(へんすう)を ``||loops:くりかえし○○回(かい)||`` ループの **times** 引数(ひきすう)に挿入(そうにゅう)しましょう。

```python
    for index in range(height):
```

## ステップ 9

``||loops:for||`` ループの内側(うちがわ)に、**agent move down by 1** と **agent destroy forward** の行(ぎょう)を追加(ついか)します。

```python
    for index in range(height):
        agent.move(DOWN, 1)
        agent.destroy(FORWARD)
    player.on_chat("chop", on_chat3)
```

## ステップ 10

``||loops:for||`` ループの後(あと)に、エージェントが ``||agent:collect all||`` するようにコードを書(か)きましょう。

```python
    for index in range(height):
        agent.move(DOWN, 1)
        agent.destroy(FORWARD)
    agent.collect_all()
player.on_chat("chop", on_chat3)
```

## ステップ 11

Minecraftに入(はい)り、**t** を押(お)して**tp** と入力(にゅうりょく)し、**chop** と入力(にゅうりょく)してチャットコマンドをテストしてみましょう。

```python
def on_chat(): 

    agent.set_item(CARROTS, 64, 1) 
```