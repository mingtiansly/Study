/* (function foo(){
    console.log('foo');
    var a,b,c;
    
}());
 */
function test(){
    console.log(foo);
    console.log(bar);
    
    var foo='hello';
    console.log(foo);
    var bar=function (){
        return 'world';
    };
    console.log(bar);
    function foo(){
        return 'hello';
    }
    function foo(){
        return 'world';
    }
}
test();


test上下文环境运行阶段
function foo(){
    return 'world';
}
var bar;
console.log(foo);
console.log(bar);

foo='hello';
console.log(foo);
bar=(function (){
    return 'world';
}());
console.log(bar);

