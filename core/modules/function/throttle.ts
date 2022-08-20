
// timecuo
// export default function throttle(func, wait) {
//   let previous = 0, context, args;

//   return function() {
//     let now = +new Date()
//     context = this
//     args = arguments
//     if(now - previous > wait) {
//       func.apply(context, args)
//       previous = now
//     }
//   }
// }

// // setTimeout
// function throttle2(func, wait) {
//   let timeout, context, args;

//   return function() {
//     context = this
//     args = arguments
//     if(!timeout) {
//       timeout = setTimeout(function() {
//         timeout = null
//         func.apply(context, args)
//       }, wait)
//     }
//   }
// }



// leading：false 表示禁用第一次执行
// trailing: false 表示禁用停止触发的回调
export default function throttle(func, wait, options = {}) {
  var timeout, context, args, result;
  var previous = 0;

  var later = function() {
      previous = options.leading === false ? 0 : new Date().getTime();
      timeout = null;
      func.apply(context, args);
      if (!timeout) context = args = null;
  };

  var throttled = function() {
      var now = new Date().getTime();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
          if (timeout) {
              clearTimeout(timeout);
              timeout = null;
          }
          previous = now;
          func.apply(context, args);
          if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
      }
  };
  return throttled;
}


