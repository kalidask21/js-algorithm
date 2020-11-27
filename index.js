const { hello, integers, strings} = require('./IntArray')
const helloFc = hello;

helloFc();

strings.forEach(id =>{
    console.log(id);
})