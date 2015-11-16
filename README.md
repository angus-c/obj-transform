## obj-transform

Generates transform functions to apply to each property of an object

### Usage

```js
// commonJS...
var transform = require('obj-transform');
// ...or es2015
import transform from 'obj-transform';

// an incrementing transformer
const increment = transform(x => x + 1);
// enlarge a rectangle
increment({height: 4, width: 3}); // {height: 5, width: 4}
// move south-east
increment({x: 0, y: 0}); // {x: 1, y: 1}
// looping transform
while (inbounds(ball)) {
  increment(ball);
}  

// ad-hoc transform
transform(x => x * x)({a: 1, b: 2, c: 3}); // {a: 1, b: 4, c: 9}

// a mixin transformer
var mixin = transform(function(value, key) {return this[key] || value});
var baseObj = {a: 3, b: 9, c: 12};
mixin(baseObj, {a: 1, c: 3}); // { a: 1, b: 9, c: 3 }
```

### Install

```
npm install obj-transform
```

### API

__Creating a transform function__
transform(_callback_);

_callback_ is a function that can accept up to three arguments:

**value**  
The value for each property in _baseObj_  
**key** (optional)  
The key for each property in _baseObj_  
**baseObj** (optional)  
The _baseObj_  

__Using a transform function__
transformFunction(_object_[, _thisValue_]);

### Tests

```
npm test
```
