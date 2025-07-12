# エージェントの迷路(めいろ): ブロック

## ステップ 1

``||loops: forever||`` ループを取(と)って、ワークスペースにドラッグしましょう。

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
``||agent:〇〇がある[見(み)つける]||`` コマンドを評価(ひょうか)する ``||logic:if then||`` 条件(じょうけん)文(ぶん)を取(と)って、**block** と **forward** に設定(せってい)してから、``||logic: if then||`` 条件(じょうけん)文(ぶん)の中(なか)に ``||agent:turn||`` **left** ブロックを追加(ついか)しましょう。

```blocks
if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    }
```

## ステップ 3

**(+)** 記号(きごう)をクリックして ``||logic:if then||`` 条件(じょうけん)文(ぶん)に ``||logic: else||`` を追加(ついか)し、``||agent:移動(いどう)させる||`` **forward by 1** ブロックを入(い)れます。

**NOTE:** 完全(かんぜん)な文(ぶん)は **if-else文(ぶん)** になります。

```blocks
if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
```

## ステップ 4

``||logic:if else||`` 文(ぶん)を ``||loops:forever||`` ループの中(なか)に置(お)きます。これにより、これらのステップは停止(ていし)するまで続(つづ)きます。

```blocks
loops.forever(function () {
    if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    })
```
## ステップ 5
**Play** ボタンを押(お)し、Minecraftでコードを試(ため)してみましょう。