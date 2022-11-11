const inputval = document.getElementById("amount")
const content = document.getElementById("content")
const first = document.getElementById("first")
const second = document.getElementById("second")
const third = document.getElementById("third")
const four = document.getElementById("four")
const fifth = document.getElementById("fifth")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const btn = document.getElementById("btn")
const successmsg = document.getElementById("successmsg")
const errormsg = document.getElementById("errormsg")


inputval.addEventListener("input", function () {
    first.innerText = 0;
    second.innerText = 0;
    third.innerText = 0;
    four.innerText = 0;
    fifth.innerText = 0;
    six.innerText = 0;
    seven.innerText = 0;

    if (inputval.value % 2000 == 0) {
        content.innerHTML = ""

        for (let i = 0; i < ((inputval.value) / 2000); i++) {
            content.innerHTML += `<img class="mx-auto" src="./rs2000.jpg" alt="2000rs" width="200px">
                    <br>`
            first.innerText++;

        }
    }
    else if (inputval.value % 500 == 0) {
        content.innerHTML = ""
        second.innerText = 0;
        for (let i = 0; i < Math.floor(((inputval.value) / 500)); i++) {
            content.innerHTML += `<img class="mx-auto" src="./rs500.jpg" alt="500rs" width="200px">
                           <br>`
            second.innerText++;

        }
    }
    else if (inputval.value % 200 == 0) {
        content.innerHTML = ""
        third.innerText = 0;
        for (let i = 0; i < ((inputval.value) / 200); i++) {
            content.innerHTML += `<img class="mx-auto" src="./rs200.jpg" alt="200rs" width="200px">
                           <br>`
            third.innerText++;

        }
    }
    else if (inputval.value % 100 == 0) {
        content.innerHTML = ""
        four.innerText = 0;
        for (let i = 0; i < ((inputval.value) / 100); i++) {
            content.innerHTML += `<img class="mx-auto" src="./rs100.jpg" alt="100rs" width="200px">
                           <br>`
            four.innerText++;

        }
    }
    else if (inputval.value % 50 == 0) {
        content.innerHTML = ""
        fifth.innerText = 0;
        for (let i = 0; i < ((inputval.value) / 50); i++) {
            content.innerHTML += `<img class="mx-auto" src="./rs50.jpg" alt="50rs" width="200px">
                           <br>`
            fifth.innerText++;

        }
    }
    else if (inputval.value % 20 == 0) {
        content.innerHTML = ""
        six.innerText = 0;
        for (let i = 0; i < ((inputval.value) / 20); i++) {
            content.innerHTML += `<img class="mx-auto" src="./rs20.jpg" alt="20rs" width="200px">
                           <br>`
            six.innerText++;

        }
    }
    else if (inputval.value % 10 == 0) {
        content.innerHTML = ""
        seven.innerText = 0;
        for (let i = 0; i < ((inputval.value) / 10); i++) {
            content.innerHTML += `<img class="mx-auto" src="./rs10.jpg" alt="10rs" width="200px">
                           <br>`
            seven.innerText++;

        }
    }
})

btn.addEventListener("click", function () {
    first.innerText = 0;
    second.innerText = 0;
    third.innerText = 0;
    four.innerText = 0;
    fifth.innerText = 0;
    six.innerText = 0;
    seven.innerText = 0;

    if (!(inputval.value == "")) {
        successmsg.innerHTML = `<p class="bg-green-500 p-2 text-green-900 text-center font-bold font-serif">you have successfully withdraw ${inputval.value} Rs!</p>
                `
        setTimeout(() => {
            successmsg.innerHTML = ""
        }, 3000)
        content.innerHTML = ""
        inputval.value = ""

    } else {
        errormsg.style.display = "block"
        setTimeout(() => {
            errormsg.style.display = "none"
        }, 3000);

    }
})


