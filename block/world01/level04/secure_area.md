### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# エリアの確保(かくほ)

## Step(ステップ) 1
**オークのフェンス**で柵(さく)を作(つく)るプログラムを作(つく)ってください</br>
**オークのフェンス**を道路(どうろ)側(がわ)に配置(はいち)し、前(まえ)にある土(つち)ブロックは破壊(はかい)しながら前(まえ)に進(すす)みます。</br>
フェンスの長(なが)さは**17ブロック**でなければならない。</br>

#### ~ tutorialhint
エージェントが右側(みぎがわ)にブロックを置(お)き、土(つち)ブロックを破壊(はかい)するようにする。</br>

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
    player.say("")
})
``` 
```package
rubyblock=github:yutari-club/rubyblock#master
```

