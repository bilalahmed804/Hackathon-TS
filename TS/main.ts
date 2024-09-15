
function showMore():void{
    let show_More = document.getElementById("show_More")
    let toggle = document.getElementById("toggle")
    if(show_More && toggle){
        
        if(show_More.style.display === "none"){
            
            show_More.style.display = "block"
            toggle.innerHTML = "See Hide.."
        }else{
            show_More.style.display = "none"
            toggle.innerHTML = "Read more.."
        }
    }

}

document.getElementById("toggle")?.addEventListener("click",showMore)

showMore()

function showMore$():void{
    let show_More = document.getElementById("show_More2")
    let toggle = document.getElementById("toggle$")
    if(show_More && toggle){
        
        if(show_More.style.display === "none"){
            
            show_More.style.display = "block"
            toggle.innerHTML = "See Hide.."
        }else{
            show_More.style.display = "none"
            toggle.innerHTML = "Read more.."
        }
    }

}

document.getElementById("toggle$")?.addEventListener("click",showMore$)

showMore$()