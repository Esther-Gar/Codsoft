function addQuestion() {
    const form = document.getElementById('quizForm');
    const questionNumber = form.querySelectorAll('label[for^="question"]').length + 1;

    const newQuestionLabel = document.createElement('label');
    newQuestionLabel.htmlFor = `question${questionNumber}`;
    newQuestionLabel.textContent = `Question ${questionNumber}:`;

    const newQuestionInput = document.createElement('input');
    newQuestionInput.type = 'text';
    newQuestionInput.id = `question${questionNumber}`;
    newQuestionInput.required = true;

    const newOption1Label = document.createElement('label');
    newOption1Label.htmlFor = `option${questionNumber}a`;
    newOption1Label.textContent = `Option ${questionNumber}a:`;

    const newOption1Input = document.createElement('input');
    newOption1Input.type = 'text';
    newOption1Input.id = `option${questionNumber}a`;
    newOption1Input.required = true;

    const newOption2Label = document.createElement('label');
    newOption2Label.htmlFor = `option${questionNumber}b`;
    newOption2Label.textContent = `Option ${questionNumber}b:`;

    const newOption2Input = document.createElement('input');
    newOption2Input.type = 'text';
    newOption2Input.id = `option${questionNumber}b`;
    newOption2Input.required = true;

    const newCorrectAnswerLabel = document.createElement('label');
    newCorrectAnswerLabel.htmlFor = `correctAnswer${questionNumber}`;
    newCorrectAnswerLabel.textContent = `Correct Answer ${questionNumber}:`;

    const newCorrectAnswerSelect = document.createElement('select');
    newCorrectAnswerSelect.id = `correctAnswer${questionNumber}`;
    newCorrectAnswerSelect.required = true;

    const option1 = document.createElement('option');
    option1.value = `option${questionNumber}a`;
    option1.textContent = `Option ${questionNumber}a`;

    const option2 = document.createElement('option');
    option2.value = `option${questionNumber}b`;
    option2.textContent = `Option ${questionNumber}b`;

    newCorrectAnswerSelect.appendChild(option1);
    newCorrectAnswerSelect.appendChild(option2);

    form.appendChild(newQuestionLabel);
    form.appendChild(newQuestionInput);
    form.appendChild(newOption1Label);
    form.appendChild(newOption1Input);
    form.appendChild(newOption2Label);
    form.appendChild(newOption2Input);
    form.appendChild(newCorrectAnswerLabel);
    form.appendChild(newCorrectAnswerSelect);
}

function createQuiz() {
    const form = document.getElementById('quizForm');
    const quizTitle = form.querySelector('#quizTitle').value;

   
    console.log('Quiz Title:', quizTitle);

    const questions = form.querySelectorAll('label[for^="question"]');
    questions.forEach((questionLabel) => {
        const questionNumber = questionLabel.htmlFor.replace('question', '');
        const question = form.querySelector(`#question${questionNumber}`).value;
        const option1 = form.querySelector(`#option${questionNumber}a`).value;
        const option2 = form.querySelector(`#option${questionNumber}b`).value;
        const correctAnswer = form.querySelector(`#correctAnswer${questionNumber}`).value;

        
        console.log(`Question ${questionNumber}: ${question}`);
        console.log(`Option 1: ${option1}`);
        console.log(`Option 2: ${option2}`);
        console.log(`Correct Answer: ${correctAnswer}`);
    });

    
}

function submitQuiz() {
    const form = document.getElementById('takeQuizForm');
    const selectedQuiz = form.querySelector('#selectQuiz').value;

    
    console.log('Selected Quiz:', selectedQuiz);

    
}
