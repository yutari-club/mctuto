# ループ: ブロック

## ステップ 1
``||player:○○が使われた時||`` コマンドを取得して、**骨**を選択してください。
```template
{}
```

```blocks
player.onItemInteracted(BONE, function () { 
 
}) 
```

## ステップ 2
``||loops:くりかえし○○回||`` ループを取得して、``||player:骨が使われた時||`` の中にドラッグします。そして **6** 回繰り返すように設定してください。

```blocks
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
      
    } 
}) 
```

## ステップ 3
``||mobs:スポーンさせる||`` ブロックを取得して、``||loops:くりかえし○○回||`` ループの中にドラッグします。**ゾンビ ウマ**を選択して、位置を(0,0,0)に設定してください。

**注意:** これはループの中で6回繰り返されます。

```blocks
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0)) 
    } 
}) 
```

## ステップ 4
別の ``||loops:くりかえし○○回||`` ループを取得して、``||player:||骨が使われた時`` の中にドラッグします。そして **4** 回繰り返すように設定してください。

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
別の ``||mobs:スポーンさせる||`` ブロックを取得して、新しい ``||loops:くりかえし○○回||`` ループの中にドラッグします。**スケルトン ウマ**を選択して、位置を(0,0,0)に設定してください。

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
**Play** ボタンを押して、Minecraftに入って全てのイベントをテストしてください。チェストの中にあるアイテムを確認してください。 

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


