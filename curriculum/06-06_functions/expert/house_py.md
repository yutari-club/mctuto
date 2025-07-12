# 家(いえ)の関数(かんすう): Python

## ステップ 1
``||functions:function||`` をコードし、**walls** と名前(なまえ)を付(つ)けます。

```python
def walls():
    pass
```

## ステップ 2
**walls** 関数(かんすう)の中(なか)で、エージェントに ``||agent:スロットに設定(せってい)させる||`` をコードし、**Acacia Wood Planks** を **64** 個(こ)、スロット **1** に設定(せってい)します。

```python
def walls():
    agent.set_item(PLANKS_ACACIA, 64, 1)
```

## ステップ 3
**walls** 関数(かんすう)の中(なか)で、``||agent:移動(いどう)させる||`` **up by 1** を **3** 回(かい)繰(く)り返(かえ)す ``||loops:for||`` ループをコードします。

```python
def walls():
    agent.set_item(PLANKS_ACACIA, 64, 1)
    for index in range(3):
        agent.move(UP, 1)
```

## ステップ 4
**4** 回(かい)繰(く)り返(かえ)す別(べつ)の ``||loops:for||`` ループをコードし、最初(さいしょ)の ``||loops:for||`` ループの中(なか)、最初(さいしょ)の ``||agent:移動(いどう)させる||`` の下(した)にドラッグします。2番目(ばんめ)のループで、``||agent:agent turn right||`` をコードします。

```python
def walls():
    agent.set_item(PLANKS_ACACIA, 64, 1)
    for index in range(3):
        agent.move(UP, 1)
        for index2 in range(4):
            agent.turn(RIGHT_TURN)
```

## ステップ 5
3番目(ばんめ)の ``||loops:for||`` ループをコードし、2番目(ばんめ)の ``||loops:くりかえし○○回(かい)||`` ループの中(なか)の ``||agent: agent turn right||`` の上(うえ)にドラッグして配置(はいち)します。3番目(ばんめ)の ``||loops:for||`` ループを **4** 回(かい)に設定(せってい)します。最(もっと)も内側(うちがわ)の ``||loops:for||`` ループの中(なか)で、エージェントに ``||agent:置(お)きます||`` をコードし、**down** に設定(せってい)します。エージェントの ``||agent:移動(いどう)させる||`` を追加(ついか)し、**forward by 1** に設定(せってい)して、最(もっと)も内側(うちがわ)の ``||loops:for||`` ループの中(なか)の ``||agent:置(お)きます||`` down の下(した)にドラッグします。

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
新(あたら)しい ``||advanced:function||`` をコードし、**roof** と名前(なまえ)を付(つ)けます。

```python
def roof():
    pass
```

## ステップ 7
エージェントに ``||agent:スロットに設定(せってい)させる||`` をコードし、**brick slab** に設定(せってい)し、数(かず)を **64**、スロットを **1** に設定(せってい)して、**roof** ``||functions:function||`` の中(なか)にドラッグします。また、エージェントに ``||agent:移動(いどう)させる||`` **up by 1** をコードします。

```python
def roof():
    agent.set_item(BRICKS_SLAB, 1, 1)
    agent.move(UP, 1)
```

## ステップ 8
**roof** ``||functions:function||`` の中(なか)で、``||loops:for||`` ループをコードし、**4** 回(かい)に設定(せってい)します。ループの中(なか)で、エージェントに ``||agent:移動(いどう)させる||`` **back by 4** をコードし、次(つぎ)にエージェントに ``||agent:移動(いどう)させる||`` **right by 1** をコードします。

```python
def roof():
    agent.set_item(BRICKS_SLAB, 64, 1)
    agent.move(UP, 1)
    for index4 in range(4):
        agent.move(BACK, 4)
        agent.move(RIGHT, 1)
```

## ステップ 9
別(べつ)の ``||loops:for||`` ループをコードし、**4** 回(かい)に設定(せってい)します。このループの中(なか)で、``||agent:place down||`` を追加(ついか)し、次(つぎ)に ``||agent:移動(いどう)させる||`` **forward by 1** を追加(ついか)します。この ``||loops:for||`` ループを前(まえ)のループの中(なか)、``||agent:移動(いどう)させる||`` **back by 4** の上(うえ)に配置(はいち)します。

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
``||player:チャットコマンド||``をコードし、**house** と名前(なまえ)を付(つ)けて、**walls** と **roof** の ``||functions:functions||`` の両方(りょうほう)を呼(よ)び出(だ)すようにします。

```python
def on_chat():
    walls()
    roof()
player.on_chat("house", on_chat)
```


## ステップ 11
Minecraftに入(はい)り、**house** コマンドをテストしてみましょう。

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