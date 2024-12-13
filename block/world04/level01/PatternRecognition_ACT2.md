### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# Activity 2 – Paterns, paterns, paterns...

## Step 1
Now that we have collected a large amount of photographic data with different coat patterns, from a few different ocelots, we can code a dataset. 
 
## Step 2 
Start by using a `||Datasets: make dataset||` coding block, set to `||Datasets: historical||`. Inside of that place all of the `||Input: trap camera data||`
, that was just gathered. 

## Step 3 
As a last step we need to extract the patterns on the ocelots coats from the photographic data. Use a `||Datasets: extract patterns||` coding block.
Now when you run the code, previews of the ocelots patterns will be compiled. 

```ghost
Input.trap1_PR()
Input.trap2_PR()
Input.trap3_PR()
Datasets.extractPatterns_PR()
Datasets.setOfData_PR(datasetType.historical, function() {})
```

```package
aicustomblocks=github:fountainstudios/AICustomBlocks
```