### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# 周辺環境
<!-- # Surroundings  -->

## Step 1
エージェントが**ブロックダウン**を検出している間、前進する必要がある。もしエージェントが**ブロックダウン**を検査し、**空気**を発見したら、``||player:say||`` コマンドを使い、**クレーター発見！***と言いましょう。
<!-- While the Agent **detects the block down**, it needs to move forward. If the Agent **inspects the block down** and finds **air**, then use ``||player:say||`` command to say **Crater found!**.  -->



```template
player.onChat("crater", function () {
            player.say("Crater found!")
})
```
```ghost
player.onChat("1", function () {
    while (agent.detect(AgentDetection.Block, DOWN)) {
        agent.move(FORWARD, 1)
    }
    if (agent.inspect(AgentInspection.Block, DOWN) == AIR) {
        player.say("Crater found!")
    }
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```