### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 竹垣(たけがき)

## Step(ステップ) 1
私(わたし)たちが用意(ようい)したプログラミングコードがあります。</br>
まずは実行(じっこう)してみてください。</br>
このコードを改造(かいぞう)して、パンダのエリアの**4**辺(へん)に竹(たけ)を植(う)えてください。</br>


```template
player.onChat("bamboo", function () {
    agent.setItem(BAMBOO, 64, 1)
    for (let index = 0; index < 16; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.turn(LEFT_TURN)
    player.say("")
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```
