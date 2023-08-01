## 018-TC-pl Weryfikacja rejestracji nowego użytkownika z jedną spacją w polu nazwisko

<br>

|     | Elementy                 | Opis                                                                    |
| :-- | :----------------------- | :---------------------------------------------------------------------- |
| 1   | **ID:**                  | _018-TC-pl_                                                             |
| 2   | **Tytuł:**               | _Weryfikacja rejestracji nowego użytkownika z jedną spacją w polu nazwisko_ |
| 3   | **Warunki wstępne:**     | _- Aplikacja **automationpractice.pl** jest dostępna i działa poprawnie <br> - Strona http://www.automationpractice.pl jest otwarta_ |
| 4   | **Kroki:**               | _1. Kliknąć przycisk `Sign in` <br> 2. Wpisać losowy email <br> 3. Kliknąć przycisk `Create an account` <br> 4. W polu `First name` wpisać losowe imię <br> 5. W polu `Last name` wpisać jedną spację <br> 6. W polu `Password` wpisać: `1a2b3c` <br> 7. Kliknąć przycisk `Register`_ |
| 5   | **Oczekiwany rezultat:** | _Po wykonaniu powyższych kroków pojawia się komunikat [![Valid](https://img.shields.io/badge/There%20is%201%20error-f3515c)](#)_ |
| 6   | **Warunek końcowy:**     | _Aplikacja nie zezwala na zarejestrowanie użytkownika z nazwiskiem zawierającym tylko spację_ |
| 7   | **Wykonanie:**           | _Manualne i Automatyczne_                                               |
