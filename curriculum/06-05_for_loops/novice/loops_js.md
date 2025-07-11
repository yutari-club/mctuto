# ループ: Javascript

## ステップ 1
``||player:○○が使われた時||`` イベントをコードで書いて、**骨**に設定しましょう。

```javascript
player.onItemInteracted(BONE, function () { 
 
}) 
```

## ステップ 2
``||player:○○が使われた時||`` イベントの中に、**6** 回繰り返す ``||loops:for||`` ループをコードで書きましょう。

```javascript
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
      
    } 
}) 
```

## ステップ 3
``||loops:for||`` ループの中で、**ゾンビ ウマ**を(0,0,0)に出現させましょう。

```javascript
player.onItemInteracted(BONE, function () {
    for (let index = 0; index < 6; index++) {
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0))
    }
})
```

## ステップ 4
**骨** ``||player:○○が使われた時||`` の中に、**4** 回繰り返す別の ``||loops:for||`` ループをコードで書きましょう。

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
``||loops:for||`` ループの中で、**スケルトン ウマ**を(0,0,0)に出現させましょう。  

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
**Play** ボタンを押して、Minecraftに入って全てのイベントをテストしてみましょう。

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

