# 橋を建設: JavaScript


## ステップ 1
``||player:チャットコマンド||``を作成し、**"build"** という名前を付けます。

```javascript
player.onChat("build", function () {
})
```

## ステップ 2
``||player:チャットコマンド||``の内側で、エージェントが **oak wood planks** の ``||agent:set a block||`` を数量 **64**、スロット **1** に設定するようにコーディングします。

```javascript
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
})
```

## ステップ 3
エージェントが **1** ブロック ``||agent:move forward||`` するようにコーディングします。

```javascript
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
})
```

## ステップ 4

``||player:チャットコマンド||``の内側で、エージェントが **down** で ``||agent:not detect a block||`` かどうかをチェックすることから始まる ``||loops:もし〇〇ならくりかえす||``をコーディングします。

```javascript
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
    	
    }
})
```

## ステップ 5

``||loops:もし〇〇ならくりかえす||``の内側で、``||agent:agent to place||`` **down** するようにコーディングします。

```javascript
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
        agent.place(DOWN)
    }
})
```

## ステップ 6

``||agent:place down||`` コマンドの後で、``||agent:agent to move||`` **forward by 1** するようにコーディングします。そして ``||loops:もし〇〇ならくりかえす||``を終了します。

```javascript
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
```
## ステップ 7
**実行** ボタンを押して、Minecraftに入り、**t** を入力して **build** を試してみましょう。

```javascript
player.onChat("build", function () { 
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