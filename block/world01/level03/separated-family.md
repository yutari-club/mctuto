### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 会えない家族!

## ステップ 1 
氷の裂(さ)け目に橋(はし)を架(か)けてしてね。</br>
**中央の島(しま)**でホッキョク熊(くま)の家族(かぞく)が出会(であ)えるようにしてみよう。</br>
``||agent:ブロックやアイテムをスロットに設定(せってい)||``を使って、エージェントに必要な材料(ざいりょう)を持(も)たせます。</br>

#### ~ tutorialhint 
``||loops:もし⬣ならくりかえす||``で**⬣ではない**を使ってしてね。</br>
エージェントにブロックを置かせる場所を考(かんが)えてしてね。

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
    agent.destroy(FORWARD)
})

``` 
```package
rubyblock=github:yutari-club/rubyblock#master
```
