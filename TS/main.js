var _a, _b;
function showMore() {
    var show_More = document.getElementById("show_More");
    var toggle = document.getElementById("toggle");
    if (show_More && toggle) {
        if (show_More.style.display === "none") {
            show_More.style.display = "block";
            toggle.innerHTML = "See Hide..";
        }
        else {
            show_More.style.display = "none";
            toggle.innerHTML = "Read more..";
        }
    }
}
(_a = document.getElementById("toggle")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", showMore);
showMore();
function showMore$() {
    var show_More = document.getElementById("show_More2");
    var toggle = document.getElementById("toggle$");
    if (show_More && toggle) {
        if (show_More.style.display === "none") {
            show_More.style.display = "block";
            toggle.innerHTML = "See Hide..";
        }
        else {
            show_More.style.display = "none";
            toggle.innerHTML = "Read more..";
        }
    }
}
(_b = document.getElementById("toggle$")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", showMore$);
showMore$();
