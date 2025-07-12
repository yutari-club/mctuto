# イベントを楽(たの)しもう: JavaScript

## ステップ 1
``||player:player||``が歩(ある)いたときに、**projectile fireworks rockets**が位置(いち)(0,**10**,0)に出現(しゅつげん)するイベントのコードを書(か)きましょう。

```javascript
player.onTravelled(WALK, function () {
    mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0))
})
```

## ステップ 2
出現(しゅつげん)コードを**25回(かい)**実行(じっこう)するために、出現(しゅつげん)コードの周(まわ)りに``||loops:for||``ループを追加(ついか)しましょう。

```javascript
player.onTravelled(WALK, function () {
    for (let index = 0; index < 25; index++) {
        mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0))
    }
})
```

## ステップ 3
**oak wood**が``||blocks:onBlockBroken||``されたときに、**chicken**が位置(いち)(0,10,0)に出現(しゅつげん)するイベントのコードを書(か)きましょう。

```javascript
blocks.onBlockBroken(PLANKS_OAK, function () {
    mobs.spawn(CHICKEN, pos(0, 10, 0))
})
```

## ステップ 4
出現(しゅつげん)コードの周(まわ)りに``||loops:for||``ループを追加(ついか)して、**25回(かい)**繰(く)り返(かえ)すようにしましょう。

```javascript
blocks.onBlockBroken(PLANKS_OAK, function () {
    for (let index = 0; index < 25; index++) {
        mobs.spawn(CHICKEN, pos(0, 10, 0))
    }
})
```

## ステップ 5
**golden apple**が``||player:||○○が使(つか)われた時(とき)``されたときに、**すべてのにわとり**に**levitation**を``||mobs:apply||``し、持続(じぞく)時間(じかん)を**10**、高(たか)さを**5**ブロックに設定(せってい)するイベントのコードを書(か)きましょう。

```javascript
player.onItemInteracted(GOLDEN_APPLE, function () {
    mobs.applyEffect(LEVITATION, mobs.entitiesByType(CHICKEN), 10, 5)
})
```

## ステップ 6
**Play**ボタンを押(お)してMinecraftに入(はい)り、すべてのイベントをテストします。


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