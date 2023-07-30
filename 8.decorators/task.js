//Задача № 1
function cachingDecoratorNew(func) {
  const cache = [];

  function wrapper(...args) {
    console.log('\n');
    let hash = md5(args);

    const objectInCache = cache.find((item) => item.hash === hash);

    if (objectInCache) {
      console.log("Из кэша:", + objectInCache.value);
      return "Из кэша: " + objectInCache.value;
    }

    let value = func(...args);
    console.log("Вычисляем:", value);
    cache.push({ hash, value });
    console.log(`в кэше ${cache.length} эл.`);

    if (cache.length > 5) {
      console.log('удаляем ', cache[0]);
      cache.shift();
      console.log(`осталось ${cache.length} эл.`);
    }

    return "Вычисляем: " + value;
  }

  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;

  wrapper.count = 0;      // к-во вызовов функции
  wrapper.allCount = 0;   // к-во вызовов декоратора

  function wrapper(...args) {
    wrapper.allCount++;

    if (timeoutId === null) {
      func(...args);
      wrapper.count++;
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      wrapper.count++;
      func(...args);
    }, delay);
  }

  return wrapper;
}