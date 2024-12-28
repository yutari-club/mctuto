### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 会えない家族!

## Step(ステップ) 1 
氷(こおり)の裂(さ)け目(め)に橋(はし)を架(か)けてください。</br>
``||agent:ブロックやアイテムをスロットに設定(せってい)||``を使(つか)って、エージェントに必要(ひつよう)な材料(ざいりょう)を持(も)たせます。</br>

#### ~ tutorialhint 
``||loops:もし⬣ならくりかえす||``で**⬣ではない**を使(つか)ってください。</br>
エージェントにブロックを置(お)かせる場所(ばしょ)を考(かんが)えてください。

```template
{}
```

```ghost
player.onChat("family", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
    player.say("")
})

``` 
```package
rubyblock=github:yutari-club/rubyblock#master
```
