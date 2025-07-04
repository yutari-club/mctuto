### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 始めて家[正方形の壁]を建てる！
<!-- # Build a starter house! -->

## Step 1
提供されたサンプルコードを使って1列のブロックを配置する。<br>

その後、エージェントは同じ手順を**4回**繰り返す必要があり、次に``||agent: 上に移動||`` に移動してさらに**繰り返し**ます。<br>

``||variables: height||``を取得し、``||loops: くりかえす||``に追加するよ。<br>

このコードで**1軒**の家を建てることができるよ。

<!-- Use the provided sample code to place 1 row of blocks. 
Then Agent needs to repeat the same procedure **4 times**, then ``||agent: move up||`` and **repeat** it more. 
Get the ``||variable: height||`` and add it to the ``||loops: repeat||`` block. This code will allow you to build **1** house.  -->


### ~ tutorialHint
コマンドを入力する際は、ゲーム内のチャットで数字を入力することをお忘れなく。例えば、**house 2 5**のように。
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
```package
rubyblock=github:yutari-club/rubyblock#master
```



