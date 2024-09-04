const leftup = document.querySelector("#leftup")
const leftdown = document.querySelector("#leftdown")
const rightup = document.querySelector("#rightup")
const rightdown = document.querySelector("#rightdown")
const div = document.querySelector("div")



leftup.addEventListener("input", () => {
    div.style.borderTopLeftRadius = leftup.value + "%"
    document.querySelector("#lu").innerHTML = "Border Top Left Radius :" + leftup.value + "%"
    if (leftup.value == 0){
        document.querySelector("#lu").innerHTML = ""
    }
})

leftdown.addEventListener("input", () => {
    div.style.borderBottomLeftRadius = leftdown.value + "%"
    document.querySelector("#ld").innerHTML = "Border Bottom Left Radius :" + leftdown.value + "%"
    if (leftdown.value == 0){
        document.querySelector("#ld").innerHTML = ""
    }
})

rightup.addEventListener("input", () => {
    div.style.borderTopRightRadius = rightup.value + "%"
    document.querySelector("#ru").innerHTML = "Border Top Right Radius :" + rightup.value + "%"
    if (rightup.value == 0){
        document.querySelector("#ru").innerHTML = ""
    }
})

rightdown.addEventListener("input", () => {
    div.style.borderBottomRightRadius = rightdown.value + "%"
    document.querySelector("#rd").innerHTML = "Border Bottom Right Radius :" + rightdown.value + "%"
    if (rightdown.value == 0){
        document.querySelector("#rd").innerHTML = ""
    }
})














