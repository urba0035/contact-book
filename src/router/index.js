import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactDetailsView from '../views/ContactDetailsView.vue';
import AddContactView from '../views/AddContactView.vue';
import EditContactView from '../views/EditContactView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/contact/:id',
        name: 'contact-details',
        component: ContactDetailsView
    },
    {
        path: '/new',
        name: 'add-contact',
        component: AddContactView
    },
    {
        path: '/edit/:id',
        name: 'edit-contact',
        component: EditContactView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;