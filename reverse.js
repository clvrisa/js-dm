// solution using reverse method with the best time complexity and space storage 
// since there is no repetition and minimal executions
const array = [10,15,20,1,5,7,10,20,10,20]

array.reverse()
console.log(array)

//solution not using reverse method 
const arrayTwo = [10,15,20,1,5,7,10,20,10,20]
const reverseArray = () => {
    let output = []
    while(arrayTwo.length) {
        output.push(arrayTwo.pop())
    }
    return output
}
const reversed = reverseArray(arrayTwo)
console.log(reversed)


