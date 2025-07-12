# ループ: Python

## ステップ 1
``||player:○○が使(つか)われた時(とき)||`` イベントをコードで書(か)いて、**骨(ほね)**に設定(せってい)しましょう。

```python
def item_interacted_bone():
    pass
player.on_item_interacted(BONE, item_interacted_bone)
```

## ステップ 2
``||player:||○○が使(つか)われた時(とき)`` イベントの中(なか)に、**6** 回(かい)繰(く)り返(かえ)す ``||loops:for||`` ループをコードで書(か)きましょう。

```python
def item_interacted_bone():
    for index in range(6):
        pass
player.on_item_interacted(BONE, item_interacted_bone)
```

## ステップ 3
``||loops:for||`` ループの中(なか)で、**ゾンビ ウマ**を(0,0,0)に出現(しゅつげん)させましょう。

```python
def item_interacted_bone():
    for index in range(6):
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0))
player.on_item_interacted(BONE, item_interacted_bone)
```

## ステップ 4
**骨(ほね)** ``||player:○○が使(つか)われた時(とき)||`` の中(なか)に、**4** 回(かい)繰(く)り返(かえ)す別(べつ)の ``||loops:for||`` ループをコードで書(か)きましょう。

```python
def item_interacted_bone():
    for index in range(6):
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0))
    for index2 in range(4):
        pass
player.on_item_interacted(BONE, item_interacted_bone)
```

## ステップ 5
``||loops:for||`` ループの中(なか)で、**スケルトン ウマ**を(0,0,0)に出現(しゅつげん)させましょう。  

```python
def item_interacted_bone():
    for index in range(6):
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0))
    for index2 in range(4):
        mobs.spawn(SKELETON_HORSE, pos(0, 0, 0))
player.on_item_interacted(BONE, item_interacted_bone)
```

## ステップ 6
**Play**ボタンを押(お)して、Minecraftに入(はい)って全(すべ)てのイベントをテストしてみましょう。

```python
def item_interacted_bone():
    for index in range(6):
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0))
    for index2 in range(4):
        mobs.spawn(SKELETON_HORSE, pos(0, 0, 0))
player.on_item_interacted(BONE, item_interacted_bone)
```

