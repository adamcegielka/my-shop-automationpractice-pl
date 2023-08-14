## 024-TC => MSA-15 Użytkownik może utworzyć konto z dzisiejszą datą urodzenia

<br>

|     | Elementy                  | Opis                                                                   |
| :-- | :------------------------ | :--------------------------------------------------------------------- |
| 1   | **ID:**                   | _MSA-15_                                                               |
| 2   | **Tytuł:**                | _Użytkownik może utworzyć konto z dzisiejszą datą urodzenia_           |
| 3   | **Środowisko:**           | _- Windows 10 Home <br> - Google Chrome wersje 115.0.5790.171 <br> - Firefox Developer Edition wersje 117.0b6 <br> - Opera wersje 101.0.4843.33 <br> - Playwright 1.36.2 : chromium, firefox, webkit_ |
| 4   | **Warunki wstępne:**      | _- Aplikacja **automationpractice.pl** jest dostępna i działa poprawnie <br> - Strona http://www.automationpractice.pl jest otwarta_ |
| 5   | **Kroki do wykonania**    | _1. Kliknąć przycisk `Sign in` <br> 2. Wpisać losowy email <br> 3. Kliknąć przycisk `Create an account` <br> 4. Zaznaczyć w `Title` input `Mr.` <br> 5. W polu `First name` wpisać losowe imię <br> 6. W polu `Last name` wpisać losowe nazwisko <br> 7. W polu `Password` wpisać prawidłowe losowe hasło <br> 8. W `Date of Birth` wybrać datę dzisiejszą <br> 9. Zaznaczyć input `Sign up for our newsletter!` <br> 10. Kliknąć przycisk `Register`_ |
| 7   | **Rzeczywisty rezultat:** | _Użytkownik może utworzyć konto_                                       |
| 6   | **Oczekiwany rezultat:**  | _Po wykonaniu powyższych kroków pojawia się komunikat [![Valid](https://img.shields.io/badge/There%20is%201%20error-f3515c)](#) <br> [![Valid](https://img.shields.io/badge/Invalid%20date%20of%20birth.-f3515c)](#)_ |
| 8   | **Załącznik:**            | _nie ma_                                                               |
