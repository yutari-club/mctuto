
### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# 撃退１

## ステップ1
``||agent:agent set block||`` を**tripwire**に設定し、カウントを**64**に設定する。

## ステップ2
``||loops:while||``ブロックを使い、``||loops:while||``ブロックの中に条件を入れる。 

#### ~ tutorialhint

```blocks
player.onChat("hazing", function () {
    agent.setItem(TRIPWIRE, 64, 1)
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
    	
    }
})

``` 
## ステップ3
``||loops:while||``ブロックの中に ``||agent: agent place||``ブロックと ``||agent: agent move||``ブロックを追加する。

```blocks
player.onChat("run", function () {
    agent.setItem(TRIPWIRE, 64, 1)
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```