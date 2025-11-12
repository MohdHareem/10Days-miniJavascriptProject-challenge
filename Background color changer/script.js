const parent = document.getElementById("parent")

parent.addEventListener('click', (e) => {
    // console.log(e.target)
    const el = e.target;
    const body = document.querySelector("body")
    body.style.backgroundColor = el.id;

})