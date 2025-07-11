# にわとりの雨: Python


## ステップ 1
``||player:チャットコマンド||``コマンドを作って、**"chicken"**と名前をつけましょう。

```python
def on_chat():
    pass
player.on_chat("chicken", on_chat)
```

## ステップ 2

``||player:チャットコマンド||``コマンドの中で、プレイヤーの頭の上**10**ブロックの位置(0, **10**, 0)ににわとりを出現させます。

**Play**ボタンを押してMinecraftに行き、**t**を押してチャットを開き、**chicken**と入力してにわとりを1匹出現させます。

```python
def on_chat():
    mobs.spawn(CHICKEN, pos(0, 10, 0))
player.on_chat("chicken", on_chat)
```

## ステップ 3

出現コードを**100回**繰り返すために、出現コードの周りに``||loops: for loop||``を置きましょう。

**Play**ボタンを押してMinecraftに行き、**t**を押してチャットを開き、**chicken**と入力してにわとりを100匹出現させます。

```python
def on_chat():
    for index in range(100):
        mobs.spawn(CHICKEN, pos(0, 10, 0))
player.on_chat("chicken", on_chat)
```
