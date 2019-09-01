import '../styles/index.scss';

console.log('webpack starterkit');

/*********************************************/
/****************** 方法和域 ******************/
/*********************************************/

function printStudent(studentName) {
    let message = 'OMG';
    let printFn = function printMessage() {
        console.log(message);
    }

    printFn();
}

printStudent('Wang'); // OMG

function printStudent(studentName) {
    let message = 'OMG';
    let printFn = function printMessage() {
        let message = 'Override';
    }

    printFn();
    console.log(message);
}

printStudent('Wang'); // OMG

let message = 'Outside';
if (5 === 5) {
    let message = 'Equal';
    console.log(message); // Equal
}

console.log(message); // Outside

(function() {
    console.log('in function');
})

let app = (function() {
    let studentId = 111;
    console.log('in Func');
    return { };
})();

let app = (function() {
    let studentId = 111;
    let getId = function() {
        return studentId;
    }
   return {
       getId: getId
   }
})();

console.log( app.getId() ); // 123

let fn = function() {
    console.log (this === window);
};

fn(); // true

let o = {
    studentId: 123,
    getId: function() {
        return this.studentId;
    }
};

console.log( o.getId() ); //123

let o = {
    studentId: 123,
    getId: function() {
        return this.studentId;
    }
};

let newStudent = { studentId: 456 };

console.log( o.getId.call(newStudent) ); //456

let o = {
    studentId: 123,
    getId: function (prefix) {
        return prefix + this.studentId;
    }
}

let newStudent = { studentId: 456 };
console.log( o.getId.apply(newStudent, ['ID: '])); // ID: 456


let o = {
    studentId: 123,
    getId: function() {
        return this.studentId;
    }
};

let newStudent = { studentId: 456 };
let newFn = o.getId.bind(newStudent);
console.log( newFn() );

let trackStu = function(studentId, city = 'NYC') {
    console.log(`Tracking ${studentId} in ${city}`);
}

console.log( trackStu(123) ); // Tracking 123 in NYC

console.log( trackStu(123, 'Seattle') ); // Tracking 123 in Seattle


/*********************************************/
/************* 进阶方法和常见问题处理 ************/
/** 参考资料: http://www.conardli.top/docs/ ***/
/*********************************************/


// 去重
const unique = (array)=> {
    var container = {};
    return array.filter((item, index) =>  container.hasOwnProperty(item) ? false : (container[item] = true));
}

const unique = arr => Array.from(new Set(arr));

const unique = arr => [...new Set(arr)];

// 排序去重
const unique = (array) => {
    array.sort((a, b) => a - b);
    let pre = 0;
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (!i || array[i] != array[pre]) {
        result.push(array[i]);
      }
      pre = array[i];
    }
    return result;
  }

// 数据扁平化
const flat = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        result = result.concat(flat(array[i]));
      } else {
        result.push(array[i]);
      }
    }
    return result;
  }

  function flatten(array) {
    return array.reduce(
      (target, current) =>
        Array.isArray(current) ?
          target.concat(flatten(current)) :
          target.concat(current)
      , [])
  }

  // 求最值
  array.reduce((c,n)=>Math.max(c,n))

  const array = [3,2,1,4,5];
  Math.max.apply(null,array);
  Math.max(...array);

  // 使用reduce实现map
  Array.prototype.reduceToMap = function (handler) {
    return this.reduce((target, current, index) => {
      target.push(handler.call(this, current, index))
      return target;
    }, [])
  };

  // 使用reduce实现filter
  Array.prototype.reduceToFilter = function (handler) {
    return this.reduce((target, current, index) => {
      if (handler.call(this, current, index)) {
        target.push(current);
      }
      return target;
    }, [])
  };

  // 函数currying
  // 用例
  function currying(fn, ...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...args2) => currying(fn, ...args, ...args2);
    }
  }

  const curryingFun = currying(fun)
  curryingFun(1)(2)(3);  // 1 2 3 
  curryingFun(1, 2)(3);  // 1 2 3 
  curryingFun(1, 2, 3);  // 1 2 3 

  // 之前
  function getUrl(protocol, domain, path) {
    return protocol + "://" + domain + "/" + path;
  }

  var page1 = getUrl('http', 'www.conardli.top', 'page1.html');
  var page2 = getUrl('http', 'www.conardli.top', 'page2.html');

  // 之后
  let conardliSite = currying(simpleURL)('http', 'www.conardli.top');
  let page1 = conardliSite('page1.html');    