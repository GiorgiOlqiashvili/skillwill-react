// 1️⃣ ფუნქცია: პირველი 2-ს ჯამი და დანარჩენი ნამრავლი
const calculateNumbers = (...numbers) => {
  if (numbers.length < 3) throw new Error("უნდა იყოს n > 2");

  const [first, second, ...rest] = numbers;
  const sum = first + second;
  const product = rest.reduce((acc, num) => acc * num, 1);

  return [sum, product];
};

// 2️⃣ ფუნქცია: city-ს წამოღება destructuring-ით
const extractCity = (user) => {
  const { banks } = user ?? {};
  const { address } = banks?.[2] ?? {};
  const { city } = address ?? {};
  return city;
};

