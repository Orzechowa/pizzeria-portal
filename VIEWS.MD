# Dashboard

- '/'
    - statystyki dzisiejszych zamówień (zdalne i lokalne)
    - listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- '/login'
    - pola na login i hasło
    - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- '/tables'
    - wybór daty i godziny
    - tabela z listą rezerwacji oraz wydarzeń
        - kazda kolumna = 1 stolik
        - kazdy wiersz = 30
        - ma przypominac widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni sa rozne stoliki
        - po kliknieciu rezerwacji lub eventu przechodzimy na strone szczegolow
- '/tables/booking/:id'
    - zawiera wszystkie informacje dotyczace rezerwacji
    - umozliwi edycje i zapisanie zmian
- '/tables/booking/new'
    - analogicznie do powyzszej, bez poczatkowych informacji
- '/tables/events/:id'
    - analogicznie do powyzszej, dla eventow
- '/tables/events/new'
    - analogicznie do powyzszej, dla eventow, bez poczatkowych informacji

# Widok kelnera

- 'waiter'
    - tabela
        - w wierszach stoliki
        - w kolumnach rozne rodzaje informacji (status, czas od ostatniej aktywnosci)
        - wostatniej kolumnie dostepne akcje dla danego stolika
- '/waiter/order/new'
    - numer stolika (edytowany)
    - menu produktow
    - opcje wybranego produktu
    - zamowienie (zamowione produkty z opcjami i cena)
    - kwote zamowienia
- '/waiter/order/:id'
    - jak powyzsza

# Widok kuchni

- '/kitchen'
    - wyswietla liste zamowien w kolejnosci ich zlozenia
    - lista musi zawierac:
        - numer stolika (lub zamowieenia zdalnego)
        - pelne informacje dot zamowionych dan
    - na liscie musi byc mozliwosc oznaczenia zamowienia jako zrealizowane