### @explicitHints true
### @hideIteration true 

# まぶしいライト 

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
for i in range(10):
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
エージェントに、歩道を前に歩いて金ブロックに向かいながら、インベントリにあるレッドストーンランプをレッドストーンブロックの上に置かせよう。

### ~ tutorialhint
ループを使ってみてね。

