import AOS from 'aos';
import 'aos/dist/aos.css';
import './_custom_aos.sass';

export default ({ app }) => {
    app.AOS = new AOS.init({
        startEvent: 'load',
        duration: 1000,
        once: true
    });
}