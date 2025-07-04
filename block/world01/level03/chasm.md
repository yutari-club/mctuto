### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 大きな裂け目！

## ステップ 1 
氷の裂け目に橋を架けてしてね。</br>
``||agent:ブロックやアイテムをスロットに設定||``を使って、エージェントに必要な材料を持たせます。</br>
材料として**オーク**を選び、個数に**64**を入力するよ。</br>
``||loops:もし⬣ならくりかえす||``でエージェントが**下**に**ブロック**を**見つけない**間は、オークを**下**に置き、さらに**前**に移動させます。



```template
player.onChat("chasm", function () {
    agent.setItem(AIR, 1, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
    	
    }
})
```

```ghost
player.onChat("chasm", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})

``` 
```package
rubyblock=github:yutari-club/rubyblock#master
```

