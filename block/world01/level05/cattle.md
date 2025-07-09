### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 羊飼(ひつじか)い
## ステップ1
私(わたし)たちが用意(ようい)したプログラミングコードがあります。</br>
実行(じっこう)してみてしてね。</br>
このコードでは、ブロックの数(かず)を教(おし)えずにエージェントを移動(いどう)させることができるよ。</br>
エージェントが進(すす)む先(さき)を確認(かくにん)して、正(ただ)しく向(む)きを変(か)えるようにプログラムを完成(かんせい)させてしてね。</br>
エージェントが**金(きん)の感圧(かんあつ)板(ばん)*に到達(とうたつ)できることを確認(かくにん)してみよう。 </br>


```template
player.onChat("sheep", function () {
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
        agent.move(FORWARD, 1)
    }
    agent.turn(LEFT_TURN)
    player.say("")
})

``` 

