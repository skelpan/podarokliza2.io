document.addEventListener('DOMContentLoaded', function() {
    // Создание звездного неба
    createStars();
    
    // Создание плавающих элементов
    createFloatingElements();
    
    // Настройка интерактивных элементов
    setupInteractivity();
    
    // Запуск анимаций
    startAnimations();
    
    // Инициализация создания созвездий
    initConstellationMode();
});

// Создание звездного неба
function createStars() {
    const starsContainer = document.querySelector('.stars-container');
    const starCount = 300;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Случайный размер и позиция
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Случайная задержка анимации
        star.style.animationDelay = `${Math.random() * 4}s`;
        
        starsContainer.appendChild(star);
    }
}

// Создание плавающих элементов
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    
    for (let i = 0; i < 20; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');
        
        // Случайная позиция
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        
        // Случайная задержка анимации
        element.style.animationDelay = `${Math.random() * 10}s`;
        
        // Случайный размер
        const size = Math.random() * 20 + 15;
        element.style.fontSize = `${size}px`;
        
        // Случайная иконка
        const icons = ['fas fa-atom', 'fas fa-meteor', 'fas fa-rocket', 'fas fa-star', 'fas fa-moon', 'fas fa-satellite'];
        const iconClass = icons[Math.floor(Math.random() * icons.length)];
        
        const icon = document.createElement('i');
        icon.className = iconClass;
        element.appendChild(icon);
        
        container.appendChild(element);
    }
}

// Настройка интерактивных элементов
function setupInteractivity() {
    const showMoreBtn = document.getElementById('show-more');
    const closeExtraBtn = document.getElementById('close-extra');
    const extraMessage = document.getElementById('extra-message');
    
    // Показать дополнительное поздравление
    showMoreBtn.addEventListener('click', () => {
        extraMessage.classList.add('active');
    });
    
    // Скрыть дополнительное поздравление
    closeExtraBtn.addEventListener('click', () => {
        extraMessage.classList.remove('active');
    });
    
    // Клик вне области для закрытия
    extraMessage.addEventListener('click', (e) => {
        if (e.target === extraMessage) {
            extraMessage.classList.remove('active');
        }
    });
    
    // Добавляем возможность изменения имени
    const nameElement = document.querySelector('.name');
    nameElement.addEventListener('click', () => {
        const name = prompt('Введите имя именинницы:', nameElement.textContent);
        if (name && name.trim() !== '') {
            nameElement.textContent = name;
        }
    });
}

// Запуск анимаций
function startAnimations() {
    // Создаем частицы вокруг черной дыры
    createBlackHoleParticles();
    
    // Запускаем летающие формулы
    createFloatingFormulas();
}

