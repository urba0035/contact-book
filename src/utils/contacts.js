const STORAGE_KEY = 'contact-book-contacts';

const defaultContacts = [
    {
        id: '1',
        firstName: 'Alex',
        lastName: 'Johnson',
        email: 'alex@example.com',
        phone: '555-123-4567',
        address: '123 Main Street'
    },
    {
        id: '2',
        firstName: 'Sophie',
        lastName: 'Martin',
        email: 'sophie@example.com',
        phone: '555-987-6543',
        address: '456 Oak Avenue'
    }
];

export function getContacts() {
    const savedContacts = localStorage.getItem(STORAGE_KEY);

    if (savedContacts) {
        return JSON.parse(savedContacts);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultContacts));
    return defaultContacts;
}

export function saveContacts(contacts) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
}

export function getContactById(id) {
    const contacts = getContacts();

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].id === id) {
            return contacts[i];
        }
    }

    return null;
}

export function addContact(contact) {
    const contacts = getContacts();

    contact.id = Date.now().toString();
    contacts.push(contact);

    saveContacts(contacts);

    return contact;
}

export function updateContact(updatedContact) {
    const contacts = getContacts();

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].id === updatedContact.id) {
            contacts[i] = updatedContact;
            break;
        }
    }

    saveContacts(contacts);
}

export function deleteContact(id) {
    const contacts = getContacts();

    const updatedContacts = contacts.filter(function(contact) {
        return contact.id !== id;
    });

    saveContacts(updatedContacts);
}
