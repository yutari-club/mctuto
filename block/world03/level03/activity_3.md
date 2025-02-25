### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @explicitHints 1

# きれいなもの！
<!-- # Pretty things! -->

## Step 1
君のミッションは、お風呂の床の境界に沿って、**クォーツの柱**と**ラピスラズリ**のブロックの交互のパターンを作ることです。<br>
まず、``||variable:blockA||``と``||variable:blockB||``変数を作成します。<br>
``||variable:blockA||``を**クォーツのブロック**に``||variable:blockB||``を**ラピスラズリのブロック**に設定します。<br>
これらのコマンドを``||loops: スタート時に||``ブロックに追加します。<br>

<!-- Your mission is to to construct the alternating pattern of **quartz pillar** and **lapiz lazuli** blocks along the floor border of the bath. Start by creating ``||variable:blockA||`` and ``||variable:blockB||`` variables. Set the ``||variable:blockA variable||`` to a **block of quartz** and ``||variable:blockB variable||`` to a **lapis lazuli block**. Add the commands to the ``||loops: on start||`` block.  -->

## Step 2
``||logic: もし||`` ``||count||`` が**0**の場合、エージェントは``||variable:blockA||``を設定し、``||agent:下を破壊する||``、``||agent:下に置く||``を行い、``||variable:カウントを 1 増やす||``。<br>
``||logic: それ以外||``の場合、エージェントは``||blockB||``を設定し、ブロックを置き、``||カウントを -1 に変更する||``。<br>

<!-- ``||logic: If||`` ``||count||`` = **0**, then agent needs to set ``||variable:blockA||``, ``||agent:destroy down||``, ``||agent:place down||`` and ``||variable:change the count by 1||``. ``||logic: Else||`` the Agent needs to set ``||blockB||``, place blocks and ``||change count by -1||``.   -->

## Step 3
エージェントは``||loops: while||``でブロックを**前方**に``||logic:not||`` ``||検出||``するまで並べて配置します。
<!-- The Agent needs to place blocks in a row ``||loops: while||`` it does ``||logic:not||`` ``|| detect||`` a block **forward**.  -->

## Step 4
エージェントが完成させるための貯水池の側面は**4**つあります。<br>
ですので、``||loops: 繰り返し||`` ブロックを追加します。<br>
ブロックを配置する前に``||count||``を**0**に設定します。<br>

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
```package
rubyblock=github:yutari-club/rubyblock#master
```