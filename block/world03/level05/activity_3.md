### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# ビートの植(う)え付(つ)け
<!-- # Planting Beets! -->

## Step 1

**種(たね)植(う)え**と**畝(うね)**の2つの関数(かんすう)が用意(ようい)されている。
``||player: チャットを入力(にゅうりょく)した時(とき)||`` を作成(さくせい)し、その中(なか)で``||functions: 呼(よ)び出(だ)し 畝(うね)||``を呼(よ)び出(だ)するよ。<br>

``||agent: エージェントの周(まわ)りのブロック||``の種類(しゅるい)を調(しら)べる ``||logic: もし||``を追加(ついか)する。<br>

もし下(した)にあるブロックが ``||blocks: ラピスラズビ||``であれば、``||agent: 右向(みぎむ)き||``、 ``||agent: 前(まえ)に移動(いどう)||``、 ``||agent: 右向(みぎむ)き||``が必要(ひつよう)だよ。 <br>

``||logic: でなければ||``の中(なか)では ``||agent: 下(した)のブロック||``が``||blocks: クオーツ||``なら``||agent: 左向(ひだりむ)き||``、 ``||agent: 前(まえ)に移動(いどう)||``、 ``||agent: 左向(ひだりむ)き||``とするよ。 <br>

最後(さいご)に ``||functions: 呼(よ)び出(だ)し 畝(うね)||``を配置(はいち)するよ。
<!-- Two functions **plantSeed** and **plantSection** are provided for youの. 
Create a new ``||player: on chat||`` command and ``||functions: call plantSection||`` within it. 
Add an ``||logic: if||`` statement that checks if ``||agent: agent inspects block down||`` .  
If the block down is ``||blocks: lapis lazuli||``, then the agent needs  to ``||agent: turn right||``, ``||agent: move forward||`` and ``||agent: turn right||``.  
``||logic: Else||`` the agent ``||agent: inspects the block down||`` and it is ``||blocks: a block of quartz||``, then the agent needs to ``||agent: turn left||``, ``||agent: move forward||`` and ``||agent: turn left||``.  
Finally ``||functions: call plantSection||``. -->

#### ~ tutorialhint
``` blocks
player.onChat("run", function () {
    畝(うね)()
})
// @hide
function 畝(うね) () {
}
```

```template
/**
 * 関数(かんすう)の中(なか)で関数(かんすう)を呼(よ)び出(だ)している
 */
function 畝(うね) () {
    for (let index = 0; index < 11; index++) {
        種(たね)植(う)え()
    }
    agent.move(FORWARD, 1)
}
 /**
 * エージェントの下(した)にブロックがない場合(ばあい)は種(たね)を植(う)えないようにコードを修正(しゅうせい)した。
 */
function 種(たね)植(う)え () {
    agent.till(FORWARD)
    agent.move(FORWARD, 1)
    if (agent.detect(AgentDetection.Block, DOWN)) {
        agent.place(DOWN)
    }
}

/**
* エージェントがラピスのブロックを踏(ふ)んでいるかどうか確認(かくにん)する必要(ひつよう)がある、 クオーツなら左(ひだり)
*/
```
## Step 2
``||player:チャットを入力(にゅうりょく)した時(とき)||``に``||logic:もし||`` ステートメントを追加(ついか)してみよう。<br>

``||logic:もし||``の **真(しん)**に ``||logic:" " = " "||``を追加(ついか)するよ。<br>

もし``||agent:下(した)のブロック||``が ``||blocks:ラピスラズビ||``と**等(ひと)しい (=)**場合(ばあい)、``||agent:右折(うせつ)||``、``||agent:前(まえ)に移動(いどう)||``、 ``||agent:右折(うせつ)||``を行(おこな)う必要(ひつよう)があります。

<!-- Add an ``||logic:if||`` statement to the ``||player:チャットコマンド||`` command. 
Within the **true** of the ``||logic:if||`` block add a ``||logic:" " = " "||`` block. 
If when ``||agent:agent inspects block down||`` is **equal (=)** to ``||blocks:lapis lazuli||`` the agent needs to ``||agent: turn right||``, ``||agent:move forward||`` and ``||agent:turn right||``.  -->

#### ~ tutorialhint
``` blocks
player.onChat("run", function () {
    畝(うね)()
    if (agent.inspect(AgentInspection.Block, DOWN) == LAPIS_LAZULI_BLOCK) {
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
    }

})
// @hide
function 畝(うね) () {
}
```

