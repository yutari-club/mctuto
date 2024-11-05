### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 羊(ひつじ)飼(か)い
## ステップ1
私(わたし)たちが用意(ようい)したプログラミングコードがあります。</br>
実行(じっこう)してみてください。</br>
このコードでは、ブロックの数(かず)を教(おし)えずにエージェントを移動(いどう)させることができます。</br>
エージェントが進(すす)む先(さき)を確認(かくにん)して、正(ただ)しく向(む)きを変(か)えるようにプログラムを完成(かんせい)させてください。</br>
エージェントが**金(きん)の感圧板(かんあつばん)*に到達(たっせい)できることを確認(かくにん)してください。 </br>


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