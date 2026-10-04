/* =====================================================================
   DANE STRONY
   Żeby dodać nowy projekt, dopisz obiekt do odpowiedniej listy niżej.
   W tekstach [[słowo]] = fioletowe wyróżnienie.
   ===================================================================== */

const MODRINTH_USER = 'zuzjak';

// ---------- Boty Discord ----------
const BOTS = [
    // ---------- Zuzdle ----------
    {
        id: 'zuzdle',
        name: 'Zuzdle',
        image: 'images/bot_zuzdle.webp',
        lang: 'Python',
        credit: { text: 'impsteve.pl', url: 'https://impsteve.pl/' },
        tags: [{ pl: 'Gra', en: 'Game' }, 'Minecraft', { pl: 'Sklep', en: 'Shop' }],
        short: {
            pl: 'Codzienne zgadywanie mobów z Minecrafta w stylu Wordle, z punktami i sklepem z nagrodami.',
            en: 'Daily Wordle-style Minecraft mob guessing with points and a reward shop.'
        },
        desc: {
            pl: 'Bot [[Discord]] napisany w [[Pythonie]], który łączy mechanikę [[Wordle]] z klimatem [[Minecrafta]]. Powstał z mojej inicjatywy jako event dla widzów i zachęca ich do codziennej zabawy i rywalizacji.',
            en: 'A [[Discord]] bot written in [[Python]] that combines [[Wordle]] mechanics with a [[Minecraft]] theme. It started as my own idea for a viewer event and encourages daily play and friendly competition.'
        },
        features: [
            { t: { pl: 'Codzienne zgadywanie mobów', en: 'Daily mob guessing' },
              d: { pl: 'Bot codziennie losuje jednego moba z Minecrafta, a gracze próbują go odgadnąć na podstawie kolejnych podpowiedzi.',
                   en: 'Every day the bot picks a Minecraft mob, and players try to guess it using the hints they get.' } },
            { t: { pl: 'Komenda /giveup', en: '/giveup command' },
              d: { pl: 'Gracz może się poddać i od razu poznać poprawną odpowiedź.',
                   en: 'Players can give up and reveal the correct answer right away.' } },
            { t: { pl: 'Punkty i sklep', en: 'Points & shop' },
              d: { pl: 'Za trafienia gracze zdobywają punkty, które wydają w sklepie, np. na unikalną rolę albo tymczasowe bonusy.',
                   en: 'Correct guesses earn points that players spend in the shop, e.g. on a unique role or temporary perks.' } },
            { t: { pl: 'Technologie i narzędzia', en: 'Technologies & tools' },
              d: { pl: '[[Python]], [[JSON]] do przechowywania danych, estetyczne [[embedy Discord]], komendy typu [[slash]] oraz [[interaktywne przyciski]].',
                   en: '[[Python]], [[JSON]] data storage, clean [[Discord embeds]], [[slash commands]] and [[interactive buttons]].' } }
        ],
        usage: { pl: 'Pojawia się od czasu do czasu jako tymczasowy event na serwerze {link}.', en: 'It appears from time to time as a temporary event on {link}.' },
        usageLink: { pl: 'Jurajskiego Stasia', en: "Jurajski Staś's server", url: 'https://discord.gg/v5M7McgUaf' }
    },

    // ---------- Dinozaur ----------
    {
        id: 'dinozaur',
        name: 'Dinozaur',
        image: 'images/bot_dinozaur.webp',
        lang: 'Python',
        credit: { text: 'impsteve.pl', url: 'https://impsteve.pl/' },
        tags: [{ pl: 'Moderacja', en: 'Moderation' }, { pl: 'Punkty', en: 'Points' }, { pl: 'Urodziny', en: 'Birthdays' }],
        short: {
            pl: 'Moderacja z taryfikatorem punktowym, nagrody za aktywność, urodziny, tickety i logi.',
            en: 'Moderation with a points-based rulebook, activity rewards, birthdays, tickets and logs.'
        },
        desc: {
            pl: 'Bot [[Discord]] napisany w [[Pythonie]], zaprojektowany razem z ekipą serwera [[Jurajskiego Stasia]]. Łączy moderację opartą na [[systemie punktów]] z funkcjami, które urozmaicają codzienne życie społeczności.',
            en: 'A [[Discord]] bot written in [[Python]], designed together with the team of [[Jurajski Staś]]’s server. It combines moderation based on a [[points system]] with features that liven up the community’s everyday life.'
        },
        features: [
            { t: { pl: 'Moderacja serwera', en: 'Server moderation' },
              d: { pl: 'Ostrzeżenia, wyciszenia, kicki i bany (także osób spoza serwera) z powiadomieniem w wiadomości prywatnej, a do tego masowe usuwanie wiadomości przez [[/purge]].',
                   en: 'Warnings, mutes, kicks and bans (also for people who already left) with a DM notification, plus bulk message removal via [[/purge]].' } },
            { t: { pl: 'Punkty i taryfikator', en: 'Points & rulebook' },
              d: { pl: 'Kary i nagrody nakładane zgodnie z [[taryfikatorem]]: rodzaj kary zależy od liczby punktów, a ich wyzerowanie kończy się banem. Do tego ranking, historia zmian i podgląd stanu konta.',
                   en: 'Penalties and rewards given according to a [[rulebook]]: the type of penalty depends on the user’s points, and dropping to zero means a ban. Plus a leaderboard, change history and account overview.' } },
            { t: { pl: 'Nagrody za aktywność', en: 'Activity rewards' },
              d: { pl: 'Bot liczy wiadomości i co tydzień automatycznie przyznaje punkty osobom, które napisały ich co najmniej 100.',
                   en: 'The bot counts messages and every week automatically rewards everyone who sent at least 100 of them.' } },
            { t: { pl: 'Urodziny i funkcje użytkowe', en: 'Birthdays & utilities' },
              d: { pl: 'Zapisywanie dat urodzin, lista najbliższych solenizantów, urodzinowa rola i życzenia wysyłane rano, a także konwersja obrazków na [[GIF]].',
                   en: 'Saving birthdays, a list of upcoming ones, a birthday role and morning wishes, plus converting images to [[GIF]].' } },
            { t: { pl: 'Tickety, powitania i logi', en: 'Tickets, welcomes & logs' },
              d: { pl: 'Prywatne wątki do kontaktu z administracją, powitania z automatyczną rolą oraz szczegółowe logi wiadomości, członków i zmian na serwerze.',
                   en: 'Private threads for contacting staff, welcomes with an auto-role and detailed logs of messages, members and server changes.' } },
            { t: { pl: 'Technologie i narzędzia', en: 'Technologies & tools' },
              d: { pl: '[[Python]] ([[discord.py]]), [[JSON]] do przechowywania danych, komendy typu [[slash]] oraz [[interaktywne przyciski]].',
                   en: '[[Python]] ([[discord.py]]), [[JSON]] data storage, [[slash commands]] and [[interactive buttons]].' } }
        ],
        usage: { pl: 'Bot na co dzień działa na serwerze {link}.', en: 'The bot runs daily on {link}.' },
        usageLink: { pl: 'Jurajskiego Stasia', en: "Jurajski Staś's server", url: 'https://discord.gg/v5M7McgUaf' }
    },

    // ---------- Żeńchłopiec ----------
    {
        id: 'zenchlopiec',
        name: 'Żeńchłopiec',
        image: 'images/logo_zenchlopiec.webp',
        lang: 'Python',
        link: { text: 'żeńchłopiecbot.pl', url: 'https://żeńchłopiecbot.pl' },
        tags: [{ pl: 'Moderacja', en: 'Moderation' }, { pl: 'Społeczność', en: 'Community' }, 'YouTube'],
        short: {
            pl: 'Bot społeczności twórcy: zgłoszenia, sugestie, Q&A, konkursy, powiadomienia z YouTube i moderacja.',
            en: 'A creator community bot: reports, suggestions, Q&A, contests, YouTube notifications and moderation.'
        },
        desc: {
            pl: 'Bot [[Discord]] napisany w [[Pythonie]] dla serwera [[szefastiana]]. Odciąża moderację i daje widzom sporo sposobów na kontakt z twórcą – od sugestii, przez pytania Q&A, aż po konkursy. Ma też własną [[stronę internetową]].',
            en: 'A [[Discord]] bot written in [[Python]] for [[szefastian]]’s server. It takes work off the moderators and gives viewers plenty of ways to reach the creator – from suggestions and Q&A questions to contests. It also has its own [[website]].'
        },
        features: [
            { t: { pl: 'Moderacja', en: 'Moderation' },
              d: { pl: 'Ostrzeżenia z automatycznym 7-dniowym wyciszeniem po trzecim, mute, kick, ban i lista aktualnie wyciszonych osób.',
                   en: 'Warnings with an automatic 7-day mute after the third one, mute, kick, ban and a list of currently muted members.' } },
            { t: { pl: 'Zgłoszenia z panelem', en: 'Reports with a staff panel' },
              d: { pl: 'Komenda [[/report]] wysyła zgłoszenie do administracji, która jednym kliknięciem może dać ostrzeżenie, wyciszyć, zbanować albo je odrzucić. Każda decyzja trafia do archiwum.',
                   en: 'The [[/report]] command sends a report to the staff, who can warn, mute, ban or dismiss it with a single click. Every decision is archived.' } },
            { t: { pl: 'Kontakt z widzami', en: 'Community engagement' },
              d: { pl: 'Panele do sugestii, pytań Q&A do twórcy i zgłoszeń do konkursów, tickety w prywatnych wątkach oraz automatyczne wątki dyskusyjne pod wiadomościami twórcy.',
                   en: 'Panels for suggestions, Q&A questions for the creator and contest entries, tickets in private threads and automatic discussion threads under the creator’s posts.' } },
            { t: { pl: 'Powiadomienia z YouTube', en: 'YouTube notifications' },
              d: { pl: 'Bot sam sprawdza kanał twórcy i ogłasza nowe filmy z oznaczeniem odpowiedniej roli.',
                   en: 'The bot checks the creator’s channel and announces new videos, pinging the right role.' } },
            { t: { pl: 'Kanały głosowe i logi', en: 'Voice channels & logs' },
              d: { pl: 'Prywatne kanały głosowe tworzone na żądanie i zarządzane przez właściciela oraz logi wiadomości, członków, banów, kanałów głosowych i zmian na serwerze.',
                   en: 'On-demand private voice channels managed by their owner, plus logs of messages, members, bans, voice activity and server changes.' } },
            { t: { pl: 'Technologie i narzędzia', en: 'Technologies & tools' },
              d: { pl: '[[Python]] ([[discord.py]]), [[JSON]] do przechowywania danych, kanał RSS YouTube, komendy typu [[slash]], formularze i [[interaktywne przyciski]].',
                   en: '[[Python]] ([[discord.py]]), [[JSON]] data storage, YouTube RSS feed, [[slash commands]], forms and [[interactive buttons]].' } }
        ],
        usage: { pl: 'Bot na co dzień działa na serwerze {link}.', en: 'The bot runs daily on {link}.' },
        usageLink: { pl: 'szefastiana', en: "szefastian's server", url: 'https://discord.com/invite/Rr6gasgMy6' }
    },

    // ---------- Śmietniczek ----------
    {
        id: 'smietniczek',
        name: 'Śmietniczek',
        image: 'images/smietniczek.webp',
        lang: 'Python',
        tags: [{ pl: 'Moderacja', en: 'Moderation' }, { pl: 'Tickety', en: 'Tickets' }, 'Components V2'],
        short: {
            pl: 'Moderacja z wygasającymi ostrzeżeniami, tickety, prywatne kanały głosowe i logi w Components V2.',
            en: 'Moderation with expiring warnings, tickets, private voice channels and logs in Components V2.'
        },
        desc: {
            pl: 'Bot [[Discord]] napisany w [[Pythonie]] do kompleksowej moderacji serwera i automatyzacji codziennych zadań. Wszystkie wiadomości wysyła w nowoczesnym formacie [[Components V2]].',
            en: 'A [[Discord]] bot written in [[Python]] for complete server moderation and automating everyday tasks. All of its messages use the modern [[Components V2]] format.'
        },
        features: [
            { t: { pl: 'Moderacja i system kar', en: 'Moderation & sanctions' },
              d: { pl: 'Ban, kick, mute i ostrzeżenia. Po 3 aktywnych ostrzeżeniach bot sam nakłada 7-dniowe wyciszenie, a ostrzeżenia wygasają po 30 dniach. Do tego historia ostrzeżeń i masowe usuwanie wiadomości przez [[/purge]].',
                   en: 'Ban, kick, mute and warnings. After 3 active warnings the bot applies a 7-day mute on its own, and warnings expire after 30 days. Plus warning history and bulk message removal via [[/purge]].' } },
            { t: { pl: 'System zgłoszeń (Ticket)', en: 'Ticket system' },
              d: { pl: 'Prywatne wątki do kontaktu z administracją z wyborem kategorii: pytanie, zgłoszenie gracza lub błędu i współpraca.',
                   en: 'Private threads for contacting staff with a choice of category: question, player or bug report and collaboration.' } },
            { t: { pl: 'Prywatne kanały głosowe', en: 'Private voice channels' },
              d: { pl: 'Tymczasowe kanały głosowe tworzone po wejściu na wybrany kanał, z pełnymi uprawnieniami dla właściciela i automatycznym usuwaniem, gdy wszyscy wyjdą.',
                   en: 'Temporary voice channels created when joining a chosen channel, with full permissions for the owner and auto-deletion once everyone leaves.' } },
            { t: { pl: 'Profil, powitania i ogłoszenia', en: 'Profile, welcomes & announcements' },
              d: { pl: 'Podgląd profilu (aktywne kary, role, data dołączenia), powitania i pożegnania na kanale lobby oraz wysyłanie gotowych wiadomości, np. regulaminu, z plików [[JSON]].',
                   en: 'Profile overview (active sanctions, roles, join date), welcomes and farewells in the lobby channel and sending ready-made messages, like the rules, from [[JSON]] files.' } },
            { t: { pl: 'Zaawansowane logi serwera', en: 'Advanced server logs' },
              d: { pl: 'Rejestrowanie działań moderacji, edycji i usuwania wiadomości, zmian ról i kanałów oraz aktywności na kanałach głosowych.',
                   en: 'Logging of moderation actions, message edits and deletions, role and channel changes and voice channel activity.' } },
            { t: { pl: 'Technologie i narzędzia', en: 'Technologies & tools' },
              d: { pl: '[[Python]] ([[Pycord]]), [[JSON]] do przechowywania danych, [[Components V2]], komendy typu [[slash]] oraz [[interaktywne przyciski]].',
                   en: '[[Python]] ([[Pycord]]), [[JSON]] data storage, [[Components V2]], [[slash commands]] and [[interactive buttons]].' } }
        ],
        usage: { pl: 'Bot na co dzień działa na serwerze {link}.', en: 'The bot runs daily on {link}.' },
        usageLink: { pl: 'Szopowisko', en: 'the Szopowisko server', url: 'https://discord.com/invite/2nsrXXzTJH' }
    },

    // ---------- Sprout ----------
    {
        id: 'sprout',
        name: 'Sprout',
        image: 'images/bot_sprout.webp',
        isNew: true,
        lang: 'Python',
        tags: [{ pl: 'Tickety', en: 'Tickets' }, { pl: 'Powitania', en: 'Welcomes' }, 'Components V2'],
        short: {
            pl: 'Anglojęzyczny bot serwera Starfield Pastoral: powitania nowych farmerów i system ticketów.',
            en: 'The Starfield Pastoral server bot: welcomes for new farmers and a ticket system.'
        },
        desc: {
            pl: 'Bot [[Discord]] napisany w [[Pythonie]] dla anglojęzycznej społeczności moda [[Starfield Pastoral]]. Wita nowych graczy w farmerskim klimacie i porządkuje kontakt z administracją.',
            en: 'A [[Discord]] bot written in [[Python]] for the [[Starfield Pastoral]] mod community. It welcomes new players with a farming theme and keeps contact with the staff organized.'
        },
        features: [
            { t: { pl: 'Powitania i pożegnania', en: 'Welcomes & farewells' },
              d: { pl: 'Wiadomości o nowych i odchodzących „farmerach” z aktualną liczbą osób na serwerze, wysyłane jako [[Components V2]].',
                   en: 'Messages about arriving and departing “farmers” with the current member count, sent as [[Components V2]].' } },
            { t: { pl: 'Automatyczna rola', en: 'Auto-role' },
              d: { pl: 'Każda nowa osoba od razu dostaje podstawową rolę.',
                   en: 'Every new member instantly receives the default role.' } },
            { t: { pl: 'System zgłoszeń (Ticket)', en: 'Ticket system' },
              d: { pl: 'Prywatne wątki w trzech kategoriach: pomoc, zgłoszenie błędu lub gracza i współpraca. Bot pilnuje, żeby jedna osoba miała tylko jeden otwarty ticket.',
                   en: 'Private threads in three categories: help, bug or player reports and collaborations. The bot makes sure each person has only one open ticket.' } },
            { t: { pl: 'Technologie i narzędzia', en: 'Technologies & tools' },
              d: { pl: '[[Python]] ([[discord.py]]), [[Components V2]], komendy typu [[slash]] oraz menu wyboru i [[interaktywne przyciski]].',
                   en: '[[Python]] ([[discord.py]]), [[Components V2]], [[slash commands]], select menus and [[interactive buttons]].' } }
        ],
        usage: { pl: 'Bot na co dzień działa na serwerze {link}.', en: 'The bot runs daily on {link}.' },
        usageLink: { pl: 'Starfield Pastoral', en: 'the Starfield Pastoral server', url: 'https://discord.com/invite/cnG3eE58Au' }
    },

    // ---------- Raptor ----------
    {
        id: 'raptor',
        name: 'Raptor',
        image: 'images/bot_raptor.webp',
        isNew: true,
        lang: 'JavaScript',
        credit: { text: 'impsteve.pl', url: 'https://impsteve.pl/' },
        link: { text: 'raptor-azure.vercel.app', url: 'https://raptor-azure.vercel.app/' },
        tags: [{ pl: 'Poziomy i XP', en: 'Levels & XP' }, { pl: 'Panel www', en: 'Web panel' }, 'PostgreSQL'],
        short: {
            pl: 'System poziomów z grafikami rankingu, rolami za levele i własną stroną z panelem admina.',
            en: 'A leveling system with ranking graphics, level roles and its own website with an admin panel.'
        },
        desc: {
            pl: 'Bot [[Discord]] napisany w [[JavaScripcie]], który nagradza aktywność na serwerze punktami doświadczenia. Rysuje własne karty rankingowe, sam nadaje role za poziomy, a do tego ma [[stronę internetową]] z publicznym rankingiem i panelem dla administracji.',
            en: 'A [[Discord]] bot written in [[JavaScript]] that rewards server activity with experience points. It draws its own ranking cards, assigns level roles automatically and comes with a [[website]] featuring a public leaderboard and an admin panel.'
        },
        features: [
            { t: { pl: 'XP i poziomy', en: 'XP & levels' },
              d: { pl: 'Punkty za wiadomości i reakcje z ustawialnym cooldownem, trzy krzywe poziomów do wyboru oraz [[mnożniki XP]] dla ról, kanałów i kategorii.',
                   en: 'Points for messages and reactions with an adjustable cooldown, three level curves to choose from and [[XP multipliers]] for roles, channels and categories.' } },
            { t: { pl: 'Karty i ranking', en: 'Cards & leaderboard' },
              d: { pl: 'Komendy [[/rank]] i [[/leaderboard]] wysyłają grafiki rysowane przez bota, a ranking można przełączać na ogólny, tygodniowy i miesięczny.',
                   en: 'The [[/rank]] and [[/leaderboard]] commands send graphics drawn by the bot, with all-time, weekly and monthly rankings.' } },
            { t: { pl: 'Role za poziomy', en: 'Level roles' },
              d: { pl: 'Automatyczne nadawanie i zabieranie ról za poziomy, osobna rola dla lidera rankingu oraz konfigurowalna wiadomość o nowym levelu.',
                   en: 'Level roles granted and removed automatically, a separate role for the leaderboard leader and a customizable level-up message.' } },
            { t: { pl: 'Strona i panel admina', en: 'Website & admin panel' },
              d: { pl: 'Publiczny ranking z wyszukiwarką, profile graczy, edytor wyglądu karty z podglądem na żywo (logowanie przez Discorda) i panel do zarządzania XP, rolami i ustawieniami z historią zmian.',
                   en: 'A public leaderboard with search, player profiles, a card editor with live preview (Discord login) and a panel for managing XP, roles and settings with a change history.' } },
            { t: { pl: 'Bezpieczeństwo danych', en: 'Data safety' },
              d: { pl: 'Codzienna kopia zapasowa wysyłana na kanał logów, skrypt do przywracania danych, zgłaszanie błędów i podgląd, czy bot działa.',
                   en: 'A daily backup posted to the log channel, a restore script, error reporting and a live bot status check.' } },
            { t: { pl: 'Technologie i narzędzia', en: 'Technologies & tools' },
              d: { pl: '[[JavaScript]] ([[discord.js]]), baza [[PostgreSQL]] w Supabase, strona w [[Next.js]] na Vercelu, grafiki rysowane przez [[@napi-rs/canvas]] oraz testy automatyczne.',
                   en: '[[JavaScript]] ([[discord.js]]), a [[PostgreSQL]] database on Supabase, a [[Next.js]] website on Vercel, graphics drawn with [[@napi-rs/canvas]] and automated tests.' } }
        ],
        usage: { pl: 'Bot na co dzień działa na serwerze {link}.', en: 'The bot runs daily on {link}.' },
        usageLink: { pl: 'Jurajskiego Stasia', en: "Jurajski Staś's server", url: 'https://discord.gg/v5M7McgUaf' }
    }
];

