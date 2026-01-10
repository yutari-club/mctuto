# にわとりの雨(あめ): Python


## ステップ 1
``||player:チャットコマンド||``コマンドを作(つく)って、**"chicken"**と名前(なまえ)をつけましょう。

```python
def on_chat():
    pass
player.on_chat("chicken", on_chat)
```

## ステップ 2

``||player:チャットコマンド||``コマンドの中(なか)で、プレイヤーの頭(あたま)の上(うえ)**10**ブロックの位置(いち)(0, **10**, 0)に、にわとりを出現(しゅつげん)させます。

**Play**ボタンを押(お)してMinecraftに行(い)き、**t**を押(お)してチャットを開(ひら)き、**chicken**と入力(にゅうりょく)してにわとりを1匹(ひき)出現(しゅつげん)させます。

```python
def on_chat():
    mobs.spawn(CHICKEN, pos(0, 10, 0))
player.on_chat("chicken", on_chat)
```

## ステップ 3

出現(しゅつげん)コードを**100回(かい)**繰(く)り返(かえ)すために、出現(しゅつげん)コードの周(まわ)りに``||loops: for loop||``を置(お)きましょう。

**Play**ボタンを押(お)してMinecraftに行(い)き、**t**を押(お)してチャットを開(ひら)き、**chicken**と入力(にゅうりょく)してにわとりを100匹(ひき)出現(しゅつげん)させます。

```python
def on_chat():
    for index in range(100):
        mobs.spawn(CHICKEN, pos(0, 10, 0))
player.on_chat("chicken", on_chat)
```
