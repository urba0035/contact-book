<template>
    <section>
        <h2>Add Contact</h2>

        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input id="firstName" v-model="contact.firstName" type="text" required />
            </div>

            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input id="lastName" v-model="contact.lastName" type="text" required />
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input id="email" v-model="contact.email" type="email" required />
            </div>

            <div class="form-group">
                <label for="phone">Phone</label>
                <input id="phone" v-model="contact.phone" type="text" />
            </div>

            <div class="form-group">
                <label for="address">Address</label>
                <textarea id="address" v-model="contact.address"></textarea>
            </div>

            <button type="submit">Create Contact</button>
        </form>
    </section>
</template>

<script>
import { addContact } from '../utils/contacts';

export default {
    name: 'AddContactView',
    data() {
        return {
            contact: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: ''
            }
        };
    },
    methods: {
        submitForm() {
            const newContact = addContact(this.contact);
            this.$router.push('/contact/' + newContact.id);
        }
    }
};
</script>