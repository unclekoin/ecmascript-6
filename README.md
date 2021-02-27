# ECMAScript 6
## Table Of Contents

* **[let & const](#let-const)**  
* **[arrow functions](#arrow-functions)**  
* **[default parameters](#default-parameters)**  
* **[rest parameter](#rest-parameter)**  
* **[spread operator](#spread-operator)**  
* **[object destructuring](#object-destructuring)**  
* **[array destructuring](#array-destructuring)**  
* **[template literals](#template-literals)**  
* **[objects](#objects)**  
* **[](#)**  
* **[](#)**  
* **[](#)**  
* **[](#)** 

***

### <a name="let-const"></a>let & const

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, i * 100)
}

// 3 3 3
```
```js
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, i * 100)
}

// 0 1 2
```
### <a name="arrow-functions"></a>arrow functions

```js
const square = x => x * x;
```

```js
const array = ['1', '2', '3', '4'];

const res = array
  .map((item) => parseInt(item))
  .filter((num) => !(num % 2))
  .reduce((max, value) => Math.max(max, value), 0);
```
```js
const greeter = {
  
  greet: function (name) {
    console.log('Hello', name)
  },

  greeteAll: function (names) {
    names.forEach((name) => {
      this.greet(name)
    })
  }
}

greeter.greeteAll(['Bob', 'Mark', 'Pete']);
```
```js
const person = () => {
  return;
}

console.log(person.prototype) // undefined
```
### <a name="default-parameters"></a>default parameters

```js
function fetchOrders(count, start = 0) {
  console.log('Getting', count, 'orders starting from', start);
}

fetchOrders(15);
```
### <a name="rest-parameter"></a>rest parameter

*old method:*
```js
createArray(1, 2, 3, 4, 5);

function createArray() {
  var numbers = Array.prototype.slice.call(arguments)
  return numbers;
}
// [1, 2, 3, 4, 5]
```

*new method:*
```js
createArray(1, 2, 3, 4, 5);

function createArray(...numbers) {
  return numbers;
}
// [1, 2, 3, 4, 5]
```
### <a name="spread-operator"></a>spread operator

*old method:*

```js
const arr = [1, 2, 3, 4, 5];

Math.max.apply(Math, arr);
```

*new method:*
```js
const arr = [1, 2, 3, 4, 5];

Math.max(...arr);
```

```js
const arrOne = [1, 2, 3, 4, 5];
const arrTwo = [1, 6, 7, 7, 8];

Math.max(10, ...arrOne, ...arrTwo, 2);
```

```js
const arrOne = [1, 2, 3, 4, 5];
const arrTwo = [1, 6, 7, 7, 8];

const shallowCopy = [...arrOne];
const concatedArray = [...arrOne, ...arrTwo];
```

### <a name="object-destructuring"></a>object destructuring

```js
const person = {
  firstName: 'Peter',
  lastName: 'Smith',
  age: 30,
};

const { firstName, lastName } = person;
```

```js
const person = {
  name: {
    first: 'Peter',
    last: 'Smith',
  },
  age: 30,
  // role: 'admim'
};

const { name: { first, last } } = person;

// rename

const { name: { first: firstName, last: lastName } } = person;

// default

const { role = 'user' } = person;

const { permissions: { role = 'user' } = {} } = person;
```

*for function:*

```js
function connect({ host = 'localhost', port = 3000, user = 'guest' } = {}) {
  console.log('user:', user, 'port:', port, 'host:', host);
}

connect(); // user: guest port: 3000 host: localhost

connect({
  host: 'localhost',
  port: 1829,
  user: 'peter',
});

// user: peter port: 1829 host: localhost
```

*rest element:*

```js
const dict = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak',
};

const { duck, ...otherAnimals } = dict;

console.log('duck:', duck, 'other animals:', otherAnimals);

// duck: quack other animals: {dog: "wuff", mouse: "squeak"}
```

### <a name="array-destructuring"></a>array destructuring

```js
const fib = [1, 1, 2, 3, 5, 8, 13];

const [, a, b, , c] = fib;

console.log(a, b, c)

// 1 2 5
```
```js
const line = [[10, 17], [14, 7]];

const [[p1x, p1y], [p2x, p2y]] = line;

console.log(p1x, p1y, p2x, p2y);

// 10 17 14 7
```
```js
// default

const people = ['chris', 'sandra'];

const [a, b, c = 'guest'] = people;

console.log(a, b, c);

// chris sandra guest
```
```js
// rest

const people = ['chris', 'sandra', 'bob'];

const [a, ...others] = people;

console.log(a, others);

// chris ["sandra", "bob"]
```
``` js
const dict = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak',
  hamster: 'squeak',
};

const res = Object.entries(dict)
  .filter(([, value]) => value === 'squeak')
  .map(([key]) => key);

console.log(res);

// ["mouse", "hamster"]
```
```js
const shape = {
  type: 'segment',
  coordinates: {
    start: [10, 15],
    end: [17, 15],
  },
};

const {
  coordinates: {
    start: [startX, startY],
    end: [endX, endY],
  },
} = shape;

console.log(startX, startY, endX, endY);

// 10 15 17 15
```

### <a name="template-literals"></a>template literals    
```js
const user = 'Bob';
const num = 17;
const txt = `Hello, ${user} you have ${num} letters in your box`;
```

### <a name="objects"></a>objects

```js
const x = 10;
const y = 30;

const point = { x, y };

console.log(point)

// {x: 10, y: 30}
```
```js
const prefix = '_id_';

const data = {
  [prefix + 'name']: 'Bob',
  [prefix + 'year']: 23,
};

console.log(data);

// {_id_name: "Bob", _id_year: 23}
```
```js
const defaults = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin',
};

const opts = {
  user: 'John',
  password: 12345,
};

const res = Object.assign({}, defaults, opts);

console.log(res);

// {host: "localhost", dbName: "blog", user: "John", password: 12345}
```
```js
const person = {
  name: 'Bob',
  friends: ['Mark', 'Jacobs']
}

const shallowCopy = Object.assign({}, person);
```