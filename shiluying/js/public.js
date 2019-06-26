//讲一个字符串转化成日期
function stringToDate(str){
    return new Date(str);
}
//时间差
function diff(start,end){
    return Math.abs( start.getTime() - end.getTime() )/ 1000;
}