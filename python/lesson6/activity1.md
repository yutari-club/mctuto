### @explicitHints true

# アクティビティ 1 - 止まって進もう

```python
loops.pause(2000)
agent.move(FORWARD, 5)
for i in range(2):
      pass
if True:
      pass
agent.detect(AgentDetection.BLOCK, FORWARD)
```

## ステップ 1
**パート 1:** エージェントの左側にブロックが**ある**ときだけ動くようなコードを書いてみよう。<br>
条件には`||agent: agent detect||`コマンドを使ってみよう： 
```python
agent.detect(AgentDetection.BLOCK, LEFT)
```

## ステップ 2
**パート 2:** エージェントの左側にブロックが**ない**ときに動くようにコードを編集しよう。<br>
条件の前に**not**演算子を追加してやってみよう。 

## ステップ 3
**パート 3:** `||loops:pause||`コマンドの後で、最後の金ブロックに到達するためにエージェントを再び動かしてみよう。

### ~ tutorialhint
**1000**msは**1**秒だよ。

```template
//Replace the lines below with your code #    
//for loop set to 7                            |Part 1
//Add the operator NOT to the condition below          |Part 2 
//if conditional with an Agent detect condition|Part 1
//Make the Agent move forward                  |Part 1
//if conditional with an Agent detect condition                |Part 3
loops.pause(2000)
//Make the Agent move forward                                  |Part 3
//End of loop
```
