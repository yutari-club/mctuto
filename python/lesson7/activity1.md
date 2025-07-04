### @explicitHints true

# アクティビティ 1 - 水の壁を作ろう 

```python
agent.turn(LEFT_TURN)
agent.place(RIGHT)
agent.move(FORWARD, 5)
agent.detect(AgentDetection.BLOCK, FORWARD) 
while True:
      pass
```

## ステップ 1
**パート 1:** エージェントの前にレッドストーンダストがあるときに前進するコードを書いてみよう。 

## ステップ 2 
**パート 2:** エージェントが移動しながら右側に2ブロックの高さの壁を置くようにコードにシーケンスを追加しよう。 
### ~ tutorialhint
エージェントにブロックを渡す必要はないよ。すでにインベントリに必要なブロックが入っているからね。  
```template
//Replace the lines below with your code #     
//While loop with an Agent detect condition |Part 1
//Make the Agent place a block to its right         |Part 2
//Make the Agent move up                            |Part 2
//Make the Agent place a block to its right         |Part 2
//Make the Agent move back down                     |Part 2:
    agent.move(FORWARD, 1)
//End of while loop                                
```
