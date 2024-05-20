### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Locate the cub!

## Step(ステップ) 1 
``||loops:while||``コマンドと``|agent:agent detect|`コマンドを使用することで、エージェントがどこまで進んでいるのか分からずにパスを掘るようにプログラムすることができます。</br>
エージェントは ``||agent:destroy forward & up||`` で雪の中を歩けるようになります！終わったら、**Play**ボタンを押してコードをコンパイルしてください。</br>
あなたのコードをマインクラフトで実行することを忘れないでください。

#### ~ tutorialhint 
コーディングのスニペットの形を見てください。</br>
``||agent:agent move forward||``を使用する。

```template
player.onChat("cub", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
    	
    }
})
```

```ghost
player.onChat("cub", function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(UP)
    }
})

``` 
```package
rubyblock=github:Mming-Lab/rubyblock1#master
```
