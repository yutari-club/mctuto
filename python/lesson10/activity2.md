### @explicitHints true
### @hideIteration true 

# Blinding lights. 

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

## Step 1
Make the Agent place the Redstone lamps in its inventory on top of the Redstone blocks while walking forwards on the walkway to the gold block.

### ~ tutorialhint
Try using a loop.

