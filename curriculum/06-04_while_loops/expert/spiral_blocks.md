# 螺旋アクティビティ: ブロック

## ステップ 1
``||player:チャットコマンド||``を取って、**"spiral"** という名前を付けます。

```template
{}
```

```blocks
player.onChat("spiral", function () {
})
```

## ステップ 2

``||player:チャットコマンド||`` の中に ``||loops:もし〇〇ならくりかえす||``を置きます。``||logic:比較||`` を取って、**等しくない** に設定して、``||loops:もし〇〇ならくりかえす||``の **偽** の場所にドラッグします。``||agent:エージェントの○○の○○[調べる]||`` ブロックを取って、**ブロック** と **前** に設定して、比較の **左** パラメータにドラッグします。``||blocks:ブロック||`` を取って、**金** に設定して、比較の **右** パラメータにドラッグします。

```template
{}
```

```blocks
player.onChat("spiral", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
    	
    }
})
```

## ステップ 3

``||loops:もし〇〇ならくりかえす||``の内側に ``||logic:もし-でなければ||`` 条件文を追加し、``||logic:もし-でなければ||`` 条件文の **true** 引数を ``||logic:ではない||`` ブロックに置き換えます。``||agent:〇〇がある[見つける]||`` ブロックを **ブロック** と **前** に設定して ``||logic:ではない||`` ブロックに追加します。前に１ブロック``||agent:移動させる||``を ``||logic:もし||`` 条件文に追加します。

```template
{}
```

```blocks
player.onChat("spiral", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
        if (!(agent.detect(AgentDetection.Block, FORWARD))) {
            agent.move(FORWARD, 1)
        } else {
        	
        }
    }
})
```

## ステップ 4

``||agent:向きを左に変える||`` ブロックを ``||logic:でなければ||`` 条件文に追加します。

```template
{}
```

```blocks
player.onChat("spiral", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
        if (!(agent.detect(AgentDetection.Block, FORWARD))) {
            agent.move(FORWARD, 1)
        } else {
            agent.turn(LEFT_TURN)
        }
    }
})
```

## ステップ 5
**実行** ボタンを押して、Minecraftに入り、**t** を入力して **spiral** を試してみましょう。

```template
{}
```

```blocks
player.onChat("spiral", function () { 
    for (let index = 0; index < 2; index++) { 
        while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) { 
            if (!(agent.detect(AgentDetection.Block, FORWARD))) { 
                agent.move(FORWARD, 1) 
            } else { 
                agent.turn(LEFT_TURN) 
            } 
        } 
        agent.move(UP, 3) 
    } 
}) 
```
```ghost
agent.teleportToPlayer()
```