// Like Object.assign() but doesn't override existing properties
// (and also doesn't handle Symbol properties)
function merge(target, ...sources) {
    for(let source of sources) {
        for(let key of Object.keys(source)) {
            if (!(key in target)) { // This is different than Object.assign()
        target[key] = source[key];
    }
    }
    }
    return target;
}

// Object.assign({x: 1}, {x: 2, y: 2}, {y: 3, z: 4}) // => {x:2, y: 3, z: 4}
// merge({x: 1}, {x: 2, y: 2}, {y: 3, z: 4})
// => {x:1, y: 2, z: 4}

/*It is straightforward to write other property manipulation utilities like this merge() function. A restrict() function could delete
properties of an object if they do not appear in another template object,
for example. Or a subtract() function could remove all of the
properties of one object from another object.*/