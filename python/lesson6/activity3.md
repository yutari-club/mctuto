### @explicitHints true
### @hideIteration true 
# アクティビティ 3 - 通(とお)り抜(ぬ)けよう 

```python
agent.detect(AgentDetection.BLOCK, FORWARD) 
agent.turn(LEFT_TURN)
agent.move(FORWARD, 5)
for i in range(2):
      pass
if True:
      pass
```

## ステップ 1
エージェントがコースを進(すす)む間(あいだ)に、ランダムに置(お)かれたブロックを見(み)つけて避(さ)けるようなコードを書(か)いてみよう。<br>
そのためには、`||logic:もし〇〇なら||`条件(じょうけん)文(ぶん)と**elif**条件(じょうけん)文(ぶん)を組(く)み合(あ)わせて使(つか)おう。<br>
**if**条件(じょうけん)では、2つの`||agent:〇〇がある[見つける]||`コマンドを**and not**演算子(えんざんし)でつなげて使(つか)おう。<br>
**elif**条件(じょうけん)では、2つの`||agent:〇〇がある[見つける]||`コマンドを**and**演算子(えんざんし)でつなげて使(つか)おう。<br>
**and not**演算子(えんざんし)を使(つか)った2つの条件(じょうけん)の例(れい)：
```python
agent.detect(AgentDetection.BLOCK, DIRECTION) and not agent.detect(AgentDetection.BLOCK, DIRECTION)
```

### ~ tutorialhint
複数(ふくすう)の条件(じょうけん)を一緒(いっしょ)に使(つか)うときは、**and**や**and not**を使(つか)って複数(ふくすう)の状態(じょうたい)をチェックできるよ。 

```template
//下(した)の行(ぎょう)をあなたのコードに置(お)き換(か)えてね #
//forループを23に設定(せってい)
//if else条件(じょうけん)文(ぶん)、2つのエージェント検知(けんち)コマンドをand not演算子(えんざんし)でつなぐ
agent.move(LEFT, 1)
//elif条件(じょうけん)文(ぶん)、2つのエージェント検知(けんち)コマンドをand演算子(えんざんし)でつなぐ
agent.move(RIGHT, 2)
//else if条件(じょうけん)文(ぶん)のelse部分(ぶぶん)
agent.move(FORWARD, 1)
//ループの終(お)わり
```
