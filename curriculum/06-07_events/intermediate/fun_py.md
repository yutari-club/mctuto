# イベントを楽しもう: Python

## ステップ 1
``||player: player||``が歩いたときに、**projectile fireworks rockets**が位置(0,**10**,0)に出現するイベントをコードします。

```python
def travelled_walk():
    mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0))
player.on_travelled(WALK, travelled_walk)
```

## ステップ 2
出現コードを**25回**実行するために、出現コードの周りに``||loops:for||``ループを追加します。

```python
def travelled_walk():
    for index in range(25):
        mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0))
player.on_travelled(WALK, travelled_walk)
```

## ステップ 3
**oak wood**``||blocks:block||``が壊されたときに、**chicken**が位置(0,**10**,0)に出現するイベントをコードします。

```python
def block_broken_planks_oak():
    mobs.spawn(CHICKEN, pos(0, 10, 0))
blocks.on_block_broken(PLANKS_OAK, block_broken_planks_oak)
```

## ステップ 4
出現コードの周りに``||loops:for||``ループを追加して、**25回**繰り返すようにします。

```python
def block_broken_planks_oak():
    for index2 in range(25):
        mobs.spawn(CHICKEN, pos(0, 10, 0))
blocks.on_block_broken(PLANKS_OAK, block_broken_planks_oak)
```

## ステップ 5
**golden apple**が``||player:||○○が使われた時``されたときに、**すべてのにわとり**に**levitation**を``||mobs:apply||``し、持続時間を**10**、高さを**5**ブロックに設定するイベントをコードします。

```python
def item_interacted_golden_apple():
    mobs.apply_effect(LEVITATION, mobs.entities_by_type(CHICKEN), 10, 5)
player.on_item_interacted(GOLDEN_APPLE, item_interacted_golden_apple)
```

## ステップ 6
**Play**ボタンを押してMinecraftに入り、すべてのイベントをテストします。

```python
def travelled_walk():
    for index in range(25):
        mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0))
player.on_travelled(WALK, travelled_walk)
def block_broken_planks_oak():
    for index2 in range(25):
        mobs.spawn(CHICKEN, pos(0, 10, 0))
blocks.on_block_broken(PLANKS_OAK, block_broken_planks_oak)
def item_interacted_golden_apple():
    mobs.apply_effect(LEVITATION, mobs.entities_by_type(CHICKEN), 10, 5)
player.on_item_interacted(GOLDEN_APPLE, item_interacted_golden_apple)
```