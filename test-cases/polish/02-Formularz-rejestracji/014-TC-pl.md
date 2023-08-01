## 014-TC-pl Weryfikacja rejestracji nowego użytkownika bez wymaganego nazwiska

<br>

|     | Elementy                 | Opis                                                                    |
| :-- | :----------------------- | :---------------------------------------------------------------------- |
| 1   | **ID:**                  | _014-TC-pl_                                                             |
| 2   | **Tytuł:**               | _Weryfikacja rejestracji nowego użytkownika bez wymaganego nazwiska_    |
| 3   | **Warunki wstępne:**     | _- Aplikacja **automationpractice.pl** jest dostępna i działa poprawnie <br> - Strona http://www.automationpractice.pl jest otwarta_ |
| 4   | **Kroki:**               | _1. Kliknąć przycisk `Sign in` <br> 2. Wpisać email: `validation@gmx.com` <br> 3. Kliknąć przycisk `Create an account` <br> 4. W polu `First name` wpisać: `Jhon` <br> 5. W polu `Password` wpisać: `1a2b3c` <br> 6. Kliknąć przycisk `Register`_ |
| 5   | **Oczekiwany rezultat:** | _Po wykonaniu powyższych kroków pojawia się komunikat [![Valid](https://img.shields.io/badge/There%20is%201%20error-f3515c)](#)_ |
| 6   | **Warunek końcowy:**     | _Nie można zarejestrować użytkownika bez uzupełniania wymaganych danych `First name`, `Last name`, `Password`_ |
| 7   | **Wykonanie:**           | _Manualne i Automatyczne_                                               |
