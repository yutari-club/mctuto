# ループ: Python

## ステップ 1
``||player:○○が使われた時||`` イベントをコードで書いて、**骨**に設定しましょう。

```python
def item_interacted_bone():
    pass
player.on_item_interacted(BONE, item_interacted_bone)
```

## ステップ 2
``||player:||○○が使われた時`` イベントの中に、**6** 回繰り返す ``||loops:for||`` ループをコードで書きましょう。

```python
def item_interacted_bone():
    for index in range(6):
        pass
player.on_item_interacted(BONE, item_interacted_bone)
```

## ステップ 3
``||loops:for||`` ループの中で、**ゾンビ ウマ**を(0,0,0)に出現させましょう。

```python
def item_interacted_bone():
    for index in range(6):
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0))
player.on_item_interacted(BONE, item_interacted_bone)
```

## ステップ 4
**骨** ``||player:○○が使われた時||`` の中に、**4** 回繰り返す別の ``||loops:for||`` ループをコードで書きましょう。

```python
def item_interacted_bone():
    for index in range(6):
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0))
    for index2 in range(4):
        pass
player.on_item_interacted(BONE, item_interacted_bone)
```

## ステップ 5
``||loops:for||`` ループの中で、**スケルトン ウマ**を(0,0,0)に出現させましょう。  

```python
def item_interacted_bone():
    for index in range(6):
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0))
    for index2 in range(4):
        mobs.spawn(SKELETON_HORSE, pos(0, 0, 0))
player.on_item_interacted(BONE, item_interacted_bone)
```

## ステップ 6
**Play**ボタンを押して、Minecraftに入って全てのイベントをテストしてみましょう。

```python
def item_interacted_bone():
    for index in range(6):
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0))
    for index2 in range(4):
        mobs.spawn(SKELETON_HORSE, pos(0, 0, 0))
player.on_item_interacted(BONE, item_interacted_bone)
```

