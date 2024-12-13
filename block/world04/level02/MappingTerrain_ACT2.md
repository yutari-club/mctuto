### @explicitHints true
### @flyoutOnly 0

# Activity 2 – Mapping everything out.

## Step 1
In this Activity, you have to combine all of the pictures you have taken into **one** large `||datasets: dataset||`. All of this data will then be compiled and
shown as a large map of the forest. First use a `||datasets: make dataset||` coding block inside of a `||loops: on start||` coding block. 

## Step 2
Place **all** of the data taken from the **three** locations inside the `||datasets: make dataset||` coding block. The `||Input: picture data||` 
coding blocks are located in the in the `||Input: INPUT||` tab. 

```ghost
Input.location1PictureData_MT()
Input.location2PictureData_MT()
Input.location3PictureData_MT()
Datasets.setOfData_MT(function() {})
```

```package
aicustomblocks=github:fountainstudios/AICustomBlocks
```