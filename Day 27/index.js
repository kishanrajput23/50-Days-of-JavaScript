function getCount(str) {
    const vowelSet = new Set()
    vowelSet.add('a')
    vowelSet.add('e')
    vowelSet.add('i')
    vowelSet.add('o')
    vowelSet.add('u')

    let vowelsCount = 0

    let startingPoint = 0
    let endingPoint = str.length - 1

    while(startingPoint <= endingPoint){
        if(startingPoint === endingPoint){
            if(vowelSet.has(str.charAt(startingPoint).toLowerCase())) vowelsCount++
            startingPoint++
            endingPoint--
            continue
        }

        if (vowelSet.has(str.charAt(startingPoint).toLowerCase())) vowelsCount++
        if (vowelSet.has(str.charAt(endingPoint).toLowerCase())) vowelsCount++

        startingPoint++
        endingPoint--
    }

    return vowelsCount
}

console.log(getCount("abracadabra"));
