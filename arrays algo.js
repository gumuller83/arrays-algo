//1 
function greaterY(arr,y) {
    var counter = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]>y){
            counter++;
        }
    }
    return counter;  
}
console.log (greaterY([1,3,5,7],2));

//2. 
function maxMinAvg(arr) {
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        if(arr[i]>max){
            max = arr[i];
        }
        else if(arr[i]< min){
            min = arr[i];
        }
    }
    return [max,min,sum/arr.length];
}
console.log(maxMinAvg([1,5,10,-2]));

//3
function changeNega(arr) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i]<0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}
console.log(changeNega([1,2,-3,-5,5]));

//4
function removerRango(arr,x,y) {
    var count = 0;
    for(var i = x ; i <= y ; i++){
        count++;
    }
    arr.splice(x,count);
    return arr;
}
console.log(removerRango([20,30,40,50,60,70],2,4));