// ---------- Mody Minecraft ----------
// Lista pobiera się sama z Modrinth (nowe mody pojawią się automatycznie).
// Poniżej: polskie opisy + zapas na wypadek, gdyby Modrinth nie odpowiadał.
const MOD_FALLBACK = [
    { slug: 'starfield-pastoral-automate', title: 'Starfield Pastoral Automate', downloads: 24, published: '2026-09-07',
      icon_url: 'https://cdn.modrinth.com/data/NrEUPadO/9809728864e875aaedd63e63f77d8c2cadc3ffb0_96.webp',
      description: 'Place a chest next to a crafting machine to connect it. Machines automatically pull raw items from the chest and push processed items back into it.' },
    { slug: 'starfield-pastoral-fishing', title: 'Starfield Pastoral Fishing', downloads: 22, published: '2026-09-17',
      icon_url: 'https://cdn.modrinth.com/data/leBoPDa2/8b7fc26fad37f8b8cfd6cfb0acf09628da8b367f_96.webp',
      description: 'A fishing-ease addon that makes fishing faster, more generous, and optionally almost entirely hands-off.' },
    { slug: 'starfield-pastoral-almanac', title: 'Starfield Pastoral Almanac', downloads: 21, published: '2026-09-14',
      icon_url: 'https://cdn.modrinth.com/data/pPtoUAiR/74fdf3bdfe3c636affb32f5c7e60cf2603dfa4ae_96.webp',
      description: 'A lightweight HUD addon showing info icons next to the in-game clock for birthdays, weather, seasons, and festivals.' },
    { slug: 'starfield-pastoral-production', title: 'Starfield Pastoral Production', downloads: 18, published: '2026-09-15',
      icon_url: 'https://cdn.modrinth.com/data/EqYxFN6b/ac948a9c48b0acc17e3e749203920f83d730d9e5_96.webp',
      description: 'Speed up artisan and production machines via a global multiplier or per-machine controls.' },
    { slug: 'starfield-pastoral-elevator', title: 'Starfield Pastoral Elevator', downloads: 16, published: '2026-09-21',
      icon_url: 'https://cdn.modrinth.com/data/3lvilRXA/a132383e2d4d21860e106a36d9f8c41d8c82f84b_96.webp',
      description: 'Adds an elevator to the Skull Cavern, letting you save progress and freely teleport between reached levels.' },
    { slug: 'starfield-pastoral-shipping', title: 'Starfield Pastoral Shipping', downloads: 16, published: '2026-09-15',
      icon_url: 'https://cdn.modrinth.com/data/Q73B9chm/4f5e84c6da15ddf0c06854446876e938acbacab6_96.webp',
      description: 'A Shipping Bin overhaul that expands the single-slot bin into a paginated, 216-slot storage system.' },
    { slug: 'starfield-pastoral-friendship', title: 'Starfield Pastoral Friendship', downloads: 16, published: '2026-09-21',
      icon_url: 'https://cdn.modrinth.com/data/MaHWo9r1/ff70b201effe8cb06e57b5a233d79740d76eb6f9_96.webp',
      description: 'Prevents NPC friendship decay, removes gift limits, and allows direct friendship level adjustments.' }
].map(m => ({ ...m, loaders: ['neoforge'], game_versions: ['1.21.1'] }));
// (sortowanie po łącznych pobraniach dzieje się przy renderowaniu)

