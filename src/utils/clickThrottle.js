/* 防止重复点击 */
let clickTimer = 0;

function clickThrottle(interval = 3000) {
  let now = +new Date(); // 获取当前时间的时间戳
  let timer = clickTimer; // 记录触发事件的事件戳

  if (now - timer < interval) {
    // 如果当前时间 - 触发事件时的事件 < interVal，那么不符合条件，直接return false，
    // 不让当前事件继续执行下去
    return false;
  } else {
    // 反之，记录符合条件触发了事件的时间戳，并 return true，使事件继续往下执行
    clickTimer = now;
    return true;
  }
}

export default clickThrottle;
