function wakeDog(name, breed) {
    return `Wake ${name} the ${breed}`
}

function leashDog(name, breed) {
    return `Leash ${name} the ${breed}`
}

function walkToPark(dog, breed) {
    return `Walk to the park with ${dog} the ${breed}`
}

function throwFrisbee(name, breed) {
    return `Throw the frisbee for ${name} the ${breed}`
}

function walkHome(name, breed) {
    return `Walk home with ${name} the ${breed}`
}

function unleashDog(name, breed) {
    return `Unleash ${name} the ${breed}`
}
let routine = [wakeDog, leashDog, walkHome, walkToPark, throwFrisbee, unleashDog];

function exerciseDog(dogName, dogBreed) {
    let returnedArray = []
    for(let i = 0; i< routine.length; i++) {
        console.log(routine[i](dogName, dogBreed))
        returnedArray.push(routine[i](dogName, dogBreed))
    }
    return returnedArray
}

