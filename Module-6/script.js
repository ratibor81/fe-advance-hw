const keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: "",
    setCharCount() {
    let charQuantity ="";
        while (true) {
            charQuantity = prompt('Введите количество символов, которые Вы должны набрать',"");
            if (this.checkPositiveInteger(+charQuantity)) break;
            if (charQuantity === null) break;
        } 
            return this.charCount = charQuantity;  
    },
    
    checkPositiveInteger(charQuantity) {
        if ((charQuantity % 1 == 0) && charQuantity > 0) {
            return true;
        }
    },

    task: "",
    createTask() {
        if (this.charCount === null) return;
        let taskArr = new Array(this.charCount);
        for (let i = 0; i < this.charCount; i++) {
            taskArr[i] = this.chars[Math.floor(Math.random() * this.chars.length)]; 
        }  
        return this.task = taskArr;
                        
        // for (let value of taskArr) {
        //     value = this.chars[Math.floor(Math.random() * this.chars.length)];
        //     console.log(value);
        // }  
        // return this.task = taskArr; 
    },
    
    startTask() {
        if (this.charCount === null) return;
        const userPrompt = prompt(`Наберите следующую строку:     ${this.task.join('')}`);
        if (userPrompt === null) return;
        this.userInput = userPrompt.split('');
        let longerString; 
            // Определяю, какая строка длиннее
        (this.task.length > this.userInput.length) ? longerString = this.task : longerString = this.userInput;
            // Посимвольное сравнение двух строк с счётчиком ошибок
        let errorsCounter = 0;
        for (let i = 0; i < longerString.length; i++) {
            if (this.userInput[i] != this.task[i]) {
                errorsCounter++
            }
        } 
        this.userErrors = errorsCounter;
            // Выведение результата в консоль на основе количества ошибок
        (this.userErrors === 0) ? console.log('Поздравляю! Ошибок нет.') : 
        console.log(`Количество ошибок: ${this.userErrors}. Желаю успехов в следующем упражнении)`);
        return;
    },
    userInput: "",
    userErrors: ""
};

const run = obj => {
    obj.setCharCount();
    obj.createTask();
    obj.startTask();
};

run(keyTrainer);
