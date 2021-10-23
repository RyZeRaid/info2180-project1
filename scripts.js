window.onload = function(){
    console.log("yes");
    let button = document.querySelector('button');

    console.log(button);

    button.addEventListener('click', function pressed(e){
        e.preventDefault();
    });

}