// ---------- CurseForge ----------
// Pobrania z CurseForge pobierają się same przez CFWidget (api.cfwidget.com).
// Klucz = slug z Modrinth. Jeśli na CurseForge mod ma inny adres, wpisz go w polu "slug".
// "downloads" to liczba zapasowa, gdyby CFWidget nie odpowiadał.
// Mod bez wpisu tutaj pokaże się tylko z linkiem do Modrinth.
const CURSEFORGE = {
    'starfield-pastoral-automate':   { downloads: 77 },
    'starfield-pastoral-almanac':    { downloads: 56 },
    'starfield-pastoral-shipping':   { downloads: 42 },
    'starfield-pastoral-production': { downloads: 41 },
    'starfield-pastoral-fishing':    { downloads: 36 },
    'starfield-pastoral-elevator':   { downloads: 32 },
    'starfield-pastoral-friendship': { downloads: 25 }
};
const cfSlug = slug => (CURSEFORGE[slug] && CURSEFORGE[slug].slug) || slug;
const cfUrl = slug => `https://www.curseforge.com/minecraft/mc-mods/${cfSlug(slug)}`;
const cfDownloads = slug => (CURSEFORGE[slug] ? CURSEFORGE[slug].downloads || 0 : 0);
const totalDownloads = m => (m.downloads || 0) + cfDownloads(m.slug);

