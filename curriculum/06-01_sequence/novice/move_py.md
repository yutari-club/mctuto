# エージェントの移動: Python

## ステップ 1
``||player:チャットコマンド||``のコードを書いて、**"tp"** という名前を付けます。

```python
def on_chat():
    pass
player.on_chat("tp", on_chat)
```

## ステップ 2

**tp** ``||player:チャットコマンド||``の中で、エージェントが ``||agent:teleport to player||`` するようにコードを書きます。

```python
def on_chat():
    agent.teleport_to_player()
player.on_chat("tp", on_chat)
```

## ステップ 3

別の ``||player:チャットコマンド||``のコードを書いて、**"fd"** という名前を付けます。

```python
def on_chat2():
    pass
player.on_chat("fd", on_chat)
```

## ステップ 4

``||player:チャットコマンド||`` **fd** コマンドの中で、エージェントが ``||agent:移動させる||`` するようにコードを書いて、**forward by 5** に設定しましょう。

```python
def on_chat2():
    agent.move(FORWARD, 5)
player.on_chat("fd", on_chat2)
```

## ステップ 5

別の ``||player:チャットコマンド||``のコードを書いて、**"lt"** という名前を付けます。

```python
def on_chat3():
        pass
player.on_chat("lt", on_chat3)
```

## ステップ 6

``||player:チャットコマンド||`` **lt** コマンドの中で、エージェントが ``||agent:turn||`` するようにコードを書いて、**turn left** に設定しましょう。

```python
def on_chat3():
        agent.turn(LEFT_TURN)
player.on_chat("lt", on_chat3)
```

## ステップ 7

さらに別の ``||player:チャットコマンド||``を作って、**rt** という名前を付けます。

```python
def on_chat4():
        pass
player.on_chat("rt", on_chat4)
```

## ステップ 8

**rt** チャットコマンドの中で、``||agent||`` が **turn right** するようにコードを書きます。

```python
def on_chat4():
        agent.turn(RIGHT_TURN)
player.on_chat("rt", on_chat4)
```

## ステップ 9

**Play** ボタンを押し、Minecraftに戻り、**t** を押してチャットを開いて、コマンド **tp**、**rt**、**lt**、**fd** を一つずつ入力して何が起こるかを見てみましょう。

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