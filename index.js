const formKahoot = document.forms.formKahoot
const inputKahoot = formKahoot.kahootInput
const buttonKahoot = formKahoot.kahootButton
// const buttonKahoot = document.querySelector('.hahootButton')
const urlKahoot = "https://play.kahoot.it/rest/kahoots/"
const Content = document.querySelector('.answer')
const color_list = ["red", "blue", "orange", "green","cyan","purple"]
const backgroundColor_list = {
    'red': '#e21b3c',
    'blue': '#1368ce',
    'orange': '#d89e00',
    'green': '#26890c',
    'cyan': '#0aa3a3',
    'purple': '#864cbf'
}
const figure_list = {
    'red': '<span class="sc-dlfnbm idokwv card-icon__icon" data-functional-selector="icon" style="display: inline-block; vertical-align: middle; min-width: 40px; height: 40px;"><svg viewBox="0 0 32 32" focusable="false" stroke="rgba(0, 0, 0, 0.15)" stroke-width="1.3px" aria-labelledby="label-cc816bc8-4af3-488c-a2f4-cfd5e53c1335" aria-hidden="true" class="sc-hKgILt bluJxS" style="paint-order: stroke;"><title id="label-cc816bc8-4af3-488c-a2f4-cfd5e53c1335">Icon</title><path d="M27,24.559972 L5,24.559972 L16,7 L27,24.559972 Z" style="fill: inherit;"></path></svg></span>',

    'blue': '<span class="sc-dlfnbm idokwv card-icon__icon" data-functional-selector="icon" style="display: inline-block; vertical-align: middle; min-width: 40px; height: 40px;"><svg viewBox="0 0 32 32" focusable="false" stroke="rgba(0, 0, 0, 0.15)" stroke-width="1.3px" aria-labelledby="label-2e900b55-43c7-4fe5-86b3-90d135297edf" aria-hidden="true" class="sc-hKgILt bluJxS" style="paint-order: stroke;"><title id="label-2e900b55-43c7-4fe5-86b3-90d135297edf">Icon</title><path d="M4,16.0038341 L16,4 L28,16.0007668 L16,28 L4,16.0038341 Z" style="fill: inherit;"></path></svg></span>',

    'orange': '<span class="sc-dlfnbm idokwv card-icon__icon" data-functional-selector="icon" style="display: inline-block; vertical-align: middle; min-width: 40px; height: 40px;"><svg viewBox="0 0 32 32" focusable="false" stroke="rgba(0, 0, 0, 0.15)" stroke-width="1.3px" aria-labelledby="label-cf99cb94-5494-493f-b148-036194eb485b" aria-hidden="true" class="sc-hKgILt bluJxS" style="paint-order: stroke;"><title id="label-cf99cb94-5494-493f-b148-036194eb485b">Icon</title><path d="M16,27 C9.92486775,27 5,22.0751322 5,16 C5,9.92486775 9.92486775,5 16,5 C22.0751322,5 27,9.92486775 27,16 C27,22.0751322 22.0751322,27 16,27 Z" style="fill: inherit;"></path></svg></span>',

    'green': '<span class="sc-dlfnbm idokwv card-icon__icon" data-functional-selector="icon" style="display: inline-block; vertical-align: middle; min-width: 40px; height: 40px;"><svg viewBox="0 0 32 32" focusable="false" stroke="rgba(0, 0, 0, 0.15)" stroke-width="1.3px" aria-labelledby="label-01cd4174-a53b-486e-8fed-7de4a71b13e1" aria-hidden="true" class="sc-hKgILt bluJxS" style="paint-order: stroke;"><title id="label-01cd4174-a53b-486e-8fed-7de4a71b13e1">Icon</title><path d="M7,7 L25,7 L25,25 L7,25 L7,7 Z" style="fill: inherit;"></path></svg></span>',

    'cyan': '<span class="sc-dlfnbm idokwv card-icon__icon" data-functional-selector="icon" style="display: inline-block; vertical-align: middle; min-width: 40px; height: 40px;"><svg viewBox="0 0 32 32" focusable="false" stroke="rgba(0, 0, 0, 0.15)" stroke-width="1.3px" aria-labelledby="label-48da6b10-dfba-45d6-a227-20781c3a768b" aria-hidden="true" class="sc-hKgILt bluJxS" style="paint-order: stroke;"><title id="label-48da6b10-dfba-45d6-a227-20781c3a768b">Icon</title><path d="M8.584 27 4 12.786 16 3.982 28 12.786 23.417 27z" style="fill: inherit;"></path></svg></span>',

    'purple': '<span class="sc-dlfnbm idokwv card-icon__icon" data-functional-selector="icon" style="display: inline-block; vertical-align: middle; width: 40px; height: 40px;"><svg viewBox="0 0 32 32" focusable="false" stroke="rgba(0, 0, 0, 0.15)" stroke-width="1.3px" aria-labelledby="label-6810870c-9201-4616-86be-e908af65bb76" aria-hidden="true" class="sc-hKgILt bluJxS" style="paint-order: stroke;"><title id="label-6810870c-9201-4616-86be-e908af65bb76">Icon</title><path d="M5 8L16 26.857 27 8z" style="fill: inherit;"></path></svg></span>'
}
async function getData(url) {
    return await fetch(url)
        .then((response) => response.json())
        .then(data => data)
}
buttonKahoot.addEventListener('click',async (e) => {
    e.preventDefault()
    Content.innerHTML = ''
    const session = urlKahoot + inputKahoot.value
    data = await getData(session)
    data['questions'].forEach((question,questionIndex) => {
        
        let answerContent = document.createElement('div')
        let kahootTitle = document.createElement('h2')
        kahootTitle.innerText = `Питання ${questionIndex + 1}: ${question['question']}`
        answerContent.classList.add('answer-content')
        answerContent.appendChild(kahootTitle)
        Content.appendChild(answerContent)



        // console.log(question);
        // console.log(`Вопрос ${questionIndex + 1}:`);

        question['choices'].forEach((choise,choiseIndex) => {
            if (choise['correct']) {

                let kahootBox = document.createElement('div')
                kahootBox.innerHTML = `${figure_list[color_list[choiseIndex]]}<h3>${choiseIndex + 1} - ${choise.answer}</h3>`
                console.log(`${choiseIndex + 1} - ${choise.answer}`);
                kahootBox.classList.add('answer-box')
                kahootBox.style.backgroundColor = backgroundColor_list[color_list[choiseIndex]]
                answerContent.appendChild(kahootBox)
            }
        })
    });
})
