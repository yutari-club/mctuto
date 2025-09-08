### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @explicitHints 1


# 橋(ばし)を作(つく)る!

## Step 1
さあ、水道(すいどう)橋(ばし)を作(つく)る時間(じかん)だよ！<br>

まず、変数(へんすう)``||variables: 長(なが)さ||``と``||variables: 区間(くかん)||``を作(つく)りよう。<br>

次(つぎ)に``||loops: 最初(さいしょ)だけ||``、``||variables: 長(なが)さ||``を **5**、``||variables: 区間(くかん)||``を **6** に設定(せってい)するよ。<br>

<!-- Time to build the aqueducts! First, create ``||variable: length||`` and ``||variable: segments||`` variables. Then ``||variable: set length||`` to **5** and ``||variable: set segments||`` to **6** ``||loops: on start||``.  -->

## Step 2
次(つぎ)に``||player:チャットコマンド||``内(ない)に、エージェントが**1**つの区間(くかん)を構築(こうちく)するために実行(じっこう)するアクションを追加(ついか)するよ。<br>

以下(いか)のアクションを行(おこな)います：<br>

- ``||agent:スロットに設定(せってい)させる||``: 柱状(ちゅうじょう)のクオーツブロック
- ``||agent:置(お)かせる||`` × ３
- ``||agent:移動(いどう)させる||``

水(みず)がこぼれないように ** 左(ひだり)、右(みぎ)、下(した)**にブロックを配置(はいち)し水路(すいろ)を作(つく)る必要(ひつよう)があります。<br>
エージェントにもたせるブロック数を考えよう。<br>


これらすべてのアクションを、``||loops:繰(く)り返(かえ)し||``ループ内(ない)に配置(はいち)して、``||variables: 長(なが)さ||`` の回数(かいすう)だけ繰(く)り返(へん)するよ。<br>



<!-- Now within an ``||player: on chat command||`` you need to add all the actions that the Agent needs to perform in order to build **1** part: ``||agent: set block pillar of quartz||`` at the count of **64**, ``||agent: place||`` and ``||agent: move forward||``. Water in Minecraft will flow if there is a slope, so the Agent needs to **place left, right and down**. Place all these actions within a ``||loops: repeat||`` loop that **repeats** ``||variable: length||`` times.  -->

## Step 3
次(つぎ)に、最初(さいしょ)の ``||loops:繰(く)り返(かえ)し||`` ループを、``||variables:区間(くかん)||`` 回(かい)繰(く)り返(かえ)す別(べつ)の ``||loops:繰(く)り返(かえ)し||`` ループの中(なか)に入(い)れます。
マインクラフトで試(ため)してみてしてねね！
<!-- Now nest the first ``||loops: repeat||`` loop within another ``||loops: repeat||`` loop that repeats ``||variables:segments||`` times. Try it out in Minecraft! -->

### ~ tutorialHint
``||agent: 下(した)に移動(いどう)||`` ブロックを内側(うちがわ)のループの前(まえ)に追加(ついか)して、コードを動(うご)かせるようにするよ！
<!-- Add ``||agent: agent move down||`` block before the inner loop to make the code work! -->

```template
{}
``` 

```ghost
player.onChat("build", function () {
    agent.move(DOWN, 1)
    for (let index = 0; index < Segments; index++) {
        for (let index = 0; index < length; index++) {
            agent.setItem(WHITE_CONCRETE, 64, 1)
            agent.place(LEFT)
            agent.place(RIGHT)
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(DOWN, 1)
    }
})
let Segments = 0
let length = 0
length = 5
Segments = 6
player.say("")
```
