# 螺旋(らせん)アクティビティ: ブロック

## ステップ 1
``||player:チャットコマンド||``を取(と)って、**"3"** という名前(なまえ)を付(つ)けます。

```template
{}
```

```blocks
player.onChat("3", function () {
})
```

## ステップ 2

``||player:チャットコマンド||`` の中(なか)に ``||loops:もし〇〇ならくりかえす||``を置(お)きます。``||logic:比較(ひかく)||`` を取(と)って、**等(ひと)しくない** に設定(せってい)して、``||loops:もし〇〇ならくりかえす||``の **偽(にせ)** の場所(ばしょ)にドラッグします。``||agent:エージェントの○○の○○[調(しら)べる]||`` ブロックを取(と)って、**ブロック** と **前(まえ)** に設定(せってい)して、比較(ひかく)の **左(ひだり)** パラメータにドラッグします。``||blocks:ブロック||`` を取(と)って、**金(きん)** に設定(せってい)して、比較(ひかく)の **右(みぎ)** パラメータにドラッグします。

```template
{}
```

```blocks
player.onChat("3", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
    	
    }
})
```

## ステップ 3

``||loops:もし〇〇ならくりかえす||``の内側(うちがわ)に ``||logic:もし-でなければ||`` 条件(じょうけん)文(ぶん)を追加(ついか)し、``||logic:もし-でなければ||`` 条件(じょうけん)文(ぶん)の **true** 引数(ひきすう)を ``||logic:ではない||`` ブロックに置(お)き換(か)えます。``||agent:〇〇がある[見(み)つける]||`` ブロックを **ブロック** と **前(まえ)** に設定(せってい)して ``||logic:ではない||`` ブロックに追加(ついか)します。前(まえ)に１ブロック``||agent:移動(いどう)させる||``を ``||logic:もし||`` 条件(じょうけん)文(ぶん)に追加(ついか)します。

```template
{}
```

```blocks
player.onChat("3", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
        if (!(agent.detect(AgentDetection.Block, FORWARD))) {
            agent.move(FORWARD, 1)
        } else {
        	
        }
    }
})
```

## ステップ 4

``||agent:向(む)きを左(ひだり)に変(か)える||`` ブロックを ``||logic:でなければ||`` 条件(じょうけん)文(ぶん)に追加(ついか)します。

```template
{}
```

```blocks
player.onChat("3", function () {
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
**実行(じっこう)** ボタンを押(お)して、Minecraftに入(はい)り、**t** を入力(にゅうりょく)して **spiral** を試(ため)してみましょう。

```template
{}
```

```blocks
player.onChat("3", function () { 
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