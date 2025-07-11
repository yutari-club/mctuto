# エージェントの迷路: Python

## ステップ 1
``||player:チャットコマンド||``のコードを書いて、**tp** という名前を付けて、エージェントが ``||agent:teleport to player||`` するようにコードを書きます。

```python
def on_chat():
    pass
player.on_chat("fence", on_chat)
```

## ステップ 2

別の ``||player:チャットコマンド||``のコードを書いて、**side1** という名前を付けて、エージェントが ``||agent:place on move||`` するようにコードを書いて、**true** に設定しましょう。``||agent:set item||`` コマンドを追加し、カウントを **64** に設定します。

```python
def on_chat():
    agent.set_assist(PLACE_ON_MOVE, True)
    agent.set_item(GRASS, 64, 1)
player.on_chat("side1", on_chat)
```

## ステップ 3

エージェントが **4** で ``||agent:move forward||`` し、次に **turn left** するようにコードを書きます。

```python
def on_chat2(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.move(FORWARD, 4) 
    agent.turn(LEFT_TURN) 
player.on_chat("side1", on_chat2)
```

## ステップ 4

エージェントが **5** で ``||agent:move forward||``、``||agent:turn||`` **right**、そして再び ``||agent:移動させる||`` **forward by 5** するようにコードを書きます。

```python
def on_chat2(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.move(FORWARD, 4) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
    agent.move(FORWARD, 5) 
 player.on_chat("side1", on_chat2)
```

## ステップ 5

エージェントが ``||agent:place on move||`` し、**false** に設定するようにコードを書きます。

```python
def on_chat2(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.move(FORWARD, 4) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
    agent.move(FORWARD, 5) 
    agent.set_assist(PLACE_ON_MOVE, False) 
 player.on_chat("side1", on_chat2)
```

## ステップ 6

エージェントが ``||agent:turn||`` **left**、``||agent:移動させる||`` **forward by 2**、そして再び ``||agent:turn||`` **left** するようにコードを書きます。

```python
def on_chat2(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.move(FORWARD, 4) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
    agent.move(FORWARD, 5) 
    agent.set_assist(PLACE_ON_MOVE, False) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 2) 
    agent.turn(LEFT_TURN) 
player.on_chat("side1", on_chat2)
```

## ステップ 7

新しい ``||player:チャットコマンド||``のコードを書いて、**side2** という名前を付けます。エージェントが ``||agent:place on move||`` を **true** にするようにコードを書きます。``||agent:set item||`` コマンドを追加し、カウントを **64** に設定します。

```python
def on_chat3(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.set_item(GRASS, 64, 1)
 player.on_chat("side2", on_chat3)
```

## ステップ 8

エージェントが ``||agent:移動させる||`` **forward by 7** し、次に ``||agent:turn||`` **left** するようにコードを書きます。

```python
def on_chat3(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.move(FORWARD, 7) 
    agent.turn(LEFT_TURN) 
player.on_chat("side2", on_chat3)
```

## ステップ 9

エージェントが ``||agent:移動させる||`` **forward by 5** し、次に ``||agent:turn||`` **right** するようにコードを書きます。

```python
def on_chat3(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.move(FORWARD, 7) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
player.on_chat("side2", on_chat3)
```

## ステップ 10

最後に、エージェントが ``||agent:移動させる||`` **forward by 3** するようにコードを書きます。

```python
def on_chat3(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.move(FORWARD, 7) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
    agent.move(FORWARD, 3) 
player.on_chat("side2", on_chat3)
```

## ステップ 11

Minecraftに戻り、**tp** を押して「tp」と入力してから、チャット行に **side2** を押して「side2」と入力して、エージェントが2番目の壁を作るのを見てみましょう。

### 完全なコード:

```python
def on_chat(): 
    agent.teleport_to_player() 
player.on_chat("tp", on_chat) 
def on_chat2(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.move(FORWARD, 4) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
    agent.move(FORWARD, 5) 
    agent.set_assist(PLACE_ON_MOVE, False) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 2) 
    agent.turn(LEFT_TURN) 
player.on_chat("side1", on_chat2) 
def on_chat3(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.move(FORWARD, 7) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
    agent.move(FORWARD, 3) 
player.on_chat("side2", on_chat3)
```