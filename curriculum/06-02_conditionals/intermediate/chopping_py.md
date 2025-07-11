# 木を切る: Python

## ステップ 1

``||player:チャットコマンド||``を作成し、**"tp"** という名前を付けます。

```python
def on_chat():
    pass
player.on_chat("tp", on_chat)
```

## ステップ 2

``||player:chat||`` コマンドの内側で、エージェントがプレイヤーに ``||agent:teleport||`` するようにコーディングします。

```python
def on_chat2():
    agent.teleport_to_player()
player.on_chat("tp", on_chat)
```

## ステップ 3

別の ``||player:chat||`` コマンドを作成し、**"chop"** という名前を付けます。

```python
def on_chat3():
    pass
player.on_chat("chop", on_chat)
```

## ステップ 4

新しい ``||variable:variable||`` を作成し、**height** という名前を付けて、**0** に設定します。

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

**chop** ``||player:チャットコマンド||``の内側の **height** 変数の直下に、**while the agent detects a block forward** で始まる ``||loops:もし〇〇ならくりかえす||``を作成します。

```python
def on_chat3():
    height = 0
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        pass
player.on_chat("chop", on_chat3)
```

## ステップ 6

``||loops:もし〇〇ならくりかえす||``を追加して、**height** ``||variable:variable||`` を **height plus 1** の値に変更します。

```python
    while agent.detect(AgentDetection.BLOCK, FORWARD):
        height += 1
player.on_chat("chop", on_chat3)
```

## ステップ 7

``||loops:もし〇〇ならくりかえす||``の中で、変数 **height** の下に、エージェントが **destroy up** するようにコーディングします。

また、**agent move up by 1** の行を追加します。

```python
        height += 1
        agent.destroy(UP)
        agent.move(UP, 1)
player.on_chat("chop", on_chat3)
```

## ステップ 8

``||loops:もし〇〇ならくりかえす||``の後に ``||loops:for||`` ループを追加します。**height** 変数を ``||loops:くりかえし○○回||`` ループの **times** 引数に挿入します。

```python
    for index in range(height):
```

## ステップ 9

``||loops:for||`` ループの内側に、**agent move down by 1** と **agent destroy forward** の行を追加します。

```python
    for index in range(height):
        agent.move(DOWN, 1)
        agent.destroy(FORWARD)
    player.on_chat("chop", on_chat3)
```

## ステップ 10

``||loops:for||`` ループの後に、エージェントが ``||agent:collect all||`` するようにコーディングします。

```python
    for index in range(height):
        agent.move(DOWN, 1)
        agent.destroy(FORWARD)
    agent.collect_all()
player.on_chat("chop", on_chat3)
```

## ステップ 11

Minecraftに入り、**t** を入力して **tp** と **chop** チャットコマンドをテストしてみましょう。

```python
def on_chat(): 

    agent.set_item(CARROTS, 64, 1) 
```