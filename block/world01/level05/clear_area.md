### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 草取(くさとり)(と)り

## ステップ1
**8** × **16**で草(くさ)が並(なみ)(なら)んでいます。</br>
１列(れつ)の草取(くさとり)(と)りには ``||agent:前(まえ)を破壊(はかい)||``と ``||agent:前(まえ)に移動(いどう)||``を **8** 回(かい)行(おこな)う必要(ひつよう)がある。</br>
それを**16**回(かい)繰(く)り返(へん)するよ。</br>

#### ~ tutorialhint 
```template
{}
```

```blocks
player.onChat("foliage", function () {
    for (let index = 0; index < 8; index++) {
        for (let index = 0; index < 8; index++) {
        	
        }
    }
    player.say("")
})

```

```ghost
player.onChat("foliage", function () {
    for (let index = 0; index < 8; index++) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        for (let index = 0; index < 2; index++) {
            agent.move(FORWARD, 1)
            agent.turn(RIGHT_TURN)
        }
    }
})
``` 
```package
rubyblock=github:yutari-club/rubyblock#master
```