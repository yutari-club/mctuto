### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# Activity 3 – Pollutants here, pollutants there.

## Step 1
We now need to code the AI that is going to find the sources of pollution. To do this we need to **analyze** the **current** dataset that we 
coded in the last Activity and find the locations where the concentration of pollutants are strongest.

## Step 2
First use a `||AI: supervised machine learning||` coding block and place an `||Datasets: input datasets||` coding block inside, set to **current**.

## Step 3
Then place an `||AI: analyze water data||` coding block. Followed by a `||Output: locate pollution sources||` coding block. 
Now when you run the code the AI will find the locations where the sources of the pollution is coming from.


```ghost
Datasets.input_WQ()
AI.ml_WQ(function(){})
AI.analyze_WQ()
Output.locatePollution_WQ()
```

```package
aicustomblocks=github:fountainstudios/AICustomBlocks
```