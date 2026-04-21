<template>
    <section v-if="contact">
        <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>

        <div class="detail-row">
            <strong>First Name:</strong> {{ contact.firstName }}
        </div>

        <div class="detail-row">
            <strong>Last Name:</strong> {{ contact.lastName }}
        </div>

        <div class="detail-row">
            <strong>Email:</strong> {{ contact.email }}
        </div>

        <div class="detail-row">
            <strong>Phone:</strong> {{ contact.phone }}
        </div>

        <div class="detail-row">
            <strong>Address:</strong> {{ contact.address }}
        </div>

        <div class="actions">
            <RouterLink :to="'/edit/' + contact.id">
                <button>Edit Contact</button>
            </RouterLink>

            <button class="delete" @click="removeContact">Delete Contact</button>
        </div>
    </section>

    <p v-else>Contact not found.</p>
</template>

<script>
import { deleteContact, getContactById } from '../utils/contacts';

export default {
    name: 'ContactDetailsView',
    data() {
        return {
            contact: null
        };
    },
    created() {
        this.contact = getContactById(this.$route.params.id);
    },
    methods: {
        removeContact() {
            deleteContact(this.$route.params.id);
            this.$router.push('/');
        }
    }
};
</script>
