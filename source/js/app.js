window.name = 'fXD';
  
window.onload = ()=>{
  VK.init(function(data) { 
    console.log(data);
    VK.callMethod("showSettingsBox", 8214);
  }, function() { 
    throw new Error('Ошибка');
  }, '5.68'); 
}



