function* generator(){
  let id = 1

  while(true) {
      yield id
      id++
  }
}

const generatorObject = generator()
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.return(10))

function* generateArray(array) {
    for(let i = 0; i <= array.length; i++ )
        {
            yield array[i]
        }
}

const generateArrayObject = generateArray([3,5,1,7,4])
console.log(generateArrayObject.next())
console.log(generateArrayObject.next())
console.log(generateArrayObject.next())
console.log(generateArrayObject.next())
