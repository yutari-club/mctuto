### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @explicitHints 1


# クォーツの採掘(さいくつ)!
<!-- # Mining Quartz! -->

## Step 1
残(のこ)りの柱(はしら)を作(つく)るのに必要(ひつよう)な**ブロック数(すう)**を**計算(けいさん)**するコードを書(か)こう。<br>

**柱(はしら)**は**6**本(ほん)あり、各(かく)柱(はしら)の**高(たか)さ**は**6**ブロックである。 <br>

``||variables:高(たか)さ||``と``||variables:本数(ほんすう)||``を作成(さくせい)し、``||loops:最初(さいしょ)だけ||`` の中(なか)で正(ただ)しい数値(すうち)に設定(せってい)し、次(つぎ)に 変数(へんすう) ``||variables:ブロック数(すう)||`` を作成(さくせい)するよ。<br>

<!-- Write some code that will **calculate** how many **blocks** you need to build the remaining columns. 
Here are some facts: there are **6 columns** and each column is **6 blocks high**.
Start by creating and setting ``||variable:height||`` and ``||variable:quantity||`` variables to the correct numbers ``||loops: on start||``, then create a ``||variable:total blocks||`` variable.  -->

## Step 2
``||logic: もし||``ブロックの条件(じょうけん)として、``||variables:ブロック数(すう)||`` = ``||variables:高(たか)さ||`` × ``||variables:本数(ほんすう)||``を指定(してい)して、``||player: 送信(そうしん)する||`` 「十分(じゅうぶん)なブロックを集(あつ)めました！」と言(い)う。 <br>

掛(か)け算(ざん)は ``||math:×||``で行(おこな)えます。<br>

<!-- Set up a condition, ``||logic: if||`` the ``||variable:total blocks||`` = ``||variable:height||`` * ``||variable:quantity||``, then ``||player: say||`` "Collected enough blocks!".  -->

## Step 3
``||logic: もし||``ブロックの上(うえ)に、``||variables:ブロック数(すう)を 1 だけ増(ふ)やす||``と``||player: 送信(そうしん)する||``を追加(ついか)するよ。``||player: 送信(そうしん)する||``に``||variables:ブロック数(すう)||``を設定(せってい)することで何個(なんこ)のブロックを集(あつ)めたかがわかります。<br>

次(つぎ)に、``||blocks: 柱状(ちゅうじょう)のクォーツのブロックが破壊(はかい)され時(どき)||`` に、このブロックをいれることで、ブロックを壊(こわ)しながら集(あつ)めた数(かず)を表示(ひょうじ)できるようにするよ。<br>

全(すべ)てのブロックを集(あつ)め終(お)わると、「十分(じゅうぶん)なブロックを集(あつ)めました！」というメッセージが表示(ひょうじ)するよ。<br>



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