# 螺旋アクティビティ: ブロック


## ステップ 1
``||player:on chat||`` コマンドを取得し、**"spiral"** という名前を付けます。

```blocks
player.onChat("spiral", function () {
})
```

## ステップ 2

``||player:chat command||`` の内側に ``||loops:while||`` ループを配置します。``||logic:comparison||`` を取得し、**not equals** に設定して、``||loops:while||`` ループの **true** の場所にドラッグします。``||agent:agent inspect||`` ブロックを取得し、**block** と **forward** に設定して、比較の **left** パラメータにドラッグします。``||blocks:block||`` を取得し、**Gold** に設定して、比較の **right** パラメータにドラッグします。

```blocks
player.onChat("spiral", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
    	
    }
})
```

## ステップ 3

``||loops:while||`` ループの内側に ``||logic:if-else||`` 条件文を追加し、``||logic:if-else||`` 条件文の **true** 引数を ``||logic:not||`` ブロックに置き換えます。``||agent:agent detect||`` ブロックを **block** と **forward** に設定して ``||logic:not||`` ブロックに追加します。``||agent:agent move||`` **forward** by 1 を ``||logic:if||`` 条件文に追加します。

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

``||agent:agent turn left||`` ブロックを ``||logic:else||`` 条件文に追加します。

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