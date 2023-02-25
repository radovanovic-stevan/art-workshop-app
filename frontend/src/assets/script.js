function resetujGreske() {
    document.getElementById("korisnickoImeGreska").innerHTML = "";
    document.getElementById("korisnickoPrezimeGreska").innerHTML = "";
    document.getElementById("usernameGreska").innerHTML = "";
    document.getElementById("lozinkaGreska").innerHTML = "";
    document.getElementById("mejlGreska").innerHTML = "";
    document.getElementById("telefonGreska").innerHTML = "";
}

let nizKorisnika = [
    {
        korisnickoIme : "_",
        mejl : "_",
        telefon : "_",
        lozinka : "_"
    }
]



function prijaviSe() {
    let korisnickoIme = document.getElementById("korisnickoIme").value;
    let lozinka = document.getElementById("lozinka").value;

    document.getElementById("korisnickoImeGreska").innerHTML = "";
    document.getElementById("lozinkaGreska").innerHTML = "";

    for(let i = 0; i < nizKorisnika.length; i++) {
        if (korisnickoIme == nizKorisnika[i].korisnickoIme) {
            if (lozinka == nizKorisnika[i].lozinka) {
                window.location.href = "prodavnica.html";
            }
            else {
                document.getElementById("lozinkaGreska").innerHTML = "Lozinka nije ispravna.";
                return;
            }
        }
    }
    document.getElementById("korisnickoImeGreska").innerHTML = "Korisnicko ime ne postoji.";
}

function inicijalizujPodatke() {
    let korisnici = localStorage.getItem("korisnici");
    if (korisnici != null) {
        nizKorisnika = JSON.parse(korisnici);
    } else {
        localStorage.setItem("korisnici", JSON.stringify(nizKorisnika));
    }
}

function callAngularFunction() {  
    window.angularComponentReference.zone.run(() => { window.angularComponentReference.register1(); });  
}

function registrujSe() {
    resetujGreske();
    let korisnickoIme = document.getElementById("firstname").value;
    let korisnickoPrezime = document.getElementById("lastname").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let telefon = document.getElementById("phoneNumber").value;
    let mejl = document.getElementById("email").value;

    if (/^[a-zA-Z]\w*$/.test(korisnickoIme) == false) {
        document.getElementById("korisnickoImeGreska").innerHTML = "Korisnicko ime nije u dobrom formatu.";
    }
    if (/^[a-zA-Z]\w*$/.test(korisnickoPrezime) == false) {
        document.getElementById("korisnickoPrezimeGreska").innerHTML = "Korisnicko ime nije u dobrom formatu.";
    }
    if (/^[a-zA-Z]\w*$/.test(username) == false) {
        document.getElementById("usernameGreska").innerHTML = "Korisnicko ime nije u dobrom formatu.";
    }
    if(/^\+381 6\d \d{3}-\d{3,4}$/.test(telefon) == false) {
        document.getElementById("telefonGreska").innerHTML = "Telefon nije u dobrom formatu.";
    }
    if(/^\w+@[a-z]+\.[a-z]{2,3}$/.test(mejl) == false) {
        document.getElementById("mejlGreska").innerHTML = "Mejl nije u dobrom formatu.";
    }
    if(
        /^.{6,}$/.test(password) == false ||
        /[a-z]/.test(password) == false ||
        /[A-Z]/.test(password) == false ||
        /\d/.test(password) == false) {
        document.getElementById("lozinkaGreska").innerHTML = "Lozinka nije u dobrom formatu.";
    } 
    /*if (!proveriJedinstvenost(korisnickoIme)) {
        document.getElementById("korisnickoImeGreska").innerHTML = "Korisnicko ime je zauzeto.";
        return;
    }
    dodajKorisnika(korisnickoIme, mejl, telefon, lozinka);*/
}

function proveriJedinstvenost(ime) {
    for(let i = 0; i < nizKorisnika.length; i++) {
        if (ime == nizKorisnika[i].korisnickoIme) {
            return false;
        }
    }
    return true;
}

function dodajKorisnika(ime, m, t, l) {
    nizKorisnika.push(
        {
            korisnickoIme : ime,
            mejl : m,
            telefon : t,
            lozinka : l
        }
    );
    localStorage.setItem("korisnici", JSON.stringify(nizKorisnika))
    // localStorage.setItem("kljuc", "vrednost");

    // localStorage.getItem("korisnici");
}


