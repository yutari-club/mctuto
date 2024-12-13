### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# 野菜工場を建てる！
<!-- # Build a Town Hall! -->

## Step 1
**plantSeed**関数を作成しました。<br>
これは、前のアクティビティで使用したコードです。<br>
次に ``||player:入力した時||`` コマンドをワークスペースにドラッグし、**run**という名前を付けます。<br>
``||loops:くりかえし||``を追加し、**高度なブロック**セクションをクリックし、**関数**をクリックし、``||functions:呼び出し plantSeed||``をループにドラッグします。<br>
エージェントが**plantSeed**関数を何回繰り返す必か数えてください。

<!-- We created a function **plantSeed** for you. 
It is simply the code that you used for the previous activity. 
Now drag an ``||player: on chat||`` command into the workspace and name it **run**. 
Add a ``||loops: repeat||`` loop and click on the **Advanced** section then click **Functions** and drag a``||function:call plantSeed||`` function into your loop. 
Count how many times the Agent needs to repeat **plantSeed** function.  -->

### ~ tutorialHint
関数は**高度なブロック**セクションにあります。<br>
また、関数についてのメモのように、書かれたコードについてコメントを残すことも良い習慣です。
<!-- Functions live in the **Advanced** section. 
It is also a good practice to leave notes about the code that's written, like the one that we left for you about functions.  -->

```template
/**
 * 数を使えば、コードを簡単に再利用できる。
 */
function plantSeed () {
    agent.till(FORWARD)
    agent.move(FORWARD, 1)
    agent.place(DOWN)
}
```

```ghost
player.onChat("plantSection", function () {
    for (let index = 0; index < 11; index++) {
        plantSeed()
    }
    agent.move(FORWARD, 1)
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```