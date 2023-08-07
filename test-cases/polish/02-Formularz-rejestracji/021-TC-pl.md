## 021-TC-pl Weryfikacja rejestracji nowego użytkownika tylko z danymi nie wymaganymi

<br>

|     | Elementy                 | Opis                                                                    |
| :-- | :----------------------- | :---------------------------------------------------------------------- |
| 1   | **ID:**                  | _021-TC-pl_                                                             |
| 2   | **Tytuł:**               | _Weryfikacja rejestracji nowego użytkownika tylko z danymi nie wymaganymi_ |
| 3   | **Warunki wstępne:**     | _- Aplikacja **automationpractice.pl** jest dostępna i działa poprawnie <br> - Strona http://www.automationpractice.pl jest otwarta_ |
| 4   | **Kroki:**               | _1. Kliknąć przycisk `Sign in` <br> 2. Wpisać losowy email <br> 3. Kliknąć przycisk `Create an account` <br> 4. Zaznaczyć w `Title` input `Mr.` <br> 5. W `Date of Birth` wybrać datę `10 May 2002` <br> 6. Zaznaczyć input `Sign up for our newsletter!` <br> 7. Kliknąć przycisk `Register`_ |
| 5   | **Oczekiwany rezultat:** | _Po wykonaniu powyższych kroków pojawia się komunikat [![Valid](https://img.shields.io/badge/There%20is%203%20error-f3515c)](#)_ |
| 6   | **Warunek końcowy:**     | _Aplikacja nie zezwala na zarejestrowanie użytkownika tylko z danymi nie wymaganymi_ |
| 7   | **Wykonanie:**           | _Manualne i Automatyczne_                                               |
