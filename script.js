// const numBtn = document.querySelectorAll('num');

// numBtn.addEventListener('click', (event) => {
    
//     numBtn.style.backgroundColor="black";
// })
const buttons = document.querySelectorAll('.num');
let displayNum = ""

buttons.forEach(function(currentBtn) {
    currentBtn.addEventListener('click', function() {
        currentBtn.style.backgroundColor = "#6C666A";
        displayNum += currentBtn.innerHTML;
        return displayNum;

        
    });
});


// const displayNum = buttons.forEach(function(currentBtn) {
//     currentBtn.addEventListener('click', function() {
//         let displayNum = currentBtn.innerHTML;
//         console.log(displayNum);
//     })
// })


const submit = document.getElementById('subBtn');
const card = document.getElementById('ratingCard');
const cardContent = document.getElementById('cardCont')

submit.addEventListener('click', function() {
    card.removeChild(cardContent);

    const newContainer = document.createElement('div');
    newContainer.classList.add('container');
    card.appendChild(newContainer);


    const thanksCont = document.createElement('div');
    thanksCont.classList.add('thanksCont');
    newContainer.appendChild(thanksCont);

    const thanksImg = document.createElement('div');
    thanksImg.classList.add('thanksImg');
    thanksCont.appendChild(thanksImg);

    const image = document.createElement('div');
    image.classList.add('image');
    thanksCont.appendChild(image);

    const imageSVG = document.createElement('img');
    imageSVG.classList.add('imageSVG');
    imageSVG.src = "images/illustration-thank-you.svg";
    image.appendChild(imageSVG);

    const selection = document.createElement('div');
    selection.classList.add('selection');
    selection.textContent = `You selected ${displayNum} out of 5.`;
    thanksCont.appendChild(selection);

    const thankYou = document.createElement('div');
    thankYou.classList.add('thankYou');
    thankYou.textContent = "Thank you!"
    thanksCont.appendChild(thankYou);


    const message = document.createElement('div');
    message.classList.add('message');
    message.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
    thanksCont.appendChild(message);


    
    
    
});










