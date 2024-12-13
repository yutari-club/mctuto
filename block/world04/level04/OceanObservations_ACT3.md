### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# Activity 3 – Future proofing.

## Step 1
Now that we have a steady data stream coming in, the research about the impact of climate change on these reefs can start. However, in 
the event that a sensor fails we want to use AI to make the reach the sensors and repair them automatically. 
This is possible using **autonomous navigation** with the live data that we are collecting.

## Step 2 
Use a `||AI: machine learning||` coding block inside of an `||loops: on start||` coding block.
Inside of this block, place a `||Datasets: input dataset||` coding block, set to `||datasets: live dataset||`.
After which, place a `||AI: analyze terrain data||` coding block. 

## Step 3
Then place a `||AI: generate routes||` coding block. 
Now, when run, the AI will generate routes for the Agent to take, and not collide with different corals. 
We will also be able to see the terrain, of the ocean floor, on a Map. 


```ghost
AI.analyze_OO()
AI.ml_OO(function() {})
Datasets.input_OO()
AI.genRoutes_OO()
```

```package
aicustomblocks=github:fountainstudios/AICustomBlocks
```