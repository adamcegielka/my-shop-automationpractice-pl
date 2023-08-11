## 024-TC-pl Weryfikacja rejestracji nowego użytkownika z dzisiejszą datą urodzenia

<br>

|     | Elementy                 | Opis                                                                      |
| :-- | :----------------------- | :------------------------------------------------------------------------ |
| 1   | **ID:**                  | _024-TC-pl_                                                               |
| 2   | **Tytuł:**               | _Weryfikacja rejestracji nowego użytkownika z dzisiejszą datą urodzenia_  |
| 3   | **Warunki wstępne:**     | _- Aplikacja **automationpractice.pl** jest dostępna i działa poprawnie <br> - Strona http://www.automationpractice.pl jest otwarta_ |
| 4   | **Kroki:**               | _1. Kliknąć przycisk `Sign in` <br> 2. Wpisać losowy email <br> 3. Kliknąć przycisk `Create an account` <br> 4. Zaznaczyć w `Title` input `Mr.` <br> 5. W polu `First name` wpisać losowe imię <br> 6. W polu `Last name` wpisać losowe nazwisko <br> 7. W polu `Password` wpisać prawidłowe losowe hasło <br> 8. W `Date of Birth` wybrać datę dzisiejszą <br> 9. Zaznaczyć input `Sign up for our newsletter!` <br> 10. Kliknąć przycisk `Register`_ |
| 5   | **Oczekiwany rezultat:** | _Po wykonaniu powyższych kroków pojawia się komunikat: <br> [![Valid](https://img.shields.io/badge/There%20is%201%20error-f3515c)](#) <br> [![Valid](https://img.shields.io/badge/Invalid%20date%20of%20birth.-f3515c)](#)_ |
| 6   | **Warunek końcowy:**     | _Po wpisaniu daty urodzenia z dniem dzisiejszym użytkownik nie może utworzyć konta_ |
| 7   | **Wykonanie:**           | _Manualne i Automatyczne_                                                 |