// Polskie opisy modów (klucz = slug z Modrinth). Mod bez wpisu pokaże opis z Modrinth.
const MOD_DESC_PL = {
    'starfield-pastoral-automate': 'Postaw skrzynię obok maszyny, a ta sama pobierze z niej surowce i odłoży gotowe produkty. Powrót kultowego Automate ze Stardew Valley.',
    'starfield-pastoral-fishing': 'Szybsze i hojniejsze łowienie ryb – z opcją niemal całkowicie automatycznego wędkowania.',
    'starfield-pastoral-almanac': 'Lekki dodatek do HUD-u: ikonki przy zegarze informują o urodzinach, pogodzie, porach roku i festiwalach.',
    'starfield-pastoral-production': 'Przyspieszanie maszyn rzemieślniczych – globalnym mnożnikiem albo osobno dla każdej maszyny.',
    'starfield-pastoral-elevator': 'Winda w Skull Cavern: zapisuje postęp i pozwala swobodnie przenosić się między odkrytymi poziomami.',
    'starfield-pastoral-shipping': 'Odnowiona skrzynia wysyłkowa – zamiast jednego slotu 216 miejsc podzielonych na strony.',
    'starfield-pastoral-friendship': 'Przyjaźń z NPC nie spada, nie ma limitu prezentów, a poziom relacji można ustawić ręcznie.'
};

