# イベントを楽しもう: JavaScript

## ステップ 1
``||player:player||``が歩いたときに、**projectile fireworks rockets**が位置(0,**10**,0)に出現するイベントのコードを書きましょう。

```javascript
player.onTravelled(WALK, function () {
    mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0))
})
```

## ステップ 2
出現コードを**25回**実行するために、出現コードの周りに``||loops:for||``ループを追加しましょう。

```javascript
player.onTravelled(WALK, function () {
    for (let index = 0; index < 25; index++) {
        mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0))
    }
})
```

## ステップ 3
**oak wood**が``||blocks:onBlockBroken||``されたときに、**chicken**が位置(0,10,0)に出現するイベントのコードを書きましょう。

```javascript
blocks.onBlockBroken(PLANKS_OAK, function () {
    mobs.spawn(CHICKEN, pos(0, 10, 0))
})
```

## ステップ 4
出現コードの周りに``||loops:for||``ループを追加して、**25回**繰り返すようにしましょう。

```javascript
blocks.onBlockBroken(PLANKS_OAK, function () {
    for (let index = 0; index < 25; index++) {
        mobs.spawn(CHICKEN, pos(0, 10, 0))
    }
})
```

## ステップ 5
**golden apple**が``||player:||○○が使われた時``されたときに、**すべてのにわとり**に**levitation**を``||mobs:apply||``し、持続時間を**10**、高さを**5**ブロックに設定するイベントのコードを書きましょう。

```javascript
player.onItemInteracted(GOLDEN_APPLE, function () {
    mobs.applyEffect(LEVITATION, mobs.entitiesByType(CHICKEN), 10, 5)
})
```

## ステップ 6
**Play**ボタンを押してMinecraftに入り、すべてのイベントをテストします。


```javascript
player.onTravelled(WALK, function () {
    for (let index = 0; index < 25; index++) {
        mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0))
    }
})

blocks.onBlockBroken(PLANKS_OAK, function () {
    for (let index = 0; index < 25; index++) {
        mobs.spawn(CHICKEN, pos(0, 10, 0))
    }
})
player.onItemInteracted(GOLDEN_APPLE, function () {
    mobs.applyEffect(LEVITATION, mobs.entitiesByType(CHICKEN), 10, 5)
})
```