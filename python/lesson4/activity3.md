### @explicitHints true

# Activity 3 - What is the cats name?

```python
player.say("hi")
```

## Step 1
Set the last name in the list of cat names to now equal the string **Shadow**. 
Change the value inside the `||player:say||` command so that it displays the **last** name in the list. 
Then press the **select a cat** button and choose the cat shown in the chat.   
### ~ tutorialhint 
To change a value in a list use: List_Name[positional value] = "New Cat Name" .

## Step 2
Sort the list of cat names alphabetically using the **sort** method. 
Then change the value inside the `||player:say||` command so that it displays the **fourth** name in the list.   
Don't forget, lists count from 0, so the 4th item won't be `Cat_Names[4]`.    
Then press the **select a cat** button and choose the cat shown in the chat.   
### ~ tutorialhint 
Remember that list positions start from zero. 

## Step 3
Reverse the list of cat names using the **reverse** method. 
Keep the same value inside the `||player:say||` command.
Then press the **select a cat** button and choose the cat shown in the chat.   

```template
Cat_Names= ["Smokey", "Oreo", "Sammy", "Patch", "Princess", "Snowy"]
//Replace the lines below with your code #   
//Change the last name to shadow           | Step 1
//Sort the names alphabetically in the list         | Step 2
//Reverse all names                                          | Step 3 
//Change the value of the list below | Step 1,2,3
player.say(Cat_Names[0])  
```
