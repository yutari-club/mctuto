### @explicitHints true
### @flyoutOnly 0

# Activity 3 – Detecting Anomalies.

## Step 1
In this Activity, you have to use the dataset that you made, inside a machine learning algorithm. The algorithm needs to search for anomalies in the dataset
and outline them on the map. First use an `||AI: machine learning||` coding block inside of a `||loops: on start||` coding block.

## Step 2
Inside of that, place an `||Datasets: input dataset||` coding block. Then place an `||AI: analyze data||` coding block.

## Step 3
We have now imported and analyzed the data, the algorithm should have a result. However, so that we can see the result on the map place an 
`||Output: show locations||` coding block.


```ghost
Datasets.input_MT()
AI.analyze_MT()
Output.showLocations_MT()
AI.ml_MT(function() {})
```

```package
aicustomblocks=github:fountainstudios/AICustomBlocks
```