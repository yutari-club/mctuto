### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# ビートの植え付け
<!-- # Planting Beets! -->

## Step 1

**種植え**と**畝**の2つの関数が用意されている。
``||player: チャットを入力した時||`` を作成し、その中で``||functions: 呼び出し 畝||``を呼び出するよ。<br>

``||agent: エージェントの周りのブロック||``の種類を調べる ``||logic: もし||``を追加する。<br>

もし下にあるブロックが ``||blocks: ラピスラズビ||``であれば、``||agent: 右向き||``、 ``||agent: 前に移動||``、 ``||agent: 右向き||``が必要だよ。 <br>

``||logic: でなければ||``の中では ``||agent: 下のブロック||``が``||blocks: クオーツ||``なら``||agent: 左向き||``、 ``||agent: 前に移動||``、 ``||agent: 左向き||``とするよ。 <br>

最後に ``||functions: 呼び出し 畝||``を配置するよ。
<!-- Two functions **plantSeed** and **plantSection** are provided for youの. 
Create a new ``||player: on chat||`` command and ``||functions: call plantSection||`` within it. 
Add an ``||logic: if||`` statement that checks if ``||agent: agent inspects block down||`` .  
If the block down is ``||blocks: lapis lazuli||``, then the agent needs  to ``||agent: turn right||``, ``||agent: move forward||`` and ``||agent: turn right||``.  
``||logic: Else||`` the agent ``||agent: inspects the block down||`` and it is ``||blocks: a block of quartz||``, then the agent needs to ``||agent: turn left||``, ``||agent: move forward||`` and ``||agent: turn left||``.  
Finally ``||functions: call plantSection||``. -->

#### ~ tutorialhint
``` blocks
player.onChat("run", function () {
    畝()
})
// @hide
function 畝 () {
}
```

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
 * エージェントの下にブロックがない場合は種を植えないようにコードを修正した。
 */
function 種植え () {
    agent.till(FORWARD)
    agent.move(FORWARD, 1)
    if (agent.detect(AgentDetection.Block, DOWN)) {
        agent.place(DOWN)
    }
}

/**
* エージェントがラピスのブロックを踏んでいるかどうか確認する必要がある、 クオーツなら左
*/
```
## Step 2
``||player:チャットを入力した時||``に``||logic:もし||`` ステートメントを追加してみよう。<br>

``||logic:もし||``の **真**に ``||logic:" " = " "||``を追加するよ。<br>

もし``||agent:下のブロック||``が ``||blocks:ラピスラズビ||``と**等しい (=)**場合、``||agent:右折||``、``||agent:前に移動||``、 ``||agent:右折||``を行う必要があります。

<!-- Add an ``||logic:if||`` statement to the ``||player:on chat||`` command. 
Within the **true** of the ``||logic:if||`` block add a ``||logic:" " = " "||`` block. 
If when ``||agent:agent inspects block down||`` is **equal (=)** to ``||blocks:lapis lazuli||`` the agent needs to ``||agent: turn right||``, ``||agent:move forward||`` and ``||agent:turn right||``.  -->

#### ~ tutorialhint
``` blocks
player.onChat("run", function () {
    畝()
    if (agent.inspect(AgentInspection.Block, DOWN) == LAPIS_LAZULI_BLOCK) {
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
    }

})
// @hide
function 畝 () {
}
```

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
 * エージェントの下にブロックがない場合は種を植えないようにコードを修正した。
 */
function 種植え () {
    agent.till(FORWARD)
    agent.move(FORWARD, 1)
    if (agent.detect(AgentDetection.Block, DOWN)) {
        agent.place(DOWN)
    }
}

/**
* エージェントがラピスのブロックを踏んでいるかどうかを確認する必要がある。
*/
```

## Step 3
``||logic:もし|``ロックの**+**記号を2回クリックする。<br>

**でなければ**を削除するには **-** をクリックするよ。<br>

``||logic:でなければもし||``の**偽**に ``||logic:" " = " "||``ブロックを追加する。<br>

もし ``||agent:下のブロック|`` が ``||blocks:クォーツブロック|`` と **等しい (=)** ならば、エージェントは``||agent:左折||``と``||agent:前に移動||``、``||agent:左折||``が必要である。 


<!-- Click two times on the **+** symbols of the ``||logic:if||`` block. 
Click on the ** - ** to delete the **else** block. 
Add a ``||logic:" " = " "||`` block to the **blank** space of the ``||logic:else if||`` block. 
If ``||agent:agent inspects block down||`` is **equal (=)** to ``||blocks:a block of quartz||``. 
The agent needs to ``||agent:turn left||``, ``||agent:move forward||`` and ``||agent:turn left||``.   -->

#### ~ tutorialhint
``` blocks
player.onChat("run", function () {
    畝()
    if (agent.inspect(AgentInspection.Block, DOWN) == LAPIS_LAZULI_BLOCK) {
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
    } else if (agent.inspect(AgentInspection.Block, DOWN) == BLOCK_OF_QUARTZ) {
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }

})
// @hide
function 畝 () {
}
```

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
 * エージェントの下にブロックがない場合は種を植えないようにコードを修正した。
 */
function 種植え () {
    agent.till(FORWARD)
    agent.move(FORWARD, 1)
    if (agent.detect(AgentDetection.Block, DOWN)) {
        agent.place(DOWN)
    }
}

/**
* エージェントがラピスのブロックを踏んでいるかどうかを確認する必要がある。
*/
```

## Step 4
最後に ``||functions: 呼び出し 畝||`` を ``||player:チャットを入力した時||`` コマンドの下に ``||logic:もし||`` を追加するよ。 

<!-- Finally add another ``||functions: call plantSection||`` within the ``||player:on chat||`` command outside of the ``||logic:if||`` statement.   -->

#### ~ tutorialhint
``` blocks
player.onChat("run", function () {
    畝()
    if (agent.inspect(AgentInspection.Block, DOWN) == LAPIS_LAZULI_BLOCK) {
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
    } else if (agent.inspect(AgentInspection.Block, DOWN) == BLOCK_OF_QUARTZ) {
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
    畝()
})
// @hide
function 畝 () {
}
```

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
 * エージェントの下にブロックがない場合は種を植えないようにコードを修正した。
 */
function 種植え () {
    agent.till(FORWARD)
    agent.move(FORWARD, 1)
    if (agent.detect(AgentDetection.Block, DOWN)) {
        agent.place(DOWN)
    }
}

/**
* 自分のエージェントがどのブロックにいるか確認する必要がある。ラピスブロックにいる場合は右折し、クォーツブロックにいる場合は左折する。
*/

/**
* Ifブロックの＋ボタンをクリックすると、Elseを追加できるよ。
*/

```

```ghost
player.onChat("turn", function () {
    畝()
    if (agent.inspect(AgentInspection.Block, DOWN) == LAPIS_LAZULI_BLOCK) {
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
    } else if (agent.inspect(AgentInspection.Block, DOWN) == BLOCK_OF_QUARTZ) {
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
    }
    畝()
})
player.say("")
```
```package
rubyblock=github:yutari-club/rubyblock#master
```
