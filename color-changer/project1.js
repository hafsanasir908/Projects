 let button1 = document.querySelector('.button1')

 let button2 = document.querySelector('.button2')

 let inp = document.querySelector('#inp')

 let currentValue = document.querySelector('.currentValue')

 let container = document.querySelector('.container')


const colorArray = ['red' , 'blue' ,  'yellow' , 'green' , 'white' , 'purple' , 'aqua'  , 'lightseagreen' ,  'pink' , 'orange' , 'cyan']


const generateRandomColor = () =>{
    const randomNumber = Math.floor(Math.random() * colorArray.length)
    console.log(colorArray[randomNumber])
    return colorArray[randomNumber]
}
 const changeColor = (color) =>{

    container.style.backgroundColor = color;
    currentValue.innerText = color
}


const handlebutton1 = () =>{
    
    let color = generateRandomColor()
    changeColor(color);
}

const handlebutton2 = () =>{
   let color = inp.value
    changeColor(color)
}



button1.addEventListener('click' , handlebutton1)
button2.addEventListener('click' , handlebutton2)

