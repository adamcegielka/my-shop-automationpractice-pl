## 017-TC => MSA-10 User can create an account with one space in the first name field

<br>

|     | Elements                   | Description                                                                                        |
| :-- | :------------------------- | :------------------------------------------------------------------------------------------------- |
| 1   | **ID:**                    | _MSA-10_                                                                                            |
| 2   | **Title:**                 | _User can create an account with one space in the first name field_                     |
| 3   | **Environment:**           | _- Windows 10 Home <br> - Google Chrome versions 115.0.5790.170 <br> - Firefox Developer Edition versions 117.0b3 <br> - Opera versions 100.0.4815.76 <br> - Playwright 1.36.2 : chromium, firefox, webkit_ |
| 4   | **Preconditions:**         | _- The **automationpractice.pl** application is available and working properly <br> - The website http://www.automationpractice.pl  is open_                      |
| 5   | **Steps for reproduction** | _1. Click `Sign in` button <br> 2. Insert a random address email <br> 3. Click `Create an account` button <br> 4. In `Firs name` field enter one space <br> 5. In `Last name` field insert random name <br> 6. In `Password` field insert random password <br> 7. Click `Register` button_ |
| 7   | **Actual result:**         | _User can create an account_                                                                       |
| 6   | **Expected result:**       | _After following the above steps, the message [![Valid](https://img.shields.io/badge/There%20is%201%20error-f3515c)](#) appears_ |
| 8   | **Attachment:**            | _No_                                                                                               |
