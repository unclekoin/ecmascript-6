# ECMAScript 6
## Table Of Contents

**[let & const](#let-const)**  
**[arrow functions](#arrow-functions)**  
**[default parameters](#default-parameters)**  
**[rest parameter](#rest-parameter)**

***
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

<br>

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

<br>

### <a name="default-parameters"></a>default parameters
<br>

```js
function fetchOrders(count, start = 0) {
  console.log('Getting', count, 'orders starting from', start);
}

fetchOrders(15);
```
<br>

### <a name="rest-parameters"></a> rest parameters