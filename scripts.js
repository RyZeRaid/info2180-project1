window.onload = function(){
    let button = document.querySelector('button');
    let msg = document.querySelector('.message');
    const emailreg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;


    button.addEventListener('click', function pressed(e){
        e.preventDefault();
        let email = document.querySelector('#email').value;
        if(emailreg.test(email)){
            msg.innerHTML = 'Thank you! Your email address ' +email+ ' has been added to the mailing list!';
        }else {
            msg.innerHTML = 'Please enter a valid email address';
        }
        
    });

}