# ループ: Javascript

## ステップ 1
``||player:on item used||`` イベントをコードして、**Bone**に設定してください。

```javascript
player.onItemInteracted(BONE, function () { 
 
}) 
```

## ステップ 2
``||player:on item used||`` イベントの中に、**6** 回繰り返す ``||loops:for||`` ループをコードしてください。

```javascript
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
      
    } 
}) 
```

## ステップ 3
``||loops:for||`` ループの中で、**Zombie Horse**を(0,0,0)にスポーンしてください。

```javascript
player.onItemInteracted(BONE, function () {
    for (let index = 0; index < 6; index++) {
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0))
    }
})
```

## ステップ 4
**Bone** ``||player:on item used||`` の中に、**4** 回繰り返す別の ``||loops:for||`` ループをコードしてください。

```javascript
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0)) 
    } 
    for (let index = 0; index < 4; index++) { 
      
    } 
}) 
```

## ステップ 5
``||loops:for||`` ループの中で、**skeleton horse**を(0,0,0)にスポーンしてください。  

```javascript
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0)) 
    } 
    for (let index = 0; index < 4; index++) { 
        mobs.spawn(SKELETON_HORSE, pos(0, 0, 0)) 
    } 
}) 
```

## ステップ 6
**Play** ボタンを押して、Minecraftに入って全てのイベントをテストしてください。

```javascript
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0)) 
    } 
    for (let index = 0; index < 4; index++) { 
        mobs.spawn(SKELETON_HORSE, pos(0, 0, 0)) 
    } 
}) 
```

