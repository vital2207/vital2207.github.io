VK.init(function() { 
  console.log('test');
  VK.callMethod("showSettingbox", 8214);
}, function() { 
  throw new Error('Ошибка');
}, '5.68'); 