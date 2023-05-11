for(let i = 1; i<=50; i++){
 if(i % 10 == 0 && i % 4 == 0){
  console.log(i + "  今"+ i + "回ループしました。４で割れる数です。" + i);
  } else if(i % 4 == 0){
    console.log(i + "  4で割れる数です。" + i);
  } else if(i % 10 == 0 ){
    console.log(i + "  今"+ i + "回ループしました。");
  }else{
      console.log(i)
    }
    
  if(i ==50){
    alert("50回カウントが終わりました。");
  }
}



