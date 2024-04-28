const buttNext = document.querySelector(".nextContent");
const content2 = document.querySelector(".content2");
const paper = document.querySelector(".paper");
// TYPE WRITE PROPERTY
const textArea = document.querySelector(".pesan");
const message = `~ untuk: Lili Ikan Sarden  🐟

Selamat ulang tahun oii...🎉🎉🎉
Semoga sehat dan bahagia selalu,
semoga nanti utbk lancar dan mendapatkan skor 700++. (klok udah selesai utbk, minimal kasih contekan lah kwkwk 😂)
Semoga keterima di Unesa, dan masa-masa kuliahnya penuh bahagia ammin...

Dari : peternak kucing 🐈😸
`;
let i = 0;
// ================

buttNext.addEventListener("click", () => {
    content2.style.display = "block";
    setTimeout(typeWrite, 1500);
});
document.addEventListener("click", (e) => {
    if (e.target == content2) {
        content2.style.display = "none";
    }
});

function typeWrite() {
    if (i < message.length) {
        textArea.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWrite, 55);
    }
}
