let inputbox = document.getElementById('inputbox');
//let messages = document.getElementsByClassName('messages');
inputbox.addEventListener('keyup', function (event){
    if(event.keyCode === 13){
        if(this.value != ''){
            console.log(this.value);
            let lio = document.createElement('li');
            let li = document.getElementById('message_template').childNodes[1].cloneNode(true);
            console.log(li);
            //adding classname
            let myArray = ["message left appeared","message right appeared"];
            let name = myArray[Math.floor(Math.random() * myArray.length)];
            li.className = name;
            li.childNodes[3].childNodes[1].appendChild(document.createTextNode(this.value));
            document.getElementById("msg-list").appendChild(li);
            //scrolling the end of the list
            document.getElementById("msg-list").scrollTop = document.getElementById("msg-list").scrollHeight;
            inputbox.value = '';
        }
        
    }
})