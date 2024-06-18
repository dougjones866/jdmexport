import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js';
// import 'boxicons';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import Consultation from './components/Consultation.vue';
import Contact from './components/Contact.vue';
import ContactForm from './components/ContactForm.vue'; // Uncomment this line
// import ContactForm from './components/ContactForm.vue';

const app=  createApp(App)



app.use(router);

app.component('the-header', TheHeader);
app.component('the-footer', TheFooter);
app.component('consultation', Consultation);
app.component('contact-form', ContactForm); // Uncomment this line


app.mount('#app');