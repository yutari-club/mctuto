# つながる壁(かべ): Python

## ステップ 1

``||player:チャットコマンド||``コマンドのコードを書(か)いて、**"position"**と名前(なまえ)をつけましょう。

```python
def on_chat():
    pass
player.on_chat("position", on_chat)
```

## ステップ 2
変数(へんすう)**PlayerPosition**を作(つく)って、``||positions:world||``位置(いち)に設定(せってい)しましょう。

```python
PlayerPosition: Position = None
def on_chat():
    PlayerPosition = player.position()
player.on_chat("position", on_chat)
```

## ステップ 3
``||player:チャットコマンド||``コマンドの中(なか)で、変数(へんすう)**from_position**を作(つく)って、**PlayerPosition**に（**6,0,0**）を加(くわ)えた値(ね)と等(ひと)しく設定(せってい)しましょう。
	
```python
PlayerPosition: Position = None
from_position: Position = None
def on_chat():
    PlayerPosition = player.position()
    from_position = positions.add(PlayerPosition, pos(6, 0, 0))
player.on_chat("position", on_chat)
```

## ステップ 4
``||player:チャットコマンド||``コマンドの中(なか)で、変数(へんすう)**to_position**を作(つく)って、変数(へんすう)**PlayerPosition**に（**-6,13,0**）を加(くわ)えた値(ね)と等(ひと)しく設定(せってい)しましょう。

```python
PlayerPosition: Position = None
from_position: Position = None
to_position: Position = None
def on_chat():
    PlayerPosition = player.position()
    from_position = positions.add(PlayerPosition, pos(6, 0, 0))
    to_position = positions.add(PlayerPosition, pos(-6, 13, 0))
player.on_chat("position", on_chat)
```

## ステップ 5
別(べつ)の``||player:チャットコマンド||``コマンドのコードを書(か)いて、**"wall"**と名前(なまえ)をつけましょう。

```python
def on_chat():
    pass
player.on_chat("wall", on_chat)
```

## ステップ 6
**wall**の``||player:チャットコマンド||``コマンドの中(なか)で、``||blocks:fill and replace||``のコードを書(か)いて、**from_position**変数(へんすう)から**to_position**変数(へんすう)まで**glass**に設定(せってい)しましょう。

```python
def on_chat():
    blocks.fill(GLASS, from_position, to_position, FillOperation.REPLACE)
player.on_chat("wall", on_chat)
```

## ステップ 7
``||blocks: on block broken||``を使(つか)って、**glass**ブロックが壊(こわ)されたときに、**from_position**変数(へんすう)から**to_position**変数(へんすう)の範囲(はんい)内(ない)で``||positions: pick random position||``に**diamond**ブロックを``||blocks:placed||``するイベントのコードを書(か)きましょう。

```python
def block_broken_glass():
    blocks.place(DIAMOND_BLOCK, randpos(from_position, to_position))
blocks.on_block_broken(GLASS, block_broken_glass)
```

## ステップ 8
``||blocks: on block broken||``を使(つか)って、**diamond**ブロックが壊(こわ)されたときに、**from_position**変数(へんすう)から**to_position**変数(へんすう)の範囲(はんい)内(ない)で``||positions: random position||``に**orange wool**ブロックを``||blocks:placed||``するイベントのコードを書(か)きましょう。

```python
def block_broken_diamond():
    blocks.place(ORANGE_WOOL, randpos(from_position, to_position))
blocks.on_block_broken(DIAMOND_BLOCK, block_broken_diamond)
```

## ステップ 9
**Play**ボタンを押(お)してMinecraftに入(はい)り、すべてのイベントをテストします。**position**から始(はじ)めて、次(つぎ)に**wall**を使(つか)います。**glassブロック**を壊(こわ)して何(なに)が起(お)こるかを見(み)てみましょう。

```python
from_position: Position = None
to_position: Position = None
PlayerPosition: Position = None
def block_broken_glass():
    blocks.place(DIAMOND_BLOCK, randpos(from_position, to_position))
blocks.on_block_broken(GLASS, block_broken_glass)
def on_chat():
    blocks.fill(GLASS, from_position, to_position, FillOperation.REPLACE)
player.on_chat("wall", on_chat)
def on_chat2():
    PlayerPosition = player.position()
    from_position = positions.add(PlayerPosition, pos(6, 0, 0))
    to_position = positions.add(PlayerPosition, pos(-6, 13, 0))
player.on_chat("position", on_chat2)
def block_broken_diamond():
    blocks.place(ORANGE_WOOL, randpos(from_position, to_position))
blocks.on_block_broken(DIAMOND_BLOCK, block_broken_diamond)
```