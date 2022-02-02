export default function passwordLogical() {

    // window.document.location.href = "/login"
    // console.log(window.document.location)

    const $ = document.querySelector.bind(document)

    const loginPage = $("#login-page")
    const homePage = $("#home-page")

    const user = $("#input-text")
    const password = $("#input-password")

    const errorMensage = $("#message-error p")
    const button = $("#button-continue")

    button.addEventListener("click", () => {
        if (user.value !== "admin" || password.value !== "admin"){
            errorMensage.style.display = "block"
            user.style.border =  "1px solid #E9B425"
            password.style.border =  "1px solid #E9B425"
        } else {
            loginPage.style.display = "none";
            homePage.style.display = "block";
        }
    })
}