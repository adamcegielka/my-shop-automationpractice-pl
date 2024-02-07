## 006-TC => MSA-6 User can create an account with a special character (=) in the email address

<br>

|     | Elements                   | Description                                                                                                                                                                         |
| :-- | :------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **ID:**                    | _MSA-6_                                                                                                                                                                             |
| 2   | **Title:**                 | _User can create an account with a special character (=) in the email address_                                                                                                      |
| 3   | **Environment:**           | _- Windows 10 Home <br> - Google Chrome versions 115.0.5790.110 <br> - Playwright 1.36.2 : chromium, firefox, webkit_                                                               |
| 4   | **Preconditions:**         | _The **automationpractice.pl** application is available and working properly_                                                                                                       |
| 5   | **Steps for reproduction** | _1. Go to http://www.automationpractice.pl <br> 2. Click `Sign in` button <br> 3. Enter the email with equation: `herko=uhlemann@gmx.com` <br> 4. Click `Create an account` button_ |
| 7   | **Actual result:**         | _User can create an account_                                                                                                                                                        |
| 6   | **Expected result:**       | _After following the above steps, the message [![Valid](https://img.shields.io/badge/Invalid%20email%20address.-f3515c)](#) appears_                                                |
| 8   | **Attachment:**            | _No_                                                                                                                                                                                |
