import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const newArray = [];

    if (contacts && contacts.length > 0) {
      newArray.pop(contacts);
    }
    // return contacts;

    await fs.writeFile(PATH_DB, JSON.stringify());
  } catch (error) {
    console.log(error);
  }
};

await removeLastContact();
