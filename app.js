const btn = document.getElementById('btn');
const login = document.getElementById('login');
const password = document.getElementById('password');
const parag1 = document.getElementById('p-1');
const parag2 = document.getElementById('p-2');

btn.addEventListener('click', function () {
    // Email bo'sh bo‘lsa
    if (login.value.trim() === '') {
        parag2.style.display = 'block';
        parag1.style.display = 'none';
    } 
    // Parol 8 ta belgidan kam bo‘lsa
    else if (password.value.length < 8) {
        parag1.style.display = 'block';
        parag2.style.display = 'none';
    } 
    // Hammasi to‘g‘ri bo‘lsa
    else {
        parag1.style.display = 'none';
        parag2.style.display = 'none';

        // 🔁 Foydalanuvchini boshqa saytga yo'naltirish
        window.location.href = 'https://preeminent-speculoos-59e978.netlify.app/';  
    }
});


















