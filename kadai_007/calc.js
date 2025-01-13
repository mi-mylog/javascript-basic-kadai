// 変数numに値を代入する
let num;
num = 1;

// 変数の値によって、出力される文字列が変わる
if(num % 3 === 0 && num % 5 === 0){
    console.log('3と5の倍数です');
}
else if(num % 3 === 0){
    console.log('3の倍数です');
}
else if(num % 5 === 0){
    console.log('5の倍数です');
}
else{
    console.log(num);
}