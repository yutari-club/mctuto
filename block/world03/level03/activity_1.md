### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @explicitHints 1


# クォーツの採掘!
<!-- # Mining Quartz! -->

## Step 1
残りの列を作るのに必要な**ブロック数**を**計算**するコードを書こう。<br>
**列**は**6**つあり、各列の**高さ**は**6**ブロックである。 <br>
``||variables:高さ||``と``||variables:数量||``を作成し、``||loops: on 最初だけ||`` の中で正しい数値に設定し、次に 変数 ``||variables:総ブロック数||`` を作成します。<br>
<!-- Write some code that will **calculate** how many **blocks** you need to build the remaining columns. 
Here are some facts: there are **6 columns** and each column is **6 blocks high**.
Start by creating and setting ``||variable:height||`` and ``||variable:quantity||`` variables to the correct numbers ``||loops: on start||``, then create a ``||variable:total blocks||`` variable.  -->

## Step 2
``||logic: もし||``ブロックの条件として、``||variables:総ブロック数||`` = ``||variables:高さ||`` × ``||variables:数量||``を指定して、``||player: 送信する||`` 「十分なブロックを集めました！」と言う。 <br>
<!-- Set up a condition, ``||logic: if||`` the ``||variable:total blocks||`` = ``||variable:height||`` * ``||variable:quantity||``, then ``||player: say||`` "Collected enough blocks!".  -->

## Step 3
次に、``||variables:総ブロック数を 1 だけ増やす||``と``||player: 送信する||``、``||variables:総ブロック数||`` を追加して、集めたブロックの数がわかるようにする。 <br>
ブロックを壊しながらカウントを見るために、必ず  ``||blocks: 柱状のクオーツのブロックが破壊され時||``,を追加してください。 <br>
完了すると、「十分なブロックを集めました！」というメッセージが表示します。

<!-- Now add a ``||variable:change total blocks||`` by 1 command and ``||player: say||`` ``||variable:total blocks||``, so that you know how many blocks you have collected. 
Make sure to add ``||blocks: pillar of quartz block broken||``, so that you will see the count while breaking blocks. 
When you are done, you will see the message "Collected enough blocks!".  -->

```ghost
blocks.onBlockBroken(PILLAR_QUARTZ_BLOCK, function () {
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