### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# Activity 3 – Predictive analysis.

## Step 1
We now need to code the AI that is going to find the best planting locations. 
You will need to use the **current** dataset that you compiled in the last Activity 
and **compare** it against a **historical** dataset that the satellite station already has.

## Step 2
First use a `||AI: semi-supervised machine learning||` coding block and place an `||Datasets: input datasets||` coding block inside.
After that, place a `||Datasets: compare datasets||` coding block. Set to **current** dataset and then **historical**.

## Step 3
Then place a `||AI: run predictive analysis||` coding block, followed by a `||Output: find best farming locations||` coding block. 
Now when you run the code the AI will find and light up the best farming locations.

```ghost
Datasets.compare_SF()
Datasets.input_SF()
AI.ml_SF(function(){})
AI.analyze_SF()
Output.locateFarm_SF()
```

```package
aicustomblocks=github:fountainstudios/AICustomBlocks
```