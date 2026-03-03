let listContainer  = document.querySelector('.listContainer');
let addInp  = document.querySelector('#addInp');
let addBtn  = document.querySelector('.addBtn');

let list = [
    {
        id : 100,
        text: 'hello'
    },
     {
        id : 101,
        text : 'hi'
    },
     {
        id : 102,
        text : 'ni hao'
    }
]





function renderList(arr)
{
    listContainer.innerHTML= ' '
    arr.map(obj=>{
   let divElem = document.createElement('div');
   divElem.classList.add('list');

   divElem.innerHTML = `
         <p>${obj.text}</p>
         `
         let buttonElem = document.createElement('button');
         buttonElem.innerHTML = 'X';

         divElem.appendChild(buttonElem);
         divElem.onclick = ()=>{
             removeList(obj.id)
         }

         listContainer.append(divElem);

})

}

renderList(list)

function handleAddList()
{
    let obj = {
        id: Date.now(),
        text: addInp.value
    }
    list.unshift(obj);
    renderList(list)
    addInp.value = ' '
}


function  removeList(id)
{
    let a = list.filter(obj=>{
       return  obj.id !== id
    })

    list = a
    renderList(list)
  

}
addBtn.addEventListener('click',handleAddList)