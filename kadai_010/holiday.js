// 配列の宣言と値の代入
const holidays = ['正月', '成人式', '建国記念日', '天皇誕生日', '春分の日', '昭和の日', '建国記念日', 'みどりの日', 'こどもの日','海の日', '山の日', '敬老の日', '秋分の日', 'スポーツの日', '文化の日', '勤労感謝の日'];

// for文の場合
for(let i = 0; i <= 15; i += 1){
    console.log(holidays[i]);
}

// while文の場合
let num = 0
while(num <= 15){
    console.log(holidays[num]);
    num += 1;
}