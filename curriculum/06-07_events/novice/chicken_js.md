# にわとりの雨: JavaScript


## ステップ 1
``||player:チャットコマンド||``コマンドを作成して、**"chicken"**と名前をつけます。

```javascript
player.onChat("chicken", function (){ 
 
}) 
```

## ステップ 2

``||player:チャットコマンド||``コマンドの中で、プレイヤーの頭の上**10**ブロックの位置(0, **10**, 0)ににわとりを出現させます。

**注意:** 位置の**~**文字は、座標がプレイヤーの位置からの相対座標であることを示します。

Minecraftに行って、**t**を押してチャットを開き、「chicken」と入力します。上を見上げると、プレイヤーの**10**ブロック上から1匹のにわとりが空から落ちてくるのが見えます。

```javascript
player.onChat("chicken", function () { 
    mobs.spawn(CHICKEN, pos(0, 10, 0)) 
}) 
```

## ステップ 3

出現コードを**100回**繰り返すために、出現コードの周りに``||loops: for loop||``を配置します。

Minecraftに行って、**t**を押してチャットを開き、**"chicken"**と入力します。上を見上げると、プレイヤーの**10**ブロック上から100匹のにわとりが空から落ちてくるのが見えます。

```javascript
player.onChat("chicken", function () {
    for (let index = 0; index < 100; index++) {
        mobs.spawn(CHICKEN, pos(0, 10, 0))
    }
})
```

