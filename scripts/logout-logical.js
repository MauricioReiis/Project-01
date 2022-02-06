export default function logout(){

    const $ = document.querySelector.bind(document)
    
    const buttonLogout = $("#box-logout")
    
    buttonLogout.addEventListener("click", ()=> {
        window.location.reload();
    })
}
