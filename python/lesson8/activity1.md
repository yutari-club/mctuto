### @explicitHints true

# アクティビティ 1 - 一列(れつ)ずつ作(つく)ってみよう 

```python
agent.till(RIGHT)
agent.move(FORWARD, 5)
agent.set_slot(1)
```

## ステップ 1
**パート 1:** エージェントが前進(ぜんしん)しながら、左側(ひだりがわ)の**草(くさ)**ブロックで耕(たがや)して苗(なえ)を植(う)えるコードを書(か)いてみよう。<br>
関数(かんすう)の構造(こうぞう)の例(れい)： 
```python
def function_name():
    agent.till(RIGHT)
```

### ~ tutorialhint 
関数(かんすう)が何(なに)をするかをコメントで説明(せつめい)するのを忘(わす)れないでね。  

## ステップ 2 
**パート 2:** エージェントが苗(なえ)に肥料(ひりょう)を**6**回(かい)ずつ使(つか)うようにコードに追加(ついか)しよう。
### ~ tutorialhint 
エージェントのインベントリの**2番目(ばんめ)**のスロットに肥料(ひりょう)が入(はい)っているよ。<br>
`||agent:set active slot||`コマンドを使(つか)ってエージェントの**1番目(ばんめ)**と**2番目(ばんめ)**のスロットを切(き)り替(か)えてみよう。  

```template
//Replace with your functions below #
//Replace with comment about function below   |Part 1   
//Declare your function                       |Part 1
//Set the Agent's inventory slot to 1                 |Part 2
//Make the Agent till to its left             |Part 1
//Make the Agent place a sapling to its left  |Part 1
//Set the Agent's inventory slot to 2                 |Part 2
//Make the Agent place fertilizer to its left         |Part 2
//Make the Agent place fertilizer to its left         |Part 2
//Make the Agent place fertilizer to its left         |Part 2
//Make the Agent place fertilizer to its left         |Part 2
//Make the Agent place fertilizer to its left         |Part 2
//Make the Agent place fertilizer to its left         |Part 2
//Replace the lines below with your code #    
agent.move(FORWARD, 1)
//Call your function                          |Part 1
//Make the Agent move forward                 |Part 1
//Call your function                          |Part 1
//Make the Agent move forward                 |Part 1
//Call your function                          |Part 1                 
```
