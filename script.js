document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    body.classList.add('light');
    if (toggleButton) toggleButton.textContent = '🌙';
} else {
    body.classList.remove('light');
    if (toggleButton) toggleButton.textContent = '☀️';
}

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light');
        if (body.classList.contains('light')) {
            toggleButton.textContent = '🌙'; 
            localStorage.setItem('theme', 'light');
        } else {
            toggleButton.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        }
    });
}

const translations = {
    pl: {
        nav_home: "Home",
        nav_about: "O mnie",
        nav_projects: "Projekty",
        nav_collab: "Współprace",
        nav_contact: "Kontakt",

        hero_title: "Cześć, jestem zuzjak",
        hero_desc: "Piszę, redaguję i tłumaczę teksty, koduję boty, a wolny czas marnuję na gry i social media.",
        hero_btn: "Zobacz moje projekty",

        about_title: "O mnie",
        about_p1: 'Mam na imię Zuzia i mam 21 lat. Zajmuję się <span class="highlight">pisaniem</span>, <span class="highlight">redagowaniem</span> oraz <span class="highlight">tłumaczeniem polski↔angielski</span>. Najlepiej odnajduję się w projektach, które trafiają w mój klimat i zainteresowania - wtedy praca przestaje być nudną rutyną.',
        about_p2: 'Amatorsko <span class="highlight">programuję</span> i próbuję swoich sił na różnych płaszczyznach, a efektem tych eksperymentów są moje <span class="highlight">boty na Discordzie</span> oraz strony internetowe.',
        about_p3: 'Staram się łączyć mój <span class="highlight">wybuchowy temperament</span> z <span class="highlight">dbałością o detale</span>, przekuwając nadmiar energii w dopieszczanie projektów do <span class="highlight">ostatniej linijki</span>.',

        projects_title: "Moje projekty",
        card_logo_author: "Autor logo:",
        card_project_site: "Strona projektu:",
        card_project_server: "Serwer projektu:",
        card_click_details: "Kliknij, żeby poznać szczegóły",

        modal_features_title: "Główne funkcja:",
        modal_features_title_plural: "Główne funkcje:",

        zuzdle_desc: 'Interaktywny bot <span style="color:#9a88ff;">Discord</span> stworzony w <span style="color:#9a88ff;">Pythonie</span>, łączący mechanikę <span style="color:#9a88ff;">Wordle</span> z klimatem <span style="color:#9a88ff;">Minecrafta</span>. Umożliwia codzienną zabawę i rywalizację użytkowników, oferując im różne nagrody.',
        zuzdle_f1_t: "Codzienne zgadywanie mobów",
        zuzdle_f1_d: "Bot losuje codziennie jednego Minecraftowego moba, a użytkownicy próbują go zgadnąć na podstawie podpowiedzi.",
        zuzdle_f2_t: "Komenda /giveup",
        zuzdle_f2_d: "Użytkownik może zrezygnować z zgadywania i odkryć poprawną odpowiedź, jeśli nie udało mu się żadnego wytypować.",
        zuzdle_f3_t: "System punktów i sklep",
        zuzdle_f3_d: "Za poprawne zgadywanie użytkownicy zdobywają punkty, które mogą wydać w sklepie – np. na unikalną rolę lub tymczasowe bonusy.",
        zuzdle_f4_t: "Estetyka",
        zuzdle_f4_d: 'Wszystkie informacje dla użytkowników są wysyłane w formie estetycznych <span style="color:#9a88ff;">embedów Discord</span>.',
        zuzdle_f5_t: "Technologie i narzędzia",
        zuzdle_f5_d: '<span style="color:#9a88ff;">Python</span>, <span style="color:#9a88ff;">JSON</span> do przechowywania danych, komendy typu <span style="color:#9a88ff;">slash</span> oraz <span style="color:#9a88ff;">interaktywne przyciski</span>.',

        dino_desc: 'Interaktywny bot <span style="color:#9a88ff;">Discord</span> stworzony w <span style="color:#9a88ff;">Pythonie</span>, który umożliwia szybkie zarządzanie karami członków, przy okazji udostępniając kilka użytecznych dla nich funkcji.',
        dino_f1_t: "Moderacja serwera",
        dino_f1_d: 'Komendy do wyciszania, kickowania i banowania oraz ręczne nakładanie kar i nagród zgodnie z taryfikatorem. Umożliwia także masowe usuwanie wiadomości dzięki funkcji <span style="color:#9a88ff;">/purge</span>.',
        dino_f2_t: "System punktów",
        dino_f2_d: "Obejmuje automatyczne przyznawanie punktów za aktywność oraz możliwość ich ręcznego dodawania lub odejmowania przez administrację.",
        dino_f3_t: "Funkcje użytkowe i urodziny",
        dino_f3_d: 'Użytkownicy mogą zarządzać swoją datą urodzin, sprawdzać listę nadchodzących solenizantów czy konwertować obrazki na format <span style="color:#9a88ff;">GIF</span>.',
        dino_f4_t: "Estetyka",
        dino_f4_d: 'Wszystkie informacje dla użytkowników są wysyłane w formie estetycznych <span style="color:#9a88ff;">embedów Discord</span>.',
        dino_f5_t: "Technologie i narzędzia",
        dino_f5_d: '<span style="color:#9a88ff;">Python</span>, <span style="color:#9a88ff;">JSON</span> do przechowywania danych, komendy typu <span style="color:#9a88ff;">slash</span> oraz interaktywne przyciski.',
        dino_usage: 'Bot na co dzień wykorzystywany jest na serwerze <a href="https://discord.gg/v5M7McgUaf" target="_blank" style="color:#9a88ff; text-decoration:underline;">Jurajskiego Stasia</a>.',

        zen_desc: 'Interaktywny bot <span style="color:#9a88ff;">Discord</span> stworzony w <span style="color:#9a88ff;">Pythonie</span> z myślą o kompleksowej obsłudze społeczności. Łączy w sobie zaawansowaną moderację oraz unikalne funkcje interaktywne, które angażują użytkowników.',
        zen_f1_t: "Moderacja",
        zen_f1_d: "System ostrzeżeń z automatycznymi karami, wyciszanie, bany oraz intuicyjny system raportów z panelem szybkiej reakcji dla moderatorów.",
        zen_f2_t: "Interakcje",
        zen_f2_d: "Obsługa ticketów, system sugestii z głosowaniem, formularze Q&A oraz automatyczne tworzenie wątków dyskusyjnych pod wiadomościami twórcy.",
        zen_f3_t: "Kanały głosowe",
        zen_f3_d: "System prywatnych kanałów głosowych tworzonych na żądanie, którymi właściciel może samodzielnie zarządzać (limit osób, wyrzucanie, zmiana nazwy).",
        zen_f4_t: "Zaawansowane Logi",
        zen_f4_d: "Szczegółowe śledzenie aktywności serwera: od edycji i usuwania wiadomości, przez zmiany ról i kanałów, aż po monitorowanie aktywności na kanałach głosowych.",
        zen_f5_t: "Technologie i narzędzia",
        zen_f5_d: '<span style="color:#9a88ff;">Python</span>, <span style="color:#9a88ff;">JSON</span> do przechowywania danych, komendy typu <span style="color:#9a88ff;">slash</span> oraz interaktywne przyciski.',
        zen_usage: 'Bot na co dzień wykorzystywany jest na serwerze <a href="https://discord.com/invite/Rr6gasgMy6" target="_blank" style="color:#9a88ff; text-decoration:underline;">szefastiana</a>.',

        smietnik_desc: 'Interaktywny bot <span style="color:#9a88ff;">Discord</span> stworzony w <span style="color:#9a88ff;">Pythonie</span>, przeznaczony do kompleksowej moderacji serwera oraz automatyzacji funkcji dla społeczności.',
        smietnik_f1_t: "Moderacja i system kar",
        smietnik_f1_d: 'Komendy do banowania, wyrzucania, wyciszania oraz nadawania ostrzeżeń. Bot automatycznie nakłada 7-dniowy mute po uzbieraniu 3 ostrzeżeń oraz usuwa je po 30 dniach. Umożliwia także masowe usuwanie wiadomości dzięki funkcji <span style="color:#9a88ff;">/purge</span>.',
        smietnik_f2_t: "System zgłoszeń (Ticket)",
        smietnik_f2_d: "Umożliwia użytkownikom tworzenie prywatnych wątków do kontaktu z Administracją z możliwością wyboru kategorii.",
        smietnik_f3_t: "Prywatne kanały głosowe",
        smietnik_f3_d: "Automatyczne tworzenie tymczasowych kanałów głosowych, z pełną możliwością personalizacji i samoczynnym usuwaniem po wyjściu członków.",
        smietnik_f4_t: "Profil użytkownika i powiadomienia",
        smietnik_f4_d: 'Podgląd statystyk konta (aktywnie kary, role, daty dołączenia), powitania na kanale lobby oraz możliwość wysyłania ogłoszeń z plików <span style="color:#9a88ff;">JSON</span>.',
        smietnik_f5_t: "Zaawansowane logi serwera",
        smietnik_f5_d: 'Rejestrowanie działań, edycji/usuwania wiadomości, zmian w strukturze serwera oraz aktywności użytkowników z wykorzystaniem <span style="color:#9a88ff;">Components V2</span>.',
        smietnik_f6_t: "Technologie i narzędzia",
        smietnik_f6_d: '<span style="color:#9a88ff;">Python</span>, <span style="color:#9a88ff;">JSON</span> do przechowywania danych, komendy typu <span style="color:#9a88ff;">slash</span> oraz <span style="color:#9a88ff;">interaktywne przyciski</span>.',
        smietnik_usage: 'Bot na co dzień wykorzystywany jest na serwerze <a href="https://discord.com/invite/2nsrXXzTJH" target="_blank" style="color:#9a88ff; text-decoration:underline;">Szopowisko</a>.',

        collab_title: "Współprace",
        collab_j_p1: 'Od marca 2025 roku współpracuję z <span style="color:#9a88ff;">Jurajskim Stasiem</span> - twórcą Minecraftowych treści na YouTube. Choć zaczynało się od redagowania scenariuszy, dziś skupiam się na wspieraniu jego społeczności jako <span style="color:#9a88ff;">administratorka serwera Discord</span> oraz <span style="color:#9a88ff;">moderatorka transmisji na żywo</span>.',
        collab_j_p2: 'Moim głównym zajęciem jest konserwacja <span style="color:#9a88ff;">Dinozaur Bota</span>, którego zaprojektowałam we współpracy z ekipą i wciąż rozwijam, by ułatwiał nam codzienną moderację. Z mojej inicjatywy powstało <span style="color:#9a88ff;">Zuzdle</span>, które pojawia się sporadycznie w formie tymczasowego eventu. Obecnie dbam o <span style="color:#9a88ff;">techniczną stronę serwera</span> i czuwam nad <span style="color:#9a88ff;">atmosferą</span> wśród widzów.',
        collab_channel_link: "Link do kanału:",
        
        collab_s_p1: 'Od stycznia 2026 roku współpracuję z <span style="color:#9a88ff;">szefastianem</span> - twórcą treści na YouTube. Zaprojektowałam od podstaw <span style="color:#9a88ff;">Żeńchłopiec Bota</span> oraz dedykowaną mu stronę internetową, aktualnie dbając o ich stały rozwój i wprowadzanie nowych funkcji.',
        collab_s_p2: 'Na serwerze Discord pełnię rolę <span style="color:#9a88ff;">moderatorki</span>, gdzie pilnuję porządku i aktywnie angażuję się w życie społeczności. Poza byciem <span style="color:#9a88ff;">techniczną opiekunką serwera</span>, wspieram twórcę poprzez podsuwanie mu różnorakich pomysłów okołocontentowych, z których, jak sam twierdzi, jest "<span style="color:#9a88ff;">bardzo zadowolony :3</span>".',

        contact_title: "Kontakt",
        contact_desc: "Chcesz współpracować lub masz pytanie? Skontaktuj się ze mną!",
        footer_rights: "© 2026 Wszelkie prawa zastrzeżone.",
        toast_copied: "Skopiowano do schowka!"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_collab: "Collaborations",
        nav_contact: "Contact",

        hero_title: "Hi, I'm zuzjak",
        hero_desc: "I write, edit, and translate texts, code bots, and waste my free time on gaming and social media.",
        hero_btn: "View my projects",

        about_title: "About Me",
        about_p1: 'My name is Zuzia and I am 21 years old. I focus on <span class="highlight">writing</span>, <span class="highlight">editing</span>, and <span class="highlight">Polish↔English translation</span>. I thrive best in projects that match my style and interests - that is when work stops feeling like a routine.',
        about_p2: 'I code as a hobby and try my hand in various areas; the results of these experiments include my <span class="highlight">Discord bots</span> and websites.',
        about_p3: 'I try to combine my <span class="highlight">fiery temperament</span> with <span class="highlight">attention to detail</span>, turning excess energy into polishing projects down to the <span class="highlight">last line</span>.',

        projects_title: "My Projects",
        card_logo_author: "Logo author:",
        card_project_site: "Project website:",
        card_project_server: "Project server:",
        card_click_details: "Click to learn more",

        modal_features_title: "Key feature:",
        modal_features_title_plural: "Key features:",

        zuzdle_desc: 'An interactive <span style="color:#9a88ff;">Discord</span> bot created in <span style="color:#9a88ff;">Python</span>, combining <span style="color:#9a88ff;">Wordle</span> mechanics with a <span style="color:#9a88ff;">Minecraft</span> theme. It allows users to play and compete daily while earning rewards.',
        zuzdle_f1_t: "Daily mob guessing",
        zuzdle_f1_d: "The bot picks a daily Minecraft mob, and users attempt to guess it based on hints.",
        zuzdle_f2_t: "/giveup command",
        zuzdle_f2_d: "Users can give up guessing to reveal the correct answer if they get stuck.",
        zuzdle_f3_t: "Points system & shop",
        zuzdle_f3_d: "Correct guesses grant points that can be spent in the shop for unique roles or temporary perks.",
        zuzdle_f4_t: "Aesthetics",
        zuzdle_f4_d: 'All information sent to users uses clean <span style="color:#9a88ff;">Discord embeds</span>.',
        zuzdle_f5_t: "Technologies & tools",
        zuzdle_f5_d: '<span style="color:#9a88ff;">Python</span>, <span style="color:#9a88ff;">JSON</span> data storage, <span style="color:#9a88ff;">slash commands</span>, and <span style="color:#9a88ff;">interactive buttons</span>.',

        dino_desc: 'An interactive <span style="color:#9a88ff;">Discord</span> bot built in <span style="color:#9a88ff;">Python</span> to quickly manage member sanctions while offering various utility features.',
        dino_f1_t: "Server moderation",
        dino_f1_d: 'Commands for muting, kicking, and banning, plus manual sanctioning and rewards based on rules. Supports bulk message cleanup via <span style="color:#9a88ff;">/purge</span>.',
        dino_f2_t: "Points system",
        dino_f2_d: "Includes automatic point rewards for activity as well as manual point management by staff.",
        dino_f3_t: "Utilities & birthdays",
        dino_f3_d: 'Users can set their birthday, view upcoming birthday lists, or convert images into <span style="color:#9a88ff;">GIF</span> format.',
        dino_f4_t: "Aesthetics",
        dino_f4_d: 'All information sent to users uses clean <span style="color:#9a88ff;">Discord embeds</span>.',
        dino_f5_t: "Technologies & tools",
        dino_f5_d: '<span style="color:#9a88ff;">Python</span>, <span style="color:#9a88ff;">JSON</span> data storage, <span style="color:#9a88ff;">slash commands</span>, and interactive buttons.',
        dino_usage: 'The bot is actively used on <a href="https://discord.gg/v5M7McgUaf" target="_blank" style="color:#9a88ff; text-decoration:underline;">Jurajski Staś\'s server</a>.',

        zen_desc: 'An interactive <span style="color:#9a88ff;">Discord</span> bot built in <span style="color:#9a88ff;">Python</span> for comprehensive community management. It combines advanced moderation with interactive user features.',
        zen_f1_t: "Moderation",
        zen_f1_d: "Warning system with automatic punishments, mutes, bans, and an intuitive report panel for fast staff action.",
        zen_f2_t: "Interactions",
        zen_f2_d: "Ticket support, voting suggestions, Q&A forms, and automatic discussion thread creation under creator posts.",
        zen_f3_t: "Voice channels",
        zen_f3_d: "On-demand private voice channel creation managed directly by the owner (user limits, kicking, renaming).",
        zen_f4_t: "Advanced Logs",
        zen_f4_d: "Detailed server tracking: message edits/deletions, role and channel updates, and voice channel activity.",
        zen_f5_t: "Technologies & tools",
        zen_f5_d: '<span style="color:#9a88ff;">Python</span>, <span style="color:#9a88ff;">JSON</span> data storage, <span style="color:#9a88ff;">slash commands</span>, and interactive buttons.',
        zen_usage: 'The bot is actively used on <a href="https://discord.com/invite/Rr6gasgMy6" target="_blank" style="color:#9a88ff; text-decoration:underline;">szefastian\'s server</a>.',

        smietnik_desc: 'An interactive <span style="color:#9a88ff;">Discord</span> bot created in <span style="color:#9a88ff;">Python</span> designed for complete server moderation and community automation.',
        smietnik_f1_t: "Moderation & sanctions",
        smietnik_f1_d: 'Ban, kick, mute, and warn commands. Automatically applies a 7-day mute upon reaching 3 warnings and clears them after 30 days. Includes bulk message removal via <span style="color:#9a88ff;">/purge</span>.',
        smietnik_f2_t: "Ticket System",
        smietnik_f2_d: "Allows users to create private support threads to contact Staff with selectable categories.",
        smietnik_f3_t: "Private Voice Channels",
        smietnik_f3_d: "Automatic creation of temporary voice channels with full owner customization and auto-deletion when empty.",
        smietnik_f4_t: "User profile & notifications",
        smietnik_f4_d: 'View account stats (active sanctions, roles, join dates), lobby welcome messages, and announcements sent via <span style="color:#9a88ff;">JSON</span> files.',
        smietnik_f5_t: "Advanced Server Logs",
        smietnik_f5_d: 'Activity logging for moderation actions, message edits/deletions, server structure updates using <span style="color:#9a88ff;">Components V2</span>.',
        smietnik_f6_t: "Technologies & tools",
        smietnik_f6_d: '<span style="color:#9a88ff;">Python</span>, <span style="color:#9a88ff;">JSON</span> data storage, <span style="color:#9a88ff;">slash commands</span>, and <span style="color:#9a88ff;">interactive buttons</span>.',
        smietnik_usage: 'The bot is actively used on <a href="https://discord.com/invite/2nsrXXzTJH" target="_blank" style="color:#9a88ff; text-decoration:underline;">Szopowisko server</a>.',

        collab_title: "Collaborations",
        collab_j_p1: 'Since March 2025, I have been collaborating with <span style="color:#9a88ff;">Jurajski Staś</span> - a Minecraft content creator on YouTube. Starting from script editing, I now focus on supporting his community as a <span style="color:#9a88ff;">Discord Server Administrator</span> and <span style="color:#9a88ff;">Livestream Moderator</span>.',
        collab_j_p2: 'My main responsibility is maintaining <span style="color:#9a88ff;">Dinozaur Bot</span>, which I designed with the team and continuously develop to streamline daily moderation. On my initiative, <span style="color:#9a88ff;">Zuzdle</span> was created as a temporary event. Currently, I oversee the <span style="color:#9a88ff;">technical aspects of the server</span> and foster a positive community <span style="color:#9a88ff;">atmosphere</span>.',
        collab_channel_link: "Channel link:",

        collab_s_p1: 'Since January 2026, I have been working with <span style="color:#9a88ff;">szefastian</span> - a YouTube creator. I designed <span style="color:#9a88ff;">Żeńchłopiec Bot</span> and its dedicated website from scratch, continuously adding new features and ensuring smooth operations.',
        collab_s_p2: 'On his Discord server, I act as a <span style="color:#9a88ff;">moderator</span>, maintaining order and actively engaging with the community. Beyond being a <span style="color:#9a88ff;">technical manager</span>, I assist the creator with content ideas which he finds "<span style="color:#9a88ff;">very satisfying :3</span>".',

        contact_title: "Contact",
        contact_desc: "Want to collaborate or have a question? Get in touch!",
        footer_rights: "© 2026 All rights reserved.",
        toast_copied: "Copied to clipboard!"
    }
};

let currentLang = localStorage.getItem('lang') || 'pl';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const selectedLang = btn.getAttribute('data-lang');
        setLanguage(selectedLang);
    });
});

setLanguage(currentLang);

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2000);
        }
    });
}

const discordTag = document.getElementById('discord-tag');
if (discordTag) {
    discordTag.addEventListener('click', function() {
        copyToClipboard(this.innerText);
    });
}

const emailCopy = document.getElementById('email-copy');
if (emailCopy) {
    emailCopy.addEventListener('click', function() {
        copyToClipboard(this.innerText);
    });
}

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        const modal = document.getElementById(`modal-${modalId}`);
        if (modal) {
            modal.style.display = 'flex';
        }
    });
});

document.querySelectorAll('.project-modal .close').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.project-modal').style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    document.querySelectorAll('.project-modal').forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});