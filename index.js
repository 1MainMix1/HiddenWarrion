const formKahoot = document.forms.formKahoot
const inputKahoot = formKahoot.kahootInput
const buttonKahoot = formKahoot.kahootButton
// const buttonKahoot = document.querySelector('.hahootButton')
const urlKahoot = "https://play.kahoot.it/rest/kahoots/"
const Content = document.querySelector('.answer')
const color_list = ["red", "blue", "orange", "green","cyan","purple"]
async function getData(url) {
    return await fetch(url)
        .then((response) => response.json())
        .then(data => data)
}
buttonKahoot.addEventListener('click',async (e) => {
    e.preventDefault()
    const session = urlKahoot + inputKahoot.value
    data = await getData(session)
    data['questions'].forEach((question,questionIndex) => {
        
        let answerContent = document.createElement('div')
        let kahootTitle = document.createElement('h2')
        kahootTitle.innerText = `Вопрос ${questionIndex + 1}: ${question['question']}`
        answerContent.classList.add('answer-content')
        answerContent.appendChild(kahootTitle)
        Content.appendChild(answerContent)
        console.log(question);
        console.log(`Вопрос ${questionIndex + 1}:`);
        question['choices'].forEach((choise,choiseIndex) => {
            if (choise['correct']) {
                let kahootBox = document.createElement('div')
                kahootBox.innerHTML = `<h3>${choiseIndex + 1} - ${choise.answer}</h3>`
                console.log(`${choiseIndex + 1} - ${choise.answer}`);
                kahootBox.classList.add('answer-box')
                kahootBox.style.backgroundColor = color_list[choiseIndex]
                answerContent.appendChild(kahootBox)
            }
        })
    });
})