# ループ: ブロック

## ステップ 1
``||player:○○が使われた時||`` コマンドを取って、**骨**を選びましょう。
```template
{}
```

```blocks
player.onItemInteracted(BONE, function () { 
 
}) 
```

## ステップ 2
``||loops:くりかえし○○回||`` ループを取って、``||player:骨が使われた時||`` の中にドラッグします。そして **6** 回繰り返すように設定します。

```blocks
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
      
    } 
}) 
```

## ステップ 3
``||mobs:スポーンさせる||`` ブロックを取って、``||loops:くりかえし○○回||`` ループの中にドラッグします。**ゾンビ ウマ**を選んで、位置を(0,0,0)に設定します。

**注意:** これはループの中で6回繰り返されます。

```blocks
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0)) 
    } 
}) 
```

## ステップ 4
別の ``||loops:くりかえし○○回||`` ループを取って、``||player:||骨が使われた時`` の中にドラッグします。そして **4** 回繰り返すように設定します。

```blocks
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0)) 
    } 
    for (let index = 0; index < 4; index++) { 
      
    } 
}) 
```

## ステップ 5
別の ``||mobs:スポーンさせる||`` ブロックを取って、新しい ``||loops:くりかえし○○回||`` ループの中にドラッグします。**スケルトン ウマ**を選んで、位置を(0,0,0)に設定します。

**注意:** これはループの中で **4** 回繰り返されます。

```blocks
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
**Play** ボタンを押して、Minecraftに入って全てのイベントをテストしてみましょう。チェストの中にあるアイテムを確認してみましょう。 

```blocks
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0)) 
    } 
    for (let index = 0; index < 4; index++) { 
        mobs.spawn(SKELETON_HORSE, pos(0, 0, 0)) 
    } 
}) 
```

```ghost
player.onChat("run", function () {
	
})
```


