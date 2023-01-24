/*var promise=new Promise(function(resolve,reject){
var drive=true;
if(true){
    resolve("yes");
}
 else {
    reject("reject");
}
});
promise.then(function(resolve){
console.log(resolve + "then they know this");
}
).catch(function(reject){
console.log(reject + "they dont know");
})
*/
var functions=function(){
    return new Promise(function(resolve,reject){
        resolve("hi baby  ");
    });  
};
var callback=function(message){
    return new Promise(function(resolve,reject){
        resolve(message + "nice to meet you  ");
    });
};
var promises=function(message){
 return new Promise(function(resolve,reject){
    resolve(message + "being with you  ");
 });
};
functions() .then(function(result){
    return callback (result);
}).then(function(result){
    return promises(result);
}).then(function(result){
    console.log("hum ne tumko:" + result);
});