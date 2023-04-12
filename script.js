const firstNameInput = document.getElementById("firstname")
const lastNameInput = document.getElementById("lastname")
const emailInput = document.getElementById("email")
const phoneNumInput = document.getElementById("phone")
const pwdInput = document.getElementById("password")
const confPwdInput = document.getElementById("confirm-password")

const form = document.querySelector("form")

const pwdError = document.getElementById("pwd-error")
const confPwdError = document.getElementById("confPwd-error")

firstNameInput.addEventListener("input", (e) => {
    console.log("Input event triggered!")
    if (e.target.validity.valueMissing) {
        e.target.setCustomValidity("Please enter your first name!")
    } else {
        e.target.setCustomValidity("")
    }
})

lastNameInput.addEventListener("input", e => {
    console.log("Input event triggered!")
    if (e.target.validity.valueMissing) {
        e.target.setCustomValidity("Please enter your last name!")
    } else {
        e.target.setCustomValidity("")
    }
})

emailInput.addEventListener("input", e => {
    if (e.target.validity.typeMismatch) {
        e.target.setCustomValidity("Please enter a valid email!")
    } else if (e.target.validity.valueMissing) {
        e.target.setCustomValidity("Please enter an email address!")
    } else {
        e.target.setCustomValidity("")
    }
})

phoneNumInput.addEventListener("input",  e => {
    if (e.target.value.length < 6) {
        e.target.setCustomValidity("You have entered not enough numbers!")
    } else if (e.target.validity.patternMismatch) {
        e.target.setCustomValidity("Please enter a valid phone number!")
    } else if (e.target.validity.valueMissing) {
        e.target.setCustomValidity("Please enter your phone number!")
    } else {
        e.target.setCustomValidity("")
    }
})



pwdInput.addEventListener("input", e => {

    confPwdInput.setAttribute("pattern", `^${e.target.value}$`)

    if (e.target.value.length < 8 || e.target.value.length > 20) {
        e.target.setCustomValidity("Your password must be 8-20 characters long!")
    } else if (e.target.validity.patternMismatch) {
        e.target.setCustomValidity("Your password must contain at least one capital letter, one number and one special character")
    } else {
        e.target.setCustomValidity("")
    }
})



confPwdInput.addEventListener("input", e => {
    const errorMessage = []
    e.target.innerHTML = ""
    
    if (e.target.validity.patternMismatch) {
        e.target.setCustomValidity("Your passwords do not match!")
    }

    if (e.target.value !== pwdInput.value) {
        errorMessage.push("Your passwords do not match!")
    }

    if (errorMessage.length > 0) {
        e.preventDefault()
        confPwdError.innerText = errorMessage.join(" ")
    } else {
        confPwdError.innerText = ""
    }
    
})

