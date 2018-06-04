/* Task 1 */
var heading = document.getElementById('heading')
console.log(heading.innerText)

/* Task 2 using plain JavaScript */
/*Task 2a */
var textBtn = document.getElementById('textBtn2')
textBtn.addEventListener('click',function(){
    var task2 = document.getElementById('task2a')
    var paragraph = document.createElement('p')
    paragraph.innerText = "Hello World"
    task2.appendChild(paragraph)
})

//task 2b
function changeBGColor(event){
    var body = document.getElementsByTagName('body')[0]
    if(event.target.innerText == "Pink"){
        body.style.backgroundColor = '#FF1493'
    }
    if(event.target.innerText == "Green"){
        body.style.backgroundColor = 'green'
    }
}

//task 2c
function redirectToGoogle(){
    window.location.href = "https://www.google.com/";
}

var getGoogle = document.getElementById('getGoogle');
getGoogle.addEventListener('click',redirectToGoogle);

/* Task 4 using jQuery */

//task 4a

$('#addText4').click(function(event){
    var paragraph = $('<p>').text('Hello World')
    $('#task4a').append(paragraph)
})

function changeBG(event){
    var color = event.target.innerText.toLowerCase();
    $('body').css('background-color',color)
}