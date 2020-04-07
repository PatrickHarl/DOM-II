// Your code goes here

let mainImg = get('.intro img');
let topContainer = get('.main-navigation');
let introHeader = get('.intro h2');
let contentSectDrag = get('.content-section .text-content h2');
let contentSectDrop = get('.inverse-content .text-content h2');
let destinationHeader = get('.content-destination h2');
let homeLink = get('.nav-link');
let scrollText = get('.intro p');
let selectText = get('#text-area')
let dblClickArea = get('.container');
let navLinks = document.querySelectorAll('.nav-link');


function get(selector){

    return document.querySelector(selector);

}
function changeBG(event){

    topContainer.style.backgroundColor = 'orange';

}

function imgBorder(event){

    if(event.key === 'h')
    {

        if (mainImg.style.display != 'none')
        {
            mainImg.style.display = 'none';
        }
        else {
            mainImg.style.display = 'flex';
        }

    }
    

}

function resizeFont(){

    introHeader.style.fontSize = '48px';

}

function dragStart(event){

    event.dataTransfer.setData('text', event.target.innerText)

}

function dragOver(event){

    event.preventDefault();

}

function dropEvent(event){

    contentSectDrop.textContent = event.dataTransfer.getData('text');
    contentSectDrag.textContent = '';

}
function onLoadEvent(){

    destinationHeader.style.color = 'orange';

}

function onFocusEvent(){

    homeLink.style.color = 'red';

}

function onBlurEvent(){

    homeLink.style.color = '#212529';

}

function resizeEvent(){

    document.body.style.backgroundColor = 'orange';

}

function onScrollEvent(){

    scrollText.style.color = 'blue';

}

function onSelectEvent(){

    selectText.style.color = 'orange';

}

function dblClickEvent(){

    document.body.style.backgroundColor = 'pink';

}

function dblClickAreaEvent(event){

    event.stopPropagation();
    dblClickArea.style.backgroundColor = 'lightblue';

}

function linksClick(event){


    event.preventDefault();


}

topContainer.addEventListener('mouseover', changeBG);

document.addEventListener('keydown', imgBorder);

introHeader.addEventListener('wheel', resizeFont)

contentSectDrag.addEventListener('dragstart', dragStart);
contentSectDrop.addEventListener('dragover', dragOver)
contentSectDrop.addEventListener('drop', dropEvent);

window.addEventListener('load', onLoadEvent);

homeLink.addEventListener('focus', onFocusEvent);
homeLink.addEventListener('blur', onBlurEvent);

window.addEventListener('resize', resizeEvent);
window.addEventListener('scroll', onScrollEvent);

selectText.addEventListener('select', onSelectEvent);

document.addEventListener('dblclick', dblClickEvent);
dblClickArea.addEventListener('dblclick', dblClickAreaEvent)

for(let i = 0; i < navLinks.length; i++)
{

    navLinks[i].addEventListener('click', linksClick);

}