<template>
    <section v-if="contact">
        <h2>Edit Contact</h2>

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

            <button type="submit">Save Changes</button>
        </form>
    </section>

    <p v-else>Contact not found.</p>
</template>

<script>
import { getContactById, updateContact } from '../utils/contacts';

export default {
    name: 'EditContactView',
    data() {
        return {
            contact: null
        };
    },
    created() {
        const foundContact = getContactById(this.$route.params.id);

        if (foundContact) {
            this.contact = { ...foundContact };
        }
    },
    methods: {
        submitForm() {
            updateContact(this.contact);
            this.$router.push('/contact/' + this.contact.id);
        }
    }
};
</script>