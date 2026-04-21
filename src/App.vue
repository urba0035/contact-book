<template>
    <div class="app">
        <header class="site-header">
            <h1>Contact Book</h1>

            <nav>
                <RouterLink to="/">Contacts</RouterLink>
                <RouterLink to="/new">Add Contact</RouterLink>
            </nav>
        </header>

        <main class="page">
            <RouterView />
        </main>
    </div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: #f4f6f8;
    color: #222;
}

a {
    text-decoration: none;
}

.app {
    max-width: 900px;
    margin: 0 auto;
    padding: 24px;
}

.site-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    flex-wrap: wrap;
}

.site-header nav {
    display: flex;
    gap: 16px;
}

.site-header a {
    color: #0057b8;
    font-weight: bold;
}

.page {
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
}

input,
button,
textarea {
    font: inherit;
}

input,
textarea {
    width: 100%;
    padding: 10px;
    margin-top: 6px;
    border: 1px solid #ccc;
    border-radius: 8px;
}

button {
    padding: 10px 14px;
    border: none;
    border-radius: 8px;
    background: #0057b8;
    color: white;
    cursor: pointer;
}

button.delete {
    background: #c62828;
}

.form-group {
    margin-bottom: 16px;
}

.actions {
    display: flex;
    gap: 12px;
    margin-top: 20px;
    flex-wrap: wrap;
}

.contact-list {
    list-style: none;
    padding: 0;
    margin: 20px 0 0;
}

.contact-list li {
    padding: 12px 0;
    border-bottom: 1px solid #e5e5e5;
}

.contact-list a {
    color: #222;
    font-weight: bold;
}

.search-box {
    margin-bottom: 20px;
}

.detail-row {
    margin-bottom: 12px;
}
</style>
