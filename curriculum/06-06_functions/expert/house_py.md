# 家の関数: Python

## ステップ 1
``||functions:function||`` をコードし、**walls** と名前を付けます。

```python
def walls():
    pass
```

## ステップ 2
**walls** 関数の中で、エージェントに ``||agent:スロットに設定させる||`` をコードし、**Acacia Wood Planks** を **64** 個、スロット **1** に設定します。

```python
def walls():
    agent.set_item(PLANKS_ACACIA, 64, 1)
```

## ステップ 3
**walls** 関数の中で、``||agent:移動させる||`` **up by 1** を **3** 回繰り返す ``||loops:for||`` ループをコードします。

```python
def walls():
    agent.set_item(PLANKS_ACACIA, 64, 1)
    for index in range(3):
        agent.move(UP, 1)
```

## ステップ 4
**4** 回繰り返す別の ``||loops:for||`` ループをコードし、最初の ``||loops:for||`` ループの中、最初の ``||agent:移動させる||`` の下にドラッグします。2番目のループで、``||agent:agent turn right||`` をコードします。

```python
def walls():
    agent.set_item(PLANKS_ACACIA, 64, 1)
    for index in range(3):
        agent.move(UP, 1)
        for index2 in range(4):
            agent.turn(RIGHT_TURN)
```

## ステップ 5
3番目の ``||loops:for||`` ループをコードし、2番目の ``||loops:くりかえし○○回||`` ループの中の ``||agent: agent turn right||`` の上にドラッグして配置します。3番目の ``||loops:for||`` ループを **4** 回に設定します。最も内側の ``||loops:for||`` ループの中で、エージェントに ``||agent:置きます||`` をコードし、**down** に設定します。エージェントの ``||agent:移動させる||`` を追加し、**forward by 1** に設定して、最も内側の ``||loops:for||`` ループの中の ``||agent:置きます||`` down の下にドラッグします。

```python
def walls():
    agent.set_item(PLANKS_ACACIA, 64, 1)
    for index in range(3):
        agent.move(UP, 1)
        for index2 in range(4):
            for index3 in range(4):
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            agent.turn(RIGHT_TURN)
```

## ステップ 6
新しい ``||advanced:function||`` をコードし、**roof** と名前を付けます。

```python
def roof():
    pass
```

## ステップ 7
エージェントに ``||agent:スロットに設定させる||`` をコードし、**brick slab** に設定し、数を **64**、スロットを **1** に設定して、**roof** ``||functions:function||`` の中にドラッグします。また、エージェントに ``||agent:移動させる||`` **up by 1** をコードします。

```python
def roof():
    agent.set_item(BRICKS_SLAB, 1, 1)
    agent.move(UP, 1)
```

## ステップ 8
**roof** ``||functions:function||`` の中で、``||loops:for||`` ループをコードし、**4** 回に設定します。ループの中で、エージェントに ``||agent:移動させる||`` **back by 4** をコードし、次にエージェントに ``||agent:移動させる||`` **right by 1** をコードします。

```python
def roof():
    agent.set_item(BRICKS_SLAB, 64, 1)
    agent.move(UP, 1)
    for index4 in range(4):
        agent.move(BACK, 4)
        agent.move(RIGHT, 1)
```

## ステップ 9
別の ``||loops:for||`` ループをコードし、**4** 回に設定します。このループの中で、``||agent:place down||`` を追加し、次に ``||agent:移動させる||`` **forward by 1** を追加します。この ``||loops:for||`` ループを前のループの中、``||agent:移動させる||`` **back by 4** の上に配置します。

```python
def roof():
    agent.set_item(BRICKS_SLAB, 64, 1)
    agent.move(UP, 1)
    for index4 in range(4):
        for index5 in range(4):
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        agent.move(BACK, 4)
        agent.move(RIGHT, 1)
```

## ステップ 10
``||player:チャットコマンド||``をコードし、**house** と名前を付けて、**walls** と **roof** の ``||functions:functions||`` の両方を呼び出すようにします。

```python
def on_chat():
    walls()
    roof()
player.on_chat("house", on_chat)
```


## ステップ 11
Minecraftに入り、**house** コマンドをテストしてみましょう。

```python
def walls():
    agent.set_item(PLANKS_ACACIA, 64, 1)
    for index in range(3):
        agent.move(UP, 1)
        for index2 in range(4):
            for index3 in range(4):
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            agent.turn(RIGHT_TURN)
def roof():
    agent.set_item(BRICKS_SLAB, 64, 1)
    agent.move(UP, 1)
    for index4 in range(4):
        for index5 in range(4):
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        agent.move(BACK, 4)
        agent.move(RIGHT, 1)
def on_chat():
    walls()
    roof()
player.on_chat("house", on_chat)
```