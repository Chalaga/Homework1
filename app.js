//1) დავწეროთ ფუნქცია რომელსაც გადეცემა რაიმე პარამეტრი და არგუმენტად
//მიიღებს ისეთ რიცხვებს რომლის დახმარებითაც უნდა გამოვითვალო
//მაგალითად რამდენი წელი გვაკლდება თითოეულს პენსიამდე და ეს
//ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.

// const CurrentAge = 23
// const RetirmentAge = 66

// function Calculateyears(CurrentAge, RetirmentAge) {
//     return RetirmentAge - CurrentAge
// }

// console.log(Calculateyears(CurrentAge, RetirmentAge));

//2)შექმენით კალკულატორის ფუნქცია სახელად კალკულატორი,
// რომელიც ასრულებს ძირითად არითმეტიკულ ოპერაციებს.
// ამ ფუნქციამ უნდა მიიღოს სამი პარამეტრი: ორი რიცხვი და სტრიქონი,მაგალითად num1,num2, "+".
// რომელიც წარმოადგენს არითმეტიკულ ოპერატორს ('+', '-', '*', '/').
// მოწოდებული ოპერატორის მიხედვით, ფუნქციამ უნდა შეასრულოს შესაბამისი ოპერაცია ორ ნომერზე და დააბრუნოს შედეგი.

// const num1 = 10;
// const num2 = 10;
// let operator = "=";

// function Calculator(num1, num2, operator) {
//   switch (operator) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num1 / num2;
//     default:
//       return 'Outcome cannot be done';
//   }
// }
// console.log(Calculator(num1, num2, operator));


//3)შეიმუშავეთ ფუნქცია სახელწოდებით checkPasswordStrength, რომელიც აფასებს მოცემული პაროლის სიძლიერეს.
// პაროლის სიძლიერე განისაზღვრება რამდენიმე კრიტერიუმის საფუძველზე: ის უნდა იყოს მინიმუმ 8 სიმბოლო და მაქსიმუმ 16 სიმბოლო;
// ფუნქციამ უნდა დააბრუნოს სტრიქონი სადაც გვეწერება რომ თუ ნაკლებია 8 მაშინ შესაბამისი ერორით თუ მეტია 16 მაშინ შესაბამისი ერრორით და თუ ცარიელია input უნდა შევამოწმოთ ეგეც
//გამოიყენეთ if-else განცხადებები თითოეული კრიტერიუმის შესამოწმებლად და სიძლიერის შესაფასებლად.

// let Password = ''
// function checkPasswordStrength (Password) {
// if (Password.length < 8) {
//   return console.error("Passwornd must be more than 8 characters");
// } else if (Password.length > 16) {
//   return console.error("Passwornd must be less than 16 characters"); 
// } else {
//   return 'Password is valid '
// }
// }
// console.log(checkPasswordStrength (Password));

//4) დაწერეთ ფუქნცია სადაც პარამეტრად გავატანთ flowers და არგუმენტად გავატანთ ყვავილების სახეობებს.
//და გვჭირდება რომ switch case დავწეროთ ლოგიკა რომ თუ შესაბამისი სახელის ყვავილები გვაქვს მაშინ დავაბრუნოთ console-ში
//ეს ყვავილი ნაპოვნია!!

// const flowers = 'rose'

// function TypesOfFlowes(flowers) {
//   switch (flowers.charAt(0).toUpperCase() + flowers.slice(1)) {
//     case 'Rose':      
//       return 'Rose is available'
//       case 'Dahlia':    
//       return 'Dahlia is available' 
//       case 'Lily':      
//       return'Lily is available'
//       case 'Chrysanthemum':      
//       return 'Chrysanthemum is available'
//     default:
//       return 'Flower is not available'
//   }
// }
// console.log(TypesOfFlowes(flowers));


//5)გვჭირდება სამი prompt.გვჭირდება რომ ამ სამ ინფუტში შემოყვანილი რიცხვებიდან რომელი არის უდიდესი ის დავიჭიროთ და დავლოგოთ უბრალოდ.
// მაგალითად.2,5,7 და აქედან უდიდესი არის 7.
//დაწერეთ ფუნქციაში ეს ყველაფერი და შემდეგ ამ ფუნქციაში შეამოწმეთ if else დახმარებით!!

let num3 = prompt()
let num4 = prompt()
let num5 = prompt()

function Greatestnumb(num3, num4, num5) {
  if (num3, num4, num5) {
    return Math.max(num3, num4, num5);  
    // return (Math.max(Greatestnumb(num3, num4, num5))) Wrong??
  } else {
  }
}

console.log(Greatestnumb(num3, num4, num5));