const totalGrains = () => {
    // Code here
    let startingPoint = 0
    let totalGrains = 0

    while(startingPoint < 64){
        totalGrains += Math.pow(2, startingPoint)
        startingPoint++
    }

    return totalGrains
}

const grainsOn = (input) => {
    // Code here

    return Math.pow(2, input-1)
}

console.log(`Grains on 5th square: ${grainsOn(5)}`)
console.log(`Total grains upto 5th square: ${totalGrains()}`)