```template
/**
 * 関数(かんすう)の中(なか)で関数(かんすう)を呼(よ)び出(だ)している
 */
function 畝(うね) () {
    for (let index = 0; index < 11; index++) {
        種(たね)植(う)え()
    }
    agent.move(FORWARD, 1)
}
 /**
 * エージェントの下(した)にブロックがない場合(ばあい)は種(たね)を植(う)えないようにコードを修正(しゅうせい)した。
 */
function 種(たね)植(う)え () {
    agent.till(FORWARD)
    agent.move(FORWARD, 1)
    if (agent.detect(AgentDetection.Block, DOWN)) {
        agent.place(DOWN)
    }
}

/**
* エージェントがラピスのブロックを踏(ふ)んでいるかどうかを確認(かくにん)する必要(ひつよう)がある。
*/
```

## Step 3
``||logic:もし|``ロックの**+**記号(きごう)を2回(かい)クリックする。<br>

**でなければ**を削除(さくじょ)するには **-** をクリックするよ。<br>

``||logic:でなければもし||``の**偽(にせ)**に ``||logic:" " = " "||``ブロックを追加(ついか)する。<br>

もし ``||agent:下(した)のブロック|`` が ``||blocks:クォーツブロック|`` と **等(ひと)しい (=)** ならば、エージェントは``||agent:左折(させつ)||``と``||agent:前(まえ)に移動(いどう)||``、``||agent:左折(させつ)||``が必要(ひつよう)である。 


<!-- Click two times on the **+** symbols of the ``||logic:if||`` block. 
Click on the ** - ** to delete the **else** block. 
Add a ``||logic:" " = " "||`` block to the **blank** space of the ``||logic:else if||`` block. 
If ``||agent:agent inspects block down||`` is **equal (=)** to ``||blocks:a block of quartz||``. 
The agent needs to ``||agent:turn left||``, ``||agent:move forward||`` and ``||agent:turn left||``.   -->

#### ~ tutorialhint
``` blocks
player.onChat("run", function () {
    畝(うね)()
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
function 畝(うね) () {
}
```

```template
/**
 * 関数(かんすう)の中(なか)で関数(かんすう)を呼(よ)び出(だ)している
 */
function 畝(うね) () {
    for (let index = 0; index < 11; index++) {
        種(たね)植(う)え()
    }
    agent.move(FORWARD, 1)
}
 /**
 * エージェントの下(した)にブロックがない場合(ばあい)は種(たね)を植(う)えないようにコードを修正(しゅうせい)した。
 */
function 種(たね)植(う)え () {
    agent.till(FORWARD)
    agent.move(FORWARD, 1)
    if (agent.detect(AgentDetection.Block, DOWN)) {
        agent.place(DOWN)
    }
}

/**
* エージェントがラピスのブロックを踏(ふ)んでいるかどうかを確認(かくにん)する必要(ひつよう)がある。
*/
```

## Step 4
最後(さいご)に ``||functions: 呼(よ)び出(だ)し 畝(うね)||`` を ``||player:チャットを入力(にゅうりょく)した時(とき)||`` コマンドの下(した)に ``||logic:もし||`` を追加(ついか)するよ。 

<!-- Finally add another ``||functions: call plantSection||`` within the ``||player:チャットコマンド||`` command outside of the ``||logic:if||`` statement.   -->

#### ~ tutorialhint
``` blocks
player.onChat("run", function () {
    畝(うね)()
    if (agent.inspect(AgentInspection.Block, DOWN) == LAPIS_LAZULI_BLOCK) {
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
    } else if (agent.inspect(AgentInspection.Block, DOWN) == BLOCK_OF_QUARTZ) {
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
    畝(うね)()
})
// @hide
function 畝(うね) () {
}
```

```template
/**
 * 関数(かんすう)の中(なか)で関数(かんすう)を呼(よ)び出(だ)している
 */
function 畝(うね) () {
    for (let index = 0; index < 11; index++) {
        種(たね)植(う)え()
    }
    agent.move(FORWARD, 1)
}
 /**
 * エージェントの下(した)にブロックがない場合(ばあい)は種(たね)を植(う)えないようにコードを修正(しゅうせい)した。
 */
function 種(たね)植(う)え () {
    agent.till(FORWARD)
    agent.move(FORWARD, 1)
    if (agent.detect(AgentDetection.Block, DOWN)) {
        agent.place(DOWN)
    }
}

/**
* 自分(じぶん)のエージェントがどのブロックにいるか確認(かくにん)する必要(ひつよう)がある。ラピスブロックにいる場合(ばあい)は右折(うせつ)し、クォーツブロックにいる場合(ばあい)は左折(させつ)する。
*/

/**
* Ifブロックの＋ボタンをクリックすると、Elseを追加(ついか)できるよ。
*/

```

```ghost
player.onChat("turn", function () {
    畝(うね)()
    if (agent.inspect(AgentInspection.Block, DOWN) == LAPIS_LAZULI_BLOCK) {
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
    } else if (agent.inspect(AgentInspection.Block, DOWN) == BLOCK_OF_QUARTZ) {
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
    }
    畝(うね)()
})
player.say("")
```
