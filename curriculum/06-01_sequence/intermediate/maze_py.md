# エージェントの迷路(めいろ): Python

## ステップ 1
``||player:チャットコマンド||``のコードを書(か)いて、**tp** という名前(なまえ)を付(つ)けて、エージェントが ``||agent:teleport to player||`` するようにコードを書(か)きます。

```python
def on_chat():
    pass
player.on_chat("fence", on_chat)
```

## ステップ 2

別(べつ)の ``||player:チャットコマンド||``のコードを書(か)いて、**side1** という名前(なまえ)を付(つ)けて、エージェントが ``||agent:place on move||`` するようにコードを書(か)いて、**true** に設定(せってい)しましょう。``||agent:set item||`` コマンドを追加(ついか)し、カウントを **64** に設定(せってい)します。

```python
def on_chat():
    agent.set_assist(PLACE_ON_MOVE, True)
    agent.set_item(GRASS, 64, 1)
player.on_chat("side1", on_chat)
```

## ステップ 3

エージェントが **4** で ``||agent:move forward||`` し、次(つぎ)に **turn left** するようにコードを書(か)きます。

```python
def on_chat2(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.move(FORWARD, 4) 
    agent.turn(LEFT_TURN) 
player.on_chat("side1", on_chat2)
```

## ステップ 4

エージェントが **5** で ``||agent:move forward||``、``||agent:turn||`` **right**、そして再(ふたた)び ``||agent:移動(いどう)させる||`` **forward by 5** するようにコードを書(か)きます。

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

エージェントが ``||agent:place on move||`` し、**false** に設定(せってい)するようにコードを書(か)きます。

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

エージェントが ``||agent:turn||`` **left**、``||agent:移動(いどう)させる||`` **forward by 2**、そして再(ふたた)び ``||agent:turn||`` **left** するようにコードを書(か)きます。

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

新(あたら)しい ``||player:チャットコマンド||``のコードを書(か)いて、**side2** という名前(なまえ)を付(つ)けます。エージェントが ``||agent:place on move||`` を **true** にするようにコードを書(か)きます。``||agent:set item||`` コマンドを追加(ついか)し、カウントを **64** に設定(せってい)します。

```python
def on_chat3(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.set_item(GRASS, 64, 1)
 player.on_chat("side2", on_chat3)
```

## ステップ 8

エージェントが ``||agent:移動(いどう)させる||`` **forward by 7** し、次(つぎ)に ``||agent:turn||`` **left** するようにコードを書(か)きます。

```python
def on_chat3(): 
    agent.set_assist(PLACE_ON_MOVE, True) 
    agent.move(FORWARD, 7) 
    agent.turn(LEFT_TURN) 
player.on_chat("side2", on_chat3)
```

## ステップ 9

エージェントが ``||agent:移動(いどう)させる||`` **forward by 5** し、次(つぎ)に ``||agent:turn||`` **right** するようにコードを書(か)きます。

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

最後(さいご)に、エージェントが ``||agent:移動(いどう)させる||`` **forward by 3** するようにコードを書(か)きます。

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

Minecraftに戻(もど)り、**tp** を押(お)して「tp」と入力(にゅうりょく)してから、チャット行(いき)に **side2** を押(お)して「side2」と入力(にゅうりょく)して、エージェントが2番目(ばんめ)の壁(かべ)を作(つく)るのを見(み)てみましょう。

### 完全(かんぜん)なコード:

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