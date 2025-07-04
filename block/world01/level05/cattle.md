### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 羊飼い
## ステップ1
私たちが用意したプログラミングコードがあります。</br>
実行してみてしてね。</br>
このコードでは、ブロックの数を教えずにエージェントを移動させることができるよ。</br>
エージェントが進む先を確認して、正しく向きを変えるようにプログラムを完成させてしてね。</br>
エージェントが**金の感圧板*に到達できることを確認してみよう。 </br>


```template
player.onChat("sheep", function () {
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
        agent.move(FORWARD, 1)
    }
    agent.turn(LEFT_TURN)
    player.say("")
})

``` 

```package
rubyblock=github:yutari-club/rubyblock#master
```