### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# Activity 2 – Underwater data.

## Step 1
Now that the sensors have been placed we need to make **one** live dataset that is going to hold all of the data from the **four** sensors.
Once this is done we will be able to see and map what is going on beneath the surface of the water on the four monitors. 

## Step 2 
First use a `||Datasets: make dataset||` coding block, inside of an `||loops: on start||` coding block.
Set that block to be a `||Datasets: live||` dataset.

## Step 3
Then place the `||Input: sensor data||`, inside of the dataset.

```ghost
Input.sensor1_OO()
Input.sensor2_OO()
Input.sensor3_OO()
Input.sensor4_OO()
Datasets.setOfData_OO(datasetType.historical, function() {})
```

```package
aicustomblocks=github:fountainstudios/AICustomBlocks
```
