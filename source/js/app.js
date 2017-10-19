VK.init({
  apiId: 6226799
});

let cb = response =>{
  if(response.session){
    console.log('Авторизация прошл успешно');
  } else{
    console.log('ошибка авторизации')
  }
};

VK.auth.login(cb);