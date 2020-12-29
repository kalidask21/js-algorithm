console.info(process.pid);
console.info(process.version)
console.info(process.argv)

const [proc,file,name] = process.argv;
// console.log(proc,file,name);


const grabParam = flag => {
   let flagIndex = process.argv.indexOf(flag) + 1 ;
   return process.argv[flagIndex];
}

const user = grabParam("--user");
const instance = grabParam("--instance")

console.log(user,instance);
