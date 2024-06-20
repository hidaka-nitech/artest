document.addEventListener('DOMContentLoaded', () => {
            const model1 = document.getElementById('model1');
            const model2 = document.getElementById('model2');
            const Btn = document.getElementById('center');

            Btn.addEventListener('click', () => {
            model1.setAttribute('visible', false);
            Btn.textContent = 'Show Model';
            });
        });
