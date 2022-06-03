import { $, Balloon, wait } from "./utils.js";

const audio = new Audio("../assets/musics/hbd.m4a")
const main = async () => {

    for (const id of ["first", "second", "third"]) {
        $(`#${id}`).classList.remove("section-hidden")
        $(`#${id}`).classList.add("section-show")
        await wait(1000)
        if (id == "third") return;
        $(`#${id}`).classList.add("section-hidden")
        $(`#${id}`).classList.remove("section-show")
    }
}





$("#button").onclick = () => {
    $("#third").classList.remove("section-show")
    $("#third").classList.add("section-hidden")
    $("#song").classList.remove("section-hidden")
    $("#song").classList.add("section-show-slide-up")
    audio.play()

}
window.onload = () => {
    new Balloon(50)
}
main()