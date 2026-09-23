// Lightweight retrieval-practice widget for lessons.
// Usage: <div class="quiz" data-answer="1.23" data-tolerance="0.01">
//   ...prompt...
//   <label>...</label>
//   <input type="text" inputmode="decimal">
//   <button type="button">Check</button>
//   <div class="quiz-feedback"></div>
// </div>
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quiz').forEach((block) => {
    const input = block.querySelector('input');
    const button = block.querySelector('button');
    const feedback = block.querySelector('.quiz-feedback');
    const answer = parseFloat(block.dataset.answer);
    const tolerance = parseFloat(block.dataset.tolerance || '0.01');
    if (!input || !button || !feedback || Number.isNaN(answer)) return;

    const check = () => {
      const value = parseFloat(input.value);
      feedback.classList.remove('correct', 'incorrect');
      if (Number.isNaN(value)) {
        feedback.textContent = 'Type a number first.';
        return;
      }
      if (Math.abs(value - answer) <= tolerance) {
        feedback.textContent = 'Correct.';
        feedback.classList.add('correct');
      } else {
        feedback.textContent = 'Not quite — recheck the arithmetic and try again.';
        feedback.classList.add('incorrect');
      }
    };

    button.addEventListener('click', check);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') check(); });
  });
});
