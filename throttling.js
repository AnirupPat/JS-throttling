const implement = () => {
  console.log("Fire");
};

const throttle = (fn, delay) => {
  let context = this;
  let flag = true;
  return () => {
    if (flag) {
      fn.apply(context);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const handleFire = throttle(implement, 3000);
document.querySelector("button").addEventListener("click", handleFire);
