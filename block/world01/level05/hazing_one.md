
### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# 撃退(げきたい)１

## ステップ1
``||agent:agent set block||`` を**tripwire**に設定(せってい)し、カウントを**64**に設定(せってい)する。

## ステップ2
``||loops:while||``ブロックを使(つか)い、``||loops:while||``ブロックの中(なか)に条件(じょうけん)を入(い)れる。 

#### ~ tutorialhint

```blocks
player.onChat("hazing", function () {
    agent.setItem(TRIPWIRE, 64, 1)
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
    	
    }
    player.say("")
})

``` 
## ステップ3
``||loops:while||``ブロックの中(なか)に ``||agent: agent place||``ブロックと ``||agent: agent move||``ブロックを追加(ついか)する。

```blocks
player.onChat("run", function () {
    agent.setItem(TRIPWIRE, 64, 1)
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
```
