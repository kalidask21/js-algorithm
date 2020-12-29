const state = {
    name : 'John snow',
    occupation : 'actor',
    skills : []
}


const state2 = [...state, { occupation:'producer' }]

console.log(state)
console.log(state2)