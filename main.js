let parent = {
    name:'rakesh',
    age: 22,

    details(){
        return (`the name is ${this.name} and age is ${this.age}`)
    }
}
let child = {
}
child.__proto__ = parent
console.log(child.details());

//<------------------------------------------------------------>

function student (name){

    this.sname = name;
}

student.prototype.sroll = 50;

let stu1 = new student('abc');

console.log(stu1);

//<------------------------------------------------------------>

const array1 = [1,2,3,4,5];
const array2 = [6,7,8,9,10];
const array3 = [10,20,30,40,50];

const arraysumobject = {
    add:function(array){
        let sum = 0;
        for(let i = 0; i < array1.length; i++){
            sum = sum + array[i];
        }
        console.log(sum);
    }
}

Array.__proto__ = arraysumobject;

Array.add(array1);
Array.add(array2);
Array.add(array3);

//<------------------------------------------------------------>

const newobj  = {
    name:'alex',
    rollno:50,
    class:12
}

let keys = Object.keys(newobj);
console.log(keys);

