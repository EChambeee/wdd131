import { participantTemplate, successTemplate } from './Templates.js';

let participantCount = 1;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add').addEventListener('click', addParticipant);
  document.getElementById('registrationForm').addEventListener('submit', submitForm);
});

function addParticipant() {
  participantCount++;
  const participantHTML = participantTemplate(participantCount);
  document.querySelector('.participants').insertAdjacentHTML('beforeend', participantHTML);
}

function submitForm(event) {
  event.preventDefault();

  const fees = totalFees();
  const adultName = document.getElementById('adult_name').value;
  const summaryElement = document.getElementById('summary');

  document.getElementById('registrationForm').style.display = 'none';
  summaryElement.style.display = 'block';
  summaryElement.innerHTML = successTemplate({ adultName, participantCount, fees });
}

function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements];
  return feeElements.reduce((total, feeElement) => total + Number(feeElement.value), 0);
}