## 007-TC => MSA-7 Użytkownik może utworzyć konto ze znakiem specjalnym (&) w adresie email

<br>

|     | Elementy                  | Opis                                                                   |
| :-- | :------------------------ | :--------------------------------------------------------------------- |
| 1   | **ID:**                   | _MSA-7_                                                                |
| 2   | **Tytuł:**                | _Użytkownik może utworzyć konto ze znakiem specjalnym (&) w adresie email_ |
| 3   | **Środowisko:**           | _- Windows 10 Home <br> - Google Chrome wersje 115.0.5790.110 <br> - Playwright 1.36.2 : chromium, firefox, webkit_ |
| 4   | **Warunki wstępne:**      | _Aplikacja **automationpractice.pl** jest dostępna i działa poprawnie_ |
| 5   | **Kroki do wykonania**    | _1. Przejść na stronę http://www.automationpractice.pl <br> 2. Kliknąć przycisk `Sign in` <br> 3. Wpisać email ze znakiem (&): `herko&uhlemann@gmx.com` <br> 4. Kliknąć przycisk `Create an account`_ |
| 7   | **Rzeczywisty rezultat:** | _Użytkownik może utworzyć konto_                                       |
| 6   | **Oczekiwany rezultat:**  | _Po wykonaniu powyższych kroków pojawia się komunikat [![Valid](https://img.shields.io/badge/Invalid%20email%20address.-f3515c)](#)_ |
| 8   | **Załącznik:**            | _nie ma_                                                               |
