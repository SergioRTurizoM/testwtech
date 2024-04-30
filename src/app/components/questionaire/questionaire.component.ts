import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-questionaire',
  standalone: true,
  imports: [FormsModule, MatRadioModule, MatButtonModule, MatCardModule, ReactiveFormsModule],
  templateUrl: './questionaire.component.html',
  styleUrl: './questionaire.component.css'
})
export class QuestionaireComponent implements OnInit {

  questionForm: any;

  questions = [
    {
      question: '¿Cuál es la diferencia fundamental entre un argumento deductivo y un argumento inductivo?',
      options: [
        { id: 'a', text: 'Los argumentos deductivos se basan en premisas que otorgan un grado de probabilidad a la conclusión, mientras que los argumentos inductivos garantizan la verdad de la conclusión.' },
        { id: 'b', text: 'Los argumentos deductivos son siempre inválidos, mientras que los argumentos inductivos son siempre fuertes.' },
        { id: 'c', text: 'La diferencia radica en que los argumentos deductivos no requieren premisas, mientras que los inductivos sí.' },
        { id: 'd', text: 'Los argumentos deductivos aseguran que la verdad de las premisas conduce necesariamente a la verdad de la conclusión, mientras que los argumentos inductivos otorgan un grado de probabilidad a la conclusión.' }
      ],
      correctAnswer: "d"
    },
    {
      question: '¿Qué aspecto de los argumentos NO será evaluado en la prueba de comunicación escrita, según lo establecido en el texto?',
      options: [
        { id: 'a', text: 'La corrección de su presentación formal.' },
        { id: 'b', text: 'La claridad de su expresión.' },
        { id: 'c', text: 'La validez de los argumentos.' },
        { id: 'd', text: 'La pertinencia de los argumentos para justificar el punto central del escrito.' }
      ],
      correctAnswer: "c"
    }
  ];


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const formControls: any = {};
    this.questions.forEach((question, index) => {
      formControls['question' + question.question] = new FormControl();
    });
    this.questionForm = new FormGroup(formControls);
  }

onSubmit() {
  const userAnswers = this.questionForm.value;
  this.questions.forEach(question => {
    const userAnswer = userAnswers['question' + question.question].id;
    if (userAnswer === question.correctAnswer) {
      console.log(`Respuesta correcta para la pregunta: ${question.question}`);
      Swal.fire(`Respuesta correcta para la pregunta: ${question.question}`);
    } else {
      console.log(`Respuesta incorrecta para la pregunta: ${question.question}`);
      Swal.fire({
        title: "Revisa",
        text: `Respuesta incorrecta para la pregunta: ${question.question}`,
        icon: "question"
      });
    }
  });
}

}
