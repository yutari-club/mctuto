### @explicitHints true

# アクティビティ 1 - 水(みず)の壁(かべ)を作(つく)ろう 

```python
agent.turn(LEFT_TURN)
agent.place(RIGHT)
agent.move(FORWARD, 5)
agent.detect(AgentDetection.BLOCK, FORWARD) 
while True:
      pass
```

## ステップ 1
**パート 1:** エージェントの前(まえ)にレッドストーンダストがあるときに前進(ぜんしん)するコードを書(か)いてみよう。 

## ステップ 2 
**パート 2:** エージェントが移動(いどう)しながら右側(みぎがわ)に2ブロックの高(たか)さの壁(かべ)を置(お)くようにコードにシーケンスを追加(ついか)しよう。 
### ~ tutorialhint
エージェントにブロックを渡(わた)す必要(ひつよう)はないよ。すでにインベントリに必要(ひつよう)なブロックが入(はい)っているからね。  
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
