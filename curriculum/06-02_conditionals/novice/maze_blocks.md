# エージェントの迷路: ブロック

## ステップ 1

``||loops: forever||`` ループを取って、ワークスペースにドラッグしましょう。

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
``||agent:〇〇がある[見つける]||`` コマンドを評価する ``||logic:if then||`` 条件文を取って、**block** と **forward** に設定してから、``||logic: if then||`` 条件文の中に ``||agent:turn||`` **left** ブロックを追加しましょう。

```blocks
if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    }
```

## ステップ 3

**(+)** 記号をクリックして ``||logic:if then||`` 条件文に ``||logic: else||`` を追加し、``||agent:移動させる||`` **forward by 1** ブロックを入れます。

**NOTE:** 完全な文は **if-else文** になります。

```blocks
if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    }
```

## ステップ 4

``||logic:if else||`` 文を ``||loops:forever||`` ループの中に置きます。これにより、これらのステップは停止するまで続きます。

```blocks
loops.forever(function () {
    if (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.turn(LEFT_TURN)
    } else {
        agent.move(FORWARD, 1)
    })
```
## ステップ 5
**Play** ボタンを押し、Minecraftでコードを試してみましょう。