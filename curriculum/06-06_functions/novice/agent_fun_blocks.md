# エージェント楽しい関数: ブロック

## ステップ 1
``||player:チャットコマンド||`` **carrot**、``||player:チャットコマンド||`` **chicken**、``||player:チャットコマンド||`` **snowball** が用意されています。

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
新しい ``||player:on item used||`` を取得して **Blaze Rod** を選択します。``||player:run chat||`` コマンドを追加して **carrot** と名前を付けます。もう一つの ``||player:run chat||`` コマンドを取得して **chicken** と名前を付けます。3つ目の ``||player:run chat||`` コマンドを取得して **snowball** と名前を付けます。

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
    player.runChatCommand("carrot")
    player.runChatCommand("chicken")
    player.runChatCommand("snowball")
})
```

## ステップ 3

**Play** ボタンを押して、Minecraftに戻り、チャットに **carrot**、**chicken**、**snowball** コマンドを入力して何が起こるか見てみましょう。

