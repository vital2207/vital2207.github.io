'use strict';

window.onload = function () {
  VK.init(function () {
    console.log('test');
    VK.callMethod("showSettingsBox", 8214);
  }, function () {
    throw new Error('Ошибка');
  }, '5.68');
};
//# sourceMappingURL=all.js.map
