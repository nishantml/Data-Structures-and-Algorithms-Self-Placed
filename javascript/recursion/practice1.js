function fun1(n){
    if(n==1) {
        return 0
    }else{
        return 1+  fun1(n/2)

    }
}
console.log("fun1:: ",fun1(16))