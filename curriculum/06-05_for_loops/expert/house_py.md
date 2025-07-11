# 家のForループ: Python

## ステップ 1
``||player:チャットコマンド||``を作って、``||agent:エージェントがプレイヤーにテレポート||`` するようにします。名前を **tp** にします。 

```python
def on_chat():
    agent.teleport_to_player()
player.on_chat("tp", on_chat)
```

## ステップ 2
別の ``||player:チャットコマンド||``を作って、名前を **walls** にします。

```python
def on_chat2():
    pass
player.on_chat("walls", on_chat2)

```

## ステップ 3
**walls** の ``||player:チャットコマンド||`` の中で、``||agent:エージェントブロックまたはアイテム設定||`` を使って **アカシアの木の板** を数 **64** でスロット **1** に設定しましょう。

```python
def on_chat2():
    agent.set_item(PLANKS_ACACIA, 64, 1)
player.on_chat("walls", on_chat2)
```

## ステップ 4
**walls** の ``||player:チャットコマンド||``の中で、``||agent:移動||`` **上に1歩** を **3回** 繰り返す ``||loops:for||`` ループを作りましょう。

```python
 def on_chat2():
    agent.set_item(PLANKS_ACACIA, 64, 1)
    for index in range(3):
        agent.move(UP, 1)
player.on_chat("walls", on_chat2)
```

## ステップ 5
最初の ``||loops:for||`` ループの中で、``||agent:移動||`` コードの下に、``||agent:エージェント右に回転||`` を **4回** 繰り返す別の ``||loops:for||`` ループを作りましょう。

```python
def on_chat2():
    agent.set_item(PLANKS_ACACIA, 64, 1)
    for index in range(3):
        agent.move(UP, 1)
        for index2 in range(4):
            agent.turn(RIGHT_TURN)
player.on_chat("walls", on_chat2)
```

## ステップ 6
2番目の ``||loops:for||`` ループの中で、``||agent:右に回転||`` コードの上に、``||agent:置く||`` 下と ``||agent:移動||`` **前に1歩** を **4回** 繰り返す3番目の ``||loops:for||`` ループを作りましょう。

```python
def on_chat2():
    agent.set_item(PLANKS_ACACIA, 64, 1)
    for index in range(3):
        agent.move(UP, 1)
        for index2 in range(4):
            for index3 in range(4):
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            agent.turn(RIGHT_TURN)
player.on_chat("walls", on_chat2)
```

## ステップ 7
新しい ``||player:チャットコマンド||``を作って、名前を **roof** にします。   

```python
def on_chat3():
    pass
player.on_chat("roof", on_chat3)
```

## ステップ 8
``||agent:エージェントブロックまたはアイテム設定||`` を使って **レンガハーフブロック** を数 **64** でスロット **1** に設定し、エージェントが ``||agent:移動||`` **上に1歩** するようにコードを書きましょう。

```python
def on_chat3():
    agent.set_item(BRICKS_SLAB, 64, 1)
    agent.move(UP, 1)
player.on_chat("roof", on_chat3)
```

## ステップ 9
**roof** の ``||player:チャットコマンド||``の中で、``||agent:エージェント移動||`` **後ろに4歩** と ``||agent:移動||`` **右に1歩** を **4回** 繰り返す ``||loops:for||`` ループを作りましょう。  
	
```python
def on_chat3():
    agent.set_item(BRICKS_SLAB, 64, 1)
    agent.move(UP, 1)
    for index4 in range(4):
        agent.move(BACK, 1)
        agent.move(RIGHT, 1)
player.on_chat("roof", on_chat3)
```

## ステップ 10
前の ``||loops:for||`` ループの中で、``||agent:エージェント移動||`` **後ろ** の上に、``||agent:エージェント下に置く||`` と ``||agent:移動||`` **前に1歩** を **4回** 繰り返す別の ``||loops:for||`` ループを作りましょう。

```python
def on_chat3():
    agent.set_item(BRICKS_SLAB, 64, 1)
    agent.move(UP, 1)
    for index4 in range(4):
        for index5 in range(4):
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        agent.move(BACK, 1)
        agent.move(RIGHT, 1)
player.on_chat("roof", on_chat3)
```

## ステップ 11
**Play** ボタンを押して、Minecraftに入って、**walls** と **roof** をテストします。 

```python
def on_chat():
    agent.teleport_to_player()
player.on_chat("tp", on_chat)
def on_chat2():
    agent.set_item(PLANKS_ACACIA, 64, 1)
    for index in range(3):
        agent.move(UP, 1)
        for index2 in range(4):
            for index3 in range(4):
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            agent.turn(RIGHT_TURN)
player.on_chat("walls", on_chat2)
def on_chat3():
    agent.set_item(BRICKS_SLAB, 64, 1)
    agent.move(UP, 1)
    for index4 in range(4):
        for index5 in range(4):
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        agent.move(BACK, 1)
        agent.move(RIGHT, 1)
player.on_chat("roof", on_chat3)
```

