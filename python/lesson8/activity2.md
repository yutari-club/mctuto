### @explicitHints true

# Activity 2 - Breaking boulders.

```python
agent.destroy(FORWARD)
agent.place(RIGHT)
agent.collect_all()
agent.move(FORWARD, 5)
agent.till(BACK)
for i in range(4):
      pass
if agent.inspect(AgentInspection.BLOCK, FORWARD) == GRASS:
    pass
else: 
    pass
```

## Step 1
**Part 1:** Write some code to make the Agent move forward while breaking and collecting each **stone** block in its way.
### ~ tutorialhint
Agent inspect condition command structure:  
```python
agent.inspect(AgentInspection.BLOCK, DIRECTION) == BLOCK_TYPE
```

## Step 2 
**Part 2:** Add to the code to now make the Agent till and plant saplings on the **grass** blocks.  
### ~ tutorialhint
Agent inspect condition command structure:  
```python
agent.inspect(AgentInspection.BLOCK, DIRECTION) == BLOCK_TYPE
```

```template
//Place your functions below #
//Replace with comment about function below                  |Part 1   
//Declare function 1                                         |Part 1
//Make the Agent destroy the block forward                   |Part 1
    agent.move(FORWARD, 1)
//Replace with comment about function below                          |Part 2   
//Declare function 2                                                 |Part 2
//Make the Agent move forward                                        |Part 2
//Make the Agent till back                                           |Part 2
//Make the Agent place back                                          |Part 2
//Replace the lines below with your code #  
//For loop set to 12                                         |Part 1
//If else conditional with Agent inspect condition for STONE |Part 1
//Call function for removing rocks                           |Part 1
//Elif conditional with Agent inspect condition for GRASS            |Part 2            
//Call function for planting trees                                   |Part 2
//Else part of if else conditional                           |Part 1
//Make the Agent move forward                                |Part 1          
```
