//1  This code does not execute properly. Try to figure out why.
// Bu kod to'g'ri ishlamayapti. Buning sababini aniqlashga harakat qiling.
// function multiply(a, b){
//   a * b
// }
 //natija
   function multiply(a, b){
  return a * b
}
//2 "Even"Butun sonni argument sifatida qabul qiladigan va juft sonlar yoki "Odd"toq sonlar uchun qaytaradigan funksiya yarating .
// natija
function evenOrOdd(number) {
  if(number%2==0){
    return "Even"
  }else{
    return "Odd"
  }
  
}
//3 Bizga sonni (butun sonni) satrga aylantira oladigan funksiya kerak.
// Bunga erishishning qanday usullarini bilasiz?
// Misollar (kirish --> chiqish):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

//natija
function numberToString(number) {
  return number.toString();
}

//4 Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  return str.split("").reverse().join("");
}

//5 Bu oddiy topshiriqda sizga raqam beriladi va uni manfiy qilish kerak. Lekin ehtimol bu raqam allaqachon manfiydir?

// Misollar
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// natija
function makeNegative(num) {
  if(num>0){
    return -num
  }
  return num
}
// 6 Parametr sifatida manfiy bo'lmagan butun son nva satrni qabul qiladigan va aniq takrorlangan vaqtlar sqatorini qaytaradigan funksiya yozing .sn

// Misollar (kirish -> chiqish)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//natija
function repeatStr (n, s) {
  return s.repeat(n);
}

//7 Sizning maqsadingiz satrning birinchi va oxirgi belgilarini olib tashlaydigan funksiya yozishdir. Sizga bitta parametr, asl satr berilgan.
// Muhim: Sizning funksiyangiz istalgan length ≥ 2belgilar satrlarini qayta ishlashi kerak. Aniq 2belgilarga ega satrlar uchun bo'sh satr qaytaring.

// Misollar
// 'eloquent' --> 'loquen'
// 'country'  --> 'ountr' 
// 'person'   --> 'erso'
// 'ab'       --> '' (empty string)
// 'xyz'      --> 'y'

// natija
function removeChar(str){
return str.slice(1,-1)

};
//8  Juda oddiy, berilgan sonda uning teskarisini (qo'shimcha teskari) toping.
// Misollar:

// 1: -1
// 14: -14
// -34: 34 

// natija
function opposite(number) {
  return -number 
}

//9 Vazifa
// Siz raqamlar massivini olasiz, barcha musbat sonlarning yig'indisini qaytarasiz.

// Misol
// [1, -4, 7, 12]=>
// 1
// +
// 7
// +
// 12
// =
// 20
// 1+7+12=20
// Eslatma
// Agar yig'indi uchun hech narsa bo'lmasa, yig'indi sukut bo'yicha bo'ladi 0.

// natija
function positiveSum(arr) {

    return arr.filter(num=>num>0).reduce((sum,num)=>sum+num,0)
  
}
// 10Kvadrat yigʻindi funksiyasini shunday bajaringki, u unga oʻtkazilgan har bir sonni kvadratga aylantirsin va keyin natijalarni birgalikda jamlasin.

// Masalan, chunki [1, 2, 2]u qaytishi kerak 9, chunki

//natija
function squareSum(numbers){
return numbers.map(num=>num**(2)).reduce((a,b)=>a+b,0);
}
// 11 Bizga satrni songa aylantira oladigan funksiya kerak. Bunga erishishning qanday usullarini bilasiz?

// Eslatma: Xavotir olmang, barcha kirishlar satrlar bo'ladi va har bir satr integral sonning mutlaqo haqiqiy ifodasidir.

// Misollar
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// natija
const stringToNumber = function(str){
  
  return Number(str);
}
// 12 1 dan num gacha bo'lgan (ikkalasi ham shu jumladan) har bir sonning yig'indisini topadigan dastur yozing. Son har doim 0 dan katta musbat butun son bo'ladi. Sizning funksiyangiz faqat natijani qaytarishi kerak, quyidagi misolda qavslar orasida ko'rsatilgan narsa bu natijaga qanday erishishingiz va u uning bir qismi emasligi, namunaviy testlarga qarang.

// Masalan (Kirish -> Chiqish) :

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

//natija
var summation = function (num) {
 let sum=0;
  for(let i=1; i<=num;i++){
  sum+=i}
return sum;
}


