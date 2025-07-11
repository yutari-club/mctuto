# エージェント楽しい関数の改造: ブロック

## ステップ 1
次の ``||player:チャットコマンド||`` **carrot**、**chicken**、**snowball** が用意されています。

```template
player.onChat("carrot", function () {
    agent.setItem(CARROTS, 64, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 5; index++) {
            agent.till(FORWARD)
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.move(BACK, 5)
        agent.move(RIGHT, 2)
    }
})
player.onChat("chicken", function () {
    for (let index = 0; index < 15; index++) {
        mobs.spawn(CHICKEN, pos(0, 0, 0))
    }
})
player.onChat("snowball", function () {
    for (let index = 0; index < 15; index++) {
        mobs.spawn(SNOWBALL_PROJECTILE_MOB, pos(0, 10, 0))
    }
})
```

## ステップ 2
用意されている **carrot** ``||player:チャットコマンド||``の名前を **torches** に変更します。``||agent:スロットに設定させる||`` を **Torch** に変更し、数を **32** 個、スロット **1** に設定します。

```blocks
player.onChat("torches", function () {
    agent.setItem(TORCHES, 32, 1)
})
```

## ステップ 3

既存の ``||loops:くりかえし○○回||`` ループを変更して、12回の植え付けサイクルを完了します。

**注意**: これは (4x3) または (3x4) のループで実現できます。

```blocks
player.onChat("torches", function () {
    agent.setItem(TORCHES, 32, 1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 3; index++) {
        	
        }
        agent.move(BACK, 5)
        agent.move(RIGHT, 2)
    }
})
```

## ステップ 4
新しい ``||player:○○が使われた時||`` コマンドを取得して **trident** を選択します。**torches** という名前の ``||player:run chat||`` コマンドを追加します。もう一つの ``||player:run chat||`` コマンドを追加して **chicken** と名前を付けます。もう一つの ``||player:run chat||`` コマンドを追加して **snowball** と名前を付けます。

```blocks
player.onItemInteracted(BLAZE_ROD, function () { 
    player.runChatCommand("torches") 
    player.runChatCommand("chicken") 
    player.runChatCommand("snowball") 
})
```

## ステップ 5
**Play** ボタンを押して、Minecraftに戻り、チャットに **torches**、**chicken**、**snowball** コマンドを入力して何が起こるか見てみましょう。

## ステップ 6
用意されている他の ``||player:チャットコマンド||`` **chicken** と **snowball** を変更します。このコーディング体験では、異なる効果を選択できます。

## ステップ 7
**Play** ボタンを押して、Minecraftに戻り、チャットに **chicken** と **snowball** コマンドを入力して何が起こるか見てみましょう。