const heading = document.querySelector('h1')
const para = document.getElementById('para')
para.innerHTML = '<b>paragraph<b>'

heading.innerText = 'test' 

const allItems = document.querySelectorAll('ul li')
allItems[0].innerText = 'Yooooooo'

//---------------------------------------------------------------------------//

const incEle = document.querySelector('#incre')
const decEle = document.querySelector('#decre')
const buttEle = document.getElementById('counter')
const ulEle = document.getElementById('addELe')

let counter = 0

function Increfunc(){
    counter++
    buttEle.innerText = counter
    //first create an element
    const li = document.createElement('li')
    li.setAttribute('marker',counter)

    const textnode = document.createTextNode('Student' + counter)
    li.appendChild(textnode)
    //append the created element anywhere

    if(counter%2===0){
        li.style.background = 'red'
    }
    else{
        li.style.background = 'yellow'
    }

    ulEle.appendChild(li)
}

function Decrefunc(){
    const li = ulEle.querySelector('[marker="'+counter+'"]')
    li.remove()

    counter--
    buttEle.innerText = counter
}

incEle.addEventListener('click',Increfunc)
decEle.addEventListener('click',Decrefunc) 