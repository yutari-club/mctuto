### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true
### @explicitHints 1


# 場所(ばしょ)をきれいにする！

## Step(ステップ)1
保護(ほご)エリアの**4**辺(へん)に**14輪(りん)のタンポポ**を植(う)えてください。</br>
竹(たけ)の１ブロック内側(うちがわ)に一辺(へん)**14**輪(りん)のタンポポを植(う)えさせてください。</br>

#### ~ tutorialhint 
また、``||agent:ブロックを設定(せってい)させる||``を忘(わ)れないでください。

```template
{}
```

```ghost
player.onChat("flower", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 14; index++) {
            agent.setItem(YELLOW_FLOWER, 64, 1)
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.turn(RIGHT_TURN)
        player.say("")
    }
})

``` 
```package
rubyblock=github:yutari-club/rubyblock#master
```
