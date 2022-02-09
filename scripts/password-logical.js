import timerCountDown from "./timer-count-down.js"

export default function passwordLogical() {

    const $ = document.querySelector.bind(document)

    const loginPage = $("#login-page")
    const homePage = $("#home-page")

    const user = $("#input-text")
    const password = $("#input-password")
    let textInput = $("#textInput")
    let passwordInput = $("#passwordInput")

    const errorMensage = $("#message-error p")
    const button = $("#button-continue")

    password.addEventListener("input", () => {
        if (password.value != "") {
          password.classList.add("input-password");
        } else {
          password.classList.remove("input-password");
        }
    });

    button.addEventListener("click", () => {
        if (user.value !== "admin" || password.value !== "admin"){
            errorMensage.style.display = "block"
            textInput.style.border =  "1px solid #E9B425"
            passwordInput.style.border =  "1px solid #E9B425"
        } else {
            history.pushState(null, "Home - First Project", "https://mauricioreiis.github.io/Project-01/home")
            loginPage.style.display = "none";
            homePage.style.display = "flex";
            document.title = "Home - First Project"
            timerCountDown()
        }
    });
}