function loadEvent() {
    const NewCatButton = document.querySelector(".add-cat");
    NewCatButton.addEventListener("click", function(){
        const CatContainer = document.querySelector(".cats");
        const NewCat = `<img src="https://cataas.com/cat" alt="" />`;
        CatContainer.innerHTML+=NewCat;
    })
};

window.addEventListener("load", loadEvent);