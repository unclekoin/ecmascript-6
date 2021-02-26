# ECMAScript 6
## Table Of Contents

* **[let & const](#let-const)**  
* **[arrow functions](#arrow-functions)**  
* **[default parameters](#default-parameters)**  
* **[rest parameter](#rest-parameter)**  
* **[spread operator](#spread-operator)**  
* **[object destructuring](#object-destructuring)**  
* **[](#)**  
* **[](#)**  
* **[](#)**  
* **[](#)**  
* **[](#)**  
* **[](#)**  
* **[](#)**  

<br>

### <a name="let-const"></a>let & const
<br>


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
<br>

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
<br>

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