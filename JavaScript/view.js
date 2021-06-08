let John = {
    mana: 165,
    health: 200,
    stamina: 100,
};

function mana(current, full) {
    let x = current;
    let y = full;
    let answer = x / y;
    if(answer === 1) {
        answer = 100
    } else {
        answer *= 100
    }
    answer = Math.floor(answer);
    answer = Number(answer);
    answer = Math.floor(answer);
    let JSmana = document.getElementById("magicJS");
    JSmana.style.width = answer + "%";
    JSmana.innerHTML = answer + "%";
}
mana(John.mana, 510);

function health(current, full) {
    let x = current;
    let y = full;
    let answer = x / y;
    if(answer === 1) {
      answer = 100
    } else {
        answer *= 100
    }
    answer = Math.floor(answer);
    answer = Number(answer);
    let JShealth = document.getElementById("healthJS");
    JShealth.style.width = answer + "%";
    JShealth.innerHTML = answer + "%";
}
health(John.health, 441);

function stam(current, full) {
    let x = current;
    let y = full;
    let answer = x / y;
    if(answer === 1) {
        answer = 100
    } else {
        answer *= 100
    }
    answer = Number(answer);
    let JSstam = document.getElementById("stamJS");
    JSstam.style.width = answer + "%";
    JSstam.innerHTML = answer + "%";
}
stam(John.stamina, 100);

function mindRealm() {
    let vid = $("#container").append(`<video autoplay muted><source src="../Pictures/Editor[6].mp4" type="video/mp4"><source src="../Pictures/movie.ogg" type="video/ogg"></video>
<audio autoplay>
    <source src="../Pictures/Movies%20&%20TV%202019-10-11%2015-29-48_Trim.mp4.ogg" type="audio/ogg">
    <source src="../Pictures/Movies%20&%20TV%202019-10-11%2015-29-48_Trim.mp4" type="audio/mpeg">
</audio>`);
    setTimeout(goAway, 5000)
}
function goAway() {
    window.location.href = "mindRealm.html"
}
