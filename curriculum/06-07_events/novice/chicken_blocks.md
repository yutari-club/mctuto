# にわとりの雨: ブロック


## ステップ 1
``||player:チャットコマンド||``コマンドを取得して、**"chicken"**と名前をつけます。

```blocks
player.onChat("chicken", function (){ 
 
}) 
```

## ステップ 2

``||mobs:spawn animal||``を取得して、``||player:チャットコマンド||``コマンドの中にドラッグします。``||mobs:spawn animal||``で**chicken**を選んで、座標は(0, 0, 0)のままにします。これは3D空間(x, y, z)でのプレイヤーの現在位置です。

```blocks
player.onChat("chicken", function () { 
    mobs.spawn(CHICKEN, pos(0, 0, 0)) 
}) 
```

## ステップ 3

にわとりがプレイヤーの頭の上10ブロック**上**に出現するように、``||mobs:spawn animal||``の位置を変更します。座標の2番目の数字(Y)を**10**に設定します(0, 10, 0)。

**注意:** 位置の**~**文字は、座標がプレイヤーの位置からの相対座標であることを示します。

```blocks
player.onChat("chicken", function () { 
    mobs.spawn(CHICKEN, pos(0, 10, 0)) 
}) 
```

## ステップ 4

Minecraftに行って、**t**を押してチャットを開き、「chicken」と入力します。上を見上げると、プレイヤーの10ブロック上から1匹のにわとりが空から落ちてくるのが見えます。

## ステップ 5

にわとりが1匹だけだとさみしいです。``||loops:repeat||``ブロックを取得して、**100**回に設定します。``||mobs:spawn animal||``を``||loops:repeat||`` **100**の中にドラッグして、それから``||loops:repeat||`` 100を**chicken**の``||player:チャットコマンド||``コマンドの中にドラッグします。

Minecraftに行って、**t**を押してチャットを開き、「chicken」と入力します。上を見上げると、プレイヤーの10ブロック上から100匹のにわとりが空から落ちてくるのが見えます。

```blocks
player.onChat("chicken", function () { 
    for (let index = 0; index < 100; index++) { 
        mobs.spawn(CHICKEN, pos(0, 10, 0)) 
    } 
}) 
```

