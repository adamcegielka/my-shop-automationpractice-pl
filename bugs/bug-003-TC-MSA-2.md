## 003-TC => MSA-2 User can create an account with a hyphen at the beginning of the email

<br>

|     | Elements                   | Description                                                                                        |
| :-- | :------------------------- | :------------------------------------------------------------------------------------------------- |
| 1   | **ID:**                    | _MSA-2_                                                                                            |
| 2   | **Title:**                 | _User can create an account with a hyphen at the beginning of the email_                           |
| 3   | **Environment:**           | _- Windows 10 Home <br> - Google Chrome versions 115.0.5790.110 (64-bit) <br> - Playwright 1.36.2_ |
| 4   | **Preconditions:**         | _The **automationpractice.pl** application is available and working properly_                      |
| 5   | **Steps for reproduction** | _1. Go to http://www.automationpractice.pl <br> 2. Click `Sign in` button <br> 3. Enter the email with a hyphen at the beginning: `-herko.uhlemann@gmx.com` <br> 4. Click `Create an account` button_ |
| 7   | **Actual result:**         | _User can create an account_                                                                       |
| 6   | **Expected result:**       | _Email with a hyphen at the beginning will not create a new accountd_                              |
| 8   | **Attachment:**            | _No_                                                                                               |