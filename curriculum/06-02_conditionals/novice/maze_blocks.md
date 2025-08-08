# エージェントの迷路(めいろ): ブロック

## ステップ 1

```template
{}
```

``||loops:ずっと||`` ループを取(と)って、ワークスペースにドラッグしましょう。

```blocks
loops.forever(function () {
	
})

// Included below to force the block to appear for the student
agent.teleportToPlayer()
 player.onChat("pyramid", function (size)){ 
    let size = 0 
      
    } 

```

## ステップ 2
``||agent:〇〇がある[見(み)つける]||`` を評価(ひょうか)する ``||logic:もし〇〇なら||`` 条件(じょうけん)文(ぶん)を取(と)って、**前(まえ)** と **ブロック** に設定(せってい)してから、``||logic:もし〇〇なら||`` 条件(じょうけん)文(ぶん)の中(なか)に ``||agent:向(む)きを変(か)える||``を追加(ついか)し、**左(ひだり)**にしましょう。

```blocks
if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    }
```

## ステップ 3

**(+)** 記号(きごう)をクリックして ``||logic:もし〇〇なら||`` 条件(じょうけん)文(ぶん)に ``||でなければ||`` を追加(ついか)し、``||agent:移動(いどう)させる||`` **forward by 1** ブロックを入(い)れます。

**NOTE:** 完全(かんぜん)な文(ぶん)は **if-else文(ぶん)** になります。

```blocks
if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
```

## ステップ 4

``||logic:もし〇〇なら||`` 文(ぶん)を ``||loops:ずっと||`` ループの中(なか)に置(お)きます。これにより、これらのステップは停止(ていし)するまで続(つづ)きます。

```blocks
loops.forever(function () {
    if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    })
```
## ステップ 5
**開始** ボタンを押(お)し、Minecraftでコードを試(ため)してみましょう。