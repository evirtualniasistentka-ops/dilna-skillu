# Dílna na skilly

Interaktivní web, který začátečníky provede tvorbou vlastního skillu pro Claude krok za krokem.

Živá verze: https://dilna-skillu.aimentor-17e.workers.dev/

## Jak to funguje
- Stránka je ve složce `public/`: `index.html`, obsah v `obsah.js` a obrázky ve `public/obrazky/`. Nic se neinstaluje.
- Běží na Cloudflare Workers jako statické soubory, nastavení je v `wrangler.jsonc`.
- Po každé změně na větvi `main` Cloudflare stránku sám znovu nasadí.

Autorka: Eva Cenklová · [cenklova.cz](https://cenklova.cz)
