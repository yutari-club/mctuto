# イベントを楽(たの)しもう: Python

## ステップ 1
``||player: player||``が歩(ある)いたときに、**projectile fireworks rockets**が位置(いち)(0,**10**,0)に出現(しゅつげん)するイベントのコードを書(か)きましょう。

```python
def travelled_walk():
    mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0))
player.on_travelled(WALK, travelled_walk)
```

## ステップ 2
出現(しゅつげん)コードを**25回(かい)**実行(じっこう)するために、出現(しゅつげん)コードの周(まわ)りに``||loops:for||``ループを追加(ついか)しましょう。

```python
def travelled_walk():
    for index in range(25):
        mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0))
player.on_travelled(WALK, travelled_walk)
```

## ステップ 3
**oak wood**``||blocks:block||``が壊(こわ)されたときに、**chicken**が位置(いち)(0,**10**,0)に出現(しゅつげん)するイベントのコードを書(か)きましょう。

```python
def block_broken_planks_oak():
    mobs.spawn(CHICKEN, pos(0, 10, 0))
blocks.on_block_broken(PLANKS_OAK, block_broken_planks_oak)
```

## ステップ 4
出現(しゅつげん)コードの周(まわ)りに``||loops:for||``ループを追加(ついか)して、**25回(かい)**繰(く)り返(かえ)すようにしましょう。

```python
def block_broken_planks_oak():
    for index2 in range(25):
        mobs.spawn(CHICKEN, pos(0, 10, 0))
blocks.on_block_broken(PLANKS_OAK, block_broken_planks_oak)
```

## ステップ 5
**golden apple**が``||player:||○○が使(つか)われた時(とき)``されたときに、**すべてのにわとり**に**levitation**を``||mobs:apply||``し、持続(じぞく)時間(じかん)を**10**、高(たか)さを**5**ブロックに設定(せってい)するイベントのコードを書(か)きましょう。

```python
def item_interacted_golden_apple():
    mobs.apply_effect(LEVITATION, mobs.entities_by_type(CHICKEN), 10, 5)
player.on_item_interacted(GOLDEN_APPLE, item_interacted_golden_apple)
```

## ステップ 6
**Play**ボタンを押(お)してMinecraftに入(はい)り、すべてのイベントをテストします。

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