const btn88 = document.querySelectorAll(".op")

const para88 = document.querySelector(".para")

const contact88 = document.querySelector(".contactMe")

para88.style.opacity = `0`
contact88.style.opacity = `0`
para88.style.transform = `translateY(5rem)`

const sleep = ns => new Promise(resolve => setTimeout(resolve, ns))

const remove =  (btn) => {
    for (element of btn) {
        element.style.opacity = "0"
    }

}

remove(btn88)

const add = async (btn, speed) => {
    for (element of btn) {
        element.style.opacity = "1"
        element.classList.add("start")
        await sleep(speed);
        element.classList.remove("start")



    }

}

const show =async (btn888,speed2)=>{
    await add(btn888,speed2)
    para88.style.opacity = `1`
    para88.style.transform = `translateY(0)`
    contact88.style.opacity = `1`
}
show(btn88,100)



// await sleep(500)


// for (element of btn) {
//     element.style.opacity= "0"

// }

// for (element of btn) {
//     element.style.opacity= "1"
//     element.classList.add("start")
//     await sleep(90);
//     element.classList.remove("start")

// }

// para.style.opacity = `1`
// para.style.transform = `translateY(0)`
// contact.style.opacity = `1`



// for (element of btn) {
//     element.style.opacity = "1"
//     element.classList.add("start")
//     sleep(90);
//     element.classList.remove("start")

// }

// para.style.opacity = `1`
// para.style.transform = `translateY(0)`
// contact.style.opacity = `1`


