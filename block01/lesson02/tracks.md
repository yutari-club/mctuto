### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# カメの足跡に沿って移動するようにエージェントをプログラムする！

## Step(ステップ) 1 
ゲートまで ``||agent:エージェントを前に||`` ブロックを使ってカメの線路に沿ってエージェントを移動させます。</br>
終わったら、``||blocks:▶||``ボタンを押してコードをコンパイルしてください。</br>
コードをMinecraftで実行するのを忘れないでください。</br>

```ghost
player.onChat("tracks", function () {
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
})
for (let index = 0; index < 4; index++) {
    	
 }
``` 
```package
rubyblock=github:Mming-Lab/rubyblock1#master
```
