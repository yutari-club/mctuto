### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# 葉っぱを片付ける！

## ステップ1
**8**×**16**で草が並んでいます。</br>
１列の草取りには ``||agent:前を破壊||``と ``||agent:前に移動||``を **8** 回行う必要がある。</br>
それを**16**回繰り返します。</br>

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