# 木(き)を切(き)る: Javascript

## ステップ 1

``||player:チャットコマンド||``を作(つく)って、**"tp"** という名前(なまえ)を付(つ)けましょう。

```javascript
player.onChat("tp", function () {
})
```

## ステップ 2

``||player:チャットコマンド||``の中(なか)で、エージェントがプレイヤーに ``||agent:teleport||`` するようにコードを書(か)きましょう。

```javascript
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## ステップ 3

別(べつ)の ``||player:チャットコマンド||`` を作(つく)って、**"chop"** という名前(なまえ)を付(つ)けましょう。

```javascript
player.onChat("chop", function () {
})
```

## ステップ 4

新(あたら)しい ``||variable: variable||`` を作(つく)って、**height** という名前(なまえ)を付(つ)けて、**0** に設定(せってい)しましょう。

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

**chop** ``||player:チャットコマンド||``の中(なか)の **height** 変数(へんすう)の直下(ちょっか)に、**while the agent detects a block forward** で始(はじ)まる ``||loops:もし〇〇ならくりかえす||``を作(つく)って。

```javascript
player.onChat("chop", function () {
    height = 0
    while (agent.detect(AgentDetection.Block, FORWARD)) {
    	
    }
```

## ステップ 6

``||loops:もし〇〇ならくりかえす||``に追加(ついか)して、**height** ``||variable: variable||`` を **height plus 1** の値(ね)に変更(へんこう)します。

```javascript
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        height += 1
    }
```

## ステップ 7

``||loops:もし〇〇ならくりかえす||``の中(なか)で、変数(へんすう) **height** の下(した)に、エージェントが **destroy up** するようにコードを書(か)きましょう。

また、**agent move up by 1** の行(ぎょう)を追加(ついか)します。

```javascript
    height += 1
        agent.destroy(UP)
        agent.move(UP, 1)
    }
```

## ステップ 8

``||loops:もし〇〇ならくりかえす||``の後(あと)に ``||loops:for||`` ループを追加(ついか)しましょう。**height** 変数(へんすう)を ``||loops:くりかえし○○回(かい)||`` ループの **times** 引数(ひきすう)に挿入(そうにゅう)しましょう。

```javascript
for (let index = 0; index < height; index++) {
    } 
```

## ステップ 9

``||loops:for||`` ループの内側(うちがわ)に、**agent move down by 1** と **agent destroy forward** の行(ぎょう)を追加(ついか)します。

```javascript
for (let index = 0; index < height; index++) {
        agent.move(DOWN, 1)
        agent.destroy(FORWARD)
    }
```

## ステップ 10

``||loops:for||`` ループの後(あと)に、エージェントが ``||agent:collect all||`` するようにコードを書(か)きましょう。

```javascript
    }
    agent.collectAll()
})
```

## ステップ 11

Minecraftに入(はい)り、**t** を押(お)して**tp** と入力(にゅうりょく)し、**chop** と入力(にゅうりょく)してチャットコマンドをテストしてみましょう。

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