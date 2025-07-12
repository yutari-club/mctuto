# 橋(はし)を建設(けんせつ): ブロック

## ステップ 1
``||player:チャットコマンド||``を取(と)って、**"2"** という名前(なまえ)を付(つ)けます。

```template
{}
```

```blocks
player.onChat("2", function () {
})
```

## ステップ 2
``||agent:スロットに設定(せってい)させる||`` を取(と)って、**オークの板材(いたざい)**、数量(すうりょう) **64**、スロット **1** に設定(せってい)します。新(あたら)しくできた ``||agent:スロットに設定(せってい)させる||`` を ``||player:チャットコマンド||``の中(なか)にドラッグします。

```template
{}
```

```blocks
player.onChat("2", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
})
```

## ステップ 3
``||agent:移動(いどう)させる||`` ブロックを取(と)って、**前(まえ)** に **1** ブロック移動(いどう)するように設定(せってい)し、``||agent:スロットに設定(せってい)させる||`` ブロックの後(あと)の ``||player:チャットコマンド||``にドラッグします。

```template
{}
```

```blocks
player.onChat("2", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
})
```

## ステップ 4

``||loops:もし〇〇ならくりかえす||``を取(と)って、``||agent:移動(いどう)させる||``ブロックの後(あと)の ``||player:チャットコマンド||``の中(なか)にドラッグします。``||logic:ではない||`` ブロックを取(と)って、``||loops:もし〇〇ならくりかえす||``の **偽(にせ)** の部分(ぶぶん)にドラッグします。``||agent:〇〇がある[見(み)つける]||`` ブロックを取(と)って、**ブロック** と **下(した)** に設定(せってい)します。できた ``||agent:〇〇がある[見(み)つける]||`` ブロックを **ではない** の括弧(かっこ)内(ない)にドラッグします。

```template
{}
```

```blocks
player.onChat("2", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
    	
    }
})
```

## ステップ 5

``||agent:置(お)かせる||`` ブロックを取(と)って、**下(した)** に設定(せってい)して ``||loops:もし〇〇ならくりかえす||``の中(なか)にドラッグします。

```template
{}
```

```blocks
player.onChat("2", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
        agent.place(DOWN)
    }
})
```

## ステップ 6

すでにある ``||agent:前(まえ)に1ブロック移動(いどう)させる||``を右(みぎ)クリックしてコピーします。新(あたら)しい ``||agent:前(まえ)に1ブロック移動(いどう)させる||``を ``||agent:下(した)へ置(お)かせる||``ブロックの下(した)の ``||loops:もし〇〇ならくりかえす||``の中(なか)にドラッグします。

```template
{}
```

```blocks
player.onChat("2", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
```

## ステップ 7
**実行(じっこう)** ボタンを押(お)して、Minecraftに入(はい)り、**t** を押(お)して **build** と入力(にゅうりょく)して試(ため)してみましょう。

```template
{}
```

```blocks
player.onChat("2", function () { 
    agent.setItem(PLANKS_OAK, 64, 1) 
    agent.move(FORWARD, 1) 
    while (!(agent.detect(AgentDetection.Block, DOWN))) { 
        agent.place(DOWN) 
        agent.move(FORWARD, 1) 
    } 
}) 
```

```ghost
agent.teleportToPlayer()
```