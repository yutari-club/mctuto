# イベントを楽しもう: ブロック

## ステップ 1
``||player: on player walk||``ブロックと``||mobs:spawn||``ブロックを取得してワークスペースにドラッグします。``||mobs: projectile||``ブロックを``||mobs:spawn||``ブロックの**animal parameter**にドラッグし、**fireworks rocket**を選択します。

```blocks
player.onTravelled(WALK, function () { 
    mobs.spawn(FIREWORKS_ROCKET, pos(0, 0, 0)) 
}) 
```
## ステップ 2

位置の(y)座標をプレイヤーの位置から**10ブロック**上に変更します(0, **10**, 0)。

```blocks
player.onTravelled(WALK, function () { 
    mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0)) 
}) 
```
## ステップ 3
``||loops:くりかえし○○回||``ループを``||player:on player walk||``にドラッグし、**25回**に設定します。``||mobs:spawn||``ブロックは``||loops:くりかえし○○回||``ループの中に入れます。

```blocks
player.onTravelled(WALK, function () {
    for (let index = 0; index < 25; index++) {
        mobs.spawn(FIREWORKS_ROCKET, pos(0, 10, 0))
    }
})
```

## ステップ 4
``||blocks:on broken||``ブロックを取得してワークスペースにドラッグし、**oak wood**ブロックを選択します。

## ステップ 5
``||mobs:spawn||``ブロックを追加し、**chicken**に設定して、位置の(y)座標をプレイヤーの位置から**10ブロック**上に変更します(0, **10**, 0)。

```blocks
blocks.onBlockBroken(PLANKS_OAK, function () { 
    mobs.spawn(CHICKEN, pos(0, 10, 0)) 
}) 
```

## ステップ 6
``||loops:くりかえし○○回||``ループを``||blocks:on broken||``ブロックの中で``||mobs:spawn||``ブロックの周りに追加し、``||loops:くりかえし○○回||``ループを**25回**に設定します。

```blocks
blocks.onBlockBroken(PLANKS_OAK, function () { 
    for (let index = 0; index < 25; index++) { 
        mobs.spawn(CHICKEN, pos(0, 10, 0)) 
    } 
}) 
```

## ステップ 7

``||player:on item used||``を取得してワークスペースにドラッグし、**Golden Apple**に設定します。

## ステップ 8

``||mobs: apply to||``ブロックを取得してワークスペースにドラッグし、**levitation**を選択し、持続時間を**10**、増幅器を**5**に設定します。

## ステップ 9

``||mobs:all animal||``ブロックを取得し、**chicken**に設定して``||mobs: apply to||``の**to**引数にドラッグし、完成した``||mobs:apply to||``ブロックを``||player: on item used||``にドラッグします。

```blocks
player.onItemInteracted(GOLDEN_APPLE, function () { 
    mobs.applyEffect(LEVITATION, mobs.entitiesByType(CHICKEN), 10, 5) 
}) 
```
## ステップ 10
**Play**ボタンを押してMinecraftに入り、すべてのイベントをテストします。


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
