let inputEmail = prompt('Enter your e-mail');
const emailLength = 5;
const newPassLength = 6;
let inputPassword;


if (!inputEmail) {
    alert('Canceled')
} else if (inputEmail.length < emailLength) {
    alert("I don't know any emails having name length less than 5 symbols")
} else if (inputEmail === 'user@gmail.com' || inputEmail === 'admin@gmail.com') {
    inputPassword = prompt('Enter your password');
    if (!inputPassword) {
        alert('Canceled')
    } else if (inputEmail === 'user@gmail.com' && inputPassword === 'UserPass' ||
        inputEmail === 'admin@gmail.com' && inputPassword === 'AdminPass') {
        let changePassword = confirm('Do you want to change your password ?');
        if (!changePassword) {
            alert('You have failed the change')
        } else {
            let inputOldPass = prompt('Enter your old password');
            if (!inputOldPass) {
                alert('Canceled');
            } else if (inputEmail === 'user@gmail.com' && inputPassword === inputOldPass ||
                inputEmail === 'admin@gmail.com' && inputPassword === inputOldPass) {
                let newPassword = prompt('Enter new password');

                if (!newPassword) {
                    alert('Canceled')
                } else {
                    if (newPassword.length < newPassLength) {
                        alert('It’s too short password. Sorry.');
                    } else {
                        let newPasswordCheck = prompt('Enter your password again')
                        if (newPassword === newPasswordCheck) {
                            alert('You have successfully changed your password.')
                        } else {
                            alert('You wrote the wrong password.');
                        }
                    }
                }
            } else {
                alert('Wrong password.');
            }
        }
    } else {
        alert('Wrong password.');
    }
} else {
    alert('Wrong password.');
}
