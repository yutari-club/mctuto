### @explicitHints true

# アクティビティ 1 - 止(と)まって進(すす)もう

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
**パート 1:** エージェントの左側(ひだりがわ)にブロックが**ある**ときだけ動(うご)くようなコードを書(か)いてみよう。<br>
条件(じょうけん)には`||agent: agent detect||`コマンドを使(つか)ってみよう： 
```python
agent.detect(AgentDetection.BLOCK, LEFT)
```

## ステップ 2
**パート 2:** エージェントの左側(ひだりがわ)にブロックが**ない**ときに動(うご)くようにコードを編集(へんしゅう)しよう。<br>
条件(じょうけん)の前(まえ)に**not**演算子(えんざんし)を追加(ついか)してやってみよう。 

## ステップ 3
**パート 3:** `||loops:pause||`コマンドの後(あと)で、最後(さいご)の金(きん)ブロックに到達(とうたつ)するためにエージェントを再(ふたた)び動(うご)かしてみよう。

### ~ tutorialhint
**1000**msは**1**秒(びょう)だよ。

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
