### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# カメの足跡に沿って移動するようにエージェントをプログラムする！

## Step(ステップ) 1 
エージェントをカメの足跡に沿って移動させるには、``||agent:エージェントを前に||`` ブロックを使います。

#### ~ tutorialhint 
より効率的なコードにするために、``|loops:repeat||``ブロックを使ってみてください。

## Step(ステップ) 2
完了したら、``||blocks:▶||``ボタンを押してコードをコンパイルします。
コードをMinecraftで実行するのを忘れないでください。</br>

```blocks
player.onChat("run", function () {
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
})
for (let index = 0; index < 4; index++) {
    	
 }
``` 
```package
rubyblock=github:Mming-Lab/rubyblock1#master
```

