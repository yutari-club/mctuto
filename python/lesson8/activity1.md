### @explicitHints true

# アクティビティ 1 - 一列ずつ作ってみよう 

```python
agent.till(RIGHT)
agent.move(FORWARD, 5)
agent.set_slot(1)
```

## ステップ 1
**パート 1:** エージェントが前進しながら、左側の**草**ブロックで耕して苗を植えるコードを書いてみよう。<br>
関数の構造の例： 
```python
def function_name():
    agent.till(RIGHT)
```

### ~ tutorialhint 
関数が何をするかをコメントで説明するのを忘れないでね。  

## ステップ 2 
**パート 2:** エージェントが苗に肥料を**6**回ずつ使うようにコードに追加しよう。
### ~ tutorialhint 
エージェントのインベントリの**2番目**のスロットに肥料が入っているよ。<br>
`||agent:set active slot||`コマンドを使ってエージェントの**1番目**と**2番目**のスロットを切り替えてみよう。  

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
