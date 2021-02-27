const person = {
  name: 'Bob',
  friends: ['Mark', 'Jacobs']
}

const shallowCopy = Object.assign({}, person);

console.log(shallowCopy)
