## Przypadki testowe

1. Rejestracja:

- [x] 000-TC-pl Walidacja pola wprowadzania adresu e-mail
- [x] 001-TC-pl Weryfikacja poprawności adresu e-mail ze specją na początku
- [x] 002-TC-pl Weryfikacja poprawności adresu e-mail z kropką na początku
- [x] 003-TC-pl Weryfikacja poprawności adresu e-mail z myślnikiem na początku
- [x] 004-TC-pl Weryfikacja poprawności adresu e-mail z podkreślnikiem na początku
- [ ] Weryfikacja poprawności adresu e-mail ze znakami specjalnymi (=)(')(&)
- [ ] Walidacja formularza rejestracji
- [ ] Weryfikacja rejestracji nowego użytkownika podając tylko imię
- [ ] Weryfikacja rejestracji nowego użytkownika podając tylko nazwisko
- [ ] Weryfikacja rejestracji nowego użytkownika podając tylko hasło
- [ ] Weryfikacja rejestracji nowego użytkownika bez wymaganego imienia
- [ ] Weryfikacja rejestracji nowego użytkownika bez wymaganego nazwiska
- [ ] Weryfikacja rejestracji nowego użytkownika bez wymaganego hasła
- [ ] Weryfikacja rejestracji nowego użytkownika z 4 znakami w polu hasło
- [ ] Weryfikacja rejestracji nowego użytkownika z jedną spacją w polu imię
- [ ] Weryfikacja rejestracji nowego użytkownika z jedną spacją w polu nazwisko
- [ ] Weryfikacja rejestracji nowego użytkownika z pięciokrotną spacją w polu hasło
- [ ] Weryfikacja rejestracji nowego użytkownika używając spacji we wszystkich polach
- [ ] Weryfikacja rejestracji nowego użytkownika z pełnymi danymi
- [ ] Weryfikacja rejestracji nowego użytkownika z istniejącym e-mail
- [ ] Weryfikacja powrotu z rejestracji użytkownika do strony głównej

3. Dodanie adresu:

- [ ] Walidacja formularza dodawania adresu
- [ ] Weryfikacja dodania adresu bez wprowadzania wymaganego pola 'Address'
- [ ] Weryfikacja dodania adresu dodając spację w polu 'Address'
- [ ] Weryfikacja dodania adresu dodając same cyfry w polu 'Address'
- [ ] Weryfikacja dodania adresu bez wprowadzania wymaganego pola 'City'
- [ ] Weryfikacja dodania adresu dodając spację w polu 'City'
- [ ] Weryfikacja dodania adresu dodając cyfry w polu 'City'
- [ ] Weryfikacja dodania adresu bez wybierania wymaganej opcji 'State'
- [ ] Weryfikacja dodania adresu z możliwością wybory w polu 'State'
- [ ] Weryfikacja dodania adresu bez wprowadzania wymaganego pola 'Zip/Postal Code'
- [ ] Weryfikacja dodania adresu dodając spację w polu 'Zip/Postal Code'
- [ ] Weryfikacja dodania adresu dodając 5 spacji w polu 'Zip/Postal Code'
- [ ] Weryfikacja dodania adresu dodając 5 liter 'o' w polu 'Zip/Postal Code'
- [ ] Weryfikacja dodania adresu z możliwością wybory kraju w polu 'Country'
- [ ] Weryfikacja dodania adresu bez wprowadzania wymaganego pola 'Home phone' lub 'Mobile phone'
- [ ] Weryfikacja dodania adresu dodając spację w polu 'Home phone' lub 'Mobile phone'
- [ ] Weryfikacja dodania adresu dodając napis 'phone' w polu 'Home phone' lub 'Mobile phone'
- [ ] Weryfikacja dodania adresu dodając 2 cyfry w polu 'Home phone' lub 'Mobile phone'
- [ ] Weryfikacja dodania adresu bez wprowadzania wymaganego pola 'Please assign an address title for future reference'
- [ ] Weryfikacja dodania adresu dodając spację w polu 'Please assign an address title for future reference'
- [ ] Weryfikacja dodania adresu z poprawnymi danymi tylko w wymaganych polach
- [ ] Weryfikacja dodania adresu z poprawnymi danymi tylko we wszystkich polach
- [ ] Weryfikacja aktualizacji dodanego adresu
- [ ] Weryfikacja usunięcia dodanego adresu
- [ ] Weryfikacja dodania następnego adresu
- [ ] Weryfikacja powrotu z 'My addresses' do strony głównej

4. Zmiana hasła:

- [ ] Weryfikacja zmiany hasła na 4 znaki
- [ ] Weryfikacja zmiany hasła na 5 znaków spacji
- [ ] Weryfikacja zmiany hasła na 4 znaki polu potwierdzającym
- [ ] Weryfikacja zmiany hasła na to samo hasło
- [ ] Weryfikacja zmiany hasła z zaznaczeniem newsletter
- [ ] Weryfikacja powrotu ze 'Your personal information' do strony głównej

5. Logowanie:

- [ ] Walidacja formularza logowania
- [ ] Weryfikacja logowania z nieprawidłowym e-mail
- [ ] Weryfikacja logowania z nieprawidłowym hasłem
- [ ] Weryfikacja logowania z poprawnymi danymi
- [ ] Weryfikacja wylogowania użytkownika
- [ ] Weryfikacja wylogowania użytkownika i ponownego logowania

6. Formularz kontaktowy:

- [ ] Walidacja formularza kontaktowego
- [ ] Weryfikacja wysłania wiadomości tylko z uzupełnionym polem 'Message'
- [ ] Weryfikacja wysłania wiadomości tylko z pustym polem 'Message'
- [ ] Weryfikacja wysłania wiadomości tylko z e-mail
- [ ] Weryfikacja wysłania wiadomości bez uzupełnienia 'Email address'
- [ ] Weryfikacja wysłania wiadomości bez wybory 'Subject Heading'
- [ ] Weryfikacja wysłania wiadomości bez uzupełnienia 'Order reference'
- [ ] Weryfikacja wysłania wiadomości bez załącznika
- [ ] Weryfikacja wysłania wiadomości z załącznikiem
- [ ] Weryfikacja wysłania wiadomości z wyborm 'Customer service' w polu 'Subject Heading'
- [ ] Weryfikacja wysłania wiadomości z wyborm 'Webmaster' w polu 'Subject Heading'
- [ ] Weryfikacja powrotu z 'Contact us' do strony głównej

7. Nawigacja po menu górnym:

- [ ] Weryfikacja poprawności wyświetlania stron 'Women'
- [ ] Weryfikacja powrotu z 'Women' do strony głównej
- [ ] Weryfikacja poprawności wyświetlania stron 'Blouses'
- [ ] Weryfikacja poprawności wyświetlania stron 'Dresses'
- [ ] Weryfikacja powrotu z 'Dresses' do strony głównej
- [ ] Weryfikacja poprawności wyświetlania stron 'Evening Dresses'
- [ ] Weryfikacja poprawności wyświetlania stron 'Casual Dresses'
- [ ] Weryfikacja poprawności wyświetlania stron 'T-shirts'
- [ ] Weryfikacja powrotu z 'T-shirts' do strony głównej
- [ ] Weryfikacja poprawności wyświetlania stron 'Blog'

8. Karuzela:

- [ ] Weryfikacja przycisku w karuzeli do przodu
- [ ] Weryfikacja przycisku w karuzeli do tyłu
- [ ] Weryfikacja przycisku 'SHOP NOW!' w karuzeli
- [ ] Weryfikacja przycisku 'BEST SELLERS'
- [ ] Weryfikacja przycisku 'BEST SELLERS' i powrót do 'POPULAR'

9. Nawigacja po lewej kolumnie:

- [ ] Weryfikacja lewej kolumny produktów 'Tops' z 'WOMEN'
- [ ] 

10. Stopka:

- [ ] Walidacja Newsletter
- [ ] Weryfikacja zapisania do Newsletter
- [ ] Weryfikacja przycisku śledzenia na Facebook
- [ ] Weryfikacja przycisku śledzenia na Twitter
- [ ] Weryfikacja adresu e-mail
- [ ] Weryfikacja przejścia przez stopkę na stronę 'Women'
- [ ] Weryfikacja przejścia przez stopkę na stronę 'Our stores'
- [ ] Weryfikacja przejścia przez stopkę na stronę 'Terms and conditions of use'
- [ ] Weryfikacja przejścia przez stopkę na stronę 'About us'
- [ ] Weryfikacja przejścia przez stopkę na stronę 'My account'
- [ ] Weryfikacja przejścia przez stopkę na stronę 'My orders'
- [ ] Weryfikacja przejścia przez stopkę na stronę 'My credit slips'
- [ ] Weryfikacja przejścia przez stopkę na stronę 'My addresses'
- [ ] Weryfikacja przejścia przez stopkę na stronę 'My personal info'
- [ ] Weryfikacja przycisku 'Sign out' przez stopkę

11. Wyszukiwanie produktów:

- [ ] Walidacja wyszukiwarki
- [ ] Weryfikacja wyszykiwarki wpisując spacje
- [ ] Weryfikacja wyszykiwarki wpisując cyfry
- [ ] Weryfikacja wyszykiwarki wpisując 'random'
- [ ] Weryfikacja wyszykiwarki wpisując 'women'
- [ ] Weryfikacja wyszykiwarki wpisując istniejący produkt 'Blouse'
- [ ] Weryfikacja sortowania produktów od najniższej ceny
- [ ] Weryfikacja sortowania produktów alfabetyczni
- [ ] Weryfikacja sortowania produktów według referencji
- [ ] Weryfikacja zmianay widoku wyświetlania produktów
- [ ] Weryfikacja zmianay widoku wyświetlania produktów i sortowania produktów alfabetyczni
- [ ] Weryfikacja zmianay widoku wyświetlania produktów i powrót do porzedniego widoku

12. Dodawanie produktów do koszyka:

- [ ] Weryfikacja przyciku 'Cart' bez produktów
- [ ] Weryfikacja przyciku 'Cart' z produktami
- [ ] Weryfikacja powiększenia zdjęcia produktu podczas dodawania do koszyka
- [ ] Weryfikacja zmiany zdjęcia produktu podczas dodawania do koszyka
- [ ] Weryfikacja dodania jednego produktu do koszyka 
- [ ] Weryfikacja dodania jednego produktu do koszyka zwiększając jego ilość
- [ ] Weryfikacja dodania jednego produktu do koszyka sprawdzając przycisk odejmowania produktu
- [ ] Weryfikacja dodania jednego produktu do koszyka zmnieniając jego rozmiar
- [ ] Weryfikacja dodania jednego produktu do koszyka zmnieniając jego kolor
- [ ] Weryfikacja dodania kilku produktów do koszyka
- [ ] Weryfikacja usunięcia produktu z menu rozwijanego 'Cart'
- [ ] Weryfikacja informacji o produkcie z menu rozwijanego 'Cart'
- [ ] Weryfikacja przycisku 'Check out' z menu rozwijanego 'Cart'
- [ ] Weryfikacja usunięcia produktu z koszyka
- [ ] Weryfikacja usunięcia jednego produktu z dwóch z koszyka
- [ ] Weryfikacja usunięcia wszystkich produktów z koszyka
- [ ] Weryfikacja zwiększenia ilości produktu w koszyku
- [ ] Weryfikacja zmniejszenia ilości produktu w koszyku

13. Realizacja zamówień:

- [ ] 

14. Responsywność:

- [ ] 


<!-- 
http://www.automationpractice.pl/
https://etsydemo.knowband.com/en/
-->
