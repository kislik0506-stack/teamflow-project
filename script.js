// Функция для переключения вкладок (разделов сайта)
function showSection(sectionId) {
    // 1. Скрываем все разделы
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // 2. Показываем нужный раздел
    const activePage = document.getElementById(sectionId);
    if (activePage) {
        activePage.classList.add('active');
    }

    // 3. Красим нужную кнопку в меню
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Ищем кнопку, которая вызывает эту функцию
    navButtons.forEach(btn => {
        if(btn.getAttribute('onclick').includes(sectionId)) {
            btn.classList.add('active');
        }
    });
}