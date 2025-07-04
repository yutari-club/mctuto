### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @explicitHints 1


# Columns!

## Step 1
さあ、水道橋を作る時間だよ！<br>

まず、変数``||variables: 長さ||``と``||variables: 区間||``を作りよう。<br>

次に``||loops: 最初だけ||``、``||variables: 長さ||``を **5**、``||variables: 区間||``を **6** に設定するよ。<br>

<!-- Time to build the aqueducts! First, create ``||variable: length||`` and ``||variable: segments||`` variables. Then ``||variable: set length||`` to **5** and ``||variable: set segments||`` to **6** ``||loops: on start||``.  -->

## Step 2
次に``||player:チャットコマンド||``内で、エージェントが**1**つの部分を構築するために実行する必要があるすべてのアクションを追加するよ。<br>

以下のアクションを行います：<br>

- ``||agent:スロットに配置させる||``: 柱状のクオーツブロックを64個
- ``||agent:置かせる|``
- ``||agent:移動させる|``

マインクラフトの水は傾斜があると流れますので、エージェントは ** 左、右、下**の順で配置する必要があります。<br>

これらすべてのアクションを、``||loops:繰り返し||``ループ内に配置して、``||variables: 長さ||`` の回数だけ繰り返するよ。<br>



<!-- Now within an ``||player: on chat command||`` you need to add all the actions that the Agent needs to perform in order to build **1** part: ``||agent: set block pillar of quartz||`` at the count of **64**, ``||agent: place||`` and ``||agent: move forward||``. Water in Minecraft will flow if there is a slope, so the Agent needs to **place left, right and down**. Place all these actions within a ``||loops: repeat||`` loop that **repeats** ``||variable: length||`` times.  -->

## Step 3
次に、最初の ``||loops:繰り返し||`` ループを、``||variables:区間||`` 回繰り返す別の ``||loops:繰り返し||`` ループの中に入れます。
マインクラフトで試してみてしてねね！
<!-- Now nest the first ``||loops: repeat||`` loop within another ``||loops: repeat||`` loop that repeats ``||variables:segments||`` times. Try it out in Minecraft! -->

### ~ tutorialHint
``||agent: 下に移動||`` ブロックを内側のループの前に追加して、コードを動かせるようにするよ！
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
```package
rubyblock=github:yutari-club/rubyblock#master
```