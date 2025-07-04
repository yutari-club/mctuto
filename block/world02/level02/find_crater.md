### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# 周辺環境
<!-- # Surroundings  -->

## Step 1
エージェントが**下にブロック**を検出している間、前進を続ける。<br>
もしエージェントが**下のブロック**を検査し、**空気**を発見したら、``||player:メッセージを送信||`` を使い、**クレーター発見！**と言おう。
<!-- While the Agent **detects the block down**, it needs to move forward. If the Agent **inspects the block down** and finds **air**, then use ``||player:say||`` command to say **Crater found!**.  -->



```template
player.onChat("crater", function () {
            player.say("クレーター発見！")
})
```
```ghost
player.onChat("1", function () {
    while (agent.detect(AgentDetection.Block, DOWN)) {
        agent.move(FORWARD, 1)
    }
    if (agent.inspect(AgentInspection.Block, DOWN) == AIR) {
        player.say("")
    }
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```