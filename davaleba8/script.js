function expo(num, power, callback) {
  function recursiveExp(n, p) {
    if (p === 0) return 1;
    return n * recursiveExp(n, p - 1);
  }
  const result = recursiveExp(num, power);
  return callback(result);
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => {
    data.forEach(post => {
      const div = document.createElement("div");
      div.textContent = `${post.id}. ${post.title}`;
      document.body.appendChild(div);
    });
  });

async function deepCopyAsync(obj) {
  return new Promise((resolve, reject) => {
    if (typeof obj !== "object" || obj === null) {
      reject("Argument is not an object");
    } else {
      const copy = JSON.parse(JSON.stringify(obj));
      resolve(copy);
    }
  });
}
