### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# Activity 3 – Professional Tracker.

## Step 1
We now need to code the AI that is going to track the ocelots. 
You will need to use the **current** data that is coming in from the savannah, 
and **compare** it against your **historical** dataset that you compiled in the last Activity.

## Step 2
First use a `||AI: semi-supervised machine learning||` coding block and place a `||Datasets: input datasets||` coding block inside.
After that, place a `||Datasets: compare datasets||` coding block. Set to **current** dataset and then **historical**.

## Step 3
Then place a `||AI: analyze pattern data||` coding block. Followed by a `||Output: locate ocelots||` coding block. 
Now when you run the code a map of the ocelots locations will appear.

```ghost
Datasets.compare_PR()
Datasets.input_PR()
AI.ml_PR(function(){})
AI.analyze_PR()
Output.locateOcelots_PR()
```

```package
aicustomblocks=github:fountainstudios/AICustomBlocks
```