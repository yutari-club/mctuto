### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# ビート!
<!-- # Beets! -->

## Step 1
３つの関数(かんすう)、``||functions: 種植え||``と``||functions: 野菜を植える土の列||``、``||functions: 方向転換||``が用意(ようい)されいます。<br>

まず、新(あたら)しい``||player: チャットを入力(にゅうりょく)した時(とき)||``を作成(さくせい)し、``||loops:もし、くりかえし||`` を追加(ついか)するよ。<br>

``||loops:もし、くりかえし||``の条件(じょうけん)は、``||agent:下(した)のブロック||``が**金(きん)ブロック** ではない場合(ばあい)、 ``||functions: 呼(よ)び出(だ)し||``で必要(ひつよう)な関数(かんすう)を呼(よ)び出(だ)するよ。

<!-- You are provided with three functions: ``||functions: plantSeed||``, ``||functions: plantSection||`` and ``||functions: checkTurn||``. 
First, create  a new ``||player:チャットコマンド||`` command and add your condition: ``||loops:もし〇〇ならくりかえす||`` the Agent is ``||agent:inspecting the block down||``, and it is not a **gold block**, ``||functions: call||`` the necessary functions.  -->

```template
/**
 * 関数(かんすう)の中(なか)で関数(かんすう)を呼(よ)び出(だ)している
 */
function 野菜を植える土の列 () {
    for (let index = 0; index < 11; index++) {
        種植え()
    }
    agent.move(FORWARD, 1)
}
 /**
 * エージェントの下(した)にブロックがない場合(ばあい)、種(たね)を植(う)えないようにコードを修正(しゅうせい)した。
 */
function 種植え () {
    agent.till(FORWARD)
    agent.move(FORWARD, 1)
    if (agent.detect(AgentDetection.Block, DOWN)) {
        agent.place(DOWN)
    }
}
function 方向転換 () {
    if (agent.inspect(AgentInspection.Block, DOWN) == LAPIS_LAZULI_BLOCK) {
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
    } else if (agent.inspect(AgentInspection.Block, DOWN) == BLOCK_OF_QUARTZ) {
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
}

```


```ghost
player.onChat("plant", function () {
    while (agent.inspect(AgentInspection.Block, DOWN) != GOLD_BLOCK) {
        野菜を植える土の列()
        方向転換()
    }
})

function 方向転換 () {
    if (agent.inspect(AgentInspection.Block, DOWN) == LAPIS_LAZULI_BLOCK) {
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
    } else if (agent.inspect(AgentInspection.Block, DOWN) == BLOCK_OF_QUARTZ) {
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
}
player.say("")
```
