let elementsShown = document.querySelectorAll(".text");
let elementsToShow = document.querySelectorAll(".right-content");
class Element{
    constructor(elementsShown, elementsToShow){
        this.elementsShown = elementsShown;
        this.elementsToShow = elementsToShow;
    }
    showInfo(el) {
        let tempElement = document.createElement("div");
        tempElement.textContent = "hide details";
        tempElement.classList.add("hide-details");
        tempElement.addEventListener("click", () => {this.hideHandler(el)});
        el.style.display = "none";
        el.nextElementSibling.style.display = "block";
        el.nextElementSibling.insertAdjacentElement("afterend", tempElement);
    }
    hideHandler(hideEl){
        hideEl.style.display = "inline-block";
        hideEl.nextElementSibling.style.display = "none";
        hideEl.nextElementSibling.nextElementSibling.style.display = "none";
    }
}

let element = new Element(elementsShown, elementsToShow);

elementsShown.forEach(e => {
    e.addEventListener("click", () => {element.showInfo(e)});
})

