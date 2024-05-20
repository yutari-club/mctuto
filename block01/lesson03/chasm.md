### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 大きな裂け目！

## Step(ステップ) 1 
エージェントに氷の裂け目に橋を架けるようにプログラムしてください。</br>
エージェントのインベントリに必要な材料があることを確認するには``||agent:set block or item||``を使用します。</br>
建材として**オーク**を選択し、**ブロックの数**に**64**を選択します。</br>
``||loop:while||``エージェントがブロックが**落ちている**ことを検知しません、 エージェントにオークの板を**下に**置き、橋を作るために**前方に**移動するようプログラムします。</br>



```template
player.onChat("chasm", function () {
    agent.setItem(PLANKS_OAK, 1, 1)
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

