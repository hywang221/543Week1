const shuffleArray = (data = []) => {
  const array = [...data];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const  debounce = (fn, delay = 300) => {
  let timer = null;

  return function (...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const onCheckGame = (item, checked) => {
  let checkListStorage = localStorage.getItem("checkList");
  if (checkListStorage) {
    checkListStorage = JSON.parse(checkListStorage);
  } else {
    checkListStorage = [];
  }
  if (checked) {
    checkListStorage.push(item.id);
    localStorage.setItem("checkList", JSON.stringify(checkListStorage));
  } else {
    const newList = checkListStorage.filter(data => item.id !== data);
    localStorage.setItem("checkList", JSON.stringify(newList));
  }
}

const checkFirstLogin = () => {
  let firstLogin = localStorage.getItem("firstLogin");
  if (!firstLogin) {
    localStorage.setItem("firstLogin", true);
    const checkList = [1, 3, 5];
    localStorage.setItem("checkList", JSON.stringify(checkList));
  }
}

export {
  shuffleArray,
  debounce,
  onCheckGame,
  checkFirstLogin
}