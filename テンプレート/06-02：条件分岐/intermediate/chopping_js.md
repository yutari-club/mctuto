# 木を切る: Javascript

## ステップ 1

``||player:on chat||`` コマンドを作成し、**"tp"** という名前を付けます。

```javascript
player.onChat("tp", function () {
})
```

## ステップ 2

``||player:on chat||`` コマンドの内側で、エージェントがプレイヤーに ``||agent:teleport||`` するようにコーディングします。

```javascript
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## ステップ 3

別の ``||player: on chat||`` コマンドを作成し、**"chop"** という名前を付けます。

```javascript
player.onChat("chop", function () {
})
```

## ステップ 4

新しい ``||variable: variable||`` を作成し、**height** という名前を付けて、**0** に設定します。

```javascript
let height = 0
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
player.onChat("chop", function () {
    height = 0
})
```

## ステップ 5

**chop** ``||player:on chat||`` コマンドの内側の **height** 変数の直下に、**while the agent detects a block forward** で始まる ``||loops:while||`` ループを作成します。

```javascript
player.onChat("chop", function () {
    height = 0
    while (agent.detect(AgentDetection.Block, FORWARD)) {
    	
    }
```

## ステップ 6

``||loops:while||`` ループに追加して、**height** ``||variable: variable||`` を **height plus 1** の値に変更します。

```javascript
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        height += 1
    }
```

## ステップ 7

``||loops:while||`` ループの中で、変数 **height** の下に、エージェントが **destroy up** するようにコーディングします。

また、**agent move up by 1** の行を追加します。

```javascript
    height += 1
        agent.destroy(UP)
        agent.move(UP, 1)
    }
```

## ステップ 8

``||loops:while||`` ループの後に ``||loops:for||`` ループを追加します。**height** 変数を ``||loops:repeat||`` ループの **times** 引数に挿入します。

```javascript
for (let index = 0; index < height; index++) {
    } 
```

## ステップ 9

``||loops:for||`` ループの内側に、**agent move down by 1** と **agent destroy forward** の行を追加します。

```javascript
for (let index = 0; index < height; index++) {
        agent.move(DOWN, 1)
        agent.destroy(FORWARD)
    }
```

## ステップ 10

``||loops:for||`` ループの後に、エージェントが ``||agent:collect all||`` するようにコーディングします。

```javascript
    }
    agent.collectAll()
})
```

## ステップ 11

Minecraftに入り、**t** を入力して **tp** と **chop** チャットコマンドをテストしてみましょう。

```javascript
player.onChat("farm", function () { 
    agent.setItem(CARROTS, 64, 1) 
    for (let index = 0; index < 3; index++) { 
        for (let index = 0; index < 5; index++) { 
            agent.till(FORWARD) 
            agent.move(FORWARD, 1) 
            agent.place(FORWARD) 

        } 
        agent.move(BACK, 5) 
        agent.move(RIGHT, 2) 

    } 

}) 
```