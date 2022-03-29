const animation_div = document.getElementById("animation_div");


window.onload = () => {

    setTimeout(() => {
        
        animation_div.style.opacity = 0

        setTimeout(() => {
            animation_div.style.display = "none"
        }, 500);

    }, 2000);   

}