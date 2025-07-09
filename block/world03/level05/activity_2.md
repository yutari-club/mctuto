### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# 野菜(やさい)工場(こうじょう)を建(た)てる！
<!-- # Build a Town Hall! -->

## Step 1
**種(たね)植(う)え**関数(かんすう)を作成(さくせい)しました。<br>

これは、前(まえ)のアクティビティで使用(しよう)したコードだよ。<br>

次(つぎ)に ``||player:入力(にゅうりょく)した時(とき)||`` コマンドをワークスペースにドラッグし、**run**という名前(なまえ)を付(つ)けます。<br>

``||loops:くりかえし||``を追加(ついか)し、**高度(こうど)なブロック**セクションをクリックし、**関数(かんすう)**をクリックし、``||functions:呼(よ)び出(だ)し 種(たね)植(う)え||``をループにドラッグするよ。<br>

エージェントが**種(たね)植(う)え**関数(かんすう)を何回(なんかい)繰(く)り返(かえ)す必か数(かぞ)えてしてね。

<!-- We created a function **plantSeed** for you. 
It is simply the code that you used for the previous activity. 
Now drag an ``||player: on chat||`` command into the workspace and name it **run**. 
Add a ``||loops: repeat||`` loop and click on the **Advanced** section then click **Functions** and drag a``||function:call plantSeed||`` function into your loop. 
Count how many times the Agent needs to repeat **plantSeed** function.  -->

### ~ tutorialHint
関数(かんすう)は**高度(こうど)なブロック**セクションにあります。<br>

また、関数(かんすう)についてのメモのように、書(か)かれたコードについてコメントを残(のこ)すことも良(よ)い習慣(しゅうかん)だよ。
<!-- Functions live in the **Advanced** section. 
It is also a good practice to leave notes about the code that's written, like the one that we left for you about functions.  -->

```template
/**
 * 関数(かんすう)を使(つか)えば、コードを簡単(かんたん)に再(さい)利用(りよう)できる。
 */
function 種(たね)植(う)え () {
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
player.say("")
```
