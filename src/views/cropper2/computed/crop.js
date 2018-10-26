
let index = {

  init () {

    // index.imgToBase64(file).then((e) => {
    //
    //   // base64字符串
    //   var base64 = e.target.result;
    //
    //   //将上传成功后的图片显示在特定位置
    //   console.log(imgToBase64)
    //
    // })





  },


  // 图片文件 => base64 方法(封装成一个promise对象)
  /* 调用方法
   const file = $event.target.files[0] // input上传图片后js获得的数据.
   index.imgToBase64(file).then((e) => {console.log(e.target.result)})
  */
  imgToBase64 (file) {
    const toBase64 = new Promise(function(resolve, reject){
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {//上传成功，执行上传成功之后的事件
        resolve(e)
      }

    });

    return toBase64;
  }
















}

export default index
