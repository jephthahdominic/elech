export function formatCurrency(value){
    return new Intl.NumberFormat("en", {
        style:"currency",
        currency:"NGN",
        currencyDisplay:"narrowSymbol",
        maximumFractionDigits:0,
    }).format(value)
}

export function validateFullName(value){
    return /^[A-Za-z\s!@#$%^&*(),.?':;_-]+$/.test(value) ? "":"Your fullName can only be letters"
}

export function validateEmail(value){
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ? "" : "invalid email format"
}

export function validatePassword(value){
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(value) ? "" : "Your password must be 8 characters long, it must contain letters, at least a number and a symbol"
}
