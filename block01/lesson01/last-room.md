### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# エージェントが金(きん)の板(いた)に移動(いどう)するようにプログラムする！

## Step(ステップ) 1 
エージェントが金(きん)の板(いた)に到達(とうちゃく)するようにプログラムする
- 金(きん)の板(いた)は２枚(まい)あります
- 一方(いっぽう)の金(きん)の板(いた)にはエージェントが乗(の)るようにプログラミングしてください
- もう一方(いっぽう)の金(きん)の板(いた)にはあなたが乗(の)るように操作(そうさ)してください

### 実行(じっこう)
エージェントのプログラムが終(お)わったらを実行(じっこう)してください。</br>
エージェントが移動(いどう)を始(は)めるとスタートになります。</br>
あなたも金(きん)の板(いた)を目指(めざ)してください。</br>



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
rubyblock=github:Mming-Lab/rubyblock1#master
```
