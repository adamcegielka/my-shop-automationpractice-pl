// First name
export async function getRandomName() {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const usernameLength = 6;

  let username = '';
  for (let i = 0; i < usernameLength; i++) {
    username += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  const firstLetter = username.charAt(0).toUpperCase();
  const restOfName = username.slice(1).toLowerCase();

  const firstName = `${firstLetter}${restOfName}`;
  return firstName;
}
// console.log(getRandomName());

// -------

// Surname
export async function getRandomSurname() {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const usernameLength = 8;

  let username = '';
  for (let i = 0; i < usernameLength; i++) {
    username += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  const firstLetter = username.charAt(0).toUpperCase();
  const restOfSurname = username.slice(1).toLowerCase();

  const surname = `${firstLetter}${restOfSurname}`;
  return surname;
}
// console.log(getRandomSurname());
