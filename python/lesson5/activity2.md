### @explicitHints true
# アクティビティ 2 - 洗濯機の回転

```python
for i in range(2):
pass
agent.collect_all()
agent.move(FORWARD, 5)
agent.drop_all(FORWARD)
agent.turn(LEFT)

```

## ステップ 1
**パート 1:** エージェントが汚れた洗濯物を拾って、洗濯機に**前進**し、<br>
左に**20**回回転してから洗濯機から出て、<br>
汚れた洗濯物があった場所の反対側にきれいな洗濯物を置くコードを書いてみよう。

## ステップ 2
**パート 2:** 同じコードを編集して、エージェントが同じことを**3**回分の洗濯物に対して行うようにしよう。<br>
他のコードの前に`||loops: for||`ループを使ってやってみよう。

### ~ tutorialhint 
この場合、2つのループは同じ変数名を使ってはいけないので、2番目のループの名前を変更するのを忘れないでね。<br>
大きなコードをインデントするには、インデントしたいコードをすべて選択して**tab**キーを押してね。 

```template
//Replace the lines below with your code #    
//loop number 2 set to 3                              | Part 2
agent.collect_all()
agent.move(FORWARD, 7)
agent.drop_all(FORWARD)
//loop number 1                              | Part 1
//make the Agent turn left 20 times          | Part 1 
//end of loop 1
//make the Agent collect all                 | Part 1          
//make the Agent move back                   | Part 1
//make the Agent drop everything to the left | Part 1
//end of loop 2
```
