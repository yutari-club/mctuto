### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 葉っぱを片付ける！

## ステップ1
エージェントは**前進**している**8**ブロックの葉を破壊する必要がある。</br>
エージェントは **16** 列の葉を破壊する必要がある。</br>
エージェントは ``||agent:destroy forward||``と ``||agent:move forward||``を **8** 回行う必要がある。</br>
#### ~ tutorialhint 
```blocks
player.onChat("foliage", function () {
    for (let index = 0; index < 8; index++) {
        for (let index = 0; index < 8; index++) {
        	
        }
    }
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