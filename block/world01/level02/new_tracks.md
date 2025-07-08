### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# カメの通(つう)(と)り道(みち)に沿(そ)って移動(いどう)するようにエージェントをプログラムする！

## ステップ 1 
エージェントをカメの通(つう)(と)り道(みち)に沿(そ)って移動(いどう)させるには、``||agent:エージェントを移動(いどう)||`` ブロックを使(つか)います。
少(すく)ないブロック数(すう)で効率的(こうりつてき)なコードにするために``||loops:くりかえし||``ブロックを使(つか)ってみてしてね。 </br>
終(お)わったら、再生(さいせい)ボタンを押(お)してコードをコンパイルしてみよう。 </br>
コードを Minecraft で実行(じっこう)するのを忘(わす)れないでしてね。

```ghost
player.onChat("run", function () {
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)  	
    }
    player.say("")
})
``` 
