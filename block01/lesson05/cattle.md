### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 牛
## ステップ1
私(わたし)たちが用意(ようい)したプログラミングコードがあります。</br>
実行してみてください。</br>
このコードでは、ブロックの数を教えずにエージェントを移動させることができます。</br>
エージェントが進む先を確認して、正しく向きを変えるようにプログラムを完成させてください。</br>
エージェントが**金の感圧版*に到達できることを確認してください。 </br>


```template
player.onChat("sheep", function () {
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
        agent.move(FORWARD, 1)
    }
    agent.turn(LEFT_TURN)
})

``` 

```package
rubyblock=github:yutari-club/rubyblock#master
```