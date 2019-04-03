# Dependency management u frontend aplikacijama

Osim u produkciji, očekujemo da kod radi i u dev environmentu, na stagingu i u testovima. Očekujemo i da više aplikacija koristi isti kod. 

Developeri moraju paziti da povlače zavisnosti u kodu tako da se u nijednom okruženju ne naruši rad aplikacije. Npr. unit testovi se pokreću nezavisno od bilo kakvih vanjskih utjecaja; trenutna dostupnost nekog remote servisa ne smije utjecati na ishod testa. 

Stoga kod, koliko god je to moguće, treba držati nezavisnim od:

- http poziva: ajax, Web Socket
- alata iz browser okruženja: cookies, location, local storage, session storage, web workers...
- vremena: setTimeout, setInterval, new Date()...

Moduli se zbog toga oblikuju tako da se navedene zavisnosti mogu po potrebi mijenjati (injectati) ovisno o okruženju u kojem se kod trenutno izvršava. Tako se npr. neki http request može po potrebi odsimulirati pozivanjem lokalne funkcije.

Kod se stoga dijeli na module koji nisu svjesni okruženja (tj. "glupi moduli") i kod koji te module inicijalizira i dovodi u stvarno okruženje (tj. "smart moduli" ili "glue kod"). Ta podjela ima snažan utjecaj na konačanu organizaciju i na čitljivost koda. 

## Rješenje

U predavanju ću analizirati neke pristupe kod rješavanja ovog problema u okviru frontend aplikacije:

- stubbing frameworks
- constructor injection
- setter injection
- interface injection
- service locator

Pokazat ću i primjer aplikacije koja ima arhitekturu po uzoru na www.supersport.hr, naš najveći i najvažniji proizvod.
