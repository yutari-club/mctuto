### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 始(はじ)めて家(いえ)[正方形(せいほうけい)の壁(かべ)]を建(た)てる！
<!-- # Build a starter house! -->

## Step 1
提供(ていきょう)されたサンプルコードを使(つか)って1列(れつ)のブロックを配置(はいち)する。<br>

その後(あと)、エージェントは同(おな)じ手順(てじゅん)を**4回(かい)**繰(く)り返(かえ)す必要(ひつよう)があり、次(つぎ)に``||agent: 上(うえ)に移動(いどう)||`` に移動(いどう)してさらに**繰(く)り返(かえ)し**ます。<br>

``||variables: height||``を取得(しゅとく)し、``||loops: くりかえす||``に追加(ついか)するよ。<br>

このコードで**1軒(けん)**の家(うち)を建(た)てることができるよ。

<!-- Use the provided sample code to place 1 row of blocks. 
Then Agent needs to repeat the same procedure **4 times**, then ``||agent: move up||`` and **repeat** it more. 
Get the ``||variable: height||`` and add it to the ``||loops: repeat||`` block. This code will allow you to build **1** house.  -->


### ~ tutorialHint
コマンドを入力(にゅうりょく)する際(さい)は、ゲーム内(ない)のチャットで数字(すうじ)を入力(にゅうりょく)することをお忘(わす)れなく。例(たと)えば、**house 2 5**のように。
<!-- Don't forget to input your numbers in the in-game chat when typing in the command, for example **house 2 5**.  -->

```template    
 player.onChat("house", function (height, size) {
    for (let index = 0; index < size; index++) {
        agent.setItem(STONE, 1, 1)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.turn(RIGHT_TURN)
})
```

```ghost
player.onChat("build-simple", function (size, height) {
    for (let index = 0; index < height; index++) {
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < size; index++) {
                agent.setItem(STONE, 1, 1)
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(RIGHT_TURN)
        }
        agent.move(UP, 1)
    }
})
player.say("")
```