// ---------- Współprace ----------
const COLLABS = [
    {
        name: 'Jurajski Staś',
        image: 'images/jurajski.webp',
        since: { pl: 'od marca 2025', en: 'since March 2025' },
        roles: [{ pl: 'Administratorka Discorda', en: 'Discord Administrator' }, { pl: 'Moderatorka live', en: 'Livestream Moderator' }, { pl: 'Bot Dinozaur', en: 'Dinozaur Bot' }, { pl: 'Bot Raptor', en: 'Raptor Bot' }],
        text: {
            pl: [
                'Współpracuję z [[Jurajskim Stasiem]] – twórcą Minecraftowych treści na YouTube. Choć zaczynało się od redagowania scenariuszy, dziś skupiam się na wspieraniu jego społeczności jako [[administratorka serwera Discord]] oraz [[moderatorka transmisji na żywo]].',
                'Moim głównym zajęciem jest konserwacja [[Dinozaur Bota]], którego zaprojektowałam we współpracy z ekipą i wciąż rozwijam. Stworzyłam też [[Raptora]] – bota do poziomów z własną stroną z rankingiem, a z mojej inicjatywy powstało [[Zuzdle]], które pojawia się sporadycznie jako tymczasowy event. Dbam też o [[techniczną stronę serwera]] i czuwam nad [[atmosferą]] wśród widzów.'
            ],
            en: [
                'I collaborate with [[Jurajski Staś]] – a Minecraft content creator on YouTube. Starting from script editing, I now focus on supporting his community as a [[Discord server administrator]] and [[livestream moderator]].',
                'My main responsibility is maintaining [[Dinozaur Bot]], which I designed with the team and keep developing. I also built [[Raptor]] – a leveling bot with its own leaderboard website – and on my initiative, [[Zuzdle]] was created as an occasional temporary event. I also take care of the [[technical side of the server]] and keep a good [[atmosphere]] among viewers.'
            ]
        },
        links: [
            { icon: 'fa-brands fa-youtube', text: '@JurajskiStas', url: 'https://www.youtube.com/@JurajskiStas' },
            { icon: 'fa-brands fa-discord', text: 'Discord', url: 'https://discord.gg/v5M7McgUaf' }
        ]
    },
    {
        name: 'szefastian',
        image: 'images/szefastian.webp',
        since: { pl: 'od stycznia 2026', en: 'since January 2026' },
        roles: [{ pl: 'Moderatorka', en: 'Moderator' }, { pl: 'Opiekunka techniczna', en: 'Technical manager' }, { pl: 'Bot Żeńchłopiec', en: 'Żeńchłopiec Bot' }],
        text: {
            pl: [
                'Współpracuję ze [[szefastianem]] – twórcą treści na YouTube. Zaprojektowałam od podstaw [[Żeńchłopiec Bota]] oraz dedykowaną mu stronę internetową i stale rozwijam je o nowe funkcje.',
                'Na serwerze Discord pełnię rolę [[moderatorki]] i [[technicznej opiekunki serwera]]. Wspieram też twórcę, podsuwając mu pomysły okołocontentowe, z których, jak sam twierdzi, jest „[[bardzo zadowolony :3]]”.'
            ],
            en: [
                'I work with [[szefastian]] – a YouTube creator. I designed [[Żeńchłopiec Bot]] and its dedicated website from scratch and keep adding new features.',
                'On his Discord server I act as a [[moderator]] and [[technical manager]]. I also help the creator with content ideas, which he finds “[[very satisfying :3]]”.'
            ]
        },
        links: [
            { icon: 'fa-brands fa-youtube', text: '@szefastian', url: 'https://www.youtube.com/@szefastian' },
            { icon: 'fa-brands fa-discord', text: 'Discord', url: 'https://discord.com/invite/Rr6gasgMy6' }
        ]
    }
];

