### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @explicitHints 1

# きれいなもの！
<!-- # Pretty things! -->

## Step 1
君(きみ)のミッションは、お風呂(ふろ)の床(ゆか)の境界(きょうかい)に沿(そ)って、**柱状(ちゅうじょう)のクォーツ**と**ラピスラズリ**のブロックの交互(こうご)のパターンを作(つく)ることだよ。<br>

まず、``||variables:blockA||``と``||variables:blockB||``変数(へんすう)を作成(さくせい)するよ。<br>

``||variables:blockA||``を**柱状(ちゅうじょう)のクォーツ**のブロックに、``||variables:blockB||``を**ラピスラズリ**のブロックに設定(せってい)するよ。<br>

これらのコマンドを``||loops:最初(さいしょ)だけ|``ブロックに追加(ついか)するよ。<br>


<!-- Your mission is to to construct the alternating pattern of **quartz pillar** and **lapiz lazuli** blocks along the floor border of the bath. Start by creating ``||variable:blockA||`` and ``||variable:blockB||`` variables. Set the ``||variable:blockA variable||`` to a **block of quartz** and ``||variable:blockB variable||`` to a **lapis lazuli block**. Add the commands to the ``||loops: on start||`` block.  -->

## Step 2
``||logic: もし||``、``||variables:count||`` が**0**の場合(ばあい)、エージェントは``||variables:blockA||``を設定(せってい)し、``||agent:下(した)を破壊(はかい)させる||``、``||agent:下(した)へ置(お)かせる||``を行(おこな)い、``||variables:countを 1 だけ増(ふ)やす||``。<br>

``||logic: でなければ||``の場合(ばあい)、エージェントは``||variables:blockB|||``を設定(せってい)し、ブロックを置(お)き、``||variables:countを -1 だけ増(ふ)やす|||``。<br>


<!-- ``||logic: If||`` ``||count||`` = **0**, then agent needs to set ``||variable:blockA||``, ``||agent:destroy down||``, ``||agent:place down||`` and ``||variable:change the count by 1||``. ``||logic: Else||`` the Agent needs to set ``||blockB||``, place blocks and ``||change count by -1||``.   -->

## Step 3
エージェントは``||loops: もし〇〇ならくりかえし||``で**前(まえ)にブロックがない**[``||logic:ではなく||``+``||agent:前(まえ)にブロックがある||``]の間(あいだ)は配置(はいち)するよ。
<!-- The Agent needs to place blocks in a row ``||loops: while||`` it does ``||logic:ではない||`` ``|| detect||`` a block **forward**.  -->

## Step 4
エージェントが完成(かんせい)させる浴槽(よくそう)には**4**つ辺(へん)があります。<br>

ですので、``||loops: 繰(く)り返(かえ)し||`` ブロックを追加(ついか)するよ。<br>

ブロックを配置(はいち)する前(まえ)に``||variables:count||``を**0**に設定(せってい)するよ。<br>


There are **4** sides of reservoir that the Agent needs to complete, so add a ``||loops: repeat||`` block. Set the ``||count||`` to **0** before sending the Agent to place blocks.

```template
let count = 0
player.onChat("floor", function () {
    count = 0
})
```


```ghost
player.onChat("floor", function () {
    count = 0
    for (let index = 0; index < 4; index++) {
        while (!(agent.detect(AgentDetection.Block, FORWARD))) {
            if (count == 0) {
                agent.setItem(blockA, 1, 1)
                agent.destroy(DOWN)
                agent.place(DOWN)
                count += 1
            } else {
                agent.setItem(blockB, 1, 1)
                agent.destroy(DOWN)
                agent.place(DOWN)
                count += -1
            }
            agent.move(FORWARD, 1)
        }
        agent.turn(RIGHT_TURN)
    }
})
let count = 0
let blockB = 0
let blockA = 0
blockA = BLOCK_OF_QUARTZ
blockB = LAPIS_LAZULI_BLOCK
player.say("")
```
