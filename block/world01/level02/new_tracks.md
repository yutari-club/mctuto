### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# カメの通(と)り道に沿って移動するようにエージェントをプログラムする！

## ステップ 1 
エージェントをカメの通(と)り道に沿って移動させるには、``||agent:エージェントを移動||`` ブロックを使います。
少ないブロック数で効率的なコードにするために``||loops:くりかえし||``ブロックを使ってみてしてね。 </br>
終わったら、``||blocks:▶||``ボタンを押してコードをコンパイルしてみよう。 </br>
コードを Minecraft で実行するのを忘れないでしてね。

```ghost
player.onChat("run", function () {
    for (let index = 0; index < 2; index++) {
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)  	
    }
    player.say("")
})
``` 
```package
rubyblock=github:yutari-club/rubyblock#master
```

