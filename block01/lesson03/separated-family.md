### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Separated Family!

## Step(ステップ) 1 
エージェントが氷の裂け目に橋を架けるようにプログラムする。</br>
エージェントに**64**ブロックの**オーク板**があることを確認してください。</br>

#### ~ tutorialhint 
**while**ループの中で**not**を使うことを忘れないでください。</br>
エージェントにブロックを置かせる場所を考えてください。


```ghost
player.onChat("family", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
})

``` 
```package
rubyblock=github:Mming-Lab/rubyblock1#master
```
