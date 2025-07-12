# イベントを楽(たの)しもう: ブロック

## ステップ 1
``||player: on player walk||``ブロックと``||mobs:spawn||``ブロックを取(と)ってワークスペースにドラッグしましょう。``||mobs: projectile||``ブロックを``||mobs:spawn||``ブロックの**animal parameter**にドラッグし、**fireworks rocket**を選択(せんたく)します。

```blocks
player.onTravelled(WALK, function () { 
    mobs.spawn(FIREWORKS_ROCKET, pos(0, 0, 0)) 
}) 
```
## ステップ 2

位置(いち)の(y)座標(ざひょう)をプレイヤーの位置(いち)から**10ブロック**上(うえ)に変更(へんこう)します(0, **10**, 0)。

```blocks
player.onTravelled(WALK, function () { 
    mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0)) 
}) 
```
## ステップ 3
``||loops:くりかえし○○回(かい)||``ループを``||player:on player walk||``にドラッグし、**25回(かい)**に設定(せってい)します。``||mobs:spawn||``ブロックは``||loops:くりかえし○○回(かい)||``ループの中(なか)に入(い)れます。

```blocks
player.onTravelled(WALK, function () {
    for (let index = 0; index < 25; index++) {
        mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0))
    }
})
```

## ステップ 4
``||blocks:on broken||``ブロックを取(と)ってワークスペースにドラッグし、**oak wood**ブロックを選択(せんたく)しましょう。

## ステップ 5
``||mobs:spawn||``ブロックを追加(ついか)し、**chicken**に設定(せってい)して、位置(いち)の(y)座標(ざひょう)をプレイヤーの位置(いち)から**10ブロック**上(うえ)に変更(へんこう)します(0, **10**, 0)。

```blocks
blocks.onBlockBroken(PLANKS_OAK, function () { 
    mobs.spawn(CHICKEN, pos(0, 10, 0)) 
}) 
```

## ステップ 6
``||loops:くりかえし○○回(かい)||``ループを``||blocks:on broken||``ブロックの中(なか)で``||mobs:spawn||``ブロックの周(まわ)りに追加(ついか)し、``||loops:くりかえし○○回(かい)||``ループを**25回(かい)**に設定(せってい)します。

```blocks
blocks.onBlockBroken(PLANKS_OAK, function () { 
    for (let index = 0; index < 25; index++) { 
        mobs.spawn(CHICKEN, pos(0, 10, 0)) 
    } 
}) 
```

## ステップ 7

``||player:○○が使(つか)われた時(とき)||``を取(と)ってワークスペースにドラッグし、**Golden Apple**に設定(せってい)しましょう。

## ステップ 8

``||mobs: apply to||``ブロックを取(と)ってワークスペースにドラッグし、**levitation**を選択(せんたく)し、持続(じぞく)時間(じかん)を**10**、増幅器(ぞうふくき)を**5**に設定(せってい)しましょう。

## ステップ 9

``||mobs:all animal||``ブロックを取(と)って、**chicken**に設定(せってい)して``||mobs: apply to||``の**to**引数(ひきすう)にドラッグし、完成(かんせい)した``||mobs:apply to||``ブロックを``||player:||○○が使(つか)われた時(とき)``にドラッグしましょう。

```blocks
player.onItemInteracted(GOLDEN_APPLE, function () { 
    mobs.applyEffect(LEVITATION, mobs.entitiesByType(CHICKEN), 10, 5) 
}) 
```
## ステップ 10
**Play**ボタンを押(お)してMinecraftに入(はい)り、すべてのイベントをテストします。


```blocks
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
