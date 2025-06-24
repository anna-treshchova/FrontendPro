export function collectFormData(form) {
    const formData = new FormData(form);

    formData.forEach((value) => {
        if (!value.trim()) {
            throw new Error('Not full information given')
        }
    });

    return Object.fromEntries(formData.entries());
}


/*‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

Якщо ми надсилаємо FormData в тілі запиту, браузер автоматично додає заголовок: Content-Type: multipart/form-data
Але express.json() не вміє обробляти multipart-дані, тому req.body буде порожнім

                                 Є ДВА СПОСОБИ ВИРІШЕННЯ ПРОБЛЕМИ З FormData:

 1. Використати middleware, який дозволяє обробляти дані з FormData, наприклад: multer()

 2. Конвертувати FormData у звичайний об’єкт та надіслати його як JSON:  Object.fromEntries(formData.entries())

    2.1  formData.entries() — метод .entries() повертає ітератор пар [ключ, значення] з форми:
        [
         ['title', 'Inception'],
         ['year', '2010']
       ]

    2.2  Object.fromEntries() — цей метод приймає масив (або ітератор) пар ключ–значення і перетворює його на об'єкт:
         {
           title: 'Inception',
           year: '2010'
         }

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾*/