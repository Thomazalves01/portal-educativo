function inicializarQuiz() {
    var btnSubmit = document.getElementById('btn-submit-quiz');
    var quizForm = document.getElementById('quiz-form');
    var resultBox = document.getElementById('quiz-result');

    if (!btnSubmit || !quizForm || !resultBox) return;

    btnSubmit.onclick = function(e) {
        e.preventDefault();
        
        var q1 = quizForm.querySelector('input[name="q1"]:checked');
        var q2 = quizForm.querySelector('input[name="q2"]:checked');

        if (!q1 || !q2) {
            resultBox.className = 'alert alert-warning';
            resultBox.innerHTML = '<strong>Atenção:</strong> Por favor, responda a todas as perguntas antes de validar.';
            resultBox.classList.remove('hidden');
            return;
        }

        var score = 0;
        if (q1.value === 'B') score++;
        if (q2.value === 'B') score++;

        resultBox.classList.remove('hidden');
        
        if (score === 2) {
            resultBox.className = 'alert alert-success';
            resultBox.innerHTML = '<strong>Parabéns!</strong> Você acertou todas as perguntas (2/2)!';
        } else if (score === 1) {
            resultBox.className = 'alert alert-warning';
            resultBox.innerHTML = '<strong>Bom trabalho!</strong> Você acertou 1 de 2 perguntas.';
        } else {
            resultBox.className = 'alert alert-danger';
            resultBox.innerHTML = '<strong>Atenção:</strong> Você não acertou nenhuma pergunta. Tente novamente!';
        }
    };
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarQuiz);
} else {
    inicializarQuiz();
}