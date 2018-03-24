const keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: "",
    setCharCount() {
        do {
            let charQuantity = prompt('Введите количество символов, которые Вы должны набрать',"");
            if (this.checkPositiveInteger(charQuantity)) {
                this.charCount = +charQuantity; break}; 
            if (charQuantity === null) return;
        } while (true)
    },
    
    checkPositiveInteger(charQuantity) {
        if ((charQuantity % 1 == 0) && !isNaN(charQuantity) && charQuantity > 0) {
            return true;
        }
    },

    task: "",
    createTask() {
        this.task = [];                                     
        while (this.task.length < this.charCount)  {
            let randomIndex = Math.floor(Math.random() * this.chars.length);
            this.task.push(this.chars[randomIndex]);
        }
    },
    startTask() {
        const userPrompt = prompt(`Наберите следующую строку:     ${this.task.join('')}`);
        this.userInput = userPrompt.split('');
        let longerString; 

        (this.task.length > this.userInput.length) ? longerString = this.task : longerString = this.userInput;
        
        function makeCounter() {
            let currentCount = 0;
                return function() {
                return currentCount++;
            };
        }
                 
        let errorsCounter = makeCounter();  

        for (let i = 0; i < longerString.length; i++) {
            if (this.userInput[i] != this.task[i]) {
                errorsCounter();
            }
        } 
        this.userErrors = errorsCounter();
    },
    userInput: "",
    userErrors: "",
    userResult() {
        (this.userErrors === 0) ? console.log('Поздравляю! Ошибок нет.') : 
        console.log(`Количесво ошибок: ${this.userErrors}. Желаю успехов в следующем упражнении)`);
        return;    
    }
};

const run = obj => {
    obj.setCharCount();
    obj.createTask();
    obj.startTask();
    obj.userResult();
};

run(keyTrainer);
