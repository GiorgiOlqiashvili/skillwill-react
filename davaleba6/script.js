// მოდალის ლოგიკა
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.getElementById('modalOverlay');

openModalBtn.addEventListener('click', () => {
  modalOverlay.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('active');
  }
});

// ფონის ფერის შეცვლა
const colorInput = document.getElementById('colorInput');
const colorBtn = document.getElementById('colorBtn');

colorBtn.addEventListener('click', () => {
  const inputColor = colorInput.value.trim().toLowerCase();
  const validColors = ['red', 'blue', 'green', 'black', 'white'];

  if (validColors.includes(inputColor)) {
    document.body.style.backgroundColor = inputColor;
  } else if (inputColor) {
    alert('შეიყვანე მხოლოდ შემდეგი ფერები: red, blue, green, black ან white');
  } else {
    alert('გთხოვ, ჩაწერე ფერი!');
  }
});

// საშუალო რიცხვის გამოთვლა
const numbersInput = document.getElementById('numbersInput');
const avgBtn = document.getElementById('avgBtn');
const result = document.getElementById('result');

avgBtn.addEventListener('click', () => {
  const inputText = numbersInput.value.trim();
  if (!inputText) {
    result.textContent = 'გთხოვ, ჩაწერე რიცხვები (მაგ: 1:2:3:4)';
    result.style.color = 'red';
    return;
  }

  const numbers = inputText.split(':').map(Number).filter(n => !isNaN(n));

  if (numbers.length === 0) {
    result.textContent = 'არასწორი ფორმატია!';
    result.style.color = 'red';
    return;
  }

  const avg = (numbers.reduce((sum, n) => sum + n, 0) / numbers.length).toFixed(2);
  result.textContent = `საშუალო არის: ${avg}`;
  result.style.color = '#007bff';
});
