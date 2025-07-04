### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @explicitHints 1


# クォーツの採掘!
<!-- # Mining Quartz! -->

## Step 1
残りの柱を作るのに必要な**ブロック数**を**計算**するコードを書こう。<br>

**柱**は**6**本あり、各柱の**高さ**は**6**ブロックである。 <br>

``||variables:高さ||``と``||variables:本数||``を作成し、``||loops:最初だけ||`` の中で正しい数値に設定し、次に 変数 ``||variables:ブロック数||`` を作成するよ。<br>

<!-- Write some code that will **calculate** how many **blocks** you need to build the remaining columns. 
Here are some facts: there are **6 columns** and each column is **6 blocks high**.
Start by creating and setting ``||variable:height||`` and ``||variable:quantity||`` variables to the correct numbers ``||loops: on start||``, then create a ``||variable:total blocks||`` variable.  -->

## Step 2
``||logic: もし||``ブロックの条件として、``||variables:ブロック数||`` = ``||variables:高さ||`` × ``||variables:本数||``を指定して、``||player: 送信する||`` 「十分なブロックを集めました！」と言う。 <br>

掛け算は ``||math:×||``で行えます。<br>

<!-- Set up a condition, ``||logic: if||`` the ``||variable:total blocks||`` = ``||variable:height||`` * ``||variable:quantity||``, then ``||player: say||`` "Collected enough blocks!".  -->

## Step 3
``||logic: もし||``ブロックの上に、``||variables:ブロック数を 1 だけ増やす||``と``||player: 送信する||``を追加するよ。``||player: 送信する||``に``||variables:ブロック数||``を設定することで何個のブロックを集めたかがわかります。<br>

次に、``||blocks: 柱状のクォーツのブロックが破壊され時||`` に、このブロックをいれることで、ブロックを壊しながら集めた数を表示できるようにするよ。<br>

全てのブロックを集め終わると、「十分なブロックを集めました！」というメッセージが表示するよ。<br>



<!-- Now add a ``||variable:change total blocks||`` by 1 command and ``||player: say||`` ``||variable:total blocks||``, so that you know how many blocks you have collected. 
Make sure to add ``||blocks: pillar of quartz block broken||``, so that you will see the count while breaking blocks. 
When you are done, you will see the message "Collected enough blocks!".  -->

```template
{}
``` 

```ghost
blocks.onPillarQuartzBlockBroken(function () {
    total_blocks += 1
    if (total_blocks == height * quantity) {
        player.say("Collected enough blocks!")
    }
})
let total_blocks = 0
let quantity = 0
let height = 0
height = 6
quantity = 6
```
```package
rubyblock=github:yutari-club/rubyblock#master
```