// Mniejsze współprace – kompaktowe kafelki pod dużymi
const MINI_COLLABS = [
    {
        name: 'Starfield Pastoral',
        image: 'https://cdn.modrinth.com/data/i54Drdq8/04ec8eaef340d5a2019a4db570d9254cb2405ca2.png',
        text: {
            pl: 'Tworzę addony i zajmuję się serwerem Discord.',
            en: 'I create addons and take care of the Discord server.'
        },
        links: [
            { icon: 'fa-solid fa-cube', text: 'Modrinth', url: 'https://modrinth.com/mod/starfield-pastoral' },
            { icon: 'fa-solid fa-hammer', text: 'CurseForge', url: 'https://www.curseforge.com/minecraft/mc-mods/starfield-pastoral' },
            { icon: 'fa-brands fa-github', text: 'GitHub', url: 'https://github.com/ChangQingElysium/Starfield-Pastoral' },
            { icon: 'fa-brands fa-discord', text: 'Discord', url: 'https://discord.com/invite/cnG3eE58Au' }
        ]
    }
];

// ---------- Teksty interfejsu ----------
const UI = {
    pl: {
        nav_about: 'O mnie', nav_projects: 'Projekty', nav_collab: 'Współprace', nav_contact: 'Kontakt',
        hero_eyebrow: 'Cześć, jestem',
        hero_desc: 'Piszę, redaguję i tłumaczę teksty, koduję boty i mody, a wolny czas marnuję na gry i social media.',
        chip_writing: 'Pisanie i redakcja', chip_translation: 'Tłumaczenia PL↔EN', chip_bots: 'Boty Discord', chip_mods: 'Mody Minecraft',
        hero_btn: 'Zobacz projekty', hero_btn2: 'Napisz do mnie',
        stat_bots: 'boty Discord', stat_mods: 'mody Minecraft', stat_downloads: 'pobrań modów',
        about_title: 'O mnie',
        about_p1: 'Mam na imię Zuzia i mam 21 lat. Zajmuję się [[pisaniem]], [[redagowaniem]] oraz [[tłumaczeniem polski↔angielski]]. Najlepiej odnajduję się w projektach, które trafiają w mój klimat i zainteresowania – wtedy praca przestaje być nudną rutyną.',
        about_p2: 'Amatorsko [[programuję]] i próbuję swoich sił na różnych płaszczyznach, a efektem tych eksperymentów są moje [[boty na Discordzie]], [[mody do Minecrafta]] oraz strony internetowe.',
        about_p3: 'Staram się łączyć mój [[wybuchowy temperament]] z [[dbałością o detale]], przekuwając nadmiar energii w dopieszczanie projektów do [[ostatniej linijki]].',
        projects_title: 'Projekty',
        tab_all: 'Wszystkie', tab_bots: 'Boty Discord', tab_mods: 'Mody Minecraft',
        mods_note: 'Addony do moda Starfield Pastoral (NeoForge 1.21.1/Forge 1.20.1).',
        mods_all: 'Wszystkie mody na:',
        details: 'Szczegóły', downloads: 'pobrań', new_badge: 'Nowy',
        features: 'Główne funkcje', logo: 'Autor logo:', site: 'Strona projektu:',
        collab_title: 'Współprace',
        contact_title: 'Kontakt',
        contact_desc: 'Chcesz współpracować lub masz pytanie? Odezwij się!',
        coffee: 'Postaw mi kawę',
        footer_rights: 'Wszelkie prawa zastrzeżone.',
        toast_copied: 'Skopiowano do schowka!',
        theme: 'Zmień motyw', close: 'Zamknij'
    },
    en: {
        nav_about: 'About', nav_projects: 'Projects', nav_collab: 'Collabs', nav_contact: 'Contact',
        hero_eyebrow: "Hi, I'm",
        hero_desc: 'I write, edit and translate texts, code bots and mods, and waste my free time on gaming and social media.',
        chip_writing: 'Writing & editing', chip_translation: 'PL↔EN translation', chip_bots: 'Discord bots', chip_mods: 'Minecraft mods',
        hero_btn: 'View projects', hero_btn2: 'Contact me',
        stat_bots: 'Discord bots', stat_mods: 'Minecraft mods', stat_downloads: 'mod downloads',
        about_title: 'About me',
        about_p1: "My name is Zuzia and I'm 21. I focus on [[writing]], [[editing]] and [[Polish↔English translation]]. I thrive in projects that match my style and interests – that's when work stops feeling like a routine.",
        about_p2: 'I code as a hobby and try my hand at various things; the results of these experiments are my [[Discord bots]], [[Minecraft mods]] and websites.',
        about_p3: 'I try to combine my [[fiery temperament]] with [[attention to detail]], turning excess energy into polishing projects down to the [[last line]].',
        projects_title: 'Projects',
        tab_all: 'All', tab_bots: 'Discord bots', tab_mods: 'Minecraft mods',
        mods_note: 'Addons for the Starfield Pastoral mod (NeoForge 1.21.1/Forge 1.20.1).',
        mods_all: 'All mods on:',
        details: 'Details', downloads: 'downloads', new_badge: 'New',
        features: 'Key features', logo: 'Logo by:', site: 'Project website:',
        collab_title: 'Collaborations',
        contact_title: 'Contact',
        contact_desc: 'Want to collaborate or have a question? Get in touch!',
        coffee: 'Buy me a coffee',
        footer_rights: 'All rights reserved.',
        toast_copied: 'Copied to clipboard!',
        theme: 'Toggle theme', close: 'Close'
    }
};

