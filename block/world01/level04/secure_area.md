### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# エリアの確保(かくほ)(かくほ)

## ステップ 1
**オークのフェンス**で柵(さく)(さく)を作(つく)るプログラムを作(つく)ってしてね</br>
**オークのフェンス**を道路(どうろ)(どうろ)側(がわ)(がわ)に配置(はいち)(はいち)し、前(まえ)にある土(つち)(つち)ブロックは破壊(はかい)しながら前(まえ)に進(すすみ)(すす)みます。</br>
フェンスの長(おさ)(なが)さは**17ブロック**でなければならない。</br>

#### ~ tutorialhint
エージェントが右側(みぎがわ)(みぎがわ)にブロックを置(お)き、土(つち)(つち)ブロックを破壊(はかい)するようにする。</br>
 
```template
{}
```

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


