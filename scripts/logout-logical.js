export default function logout(){

    const $ = document.querySelector.bind(document)
    
    const buttonLogout = $("#box-logout")
    console.log(buttonLogout)
    
    buttonLogout.addEventListener("click", ()=> {
        window.location.reload();
    })
}
