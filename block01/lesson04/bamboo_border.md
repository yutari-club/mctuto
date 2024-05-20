### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 竹のボーダー

## Step(ステップ) 1
私たちが用意したスターターコードがあります。</br>
まずは実行してみてください。</br>
最終目標は、パンダの区画の**4**面に竹を植えることだ。</br>

```template
player.onChat("bamboo", function () {
    agent.setItem(BAMBOO, 64, 1)
    for (let index = 0; index < 16; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.turn(LEFT_TURN)
})
```
```package
rubyblock=github:Mming-Lab/rubyblock1#master
```
