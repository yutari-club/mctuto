# つながる壁: Python

## ステップ 1

``||player:チャットコマンド||``コマンドをコードし、**"position"**と名前をつけます。

```python
def on_chat():
    pass
player.on_chat("position", on_chat)
```

## ステップ 2
変数**PlayerPosition**を作成し、``||positions:world||``位置に設定します。

```python
PlayerPosition: Position = None
def on_chat():
    PlayerPosition = player.position()
player.on_chat("position", on_chat)
```

## ステップ 3
``||player:チャットコマンド||``コマンドの中で、変数**from_position**を作成し、**PlayerPosition**に（**6,0,0**）を加えた値と等しく設定します。
	
```python
PlayerPosition: Position = None
from_position: Position = None
def on_chat():
    PlayerPosition = player.position()
    from_position = positions.add(PlayerPosition, pos(6, 0, 0))
player.on_chat("position", on_chat)
```

## ステップ 4
``||player:チャットコマンド||``コマンドの中で、変数**to_position**を作成し、変数**PlayerPosition**に（**-6,13,0**）を加えた値と等しく設定します。

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
別の``||player:チャットコマンド||``コマンドをコードし、**"wall"**と名前をつけます。

```python
def on_chat():
    pass
player.on_chat("wall", on_chat)
```

## ステップ 6
**wall**の``||player:チャットコマンド||``コマンドの中で、``||blocks:fill and replace||``をコードし、**from_position**変数から**to_position**変数まで**glass**に設定します。

```python
def on_chat():
    blocks.fill(GLASS, from_position, to_position, FillOperation.REPLACE)
player.on_chat("wall", on_chat)
```

## ステップ 7
``||blocks: on block broken||``を使って、**glass**ブロックが壊されたときに、**from_position**変数から**to_position**変数の範囲内で``||positions: pick random position||``に**diamond**ブロックを``||blocks:placed||``するイベントをコードします。

```python
def block_broken_glass():
    blocks.place(DIAMOND_BLOCK, randpos(from_position, to_position))
blocks.on_block_broken(GLASS, block_broken_glass)
```

## ステップ 8
``||blocks: on block broken||``を使って、**diamond**ブロックが壊されたときに、**from_position**変数から**to_position**変数の範囲内で``||positions: random position||``に**orange wool**ブロックを``||blocks:placed||``するイベントをコードします。

```python
def block_broken_diamond():
    blocks.place(ORANGE_WOOL, randpos(from_position, to_position))
blocks.on_block_broken(DIAMOND_BLOCK, block_broken_diamond)
```

## ステップ 9
**Play**ボタンを押してMinecraftに入り、すべてのイベントをテストします。**position**から始めて、次に**wall**を使います。**glassブロック**を壊して何が起こるかを見てみましょう。

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