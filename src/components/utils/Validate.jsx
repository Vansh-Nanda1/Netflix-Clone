const checkValidateData = (email,password,name,isSignInForm) => {
    // if (!isSignInForm) {
    //     const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
    //     if (!isNameValid) return "Name is not valid"
    // }

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password must be at least 7 characters long, contain at least one uppercase letter and  special character ";

    return null;
}


export default checkValidateData