const searchRelated = document.getElementById("search_related");
const searchInput = document.getElementById("search_input");
const filterButton = document.getElementById("filter_button");
const navFilter = document.getElementById("nav_filter");
const searchForm = document.getElementById("search_form");


searchForm.addEventListener("submit", (e) => {

    e.preventDefault()

})

searchInput.addEventListener("focusin", () => {

    searchRelated.style.display = "block"

    setTimeout(() => {
        
        searchRelated.style.opacity = 1

    }, 200);
})

searchInput.addEventListener("focusout", () => {



    searchRelated.style.opacity = 0

    setTimeout(() => {
        
        searchRelated.style.display = "none"

    }, 200);
})

filterButton.onclick = () => {

    if(navFilter.style.display != "flex"){

        navFilter.style.display = "flex"

        setTimeout(() => {
            
            navFilter.style.opacity = "1"
    
        }, 200);

    }else{
        
        navFilter.style.opacity = "0"

        setTimeout(() => {
            
            navFilter.style.display = "none"
    
        }, 200);

    }

}
