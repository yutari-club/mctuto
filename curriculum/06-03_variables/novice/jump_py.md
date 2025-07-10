# メガジャンプ: Python

## ステップ 1
**"jump"** という名前の ``||player:on chat||`` コマンドを追加します。

```python
def on_chat():
    pass
player.on_chat("jump", on_chat)
```

## ステップ 2

``||player:chat||`` コマンドの中にコードを追加して、プレイヤーを位置 **(0,100,0)** に ``||player:teleport||`` します（現在の位置より100ブロック高い位置）。

```python
def on_chat(): 
    player.teleport(pos(0, 100, 0)) 
player.on_chat("jump", on_chat) 
```

## ステップ 3

Minecraftでチャットに jump と入力して試してみましょう。


## ステップ 4

"jump" チャットコマンドに **num1** という名前の ``||variable: variable||`` を追加します。

```python
def on_chat(num1): 
    player.teleport(pos(0, 100, 0)) 
player.on_chat("jump", on_chat) 
```

## ステップ 5

``||player:teleport||`` 位置の **100** を ``||variable:variable||`` **num1** に変更します。

```python
def on_chat(num1):
    player.teleport(pos(0, num1, 0))
player.on_chat("jump", on_chat) 
```

## ステップ 6

Minecraftでチャットに jump と数字を入力して試してみましょう。（例：jump 50 または jump 100）

```python
def on_chat(num1):
    player.teleport(pos(0, 100, 0))
player.on_chat("jump", on_chat)
```