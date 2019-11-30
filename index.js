const controls = document.querySelectorAll('.controls input');

function handleEvent() {
    const suffix = this.dataset.size || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

controls.forEach(inputs => inputs.addEventListener('change', handleEvent));

controls.forEach(inputs => inputs.addEventListener('mousemove', handleEvent));