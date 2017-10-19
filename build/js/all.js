'use strict';

window.name = 'fXD';

window.onload = function () {
  VK.init(function () {
    console.log('test');
    VK.callMethod("showSettingbox", 8214);
  }, function () {
    throw new Error('Ошибка');
  }, '5.68');
};
//# sourceMappingURL=all.js.map
