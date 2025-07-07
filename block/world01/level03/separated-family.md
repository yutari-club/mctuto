### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 会(あ)えない家族(かぞく)!

## ステップ 1 
氷(こおり)の裂(きれ)(さ)け目(め)に橋(はし)(はし)を架(かけ)(か)けてしてね。</br>
**中央(ちゅうおう)の島(しま)(しま)**でホッキョク熊(ぐま)(くま)の家族(かぞく)(かぞく)が出会(であい)(であ)えるようにしてみよう。</br>
``||agent:ブロックやアイテムをスロットに設定(せってい)(せってい)||``を使(つか)って、エージェントに必要(ひつよう)な材料(ざいりょう)(ざいりょう)を持(もち)(も)たせます。</br>

#### ~ tutorialhint 
``||loops:もし〇〇ならくりかえす||``で**〇〇ではない**を使(つか)ってしてね。</br>
エージェントにブロックを置(お)かせる場所(ばしょ)を考(かんがえ)(かんが)えてしてね。

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
