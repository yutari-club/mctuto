### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# 役場(やくば)[長方形(ちょうほうけい)の壁(かべ)]を建(た)てる！
<!-- # Build a Town Hall! -->

## Step 1
**石(いし)**を建築(けんちく)材料(ざいりょう)として使用(しよう)し、**3**つの``||variables: 変数(へんすう)||``作成(さくせい)し、それらに幅(はば)、長(なが)さ、高(たか)さの名前(なまえ)をつける。<br>

``||variables: 変数(へんすう)||``に正(ただ)しいパラメータを設定(せってい)するよ。<br>

変数(へんすう)を``||player: 入力(にゅうりょく)した時(とき)||`` に追加(ついか)するのを忘(わす)れないでしてね。<br>


<!-- Use **stone** as your building material, create **3** ``||variable: variables||`` and name them **width**, **length** and **height**; 
set the ``||variable: variables||`` to the correct parameters. 
Don't forget to add your variables to the ``||player: on chat||`` command. -->

```ghost
player.onChat("town_hall", function (length, width, height) {
    for (let index = 0; index < height; index++) {
        for (let index = 0; index < 2; index++) {
            for (let index = 0; index < length; index++) {
                agent.setItem(STONE, 1, 1)
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(RIGHT_TURN)
            for (let index = 0; index < width; index++) {
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