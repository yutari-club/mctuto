### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# カメの足跡に沿って移動するようにエージェントをプログラムする！

## Step(ステップ) 1 
エージェントをカメの足跡に沿って移動させるには、``||agent:20:エージェントを移動||`` ブロックを使います。
ブロックの数を少なくしたいのならヒントを確認してみてください。

#### ~ tutorialhint 
少ないブロック数で効率的なコードにするために、``||loops:くりかえし||``ブロックを使ってみてください。

## Step(ステップ) 2
完了したら、``||blocks:▶||``ボタンを押してコードをコンパイルします。
コードをMinecraftで実行するのを忘れないでください。</br>
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

