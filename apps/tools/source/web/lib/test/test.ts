// const handler = {
//   get(target, prop) {
//     log({target, prop})
//     // console.log(`Get trap fired for property: ${prop}`);
//     return target[prop];
//   }
// };

// const proxyArray = new Proxy(["former", "latter"], handler);

// log('first')

// const [, latter1] = proxyArray; 

// log('second')

// const [former2, latter2] = proxyArray; 

// // const {1: latter} = proxyArray; 
