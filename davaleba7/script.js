// ✅ mySetTimeout — Promise-based alternative to setTimeout
const mySetTimeout = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

// ----------------------------
// 🧸 Toy Shop Simulation
// ----------------------------

// Toy making step
function makeToy(time) {
  return mySetTimeout(time).then(() => {
    console.log("✅ სათამაშო დამზადდა!");
    return { status: "made", toy: "Teddy Bear" };
  });
}

// Delivery step
function deliverToys(prevResult, time) {
  if (!prevResult || prevResult.status !== "made") {
    throw new Error("❌ ვერ გადავიტანთ სათამაშოებს, ჯერ არ არის დამზადებული!");
  }

  return mySetTimeout(time).then(() => {
    console.log("🚚 სათამაშოები ჩაბარდა!");
    return { status: "delivered", toy: prevResult.toy };
  });
}

// Selling step
function sellToys(prevResult, time) {
  if (!prevResult || prevResult.status !== "delivered") {
    throw new Error("❌ ვერ გავყიდით სათამაშოებს, ჯერ არ არის მიტანილი!");
  }

  return mySetTimeout(time).then(() => {
    console.log("💰 სათამაშო გაიყიდა წარმატებით!");
    return { status: "sold", toy: prevResult.toy };
  });
}

// ----------------------------
// 1️⃣ Promise chaining version (.then / .catch)
// ----------------------------
console.log("🔧 Promise version started...");
makeToy(3000)
  .then((result) => deliverToys(result, 2000))
  .then((result) => sellToys(result, 1000))
  .then((finalResult) => console.log("🎉 დასრულდა:", finalResult))
  .catch((err) => console.error(err.message));

// ----------------------------
// 2️⃣ Async / Await version
// ----------------------------
async function runToyShop() {
  try {
    console.log("\n⚙️ Async/Await version started...");
    const made = await makeToy(3000);
    const delivered = await deliverToys(made, 2000);
    const sold = await sellToys(delivered, 1000);
    console.log("🏁 ყველაფერი დასრულდა:", sold);
  } catch (error) {
    console.error("🚨 შეცდომა:", error.message);
  }
}

runToyShop();