// Создание частиц вокруг черной дыры
function createBlackHoleParticles() {
    const blackHole = document.querySelector('.black-hole');
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Случайная позиция на орбите
        const angle = (i / 30) * 360;
        const radius = 180 + Math.random() * 40;
        
        particle.style.width = `${Math.random() * 4 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.background = '#ff00cc';
        particle.style.borderRadius = '50%';
        particle.style.position = 'absolute';
        particle.style.boxShadow = '0 0 10px #ff00cc';
        
        // Анимация движения по орбите
        const duration = 20 + Math.random() * 20;
        particle.style.animation = `orbit-particle ${duration}s linear infinite`;
        
        // Начальная позиция
        const rad = angle * (Math.PI / 180);
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        
        particle.style.transform = `translate(${x}px, ${y}px)`;
        
        blackHole.appendChild(particle);
    }
    
    // Добавляем ключевые кадры для анимации
    const style = document.createElement('style');
    style.textContent = `
        @keyframes orbit-particle {
            0% { transform: rotate(0deg) translateX(180px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(180px) rotate(-360deg); }
        }
    `;
    document.head.appendChild(style);
}

// Создание плавающих формул
function createFloatingFormulas() {
    const formulas = [
        "E = mc²",
        "F = ma",
        "ψ = ψ(x,t)",
        "∇·E = ρ/ε₀",
        "λ = h/p",
        "S = k log Ω"
    ];
    
    const universe = document.querySelector('.universe');
    
    formulas.forEach((formula, index) => {
        const formulaElement = document.createElement('div');
        formulaElement.classList.add('floating-formula');
        formulaElement.textContent = formula;
        
        // Случайная позиция
        formulaElement.style.left = `${10 + Math.random() * 80}%`;
        formulaElement.style.top = `${10 + Math.random() * 80}%`;
        
        // Случайная задержка анимации
        formulaElement.style.animationDelay = `${index * 2}s`;
        
        universe.appendChild(formulaElement);
    });
    
    // Добавляем стили для формул
    const style = document.createElement('style');
    style.textContent = `
        .floating-formula {
            position: fixed;
            font-family: 'Courier New', monospace;
            color: rgba(77, 238, 234, 0.7);
            font-size: 1.2rem;
            font-weight: bold;
            pointer-events: none;
            z-index: 2;
            animation: float-formula 15s infinite ease-in-out;
            text-shadow: 0 0 10px rgba(77, 238, 234, 0.5);
        }
        
        @keyframes float-formula {
            0%, 100% { 
                transform: translateY(0) rotate(0deg) scale(1);
                opacity: 0.3;
            }
            50% { 
                transform: translateY(-40px) rotate(5deg) scale(1.1);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
}

// Инициализация режима создания созвездий
function initConstellationMode() {
    const toggleBtn = document.getElementById('toggle-constellation');
    const clearBtn = document.getElementById('clear-constellation');
    const exitBtn = document.getElementById('exit-constellation');
    const constellationMode = document.querySelector('.constellation-mode');
    const canvas = document.getElementById('constellation-canvas');
    const ctx = canvas.getContext('2d');
    
    let isConstellationMode = false;
    let stars = [];
    
    // Настройка canvas
    function setupCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.pointerEvents = isConstellationMode ? 'auto' : 'none';
    }
    
    // Переключение режима создания созвездий
    toggleBtn.addEventListener('click', () => {
        isConstellationMode = !isConstellationMode;
        
        if (isConstellationMode) {
            constellationMode.classList.add('active');
            setupCanvas();
        } else {
            constellationMode.classList.remove('active');
            canvas.style.pointerEvents = 'none';
        }
    });
    
    // Очистка созвездия
    clearBtn.addEventListener('click', () => {
        stars = [];
        drawConstellation();
    });
    
    // Выход из режима
    exitBtn.addEventListener('click', () => {
        isConstellationMode = false;
        constellationMode.classList.remove('active');
        canvas.style.pointerEvents = 'none';
    });
    
    // Обработка кликов для создания звезд
    canvas.addEventListener('click', (e) => {
        if (!isConstellationMode) return;
        
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Добавляем звезду
        stars.push({ x, y });
        
        // Рисуем созвездие
        drawConstellation();
    });
    
    // Рисование созвездия
    function drawConstellation() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Рисуем линии между звездами
        ctx.strokeStyle = 'rgba(77, 238, 234, 0.6)';
        ctx.lineWidth = 2;
        
        for (let i = 0; i < stars.length - 1; i++) {
            for (let j = i + 1; j < stars.length; j++) {
                const distance = Math.sqrt(
                    Math.pow(stars[j].x - stars[i].x, 2) + 
                    Math.pow(stars[j].y - stars[i].y, 2)
                );
                
                if (distance < 200) {
                    ctx.beginPath();
                    ctx.moveTo(stars[i].x, stars[i].y);
                    ctx.lineTo(stars[j].x, stars[j].y);
                    ctx.stroke();
                }
            }
        }
        
        // Рисуем звезды
        stars.forEach(star => {
            // Внешнее свечение
            ctx.beginPath();
            ctx.arc(star.x, star.y, 15, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(77, 238, 234, 0.2)';
            ctx.fill();
            
            // Сама звезда
            ctx.beginPath();
            ctx.arc(star.x, star.y, 8, 0, Math.PI * 2);
            ctx.fillStyle = '#4deeea';
            ctx.fill();
            
            // Внутренняя часть
            ctx.beginPath();
            ctx.arc(star.x, star.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
        });
    }
    
    // Инициализация canvas
    setupCanvas();
    window.addEventListener('resize', setupCanvas);
}