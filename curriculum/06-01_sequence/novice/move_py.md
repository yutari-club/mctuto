# エージェントの移動(いどう): Python

## ステップ 1
``||player:チャットコマンド||``のコードを書(か)いて、**"tp"** という名前(なまえ)を付(つ)けます。

```python
def on_chat():
    pass
player.on_chat("tp", on_chat)
```

## ステップ 2

**tp** ``||player:チャットコマンド||``の中(なか)で、エージェントが ``||agent:teleport to player||`` するようにコードを書(か)きます。

```python
def on_chat():
    agent.teleport_to_player()
player.on_chat("tp", on_chat)
```

## ステップ 3

別(べつ)の ``||player:チャットコマンド||``のコードを書(か)いて、**"fd"** という名前(なまえ)を付(つ)けます。

```python
def on_chat2():
    pass
player.on_chat("fd", on_chat)
```

## ステップ 4

``||player:チャットコマンド||`` **fd** コマンドの中(なか)で、エージェントが ``||agent:移動(いどう)させる||`` するようにコードを書(か)いて、**forward by 5** に設定(せってい)しましょう。

```python
def on_chat2():
    agent.move(FORWARD, 5)
player.on_chat("fd", on_chat2)
```

## ステップ 5

別(べつ)の ``||player:チャットコマンド||``のコードを書(か)いて、**"lt"** という名前(なまえ)を付(つ)けます。

```python
def on_chat3():
        pass
player.on_chat("lt", on_chat3)
```

## ステップ 6

``||player:チャットコマンド||`` **lt** コマンドの中(なか)で、エージェントが ``||agent:turn||`` するようにコードを書(か)いて、**turn left** に設定(せってい)しましょう。

```python
def on_chat3():
        agent.turn(LEFT_TURN)
player.on_chat("lt", on_chat3)
```

## ステップ 7

さらに別(べつ)の ``||player:チャットコマンド||``を作(つく)って、**rt** という名前(なまえ)を付(つ)けます。

```python
def on_chat4():
        pass
player.on_chat("rt", on_chat4)
```

## ステップ 8

**rt** チャットコマンドの中(なか)で、``||agent||`` が **turn right** するようにコードを書(か)きます。

```python
def on_chat4():
        agent.turn(RIGHT_TURN)
player.on_chat("rt", on_chat4)
```

## ステップ 9

**Play** ボタンを押(お)し、Minecraftに戻(もど)り、**t** を押(お)してチャットを開(ひら)いて、コマンド **tp**、**rt**、**lt**、**fd** を一(ひと)つずつ入力(にゅうりょく)して何(なに)が起(お)こるかを見(み)てみましょう。

```python
def on_chat():
        agent.teleport_to_player()
player.on_chat("tp", on_chat)
def on_chat2():
    agent.move(FORWARD, 5)
player.on_chat("fd", on_chat2)
def on_chat3():
        agent.turn(LEFT_TURN)
player.on_chat("lt", on_chat3)
def on_chat4():
        agent.turn(RIGHT_TURN)
player.on_chat("rt", on_chat4)
```