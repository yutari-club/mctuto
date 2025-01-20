### @explicitHints true
### @hideIteration true 
# Activity 1 - Animal categorizing.

```python
blocks.place()
mobs.spawn()
world(0, 0, 0)
```

## Step 1
Write some code with a list, named **My_list**, of the animals going from **left** to **right** in the Minecraft world. 
Place **4** more `||mobs:spawn mob at position||` commands after the one that's already given. Use the information from the signs 
on the pens to complete these commands. 

### ~ tutorialhint 
Remember that list positions start from zero. 

```template 
location1 = world(-2, 40, -11)
location2 = world(-2, 40, -5)
location3 = world(-8, 40, -0)
location4 = world(-13, 40, -5)
location5 = world(-13, 40, -11)
//Replace the lines below with your code #   

//list of animals 

mobs.spawn(My_list[0], location1)
//spawn the third mob from the list at location2
//spawn the fifth mob from the list at location3
//spawn the second mob from the list at location4
//spawn the fourth mob from the list at location5
```
