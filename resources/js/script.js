const accordion = document.getElementById("section");
const accordionItems = [...document.querySelectorAll(".section__item")];
const questionsText = [...document.querySelectorAll(".question-box__text")];
const imgs = [...document.querySelectorAll(".question-box__img")];
accordion.addEventListener("click", (e) => {
  const targetItem = e.target.classList;

  if (targetItem.contains("question-box")) {
    const answer = e.target.parentElement.lastElementChild;
    const answerText = answer.firstElementChild;
    const questionText = e.target.firstElementChild;
    const img = e.target.lastElementChild;

    if (answer.classList.contains("answer")) {
      answerText.classList.toggle("answer__text--active");
      answer.classList.toggle("answer--active");
    }
    img.classList.toggle("question-box__img--active");
    questionText.classList.toggle("question-box__text--active");

    questionsText.forEach((item) => {
      if (
        item.classList.contains("question-box__text--active") &&
        item != questionText
      )
        item.classList.remove("question-box__text--active");
    });

    imgs.forEach((item) => {
      if (item.classList.contains("question-box__img--active") && item != img) {
        item.classList.remove("question-box__img--active");
      }
    });
    accordionItems.forEach((item) => {
      if (
        item.lastElementChild.classList.contains("answer--active") &&
        item.lastElementChild != answer
      ) {
        item.lastElementChild.classList.remove("answer--active");
        item.lastElementChild.firstElementChild.classList.remove(
          "answer__text--active"
        );
      }
    });
    // End of first if block
  } else if (
    // targetItem.contains("question-box") ||
    targetItem.contains("question-box__text") ||
    targetItem.contains("question-box__img")
  ) {
    const answer = e.target.parentElement.nextElementSibling;
    const answerText = answer.firstElementChild;
    const questionText = e.target;

    if (answer.classList.contains("answer")) {
      answerText.classList.toggle("answer__text--active");
      answer.classList.toggle("answer--active");

      // if we click on h2 box (question-box__text)
      if (e.target.classList.contains("question-box__text")) {
        e.target.classList.toggle("question-box__text--active");
        e.target.nextElementSibling.classList.toggle(
          "question-box__img--active"
        );
        questionsText.forEach((item) => {
          if (
            item.classList.contains("question-box__text--active") &&
            item != questionText
          )
            item.classList.remove("question-box__text--active");
        });

        // Remove the active for every img unless the img selected
        imgs.forEach((item) => {
          if (
            item.classList.contains("question-box__img--active") &&
            item != e.target.nextElementSibling
          )
            item.classList.remove("question-box__img--active");
        });

        // If we click on img icon
      } else if (e.target.classList.contains("question-box__img")) {
        e.target.previousElementSibling.classList.toggle(
          "question-box__text--active"
        );

        e.target.classList.toggle("question-box__img--active");

        imgs.forEach((item) => {
          if (
            item.classList.contains("question-box__img--active") &&
            item != e.target
          )
            item.classList.remove("question-box__img--active");
        });
        questionsText.forEach((item) => {
          if (
            item.classList.contains("question-box__text--active") &&
            item != e.target.previousElementSibling
          )
            item.classList.remove("question-box__text--active");
        });
      }
    }

    // Remove answer--active from every answers except the answer selected to give a toggle effect if u want to hide all answers.
    accordionItems.forEach((item) => {
      if (
        item.lastElementChild.classList.contains("answer--active") &&
        item.lastElementChild != answer
      ) {
        item.lastElementChild.classList.remove("answer--active");
        item.lastElementChild.firstElementChild.classList.remove(
          "answer__text--active"
        );
      }
    });
  }
});
