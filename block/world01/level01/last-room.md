### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# エージェントが金の板に移動するようにプログラムしよう！

## ステップ 1 
エージェントが金の板に到達するようにプログラムしよう
- 金の板は２枚あります
- 一方の金の板にはエージェントが乗るようにプログラミングしてみよう
- もう一方の金の板にはあなたが乗るように操作してみよう

### 実行
エージェントのプログラムが終わったら実行してみよう。</br>
エージェントが移動を始めるとスタートになるよ。</br>
あなたも金の板を目指してみよう。</br>



```ghost
player.onChat("jump", function () {
    agent.move(RubySixDirection.Forward, 1)
    agent.turn(RubyTurnDirection.Left)
})
``` 
```template
player.onChat("jump", function () {
	
})
```
```package
rubyblock=github:yutari-club/rubyblock#master
```
