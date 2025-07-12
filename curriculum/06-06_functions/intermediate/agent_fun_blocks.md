# エージェント楽(たの)しい関数(かんすう)の改造(かいぞう): ブロック

## ステップ 1
次(つぎ)の ``||player:チャットコマンド||`` **carrot**、**chicken**、**snowball** が用意(ようい)されています。

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
用意(ようい)されている **carrot** ``||player:チャットコマンド||``の名前(なまえ)を **torches** に変更(へんこう)します。``||agent:スロットに設定(せってい)させる||`` を **Torch** に変更(へんこう)し、数(かず)を **32** 個(こ)、スロット **1** に設定(せってい)します。

```blocks
player.onChat("torches", function () {
    agent.setItem(TORCHES, 32, 1)
})
```

## ステップ 3

既存(きそん)の ``||loops:くりかえし○○回(かい)||`` ループを変更(へんこう)して、12回(かい)の植(う)え付(つ)けサイクルを完了(かんりょう)します。

**注意(ちゅうい)**: これは (4x3) または (3x4) のループで実現(じつげん)できます。

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
新(あたら)しい ``||player:○○が使(つか)われた時(とき)||`` コマンドを取(と)って **trident** を選択(せんたく)しましょう。**torches** という名前(なまえ)の ``||player:run chat||`` コマンドを追加(ついか)しましょう。もう一(ひと)つの ``||player:run chat||`` コマンドを追加(ついか)して **chicken** と名前(なまえ)を付(つ)けましょう。もう一(ひと)つの ``||player:run chat||`` コマンドを追加(ついか)して **snowball** と名前(なまえ)を付(つ)けましょう。

```blocks
player.onItemInteracted(BLAZE_ROD, function () { 
    player.runChatCommand("torches") 
    player.runChatCommand("chicken") 
    player.runChatCommand("snowball") 
})
```

## ステップ 5
**Play** ボタンを押(お)して、Minecraftに戻(もど)り、チャットに **torches**、**chicken**、**snowball** コマンドを入力(にゅうりょく)して何(なに)が起(お)こるか見(み)てみましょう。

## ステップ 6
用意(ようい)されている他(ほか)の ``||player:チャットコマンド||`` **chicken** と **snowball** を変更(へんこう)します。このコードを書(か)く体験(たいけん)では、異(こと)なる効果(こうか)を選択(せんたく)できます。

## ステップ 7
**Play** ボタンを押(お)して、Minecraftに戻(もど)り、チャットに **chicken** と **snowball** コマンドを入力(にゅうりょく)して何(なに)が起(お)こるか見(み)てみましょう。