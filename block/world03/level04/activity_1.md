### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 鉱石(こうせき)を採掘(さいくつ)しよう！
<!-- # Mine the resources! -->

## Step 1
エージェントに**金鉱石(きんこうせき)**と**鉄鉱石(てっこうせき)**を採掘(さいくつ)させる必要(ひつよう)があります。<br>

まず、エージェントをさまざまな方向(ほうこう)に動(うご)かすための複数(ふくすう)の``||player:チャットコマンド||``を作成(さくせい)するよ。<br>

例(たと)えば、**前進(ぜんしん)**、**後退(こうたい)**、**右(みぎ)**といったコマンドだよ。<br>

エージェントをどのくらい動(うご)かすかを具体的(ぐたいてき)に指定(してい)する代(か)わりに、変数(へんすう)を使(つか)うことができるよ。<br>

ゲーム内(ない)チャットでコマンドを入力(にゅうりょく)する際(さい)には、**前進(ぜんしん)**と**数字(すうじ)**を入力(にゅうりょく)するよ。<br>

例(たと)えば、**前進(ぜんしん) 5**と入力(にゅうりょく)すると、エージェントが**5ステップ前進(ぜんしん)**するよ。<br>

このように、コードを変更(へんこう)せずに、エージェントが何(なに)ステップ移動(いどう)する必要(ひつよう)があるかをその場(ば)で変更(へんこう)できるよ。<br>

<!-- The Agent needs to mine **gold ore** and **iron ore** blocks. Try creating several ``||player:チャットコマンド||`` commands that will program the Agent to move in different directions, for example, **forward**, **back**, **right**. Instead of specifying how far you want the Agent to move, you can use variables. When typing the command in in-game chat, type **forward** and **a number**, for example **forward 5** if you want the Agent to **move 5 steps forward**. This way you can change on the fly how many steps the Agent needs to move without changing the code.  -->

### ~ tutorialHint

エージェントに鉱石(こうせき)を採掘(さいくつ)させるために、``||agent:破壊(はかい)する||`` と ``||agent:収集(しゅうしゅう)する||`` ブロックを追加(ついか)するのを忘(わす)れないでしてね。
<!-- Don't forget to add ``||agent: destroy||`` and ``||agent: collect||`` blocks to program the Agent to mine the minerals.  -->

```template
player.onChat("forward", function (num1) {
    agent.move(FORWARD, num1)
})
```
```ghost
player.onChat("right", function (num1) {
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, num1)
})
player.onChat("back", function (num1) {
    agent.turn(RIGHT_TURN)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, num1)
})
player.onChat("left", function (num1) {
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, num1)
})
player.onChat("collect", function () {
    agent.destroy(DOWN)
    agent.collectAll()
    player.say("")
})
```

