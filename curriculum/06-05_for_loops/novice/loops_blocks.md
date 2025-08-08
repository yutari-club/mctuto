# ループ: ブロック

## ステップ 1
``||player:○○が使(つか)われた時(とき)||`` コマンドを取(と)って、**骨(ほね)**を選(えら)びましょう。
```template
{}
```

```blocks
player.onItemInteracted(BONE, function () { 
 
}) 
```

## ステップ 2
``||loops:くりかえし○○回(かい)||`` ループを取(と)って、``||player:骨(ほね)が使(つか)われた時(とき)||`` の中(なか)にドラッグします。そして **6** 回(かい)繰(く)り返(かえ)すように設定(せってい)します。

```blocks
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
      
    } 
}) 
```

## ステップ 3
``||mobs:スポーンさせる||`` ブロックを取(と)って、``||loops:くりかえし○○回(かい)||`` ループの中(なか)にドラッグします。**ゾンビ ウマ**を選(えら)んで、位置(いち)を(0,0,0)に設定(せってい)します。

**注意(ちゅうい):** これはループの中(なか)で6回(かい)繰(く)り返(かえ)されます。

```blocks
player.onItemInteracted(BONE, function () { 
    for (let index = 0; index < 6; index++) { 
        mobs.spawn(ZOMBIE_HORSE, pos(0, 0, 0)) 
    } 
}) 
```

## ステップ 4
別(べつ)の ``||loops:くりかえし○○回(かい)||`` ループを取(と)って、``||player:骨(ほね)が使(つか)われた時(とき)||`` の中(なか)にドラッグします。そして **4** 回(かい)繰(く)り返(かえ)すように設定(せってい)します。

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
別(べつ)の ``||mobs:スポーンさせる||`` ブロックを取(と)って、新(あたら)しい ``||loops:くりかえし○○回(かい)||`` ループの中(なか)にドラッグします。**スケルトン ウマ**を選(えら)んで、位置(いち)を(0,0,0)に設定(せってい)します。

**注意(ちゅうい):** これはループの中(なか)で **4** 回(かい)繰(く)り返(かえ)されます。

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
**Play** ボタンを押(お)して、Minecraftに入(はい)って全(すべ)てのイベントをテストしてみましょう。チェストの中(なか)にあるアイテムを確認(かくにん)してみましょう。 

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


