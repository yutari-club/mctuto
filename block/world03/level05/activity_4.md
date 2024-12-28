### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# ビート!
<!-- # Beets! -->

## Step 1
３つの関数、``||functions: 種植え||``と``||functions: 畝||``、``||functions: 方向転換||``が用意されいます。<br>
まず、新しい``||player: チャットを入力した時||``を作成し、``||loops:もし、くりかえし||`` を追加します。<br>
``||loops:もし、くりかえし||``の条件は、``||agent:下のブロック||``が**金ブロック** ではない場合、 ``||functions: 呼び出し||``で必要な関数を呼び出します。

<!-- You are provided with three functions: ``||functions: plantSeed||``, ``||functions: plantSection||`` and ``||functions: checkTurn||``. 
First, create  a new ``||player: on chat||`` command and add your condition: ``||loops:while||`` the Agent is ``||agent:inspecting the block down||``, and it is not a **gold block**, ``||functions: call||`` the necessary functions.  -->

```template
/**
 * 関数の中で関数を呼び出している
 */
function 畝 () {
    for (let index = 0; index < 11; index++) {
        種植え()
    }
    agent.move(FORWARD, 1)
}
 /**
 * エージェントの下にブロックがない場合、種を植えないようにコードを修正した。
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
        畝()
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
```package
rubyblock=github:yutari-club/rubyblock#master
```