### @explicitHints true
### @hideIteration true 

# 春(はる)の訪(おとず)れ

```python
agent.move(FORWARD, 5)
pos(0, 0, 0)
player.say("Finished")
agent.place(LEFT)
agent.inspect(AgentInspection.BLOCK, DOWN) 
agent.turn(RIGHT_TURN)
agent.destroy(BACK)
agent.drop_all(FORWARD)
agent.collect_all()
loops.pause(500)
for index in range(10):
    pass
if True: 
    pass
else: 
    pass
elif:
    pass
while True:
    pass
```

## ステップ 1
コーディングウィンドウに、動(うご)かないコードが用意(ようい)されているよ。各行(かくぎょう)の最初(さいしょ)と最後(さいご)にある引用符(いんようふ)(**'**)を削除(さくじょ)してみよう。<br>
このコードは、エージェントをエリア内(ない)で行(ぎょう)ごとに移動(いどう)させながら、各草(くさ)ブロックに花(はな)を植(う)えるためのものだよ。<br>
条件(じょうけん)文(ぶん)を追加(ついか)して、メインループをデバッグして、コードを完成(かんせい)させられるかな？
```template
'for index in range(4):'
'   for index2 in range(8):'
'        if agent.inspect(AgentInspection.BLOCK, DOWN) == GRASS:'
'            agent.place(DOWN)'
'        agent.move(FORWARD, 1)'
'   agent.turn(RIGHT_TURN)'
'   agent.move(FORWARD, 1)'
'   agent.turn(RIGHT_TURN)'
'   for index3 in range(8):'
'       if True:'
'           agent.place(DOWN)'
'       agent.move(FORWARD, 1)'
'   agent.turn(LEFT_TURN)'
'   agent.move(FORWARD, 1)'
'   agent.turn(LEFT_TURN)'
```

