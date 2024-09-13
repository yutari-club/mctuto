### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 大(おお)きな裂(さ)け目(め)！

## Step(ステップ) 1 
氷(こおり)の裂(さ)け目(め)に橋(はし)を架(か)けてください。</br>
``||agent:180:ブロックやアイテムをスロットに設定(せってい)||``を使(つか)って、エージェントに必要(ひつよう)な材料(ざいりょう)を持(も)たせます。</br>
材料(ざいりょう)として**オーク**を選(え)び、個数(こすう)に**64**を入力(にゅうりょく)します。</br>
``||loops:もし⬣ならくりかえす||``でエージェントが**下(した)**に**ブロック**を**見(み)つけない**間(あいだ)は、オークを**下(した)**に置(お)き、さらに**前(まえ)**に移動(いどう)させます。



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
rubyblock=github:Mming-Lab/rubyblock1#master
```

