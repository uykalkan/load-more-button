let isBusy = false 

document.addEventListener('scroll', function(e) {
    const el = document.getElementById("more-button")
    if (isScrolledIntoView(el)) {
        loadMore(el)
    }
})

document.addEventListener('click', function (e) {
    if (e.target && e.target.id === "more-button") {
        loadMore(e.target)
    }
})

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect()
    var elemTop = rect.top
    var elemBottom = rect.bottom
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight)
    return isVisible
}

function loadMore(el) {

    if(isBusy) {return}
    
    el.querySelector('i').classList.remove("d-none")

    var xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var elementWrapper = el.parentNode
            var parent = el.parentNode.parentNode

            elementWrapper.remove()

            parent.innerHTML = parent.innerHTML + this.responseText
            
            isBusy = false
        }
    }

    xhttp.open("GET", el.getAttribute("data-url"), true)
    xhttp.send()
    isBusy = true
}