
window.onload = function () {
    const main = document.getElementById("main");

    for (let i = 1; i <= 100; i++) {     
        const box = document.createElement("div");
        const boxInner = document.createElement("div");
        
        box.appendChild(boxInner);
        box.classList.add("box");

        main.appendChild(box).setAttribute("id", "id" + i);
        main.appendChild(box).classList.add("box");

        if (i % 3 === 0 && i % 5 === 0) {                              
            boxInner.appendChild(document.createTextNode("FizzBuzz"));
            box.classList.add("fizzbuzz");
        } else if (i % 3 === 0) {
            boxInner.appendChild(document.createTextNode("Fizz"));
            box.classList.add("fizz");
        } else if (i % 5 === 0) {
            boxInner.appendChild(document.createTextNode("Buzz"));
            box.classList.add("buzz");
        } else {
            boxInner.appendChild(document.createTextNode(i));
        }
    }
}
