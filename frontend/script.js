function loadEvent() {
    const NewCatButton = document.querySelector(".add-cat");
    NewCatButton.addEventListener("click", function(){
        const catContainer = document.querySelector(".cats");
        const currentTime = new Date().getTime();
        const newCat = `<img src="https://cataas.com/cat?random=${currentTime}" alt="" />`;
        catContainer.insertAdjacentHTML("beforeend", newCat);
    })
};

window.addEventListener("load", loadEvent);