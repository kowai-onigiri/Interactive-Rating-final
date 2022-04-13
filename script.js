const buttons = document.querySelectorAll('.num');
let displayNum = ""; //Dont forget put ; at the end 

buttons.forEach(function (currentBtn, i, arr) { //You don't need i parameter but is mandatory if you want to use arr parameter
    currentBtn.addEventListener('click', function () {
        // currentBtn.style.backgroundColor = "#6C666A"; //put the color in a class
        displayNum = currentBtn.innerHTML; //Delete the plus (+) simbol
        // return displayNum; //you do´t need return in this function

        arr.forEach(element => { //Firts detete every btn that has the class
            element.classList.remove('activeBtnColor');
        });
        //Then add it to the currentBtn that the user click
        currentBtn.classList.add('activeBtnColor');
    });

});


const submit = document.getElementById('subBtn');
const card = document.getElementById('ratingCard');
const cardContent = document.getElementById('cardCont')



submit.addEventListener('click', function () {

    if (displayNum) { // if display num is true

        //Create all the new html content

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
        message.textContent = "We appreciate you taking the time to give a rating. If youever need more support, don't hesitate to get in touch!";
        thanksCont.appendChild(message);

    } else {
        //otherwise only display an alert
        alert('Please choose a value');

    }

});













