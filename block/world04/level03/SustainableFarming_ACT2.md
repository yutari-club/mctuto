### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

```template
//
```

### @explicitHints true
### @flyoutOnly 0

# Activity 2 – Out of this world.

## Step 1
Now that we have placed all of the satellite beacons, we need to **control** the satellite and code a **current** dataset from the information 
that is sent back.

## Step 2 
First use a `||Input: control satelite||` coding block, inside of an `||loops: on start||` coding block. Inside of that place a `||Datasets: make dataset||`
coding block, and set that block to be a `||Datasets: current||` dataset.

## Step 2 
Then place all of the `||Input: location satellite data||` inside. Now when run you will be able to see the satellite camera panning over the village 
as its gathering data for the current dataset.

```ghost
Input.beacon1_SF()
Input.beacon2_SF()
Input.beacon3_SF()
Input.beacon4_SF()
Input.beacon5_SF()
Input.runSatelite_SF(function() {})
Datasets.setOfData_SF(datasetType.historical, function() {})
```

```package
aicustomblocks=github:fountainstudios/AICustomBlocks
```