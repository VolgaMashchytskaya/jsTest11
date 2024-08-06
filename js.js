//Создайте сет и добавьте в него элементы 'e' 'r' 'i' 'k' 't' 'h' 'e' 'b' 'e' 's' 't' через add и вывод в консоль


let collect = new Set();
collect.add('e')
collect.add('r')
collect.add('i')
collect.add('k')
collect.add('t')
collect.add('h')
collect.add('b')
collect.add('e')
collect.add('s')
collect.add('t')
console.log(collect);

//Создать кнопку и поле для ввода и написать функцию которая будет добавлять в этот набор, которые пользователи будут вводить в поля ввода, инпут

let mySet = new Set();

function addElem(){
    let el = document.getElementById("add").value;
    mySet.add(el)
    console.log('Элемент для добавления ' + el);
    for(let i of mySet) { console.log(i); }
}



//Создать кнопку и функцию, которая будет делать проверку, если введенный пользователем элемент
//есть, то выводим под кнопку запись true, если нет -false


function test(){
    let el = document.getElementById("addTest").value;
    let b = mySet.has(el)
    console.log(mySet.has(el));
    document.getElementById("test").innerHTML = b
}


//Создать функцию, при нажатии на кнопку она перебирает массив с помощью for of и возвращает
//нам новый массив, куда входят все элементы больше 5 (массив произвольный)



function newSetCreating(){
    //let newset = new Set();
    for(let i of mySet){
        console.log(+i > 5)
        if (+i > 5){
          //  newset.add(i)
            document.getElementById("newSet").innerHTML += i+" ";
        }
    
    }
}
