// 1. დაწერეთ ფუნქცია, რომელიც მიიღებს ორ პარამეტრს და დააბრუნებს "ტოლია", თუ ისინი ტოლია, ან "არ არის ტოლი", თუ არა.
function checkEqual(a, b) {
  return a == b ? "ტოლია" : "არ არის ტოლი";
}

// 2. დაწერეთ ფუნქცია, რომელიც მიიღებს ფარენჰაიტის ტემპერატურას და დააბრუნებს ცელსიუსში გადაყვანილ მნიშვნელობას. თუ პარამეტრი არ არის რიცხვი, დააბრუნეთ false.
function fahrenheitToCelsius(f) {
  if (typeof f !== "number") return false;
  return (f - 32) * 5 / 9;
}


// 3. დაწერეთ ფუნქცია, რომელიც მიიღებს ორ რიცხვს და ოპერაციას (მხოლოდ "+", "-", "*", "/") და დააბრუნებს შესაბამის შედეგს. თუ ოპერაცია არ არის ამ ოთხიდან ერთი, ან თუ რომელიმე პარამეტრი არ არის რიცხვი, ან თუ ცდება ნულზე გაყოფა, დააბრუნეთ false.
function calculate(a, b, operation) {
  if (typeof a !== "number" || typeof b !== "number") return false;
  switch (operation) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : false;
    default: return false;
  }
}

console.log(checkEqual(5, 6)); 
console.log(fahrenheitToCelsius(32)); 
console.log(calculate(10, 5, "+")); 
console.log(calculate(10, 0, "/")); 