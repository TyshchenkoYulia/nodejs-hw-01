import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    const removeRandomContacts = [];
    for (const contact of contacts) {
      if (Math.random() >= 0.5) {
        removeRandomContacts.push(contact);
      }
    }
    await fs.writeFile(PATH_DB, JSON.stringify(removeRandomContacts));
  } catch (error) {
    console.log(error);
  }
};

await removeLastContact();
