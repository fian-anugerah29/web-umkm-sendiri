const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    const img = card.querySelector("img");
    const nama = card.querySelector("h3");
    const desc = card.querySelector("p");

    // buat kotak popup untuk card ini
    const box = document.createElement("div");
    box.style.border = "1px solid black";
    box.style.padding = "10px";
    box.style.marginTop = "10px";
    box.style.display = "none"; 
    box.style.background = "#fff";
    box.style.position = "relative";

    // isi awal box kosong
    box.innerHTML = "";

    // masukkan box ke dalam card
    card.appendChild(box);

    // sembunyikan elemen asli di card
    nama.style.display = "none";
    desc.style.display = "none";

    // Klik gambar → muncul box berisi nama
    img.addEventListener("click", () => {
        box.innerHTML = `<strong>${nama.textContent}</strong>`;
        box.style.display = "block";
    });

    // Klik box (nama) → tampilkan deskripsi
    box.addEventListener("click", () => {
        box.innerHTML = `
            <strong>${nama.textContent}</strong><br>
            <span>${desc.textContent}</span>
        `;
    });
});