//13 Satrdan bo'shliqlarni olib tashlaydigan funksiya yozing, so'ngra natijada olingan satrni qaytaring.

// Misollar ( Kirish -> Chiqish ):

// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"


// natija
function noSpace(x){
return x.trim().split(' ').join(''); 
}

function noSpace(x){
return x.split(' ').join(''); 
}

// 14 Berilgan mantiqiy qiymatni uning satr ko'rinishiga o'zgartiradigan funksiyani amalga oshiring.

// Izoh: Faqat haqiqiy ma'lumotlar kiritiladi.
 // natija
 function booleanToString(b){
  return b.toString()
}
function booleanToString(b){
  return `${b}`
}

// 15 namea ni ifodalovchi parametrni qabul qiladigan va xabarni qaytaradigan funksiya yarating : "Hello, <name> how are you doing today?".

// [Men yozgan narsani aniq yozganingizga ishonch hosil qiling, aks holda dastur to'g'ri ishlamasligi mumkin]

// NATIJA
function greet(name){
  return "Hello, " + name +" how are you doing today?" 
}

// 16 greetEng mashhur "salom dunyo!" ni qaytaradigan oddiy funksiya yarating .

// Uslub nuqtalari
// Albatta, bu eng oson ish. Lekin tasavvur qila oladigan eng ijodiy "salom dunyosi"ni yaratish uchun qanchalik aqlli bo'lishingiz mumkin? Do'stlaringizga qanday "salom dunyosi" yechimini ko'rsatmoqchisiz?

// natija
function greet() {
  return "hello world!";
}
//18 Natan velosipedda yurishni yaxshi ko'radi.

// Neytan suvsizlanish muhimligini bilgani uchun, velosipedda soatiga 0,5 litr suv ichadi.
// Sizga vaqt soatlarda beriladi va Natan ichadigan litrlar sonini yaxlitlangan holda qaytarishingiz kerak .
// Masalan:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

//natija 
function litres(time) {
  return Math.floor(time*0.5)
}

// 19 Sizning vazifangiz to'rtta asosiy matematik amalni bajaradigan funksiya yaratishdir.

// Funksiya uchta argumentni qabul qilishi kerak - operation(string/char), value1(number), value2(number).
// Funksiya tanlangan amalni qo'llaganidan so'ng sonlar natijasini qaytarishi kerak.

// Misollar(Operator, 1-qiymat, 2-qiymat) --> chiqish
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

//natija:
function basicOp(operation, value1, value2){
  return eval(value1 + operation + value2);
}

// 20 Birinchi asr 1- yildan 100-yilgacha bo'lgan davrni, ikkinchi asr esa 101-yildan 200-yilgacha bo'lgan davrni va hokazolarni o'z ichiga oladi .

// Vazifa
// Bir yil berilgan bo'lsa, u yashayotgan asrni qaytaring.

// Misollar
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28
// Izoh: ushbu kata tavsif va misollarda ko'rsatilgandek qat'iy konstruktsiyadan foydalanadi, bu haqda ko'proq ma'lumotni bu yerdan o'qishingiz mumkin.

//natija:

function century(year) {
  if (year>0){
    return Math.ceil(year/100)
  }else{
  return Math.floor(year/100) ;}
}


//21 Sonlar massivini olib, sonlar yig'indisini qaytaradigan funksiya yozing. Sonlar manfiy yoki butun bo'lmagan son bo'lishi mumkin. Agar massivda hech qanday son bo'lmasa, siz 0 ni qaytarishingiz kerak.

// Misollar
// Kirish: [1, 5.2, 4, 0, -1]
// Chiqish:9.2

// Kirish: []
// Chiqish:0

// Kirish: [-2.398]
// Chiqish:-2.398

// natija 
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

//22 Kirish satrini katta harflarga o'zgartiradigan funksiya yozing.

// natija
function makeUpperCase(str) {
  return str.toUpperCase()
}
//23 "Siz banjo chalasizmi?" degan savolga javob beradigan funksiya yarating.
// Agar ismingiz "R" harfi yoki kichik "r" harfi bilan boshlansa, siz banjo chalasiz!

// Funksiya o'zining yagona argumenti sifatida nom oladi va quyidagi satrlardan birini qaytaradi:

// name + " plays banjo" 
// name + " does not play banjo"
// Berilgan nomlar har doim haqiqiy satrlardir.


