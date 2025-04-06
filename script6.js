function dialog(){
    let total=0;
    let answer, bookNumber
    do{
        do{
            bookNumber = +prompt("Введіть артикул книги, яку ви хочете придбати"); 
            if(bookNumber == 0) break;       
            if(isNaN(bookNumber) || bookNumber <= 0){
                alert("Будь ласка, введіть число більше 0.");
            }
        } while (isNaN(bookNumber) || bookNumber <= 0);  

        if(bookNumber == 0) break;
        total += 1;
        answer = confirm(`${total} книг успішно додано до кошика. Бажаєте додати ще одну книгу?`);
    } while(answer)
}


function information(surname, name, position = "засновниця книгарні"){
    alert(`Інформація про розробника: ${surname} ${name}, ${position}`);
}


function compareBooks(){
    let book1, book2;

    do{
        book1 = prompt("Напишіть назву першої книги");
        if (book1 === null) break;

        book2 = prompt("Напишіть назву другої книги");
        if(book2 == null) break;

        if (book1.trim() === "")
        {
            alert("Ви не ввели назву першої книги. Введіть ще раз");
        }
        if (book2.trim() === "")
        {
            alert("Ви не ввели назву другої книги. Введіть ще раз");
        }
        
    }
    while (book1.trim() === "" || book2.trim() === "");

    if(book1 !== null && book2 !== null)  {
        if(book1 > book2)
        {
            alert(`Більша (лексикографічно) книга №1: ${book1}`);
        } else if (book1 < book2){
            alert(`Більша (лексикографічно) книга №2: ${book2}`);
        } else {
            alert("Назви книг однакові");
        }
    }  
}

function changeBackground(){
    document.body.style.backgroundColor = "rgb(184, 180, 180)";
    setTimeout( function() {
        document.body.style.backgroundColor = "rgb(255, 255, 255)";
    }, 30000);
}

function changeLocation(){
    window.location.href = "contacts.html"; 
}

function newVersion(){
    let firstString = document.getElementById('first');
    firstString.outerHTML = '<h2 class="first" id="first">Ласкаво просимо до ОНОВЛЕНОЇ книгарні місіс Пінс!</h2>';

    let facts = document.querySelector('.before');
    facts.innerHTML ='<li>Перша відома друкована книга — це «Цзеншу» (Китай, 868 рік), яка була надрукована на деревяних дощечках.</li> <li>Біблія є найбільш видаваною книгою в історії, з понад 5 мільярдами примірників, що були надруковані.</li> <li>«Історія грецької літератури» Миколи Кареєва є однією з найдовших книг у світі, що складається з 73 томів.</li>';

    let paragraphs = document.querySelectorAll('.main-text p');
    paragraphs.forEach((para, index) => {
    para.textContent = `${index + 1}: ${para.textContent}`;
    });
    
    let textNode = document.getElementById('facts');
    textNode.firstChild.nodeValue = "🔍 ОНОВЛЕНІ цікаві факти про книги:";     
}

function newBooks(){
    document.write('<h3>Новий сайт ще знаходиться в процесі розробки. Оновіть цю сторінку, щоб повернутись на теперішній сайт. <p>Перепрошуємо за тимчасові незручності!</p></h3>');
}

function informationBooks() {
    let bookButtons = document.querySelector('.book-buttons')

    let info1 = document.createElement('p');
    info1.innerHTML = "<b>Усі книги, представлені на нашому сайті, охоплюються авторським правом.</b>";
    bookButtons.prepend(info1);

    let info2 = document.createElement('p');
    info2.textContent = "Всі права на публікації належать їхнім власникам та авторським колективам, а також ліцензіатам і видавництвам.";
    bookButtons.after(info2);

    let info3 = document.createTextNode('Це означає, що ми не маємо права на безкоштовне відтворення чи поширення цих матеріалів без відповідного дозволу від власників прав.');
    document.body.append(info3);

    let catalog = document.getElementById('catalog');
    let newCatalog = document.createElement('h2');
    newCatalog.className = 'first'
    newCatalog.textContent = "ОНОВЛЕНИЙ каталог книг";
    catalog.replaceWith(newCatalog);

    setTimeout(() => {
        info1.remove(); 
    }, 5000);
}
