const arr = [10,15,20,1,5,7,10,20,10,20]

const findDuplicates = arr => 
    arr.filter((item, index) => arr.indexOf(item) !== index)

const duplicates = findDuplicates(arr)
console.log(duplicates)

