### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true
### @explicitHints 1


# 場所をきれいにする！

## ステップ1
保護エリアの**4**辺に**14輪のタンポポ**を植えてしてね。</br>
竹の１ブロック内側に一辺**14**輪のタンポポを植えさせてしてね。</br>

#### ~ tutorialhint 
また、``||agent:ブロックを設定させる||``を忘れないでしてね。

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
