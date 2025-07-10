# エージェントの移動: Python

## ステップ 1
``||player:on chat||`` コマンドをコーディングし、**"tp"** という名前を付けます。

```python
def on_chat():
    pass
player.on_chat("tp", on_chat)
```

## ステップ 2

**tp** ``||player:on chat||`` コマンドの内側で、エージェントが ``||agent:teleport to player||`` するようにコーディングします。

```python
def on_chat():
    agent.teleport_to_player()
player.on_chat("tp", on_chat)
```

## ステップ 3

別の ``||player:on chat||`` コマンドをコーディングし、**"fd"** という名前を付けます。

```python
def on_chat2():
    pass
player.on_chat("fd", on_chat)
```

## ステップ 4

``||player:on chat||`` **fd** コマンドの内側で、エージェントが ``||agent:move||`` するようにコーディングし、**forward by 5** に設定します。

```python
def on_chat2():
    agent.move(FORWARD, 5)
player.on_chat("fd", on_chat2)
```

## ステップ 5

別の ``||player:on chat||`` コマンドをコーディングし、**"lt"** という名前を付けます。

```python
def on_chat3():
        pass
player.on_chat("lt", on_chat3)
```

## ステップ 6

``||player:on chat||`` **lt** コマンドの内側で、エージェントが ``||agent:turn||`` するようにコーディングし、**turn left** に設定します。

```python
def on_chat3():
        agent.turn(LEFT_TURN)
player.on_chat("lt", on_chat3)
```

## ステップ 7

さらに別の ``||player:on chat||`` コマンドを作成し、**rt** という名前を付けます。

```python
def on_chat4():
        pass
player.on_chat("rt", on_chat4)
```

## ステップ 8

**rt** チャットコマンドの内側で、``||agent||`` が **turn right** するようにコーディングします。

```python
def on_chat4():
        agent.turn(RIGHT_TURN)
player.on_chat("rt", on_chat4)
```

## ステップ 9

**Play** ボタンを押し、Minecraftに戻り、**t** を押してチャットを開き、コマンド **tp**、**rt**、**lt**、**fd** を一つずつ入力して何が起こるかを見てみましょう。

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