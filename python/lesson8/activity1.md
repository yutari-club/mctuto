### @explicitHints true

# Activity 1 - One row at a time. 

```python
agent.till(RIGHT)
agent.move(FORWARD, 5)
agent.set_slot(1)
```

## Step 1
**Part 1:** Write some code to make the Agent move forward while tilling and planting saplings, on the **grass** blocks, to its left. Example of 
function structure: 
```python
def function_name():
    agent.till(RIGHT)
```

### ~ tutorialhint 
Remember to describe, in a comment, what your function does.  

## Step 2 
**Part 2:** Add to the code to make the Agent use fertilizer on the saplings, **6** times each.
### ~ tutorialhint 
The Agent has fertilizer in its **second** inventory slot. Switch between the Agent's **first** and **second** slots using the `||agent:set active slot||`
command.  

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
