### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 鉱石を採掘しよう！
<!-- # Mine the resources! -->

## Step 1
エージェントに**金鉱石**と**鉄鉱石**を採掘させる必要があります。<br>
まず、エージェントをさまざまな方向に動かすための複数の``||player:チャットコマンド||``を作成します。<br>
例えば、**前進**、**後退**、**右**といったコマンドです。<br>
エージェントをどのくらい動かすかを具体的に指定する代わりに、変数を使うことができます。<br>
ゲーム内チャットでコマンドを入力する際には、**前進**と**数字**を入力します。<br>
例えば、**前進 5**と入力すると、エージェントが**5ステップ前進**します。<br>
このように、コードを変更せずに、エージェントが何ステップ移動する必要があるかをその場で変更できます。<br>
<!-- The Agent needs to mine **gold ore** and **iron ore** blocks. Try creating several ``||player:on chat||`` commands that will program the Agent to move in different directions, for example, **forward**, **back**, **right**. Instead of specifying how far you want the Agent to move, you can use variables. When typing the command in in-game chat, type **forward** and **a number**, for example **forward 5** if you want the Agent to **move 5 steps forward**. This way you can change on the fly how many steps the Agent needs to move without changing the code.  -->

### ~ tutorialHint

エージェントに鉱石を採掘させるために、``||agent:破壊する||`` と ``||agent:収集する||`` ブロックを追加するのを忘れないでください。
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
})
player.say("")
```

```package
rubyblock=github:yutari-club/rubyblock#master
```
