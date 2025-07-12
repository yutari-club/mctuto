# エージェント楽(たの)しい関数(かんすう): ブロック

## ステップ 1
``||player:チャットコマンド||`` **carrot**、``||player:チャットコマンド||`` **chicken**、``||player:チャットコマンド||`` **snowball** が用意(ようい)されています。

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
新(あたら)しい ``||player:○○が使(つか)われた時(とき)||`` を取(と)って **Blaze Rod** を選択(せんたく)しましょう。``||player:run chat||`` コマンドを追加(ついか)して **carrot** と名前(なまえ)を付(つ)けます。もう一(ひと)つの ``||player:run chat||`` コマンドを取(と)って **chicken** と名前(なまえ)を付(つ)けます。3つ目(め)の ``||player:run chat||`` コマンドを取(と)って **snowball** と名前(なまえ)を付(つ)けます。

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
    player.runChatCommand("carrot")
    player.runChatCommand("chicken")
    player.runChatCommand("snowball")
})
```

## ステップ 3

**Play** ボタンを押(お)して、Minecraftに戻(もど)り、チャットに **carrot**、**chicken**、**snowball** コマンドを入力(にゅうりょく)して何(なに)が起(お)こるか見(み)てみましょう。

