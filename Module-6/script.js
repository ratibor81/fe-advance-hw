const keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: "",
    task: "",
    userInput: "",
    userErrors: "",
    setCharCount() {
    let charQuantity ="";
        while (true) {
            charQuantity = prompt('Введите количество символов, которые Вы должны набрать',"");
            if (this.checkPositiveInteger(+charQuantity)) break;
            if (charQuantity === null) return;
        } 
            this.charCount = +charQuantity;    // Тип данных - число.
    },
    
    checkPositiveInteger(charQuantity) {
        if ((Number.isInteger(charQuantity)) && charQuantity > 0) {
            return true;
        }
    },
    
    createTask() {
        if (this.charCount === "") return;
        let taskArr = new Array(this.charCount);
        for (let i = 0; i < this.charCount; i++) {
            taskArr[i] = this.chars[Math.floor(Math.random() * this.chars.length)]; 
        }  
        this.task = taskArr;
                        
    },
    
    startTask() {
        if (this.charCount === "") return;              // Если объединить if(....===null), промпт будет вылазить при отмене
        const userPrompt = prompt(`Наберите следующую строку:     ${this.task.join('')}`);
        if (userPrompt === null ) return;
        this.userInput = userPrompt.split('');
        
            // Определяю, какая строка длиннее
        const longerString = (this.task.length > this.userInput.length) ? this.task : this.userInput;
            // Посимвольное сравнение двух строк с счётчиком ошибок
        let errorsCounter = 0;
        for (let i = 0; i < longerString.length; i++) {
            if (this.userInput[i] != this.task[i]) {
                errorsCounter++
            }
        } 
        this.userErrors = errorsCounter;
            // Выведение результата в консоль на основе количества ошибок
        if (this.userErrors === 0) {
            console.log('Поздравляю! Ошибок нет.') 
        } else console.log(`Количество ошибок: ${this.userErrors}. Желаю успехов в следующем упражнении)`);
        
    },
    
};

const run = obj => {
    obj.setCharCount();
    obj.createTask();
    obj.startTask();
};

run(keyTrainer);
