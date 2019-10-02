const wakeDog = (name, breed) => `Wake ${name} the ${breed}`
const leashDog = (name, breed) => `Leash ${name} the ${breed}`
const walkToPark = (name, breed) => `Walk to the park with ${name} the ${breed}`
const throwFrisbee = (name, breed) => `Throw the frisbee for ${name} the ${breed}`
const walkHome = (name, breed) => `Walk home with ${name} the ${breed}`
const unleashDog = (name, breed) => `Unleash ${name} the ${breed}`

const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
  ]

const exerciseDog = (dog, breed) => {
  const results = []
  for(let i = 0; i < routine.length; i++){
    results.push(routine[i](dog, breed))
  }
  return results
}
