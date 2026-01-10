### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 会(あ)えない家族(かぞく)!

## ステップ 1 
氷(こおり)の裂(さ)け目(め)に橋(はし)を架(か)けてね。</br>
**中央(ちゅうおう)の島(しま)**でホッキョク熊(くま)の家族(かぞく)が出会(であ)えるようにしてみよう。</br>
``||agent:ブロックやアイテムをスロットに設定(せってい)||``を使(つか)って、エージェントに必要(ひつよう)な材料(ざいりょう)を持(も)たせます。</br>

#### ~ tutorialhint 
``||loops:もし〇〇ならくりかえす||``で**〇〇ではない**を使(つか)ってね。</br>
エージェントにブロックを置(お)かせる場所(ばしょ)を考(かんが)えてね。

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

