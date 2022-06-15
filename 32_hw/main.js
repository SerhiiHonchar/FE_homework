// перше завдання

let playList = [

  {
  
   author: "LED ZEPPELIN",
  
   song:"STAIRWAY TO HEAVEN"
  
  },
  
  {
  
   author: "QUEEN",
  
   song:"BOHEMIAN RHAPSODY"
  
  },
  
  {
  
   author: "LYNYRD SKYNYRD",
  
   song:"FREE BIRD"
  
  },
  
  {
  
   author: "DEEP PURPLE",
  
   song:"SMOKE ON THE WATER"
  
  },
  
  {
  
   author: "JIMI HENDRIX",
  
   song:"ALL ALONG THE WATCHTOWER"
  
  },
  
  {
  
   author: "AC/DC",
  
   song:"BACK IN BLACK"
  
  },
  
  {
  
   author: "QUEEN",
  
   song:"WE WILL ROCK YOU"
  
  },
  
  {
  
   author: "METALLICA",
  
   song:"ENTER SANDMAN"
  
  }
  
  ];

  let list = document.createElement("ol");

  for(let i = 0; i < playList.length; i++) {
  list.insertAdjacentHTML('afterbegin', `<li><strong>${playList[i].author}</strong> - <span>${playList[i].song}</span></li>`);
  }
  
  document.body.prepend(list);

  // друге завдання

  let modal = document.querySelector('.modal');

  function modalOpen() {
    console.log(modal.classList.contains('active'));

    modal.classList.toggle('active');
  }

  /* третє завдання */

  const red = document.querySelector('.red');
  const yellow = document.querySelector('.yellow');
  const green = document.querySelector('.green');

  function switchBtn() {
    if(red.classList.contains('actv')) {
      red.classList.remove('actv');
      yellow.classList.add('actv');
    } else if (yellow.classList.contains('actv')) {
      yellow.classList.remove('actv');
      green.classList.add('actv');
    } else {
      green.classList.remove('actv');
      red.classList.add('actv');
    }
  }

