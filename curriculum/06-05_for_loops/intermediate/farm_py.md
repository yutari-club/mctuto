# 農場(のうじょう): Python

## ステップ 1
``||player:チャットコマンド||`` を作(つく)って、名前(なまえ)を **tp** にします。エージェントが ``||agent:プレイヤーにテレポート||`` するようにコードを書(か)きます。

```python
def on_chat():
    agent.teleport_to_player()
player.on_chat("tp", on_chat)
```

## ステップ 2
``||player:チャットコマンド||``を作(つく)って、名前(なまえ)を **farm** にします。

```python
def on_chat():
    pass
player.on_chat("farm", on_chat)
```

## ステップ 3
``||agent:エージェント||`` が **ニンジン** を **64個(こ)** スロット **1** に設定(せってい)するようにコードを書(か)きます。

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
player.on_chat("farm", on_chat)
```

## ステップ 4
``||loops:for||`` ループを作(つく)って、**2回(かい)** 繰(く)り返(かえ)すようにします。

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(2):
        pass
player.on_chat("farm", on_chat)
```

## ステップ 5
``||loops:for||`` ループの中(なか)で、``||agent:エージェント||`` が **後(うし)ろに7歩(ほ)** 移動(いどう)するようにコードを書(か)きます。

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(2):
        agent.move(BACK, 7)
player.on_chat("farm", on_chat)
```

## ステップ 6
``||agent:エージェント移動(いどう)||`` **後(うし)ろ** の後(あと)に、``||agent:エージェント||`` が **右(みぎ)に4歩(ほ)** 移動(いどう)するようにコードを書(か)きます。

```python
def on_chat():
    agent.set_item(CARROTS, 64, 1)
    for index in range(2):
        agent.move(BACK, 7)
        agent.move(RIGHT, 4)
player.on_chat("farm", on_chat)
```

## ステップ 7
``||loops:for||`` ループを作(つく)って、**7回(かい)** 繰(く)り返(かえ)すようにします。これを最初(さいしょ)の ``||loops:for||`` ループの中(なか)に置(お)きますが、``||agent:エージェント移動(いどう)||`` 後(うし)ろコードの上(うえ)に置(お)きます。

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
中(なか)の ``||loops:for||`` ループの中(なか)で、``||agent:耕(たがや)す||`` を使(つか)って **前(まえ)** を耕(たがや)すようにコードを書(か)きます。

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
``||agent:耕(たがや)す||`` の後(あと)に、``||agent:エージェント||`` が **前(まえ)に1歩(ほ)** 移動(いどう)するようにコードを書(か)きます。

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
``||agent:移動(いどう)||`` 前(まえ)の後(あと)に、``||agent:置(お)く||`` を使(つか)って下(もと)に置(お)くようにコードを書(か)きます。

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
**Play** ボタンを押(お)して、Minecraftに入(はい)って、すべてのイベントをテストしましょう。

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

