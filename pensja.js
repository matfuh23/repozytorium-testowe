function obliczaniePensji(wartoscSprzedazy, pobranaZaliczka) {
    if (wartoscSprzedazy < 10000) {
        pensja = wartoscSprzedazy * 0.10 - pobranaZaliczka;
    } else if (wartoscSprzedazy >= 10000 && wartoscSprzedazy <= 14999) {
        pensja = wartoscSprzedazy * 0.12 - pobranaZaliczka;
    } else if (wartoscSprzedazy >= 15000 && wartoscSprzedazy <= 17999) {
        pensja = wartoscSprzedazy * 0.14 - pobranaZaliczka;
    } else if (wartoscSprzedazy >= 18000 && wartoscSprzedazy <= 21999) {
        pensja = wartoscSprzedazy * 0.16 - pobranaZaliczka;
    } else {
        pensja = wartoscSprzedazy * 0.18 - pobranaZaliczka;
    }
    return pensja;
}
