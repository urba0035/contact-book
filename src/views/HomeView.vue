<template>
    <section>
        <h2>All Contacts</h2>

        <div class="search-box">
            <label for="search">Search by first or last name</label>
            <input
                id="search"
                v-model="searchTerm"
                type="text"
                placeholder="Search contacts..."
            />
        </div>

        <ul class="contact-list">
            <li v-for="contact in filteredContacts" :key="contact.id">
                <RouterLink :to="'/contact/' + contact.id">
                    {{ contact.lastName }}, {{ contact.firstName }}
                </RouterLink>
            </li>
        </ul>

        <p v-if="filteredContacts.length === 0">No contacts found.</p>
    </section>
</template>

<script>
import { getContacts } from '../utils/contacts';

export default {
    name: 'HomeView',
    data() {
        return {
            contacts: [],
            searchTerm: ''
        };
    },
    created() {
        this.contacts = getContacts();
    },
    computed: {
        filteredContacts() {
            const search = this.searchTerm.toLowerCase();

            return this.contacts
                .filter((contact) => {
                    return (
                        contact.firstName.toLowerCase().includes(search) ||
                        contact.lastName.toLowerCase().includes(search)
                    );
                })
                .sort((a, b) => {
                    return a.lastName.localeCompare(b.lastName);
                });
        }
    }
};
</script>