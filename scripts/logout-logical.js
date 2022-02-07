export default function logout(){

    const $ = document.querySelector.bind(document)
    
    const buttonLogout = $("#box-logout")
    
    buttonLogout.addEventListener("click", ()=> {
        history.pushState(null, "Home - First Project", "https://mauricioreiis.github.io/Project-01")
        window.location.reload();
    })
}