/* =====================================================================
   LOGIKA (zwykle nie trzeba tu nic zmieniać)
   ===================================================================== */

const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
};

let lang = store.get('lang') || ((navigator.language || 'pl').toLowerCase().startsWith('pl') ? 'pl' : 'en');
let mods = MOD_FALLBACK.slice();

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const rich = s => esc(s).replace(/\[\[(.+?)\]\]/g, '<span class="hl">$1</span>');
const tr = v => (v && typeof v === 'object' && !Array.isArray(v)) ? (v[lang] ?? v.pl) : v;
const t = k => UI[lang][k] ?? UI.pl[k] ?? k;
const fmt = n => new Intl.NumberFormat(lang === 'pl' ? 'pl-PL' : 'en-US').format(n);

function iconHTML(src, name, cls = '') {
    const letter = esc(name.trim()[0] || '?');
    if (!src) return `<div class="card-icon fallback ${cls}">${letter}</div>`;
    return `<img class="card-icon ${cls}" src="${esc(src)}" alt="" loading="lazy"
        onerror="this.outerHTML='<div class=&quot;card-icon fallback ${cls}&quot;>${letter}</div>'">`;
}

// ---------- Renderowanie ----------
function renderBots() {
    document.getElementById('bot-grid').innerHTML = BOTS.map(b => `
        <button class="card" data-bot="${esc(b.id)}">
            ${b.isNew ? `<span class="badge-new">${t('new_badge')}</span>` : ''}
            <div class="card-head">
                ${iconHTML(b.image, b.name, 'round')}
                <div><div class="card-kicker">Discord bot</div><h4>${esc(b.name)}</h4></div>
            </div>
            <p>${esc(tr(b.short))}</p>
            <div class="card-tags">${b.tags.map(x => `<span class="tag">${esc(tr(x))}</span>`).join('')}</div>
            <div class="card-foot"><span>${esc(b.lang || '')}</span><span class="more">${t('details')} →</span></div>
        </button>`).join('');
}

function renderMods() {
    const now = Date.now();
    document.getElementById('mod-grid').innerHTML = mods.map(m => {
        const parts = m.title.match(/^(Starfield Pastoral)\s+(.+)$/);
        const kicker = parts ? parts[1] : 'Minecraft mod';
        const name = parts ? parts[2] : m.title;
        const desc = (lang === 'pl' && MOD_DESC_PL[m.slug]) || m.description;
        const isNew = m.published && (now - new Date(m.published)) < 1000 * 60 * 60 * 24 * 21;
        const LOADER_NAMES = { neoforge: 'NeoForge', forge: 'Forge', fabric: 'Fabric', quilt: 'Quilt' };
        const loaders = (m.loaders || []).map(l => LOADER_NAMES[l] || l);
        const versions = m.game_versions || [];
        const ver = versions.length > 1 ? `${versions[0]} – ${versions[versions.length - 1]}` : (versions[0] || '');
        return `
        <article class="card mod-card">
            ${isNew ? `<span class="badge-new">${t('new_badge')}</span>` : ''}
            <div class="card-head">
                ${iconHTML(m.icon_url, name)}
                <div><div class="card-kicker">${esc(kicker)}</div><h4>${esc(name)}</h4></div>
            </div>
            <p>${esc(desc)}</p>
            <div class="card-tags">
                ${loaders.map(l => `<span class="tag">${esc(l)}</span>`).join('')}
                ${ver ? `<span class="tag">${esc(ver)}</span>` : ''}
            </div>
            <div class="mod-links">
                <a class="mod-link" href="https://modrinth.com/mod/${esc(m.slug)}" target="_blank" rel="noopener" title="Modrinth">
                    <span>Modrinth</span><span class="dl"><i class="fa-solid fa-download"></i> ${fmt(m.downloads || 0)}</span>
                </a>
                ${CURSEFORGE[m.slug] ? `
                <a class="mod-link" href="${esc(cfUrl(m.slug))}" target="_blank" rel="noopener" title="CurseForge">
                    <span>CurseForge</span><span class="dl"><i class="fa-solid fa-download"></i> ${fmt(cfDownloads(m.slug))}</span>
                </a>` : ''}
            </div>
        </article>`;
    }).join('');
}

function linksHTML(links) {
    return `<div class="collab-links">${links.map(l =>
        `<a class="pill-link" href="${esc(l.url)}" target="_blank" rel="noopener"><i class="${esc(l.icon)}"></i> ${esc(l.text)}</a>`
    ).join('')}</div>`;
}

function renderCollabs() {
    document.getElementById('collab-grid').innerHTML = COLLABS.map(c => `
        <article class="collab-card">
            <div class="collab-head">
                <img src="${esc(c.image)}" alt="${esc(c.name)}" loading="lazy">
                <div><h3>${esc(c.name)}</h3><div class="collab-since">${esc(tr(c.since))}</div></div>
            </div>
            <div class="collab-roles">${c.roles.map(r => `<span class="tag">${esc(tr(r))}</span>`).join('')}</div>
            ${tr(c.text).map(p => `<p>${rich(p)}</p>`).join('')}
            ${linksHTML(c.links)}
        </article>`).join('');

    document.getElementById('mini-collab-grid').innerHTML = MINI_COLLABS.map(c => `
        <article class="mini-collab">
            ${iconHTML(c.image, c.name)}
            <div class="mini-body">
                <h4>${esc(c.name)}</h4>
                <p>${esc(tr(c.text))}</p>
                ${linksHTML(c.links)}
            </div>
        </article>`).join('');
}

