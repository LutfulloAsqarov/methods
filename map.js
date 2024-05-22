let data = [];

for (let i = 0; i < 100; i++) {
    data.push(i);
}

// map

Array.prototype.customMap = function (callbackFunc) {
    let newData = this;
    let res = [];
    for (let i = 0; i < newData.length; i++) {
        res.push(callbackFunc(newData[i], i, data));
    }
    return res;
};

let customRes = data.customMap((el) => el * 2);
// console.log(customRes);

// filter

Array.prototype.customFilter = function (callbackFunc) {
    let newData = this;
    let res = [];

    for (let i = 0; i < newData.length; i++) {
        if (callbackFunc(newData[i])) res.push(newData[i]);
    }

    return res;
};
// console.log(data.customFilter((el) => el % 2 === 0));

// forEach

Array.prototype.customForEach = function (callbackFunc) {
    let newData = this;

    for (let i = 0; i < newData.length; i++) {
        callbackFunc(newData[i]);
    }
};

let fora = data.customForEach((el) => el + 1);
// console.log(fora);

// some

Array.prototype.customSome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
};
const hasEven = data.customSome((num) => num % 2 === 0);
// console.log(hasEven);

// every

Array.prototype.customEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
};

const allEven = data.customEvery((num) => num % 2 === 0);
// console.log("even >>>", allEven);

// find

Array.prototype.customFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};

const found = data.customFind((num) => num > 2);
// console.log(found);
