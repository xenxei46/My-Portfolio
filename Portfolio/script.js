function openFunction(){
    document.getElementById("menu").style.width="300px";
    document.getElementById("mainbox").style.marginleft="300px";
    document.getElementById("mainbox").innerHTML="";
  }

  function closeFunction(){
    document.getElementById("menu").style.width="0px";
    document.getElementById("mainbox").style.marginleft="0px";
    document.getElementById("mainbox").innerHTML="&#9776; ";
  }


  const text = document.querySelector(".fancy");
  const strText = text.textContent;
  const splitText = strText.split("");
  text.textContent = "";

  for(let i=0; i < splitText.length; i++){
    text.innerHTML +="<span>"+ splitText[i] + "</span>"
  }

  let char = 0;
  let timer = setInterval(onTock, 50);

  function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.lenght){
      complete();
      return;
    }
  }

  function complete(){
    clearInterval(timer);
    timer = null;
  }