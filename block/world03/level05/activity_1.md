### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 種(たね)を植(う)える！
<!-- # Plant a Seed! -->

## Step 1
まず、エージェントのインベントリを開(ひら)き、種(たね)を渡(わたり)するよ。<br>

次(つぎ)に ``||player: 入力(にゅうりょく)した時(とき)||`` コマンドを作成(さくせい)し、``||agent: 前(まえ)を耕(たがや)させる||`` and ``||agent: 前(まえ)へ置(お)かせる||``を追加(ついか)するよ。

<!-- First, interact with the Agent to open its inventory and give it the seeds. 
Then create ``||player:チャットコマンド||`` command and add ``||agent: till forward||`` and ``||agent: place forward||``.  -->

```ghost
player.onChat("plantSeed", function () {
    agent.till(FORWARD)
    agent.place(FORWARD)
})
player.say("")
```
