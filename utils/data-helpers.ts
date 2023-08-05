import * as crypto from 'crypto';

export async function getRandomString() {
  return crypto.randomBytes(6).toString('hex');
}

export async function getRandomNumber() {
  return Math.floor(Math.random() * 10000 + 1);
}
