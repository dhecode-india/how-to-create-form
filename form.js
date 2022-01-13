console.log('Register Form')


let submitButton = document.getElementById('btn')


submitButton.addEventListener('click', clickHandler)


function clickHandler (e) {
    e.preventDefault()
    let name = document.getElementById('name').value
    let mobile = document.getElementById('mobile').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    console.log(name, mobile, email, password)
}