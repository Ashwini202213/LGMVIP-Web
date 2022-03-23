const addtaskbutton= document.querySelector('.addtaskbutton');
var inputValue=document.querySelector('.input');
const container=document.querySelector('.container');

class item{

    constructor(itemName){
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let input=document.createElement(input);
        input.Value=itemName;
        input.disabled=true;
        input.classList.add('item_input');
        input.type="text";
        
        let itemBox=document.createElement('div');
        itemBox.classList.add('item');

        let editbutton=document.createElement('button');
        editbutton.innerHTML="EDIT"
        editbutton.classList.add('editbutton');

        let removebutton=document.createElement('button');
        removebutton.innerHTML="REMOVE"
        removebutton.classList.add('removebutton');

        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(editbutton);
        itemBox.appendChild(removebutton);

    }
}
