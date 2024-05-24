### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# カメの通(と)り道(みち)に沿(そ)って移動(いどう)するようにエージェントをプログラムする！

## Step(ステップ) 1 
エージェントをカメの通(と)り道(みち)に沿(そ)って移動(いどう)させるには、``||agent:20:エージェントを移動(いどう)||`` ブロックを使(つ)います。
少(す)ないブロック数(すう)で効率(こうりつ)的(てき)なコードにするために``||loops:くりかえし||``ブロックを使(つ)ってみてください。 </br>
終(お)わったら、``||blocks:▶||``ボタンを押(お)してコードをコンパイルしてください。 </br>
コードを Minecraft で実行(じっこう)するのを忘(わ)れないでください。

```ghost
player.onChat("run", function () {
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)  	
    }
})
``` 
```package
rubyblock=github:Mming-Lab/rubyblock1#master
```