// natija
function areYouPlayingBanjo(name) {
  if (name[0].toUpperCase() === "R" || name[0] === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}
//24 Ismni bosh harflarga aylantirish funksiyasini yozing. Bu kata faqat ikkita so'zni oladi va ular orasida bitta bo'sh joy qoladi.

// Chiqish ikkita bosh harfdan iborat bo'lishi kerak, ularni nuqta bilan ajratib turishi kerak.

// Bu quyidagicha ko'rinishi kerak:

// Sam Harris=>S.H

// patrick feeney=>P.F

//natija
const abbrevName = name => name.split(' ').map(word => word[0].toUpperCase()).join('.')

//25 Jumlalarni buzish
// So'zlar massivini olib, ularni gapga ajratadigan va gapni qaytaradigan funksiya yozing. So'zlarni tozalash yoki tinish belgilarini qo'shish zaruratini e'tiborsiz qoldirishingiz mumkin, lekin har bir so'z orasiga bo'sh joy qo'shishingiz kerak. Ehtiyot bo'ling, gapning boshida yoki oxirida bo'sh joy bo'lmasligi kerak!

// Misol
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
// Taxminlar
// Sizga faqat so'zlar berilgan deb taxmin qilishingiz mumkin.
// Siz massivning hajmini taxmin qila olmaysiz.
// Siz massiv olasiz deb taxmin qilishingiz mumkin.
// Biz nimani sinovdan o'tkazmoqdamiz
// Biz asosiy sikllar va satrlar bilan ishlashni sinab ko'rmoqdamiz. Bu endigina sikllar va satrlar bilan ishlashni o'rganayotgan yangi boshlovchilar uchun.

// natija
function smash (words) {
   return words.join(" ")
};
//26 Deoksiribonuklein kislotasi, DNK biologik tizimlardagi asosiy axborot saqlash molekulasidir. U to'rtta nuklein kislota asoslaridan iborat: Guanin ('G'), Sitozin ('C'), Adenin ('A') va Timin ('T').

// Ribonuklein kislotasi, RNK, hujayralardagi asosiy xabarchi molekuladir. RNK kimyoviy tuzilishi bilan DNKdan biroz farq qiladi va tarkibida timin yo'q. RNKda timin boshqa nuklein kislotasi Uratsil ('U') bilan almashtiriladi.

// Berilgan DNK zanjirini RNKga aylantiradigan funksiya yarating.

// Masalan:

// "GCAT"  =>  "GCAU"
// Kirish satri ixtiyoriy uzunlikda bo'lishi mumkin - xususan, u bo'sh bo'lishi mumkin. Barcha kiritilgan ma'lumotlar haqiqiy ekanligi kafolatlangan, ya'ni har bir kirish satri faqat 'G', 'C', 'A'va/yoki dan iborat bo'ladi 'T'.

// natija
function DNAtoRNA(dna) {
 
  
  return dna.replaceAll("T" , "U")
}

//27 Satrni ajratish va uni so'zlar massiviga aylantirish funksiyasini yozing.

// Misollar (Kirish ==> Chiqish):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

//natija
function stringToArray(string){

	return string.split(" ")

}

//28 aSizga massiv va qiymat beriladi x. Siz qilishingiz kerak bo'lgan narsa - berilgan massivda qiymat bor-yo'qligini tekshirish.

// a raqamlar yoki satrlarni o'z ichiga olishi mumkin. xyoki bo'lishi mumkin.

// trueAgar massivda qiymat bo'lsa, qaytaring , falseagar bo'lmasa.

// natija
function check(a, x) {
  return a.includes(x);
}

//29 Tasodifiy manfiy bo'lmagan son berilgan bo'lsa, siz ushbu sonning raqamlarini massiv ichida teskari tartibda qaytarishingiz kerak.

// Misol (Kirish => Chiqish):
// 35231 => [1,3,2,5,3]
// 0     => [0]

//natija
function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}

//30 Butun sonlar massivi berilgan bo'lsa, har bir qiymat ikki baravar ko'paytirilgan yangi massiv qaytariladi.

// Masalan:

// [1, 2, 3] --> [2, 4, 6]

//natija
function maps(x){
return x.map(num=>num*2)
}
//31Bu kata berilgan sonni juft son bo'lsa, sakkizga, aks holda to'qqizga ko'paytirish haqida.

//natija
function simpleMultiplication(number){
	if(number % 2 == 0){
		return number * 8;
	}
	else{
		return number * 9;
	}}