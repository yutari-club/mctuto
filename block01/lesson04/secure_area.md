### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# エリアの確保

## Step(ステップ) 1
エージェントに**オークフェンス**を建設するようプログラムする。</br>
エージェントは、**オークフェンス**ブロックを右に配置し、障害物を破壊し、前進する必要があります。</br>
フェンスの長さは**17ブロック**でなければならない。</br>

#### ~ tutorialhint
エージェントが右側にブロックを置き、左側にブロックを破壊するようにする。</br>

```blocks
player.onChat("fence", function () {
    agent.setItem(OAK_FENCE, 64, 1)
    for (let index = 0; index < 17; index++) {
            }
})
```
```ghost
player.onChat("fence", function () {
    agent.setItem(OAK_FENCE, 64, 1)
    for (let index = 0; index < 17; index++) {
        agent.place(RIGHT)
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
    }
})
``` 
```package
rubyblock=github:Mming-Lab/rubyblock1#master
```

