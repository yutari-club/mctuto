# 農場: Python

## ステップ 1
``||player:チャットコマンド||`` を作って、名前を **tp** にします。エージェントが ``||agent:プレイヤーにテレポート||`` するようにコードを書きます。

```python
def on_chat():
    agent.teleport_to_player()
player.on_chat("tp", on_chat)
```

## ステップ 2
``||player:チャットコマンド||``を作って、名前を **farm** にします。

```python
def on_chat():
    pass
player.on_chat("farm", on_chat)
```

## ステップ 3
``||agent:エージェント||`` が **ニンジン** を **64個** スロット **1** に設定するようにコードを書きます。

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
player.on_chat("farm", on_chat)
```

## ステップ 4
``||loops:for||`` ループを作って、**2回** 繰り返すようにします。

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(2):
        pass
player.on_chat("farm", on_chat)
```

## ステップ 5
``||loops:for||`` ループの中で、``||agent:エージェント||`` が **後ろに7歩** 移動するようにコードを書きます。

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(2):
        agent.move(BACK, 7)
player.on_chat("farm", on_chat)
```

## ステップ 6
``||agent:エージェント移動||`` **後ろ** の後に、``||agent:エージェント||`` が **右に4歩** 移動するようにコードを書きます。

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(2):
        agent.move(BACK, 7)
        agent.move(RIGHT, 4)
player.on_chat("farm", on_chat)
```

## ステップ 7
``||loops:for||`` ループを作って、**7回** 繰り返すようにします。これを最初の ``||loops:for||`` ループの中に置きますが、``||agent:エージェント移動||`` 後ろコードの上に置きます。

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(2):
        for index2 in range(7):
            pass
        agent.move(BACK, 7)
        agent.move(RIGHT, 4)
player.on_chat("farm", on_chat)
```

## ステップ 8
中の ``||loops:for||`` ループの中で、``||agent:耕す||`` を使って **前** を耕すようにコードを書きます。

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(2):
        for index2 in range(7):
            agent.till(FORWARD)
        agent.move(BACK, 7)
        agent.move(RIGHT, 4)
player.on_chat("farm", on_chat)
```

## ステップ 9
``||agent:耕す||`` の後に、``||agent:エージェント||`` が **前に1歩** 移動するようにコードを書きます。

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(2):
        for index2 in range(7):
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
        agent.move(BACK, 7)
        agent.move(RIGHT, 4)
player.on_chat("farm", on_chat)
```

## ステップ 10
``||agent:移動||`` 前の後に、``||agent:置く||`` を使って下に置くようにコードを書きます。

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(2):
        for index2 in range(7):
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        agent.move(BACK, 7)
        agent.move(RIGHT, 4)
player.on_chat("farm", on_chat)
```

## ステップ 11
**Play** ボタンを押して、Minecraftに入って、すべてのイベントをテストしましょう。

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(3):
        for index2 in range(5):
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        agent.move(BACK, 5)
        agent.move(RIGHT, 2)
player.on_chat("farm", on_chat)
```

