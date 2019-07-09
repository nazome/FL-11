let urMail = prompt('Enter your mail:', 'your@mail');
let pass = '';
let passConfirm = '';
let newPass = '';
let newPassConfirm ='';
const userPass = 'UserPass';
const adminPass = 'AdminPass';
const mailLength = 6;
const passLength = 5;

console.log(urMail);

if (urMail ==='' || urMail===null ) {
    alert('Canceled');
} else if ( urMail.length < mailLength ) { 
alert('I don \'t know any emails having name length less than 6 symbols');
} else if (urMail !== ''){
    pass = prompt('enter your password');
    if ( pass === ''|| pass===null) {
        alert('Canceled');
    } else if ( urMail === 'user@gmail.com' && pass === userPass ) {
        if ( confirm('Do you want to change your password')) {
            passConfirm = prompt('Please, write your old password');
            if ( passConfirm === ''|| passConfirm===null) {
                alert('Canceled');
            } else if ( passConfirm === pass ){
                newPass = prompt('Please, write your new password');
                    if (newPass.length < passLength) {
                        alert('It’s too short password. Sorry.');
                    } else { 
                        newPassConfirm = prompt('Please, enter new password again');
                        }
                    if (newPass === newPassConfirm ) {
                        pass = newPass;
                        console.log(pass);
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
            } else {
                alert('You wrote the wrong password.');
            }
        }
    } else if ( urMail === 'admin@gmail.com' && pass === adminPass ) {
        if ( confirm('Do you want to change your password')) {
            passConfirm = prompt('Please, write your old password');
            if ( passConfirm === ''|| passConfirm===null) {
                alert('Canceled');
            } else if ( passConfirm === pass ){
                newPass = prompt('Please, write your new password');
                    if (newPass.length < passLength) {
                        alert('It’s too short password. Sorry.');
                    } else { 
                        newPassConfirm = prompt('Please, enter new password again');
                    }
                    if (newPass === newPassConfirm ) {
                        pass = newPass;
                        console.log(pass);
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
            } else {
                alert('You wrote the wrong password.');
            }
        }
    } else {
    alert('I don\'t know you');
    }
}

    