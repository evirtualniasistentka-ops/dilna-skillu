/* =====================================================================
   DÍLNA NA SKILLY – TEXTY
   ---------------------------------------------------------------------
   Upravuješ stejně jako tipy v kalendáři: Poznámkový blok → uložit →
   nahrát celou složku web znovu na Cloudflare.
   Text piš mezi zpětné apostrofy ` ` nebo mezi uvozovky " ".
   **slovo** = tučně.
   ===================================================================== */

const DILNA = {
  nadpis: "Dílna na skilly",
  podnadpis: "Vyrob si svůj první AI skill. Zabere to 5 minut a nepotřebuješ nic umět.",
  autorka: "Eva Cenklová",
  skupina: "S AI vpřed po padesátce",
  skupinaOdkaz: "https://www.facebook.com/groups/aipopadesatce",
  kalendarOdkaz: "https://ai-advent-2026.evirtualniasistentka.workers.dev/",

  // 1. PŘÍBĚH
  pribeh: [
    `Jana má velkou rodinu a skoro každý měsíc někdo slaví. Pokaždé píše AI to samé: „Napiš přání, tykej, krátce, vřele, bez básniček, přidej něco o tom, co má rád…“`,
    `Jednou spěchá a zapomene napsat „krátce“. AI jí vychrlí půl stránky plné „zářivých hvězd a nekonečných radostí“. Jana obrací oči v sloup.`,
    `Tak si to sepíše jednou provždy a uloží do šuplíku. Od té doby stačí napsat: „Přání pro Petra, 60 let, rybář.“ AI si návod ze šuplíku vytáhne sama.`
  ],
  pribehPointa: "Tomu šuplíku se říká **skill**.",

  // 2. CO JE SKILL
  prompt: "**Prompt** je lístek, který napíšeš jednou a zahodíš.",
  skill: "**Skill** je návod uložený v šuplíku. AI si ho sama vytáhne pokaždé, když se hodí.",
  kdeFunguje: "Skill funguje v Claude, ChatGPT i Gemini.",

  // 3. HRA – dílky (spravne: true = patří do šuplíku)
  hraZadani: "Klikni na dílky, které do skillu patří. Pozor, některé tam nepatří!",
  dilky: [
    { nazev: "Kdy mě použít", text: "Přání k narozeninám – použij, když chci napsat přání.", spravne: true,
      hlaska: "Nejdůležitější dílek! Podle něj AI pozná, kdy má šuplík otevřít." },
    { nazev: "Kdo jsi", text: "Jsi moje pomocnice na psaní přání pro rodinu a kamarády.", spravne: true,
      hlaska: "Výborně, AI ví, v jaké roli má být." },
    { nazev: "Co udělat", text: "Zeptej se, pro koho přání je a co má rád. Pak napiš dvě verze.", spravne: true,
      hlaska: "Přesně! Postup krok za krokem." },
    { nazev: "Jakým stylem", text: "Tykej, nejvýš 5 vět, vřele, bez rýmů a bez smajlíků.", spravne: true,
      hlaska: "Tohle jsou tvoje pravidla. Už je nemusíš opakovat." },
    { nazev: "Příklad", text: "„Petře, ať ti ryby berou a ať máš u vody víc klidu než doma!…“", spravne: true,
      hlaska: "Jeden dobrý příklad řekne víc než deset vět." },
    { nazev: "Heslo", text: "Moje heslo je Jana1965", spravne: false,
      hlaska: "Fuj! Hesla do AI nikdy nepatří." },
    { nazev: "Počasí", text: "Jaké je dnes počasí?", spravne: false,
      hlaska: "To je jednorázová otázka, na to stačí obyčejný prompt." },
    { nazev: "Nějak hezky", text: "Napiš to nějak hezky.", spravne: false,
      hlaska: "Příliš obecné, AI neví, co pro tebe znamená „hezky“." }
  ],
  hraHotovo: "Uloženo! Janin skill je v šuplíku.",

  // 4. PŘED A PO
  zadani: "Přání pro Petra, 60 let, rybář.",
  pred: "Milý Petře, v tento výjimečný den ti ze srdce přeji, aby tvůj život zářil jako nejjasnější hvězda, aby tě provázelo štěstí, zdraví, láska a nekonečná radost, aby každé ráno bylo plné slunce a každý večer plný klidu, aby se ti splnila všechna tvá přání a aby…",
  po: "Petře, šedesátka je jen číslo, hlavně ať ryby berou! Přeju ti hodně klidných rán u vody a ať ten největší úlovek teprve přijde. Všechno nejlepší!",

  // 5. VYROB SI VLASTNÍ – nápady (předvyplněné příklady)
  napady: [
    { tlacitko: "Přání k narozeninám",
      nazev: "Přání k narozeninám",
      kdy: "Použij, když chci napsat přání k narozeninám nebo svátku.",
      kdo: "Jsi moje pomocnice na psaní přání pro rodinu a kamarády.",
      co: "Zeptej se, pro koho přání je, kolik mu je a co má rád. Pak napiš dvě krátké verze.",
      styl: "Tykej, nejvýš 5 vět, vřele a s humorem, bez rýmů a bez smajlíků.",
      priklad: "Petře, šedesátka je jen číslo, hlavně ať ryby berou! Přeju ti hodně klidných rán u vody a ať ten největší úlovek teprve přijde." },
    { tlacitko: "Odpovědi na e-maily",
      nazev: "Odpovědi na e-maily",
      kdy: "Použij, když chci odpovědět na e-mail.",
      kdo: "Jsi moje asistentka na psaní e-mailů.",
      co: "Přečti si e-mail, který vložím. Zeptej se, co chci odpovědět. Pak napiš krátkou odpověď.",
      styl: "Zdvořile, ale ne strojeně. Vykej, nejvýš 6 vět. Na konci pozdrav a podpis Jana.",
      priklad: "Dobrý den, děkuji za zprávu. Termín ve čtvrtek v 10 hodin mi vyhovuje, budu tam. S pozdravem Jana" },
    { tlacitko: "Týdenní jídelníček",
      nazev: "Týdenní jídelníček",
      kdy: "Použij, když chci naplánovat jídlo na týden.",
      kdo: "Jsi praktická česká kuchařka.",
      co: "Navrhni jídelníček na 7 dní (oběd a večeře) a k němu nákupní seznam podle oddělení v obchodě.",
      styl: "Běžná česká jídla, levné suroviny, nic složitého, vaření nejvýš 45 minut.",
      priklad: "Pondělí – oběd: kuřecí plátek s bramborem a okurkovým salátem. Večeře: chléb s vaječnou pomazánkou." },
    { tlacitko: "Vysvětli mi to jednoduše",
      nazev: "Vysvětli mi to jednoduše",
      kdy: "Použij, když něčemu nerozumím – technice, mobilu, úřadům.",
      kdo: "Jsi trpělivá učitelka, která umí vysvětlit cokoli.",
      co: "Vysvětli mi, na co se zeptám, krok za krokem. Na konci se zeptej, jestli tomu rozumím.",
      styl: "Bez cizích slov, krátké věty, vždy jeden příklad ze života.",
      priklad: "Cloud je jako úschovna na nádraží: věci tam necháš a vyzvedneš si je odkudkoli, stačí mít lístek – tedy heslo." },
    { tlacitko: "Vlastní nápad",
      nazev: "", kdy: "", kdo: "", co: "", styl: "", priklad: "" }
  ],
  coDal: "Zkopíruj text, vlož ho do AI a napiš: **„Vytvoř mi z tohoto skill a vysvětli mi, jak ho uložím.“** AI tě provede krok za krokem. V aplikaci skilly najdeš pod názvem **Skills / Dovednosti**.",

  // ZÁVĚR
  zaverNadpis: "Hotovo, máš svůj první skill!",
  zaverText: "Jednou sepsat, pak už jen používat. Ukaž ostatním ve skupině, co sis vyrobila."
};