function renderStats() {
    document.getElementById('stat-bots').textContent = BOTS.filter(b => b.name !== 'Nowy bot').length;
    document.getElementById('stat-mods').textContent = mods.length;
    document.getElementById('stat-downloads').textContent = fmt(mods.reduce((s, m) => s + totalDownloads(m), 0));
}

function renderStatic() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const v = UI[lang][el.dataset.key];
        if (v !== undefined) el.innerHTML = rich(v);
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    document.getElementById('theme-toggle').setAttribute('aria-label', t('theme'));
    document.querySelector('.modal-close').setAttribute('aria-label', t('close'));
}

function renderAll() {
    renderStatic();
    renderBots();
    renderMods();
    renderCollabs();
    renderStats();
}

// ---------- Okienko bota ----------
const modal = document.getElementById('modal');
let lastFocus = null;

function openBot(id) {
    const b = BOTS.find(x => x.id === id);
    if (!b) return;
    let side = b.image
        ? `<img src="${esc(b.image)}" alt="${esc(b.name)}">`
        : `<div class="card-icon fallback round" style="width:170px;height:170px;margin:0 auto 12px;font-size:3rem">${esc(b.name[0])}</div>`;
    if (b.credit) side += `<div class="credit">${t('logo')} <a href="${esc(b.credit.url)}" target="_blank" rel="noopener">${esc(b.credit.text)}</a></div>`;
    if (b.link) side += `<div class="credit">${t('site')} <a href="${esc(b.link.url)}" target="_blank" rel="noopener">${esc(b.link.text)}</a></div>`;

    let usage = '';
    if (b.usage) {
        const link = b.usageLink ? `<a href="${esc(b.usageLink.url)}" target="_blank" rel="noopener">${esc(tr(b.usageLink))}</a>` : '';
        usage = `<p class="usage">${esc(tr(b.usage)).replace('{link}', link)}</p>`;
    }

    document.getElementById('modal-body').innerHTML = `
        <div class="modal-side">${side}</div>
        <div class="modal-main">
            <h2 id="modal-title">Bot <span>${esc(b.name)}</span></h2>
            <p>${rich(tr(b.desc))}</p>
            <h5>${t('features')}</h5>
            <ul class="feature-list">
                ${b.features.map(f => `<li><strong>${esc(tr(f.t))}</strong>${rich(tr(f.d))}</li>`).join('')}
            </ul>
            ${usage}
        </div>`;
    lastFocus = document.activeElement;
    modal.hidden = false;
    modal.dataset.bot = id;
    document.body.classList.add('modal-open');
    modal.querySelector('.modal-close').focus();
}

function closeModal() {
    modal.hidden = true;
    delete modal.dataset.bot;
    document.body.classList.remove('modal-open');
    if (lastFocus) lastFocus.focus();
}

document.getElementById('bot-grid').addEventListener('click', e => {
    const card = e.target.closest('[data-bot]');
    if (card) openBot(card.dataset.bot);
});
modal.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

// ---------- Zakładki ----------
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const f = tab.dataset.filter;
        document.querySelectorAll('.tab').forEach(x => x.classList.toggle('active', x === tab));
        document.querySelectorAll('.project-group').forEach(g =>
            g.classList.toggle('hidden', f !== 'all' && g.dataset.group !== f));
    });
});

// ---------- Język ----------
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        lang = btn.dataset.lang;
        store.set('lang', lang);
        renderAll();
        if (!modal.hidden && modal.dataset.bot) openBot(modal.dataset.bot);
    });
});

// ---------- Motyw ----------
const themeBtn = document.getElementById('theme-toggle');
function syncThemeIcon() {
    const light = document.documentElement.classList.contains('light');
    themeBtn.innerHTML = light ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
}
themeBtn.addEventListener('click', () => {
    const light = document.documentElement.classList.toggle('light');
    store.set('theme', light ? 'light' : 'dark');
    syncThemeIcon();
});
syncThemeIcon();

// ---------- Kopiowanie kontaktu ----------
function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('show'), 2000);
}
document.querySelectorAll('[data-copy]').forEach(el => {
    el.addEventListener('click', () => {
        const text = el.dataset.copy;
        if (navigator.clipboard) navigator.clipboard.writeText(text).then(showToast).catch(() => {});
    });
});

// ---------- Aktywny link w menu ----------
const navLinks = [...document.querySelectorAll('.nav-links a')];
const observer = new IntersectionObserver(entries => {
    entries.forEach(en => {
        if (en.isIntersecting) {
            navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
        }
    });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => observer.observe(s));

document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Start + mody z Modrinth ----------
mods.sort((a, b) => totalDownloads(b) - totalDownloads(a));
renderAll();

fetch(`https://api.modrinth.com/v2/user/${MODRINTH_USER}/projects`)
    .then(r => r.ok ? r.json() : Promise.reject(r.status))
    .then(data => {
        const live = data
            .filter(p => p.status === 'approved' || p.status === 'archived')
            .sort((a, b) => b.downloads - a.downloads);
        if (live.length) {
            mods = live.sort((a, b) => totalDownloads(b) - totalDownloads(a));
            renderMods();
            renderStats();
        }
    })
    .catch(() => { /* zostaje lista zapasowa */ });

// Pobrania z CurseForge (CFWidget). Jeśli coś nie odpowie, zostają liczby zapasowe.
Promise.allSettled(Object.keys(CURSEFORGE).map(slug =>
    fetch(`https://api.cfwidget.com/minecraft/mc-mods/${cfSlug(slug)}`)
        .then(r => r.ok ? r.json() : Promise.reject(r.status))
        .then(d => {
            const n = d && d.downloads && d.downloads.total;
            if (typeof n === 'number' && n >= CURSEFORGE[slug].downloads) CURSEFORGE[slug].downloads = n;
        })
)).then(() => {
    mods.sort((a, b) => totalDownloads(b) - totalDownloads(a));
    renderMods();
    renderStats();
});
