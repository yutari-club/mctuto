### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1

# 周辺(しゅうへん)環境(かんきょう)
<!-- # Surroundings  -->

## Step 1
エージェントが**下(した)にブロック**を検出(けんしゅつ)している間(あいだ)、前進(ぜんしん)を続(つづ)ける。<br>
もしエージェントが**下(した)のブロック**を検査(けんさ)し、**空気(くうき)**を発見(はっけん)したら、``||player:メッセージを送信(そうしん)||`` を使(つか)い、**クレーター発見(はっけん)！**と言(い)おう。
<!-- While the Agent **detects the block down**, it needs to move forward. If the Agent **inspects the block down** and finds **air**, then use ``||player:say||`` command to say **Crater found!**.  -->



```template
player.onChat("crater", function () {
            player.say("クレーター発見(はっけん)！")
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