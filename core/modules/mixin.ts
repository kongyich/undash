import { U } from './instance'

var push = Array.prototype.push;
export const mixin = function (obj) {
  for (let name in obj) {
    var func = U[name] = obj[name];
    U.prototype[name] = function () {
      var args = [this._wrapped];

      push.apply(args, arguments);
      return func.apply(U, args);
    };

  }
  return U
}
