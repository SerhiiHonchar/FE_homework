let text = document.getElementById('text').textContent;

document.body.addEventListener('keydown', (event) => {
    if(event.key == 'e' && (event.ctrlKey || event.metaKey)) {
        event.stopPropagation();
        event.preventDefault();
        document.body.innerHTML= '<textarea placeholder="text" id="textArea"></textarea>';
        document.getElementById('textArea').value = text;
        console.log(text);
    }
 
    else if (event.code == 'Equal' && (event.ctrlKey || event.metaKey)) {
        event.stopPropagation();
        event.preventDefault();
        let str = document.getElementById('textArea').value ;
        document.body.innerHTML= '<div class="textHolder"> <p id="text"> </p> </div>';
        document.getElementById('text').textContent = str;
    
    }
})

