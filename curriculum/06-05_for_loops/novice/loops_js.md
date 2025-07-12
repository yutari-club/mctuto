# ループ: Javascript

## ステップ 1
``||player:○○が使(つか)われた時(とき)||`` イベントをコードで書(か)いて、**骨(ほね)**に設定(せってい)しましょう。

```javascript
player.onItemInteracted(BONE, function () { 
 
}) 
```

## ステップ 2
``||player:○○が使(つか)われた時(とき)||`` イベントの中(なか)に、**6** 回(かい)繰(く)り返(かえ)す ``||loops:for||`` ループをコードで書(か)きましょう。

```javascript
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
      
    } 
}) 
```

## ステップ 3
``||loops:for||`` ループの中(なか)で、**ゾンビ ウマ**を(0,0,0)に出現(しゅつげん)させましょう。

```javascript
player.onItemInteracted(BONE, function () {
    for (let index = 0; index < 6; index++) {
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0))
    }
})
```

## ステップ 4
**骨(ほね)** ``||player:○○が使(つか)われた時(とき)||`` の中(なか)に、**4** 回(かい)繰(く)り返(かえ)す別(べつ)の ``||loops:for||`` ループをコードで書(か)きましょう。

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
``||loops:for||`` ループの中(なか)で、**スケルトン ウマ**を(0,0,0)に出現(しゅつげん)させましょう。  

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
**Play** ボタンを押(お)して、Minecraftに入(はい)って全(すべ)てのイベントをテストしてみましょう。

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

