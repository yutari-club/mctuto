# エージェント楽(たの)しい関数(かんすう)の改造(かいぞう): JavaScript

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
用意(ようい)されている **carrot** ``||player:チャットコマンド||``の名前(なまえ)を **torches** に変更(へんこう)します。``||agent:スロットに設定(せってい)させる||`` を **Torch** に変更(へんこう)し、数(かず)を **32** 個(こ)、スロット **1** に設定(せってい)します。

```javascript
player.onChat("torches", function () {
    agent.setItem(TORCHES, 32, 1)
})
```

## ステップ 3

既存(きそん)の ``||loops:for||`` ループを変更(へんこう)して、12回(かい)の植(う)え付(つ)けサイクルを完了(かんりょう)します。

**注意(ちゅうい)**: これは (4x3) または (3x4) のループで実現(じつげん)できます。

```javascript
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
blaze rod が ``||player:○○が使(つか)われた時(とき)||`` されたときのコードを変更(へんこう)して、3つの ``||player:チャットコマンド||`` **carrot**、**chicken**、**snowball** すべてが **carrot** チャットコマンドの代(か)わりに **torches** ``||player:on chat|`` コマンドを実行(じっこう)するようにしましょう。

```javascript
player.onItemInteracted(BLAZE_ROD, function () { 
    player.runChatCommand("torches") 
    player.runChatCommand("chicken") 
    player.runChatCommand("snowball") 
})
```

## ステップ 5
**Play** ボタンを押(お)して、Minecraftに戻(もど)り、チャットに **torches**、**chicken**、**snowball** コマンドを入力(にゅうりょく)して何(なに)が起(お)こるか見(み)てみましょう。

## ステップ 6
**Play** ボタンを押(お)して、コードを書(か)くところに戻(もど)り、用意(ようい)されている他(ほか)の ``||player:チャットコマンド||`` **chicken** と **snowball** を変更(へんこう)しましょう。

## ステップ 7
Minecraftに戻(もど)り、チャットに **chicken** と **snowball** コマンドを入力(にゅうりょく)して何(なに)が起(お)こるか見(み)てみましょう。