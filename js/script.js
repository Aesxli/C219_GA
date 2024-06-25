$(document).ready(function () {
    const books = [
        {
            "id": 1,
            "image": "images/book1.jpg",
            "name": "Jujustu Kaisen 0",
            "Author": "Gege Akutami",
            "description": "Join Yuji Itadori, a high school student with extraordinary abilities, as he navigates the dangerous world of curses and sorcery. Gege Akutami weaves a tale of action, suspense, and supernatural battles in this prequel to the Jujustu Kaisen series.",
            "genre": "Dark Fantasy",
            "year": 2014,
            "type": "Manga"
        },
        {
            "id": 2,
            "image": "images/book2.jpg",
            "name": "My Hero Academia ",
            "Author": "Kohei Horikoshi",
            "description": "Kohei Horikoshi continues the saga of Izuku Midoriya and his fellow aspiring heroes in this gripping volume of My Hero Academia. As the students face new challenges and powerful villains, the fate of society hangs in the balance.",
            "genre": "Superhero",
            "year": 2016,
            "type": "Manga"
        },
        {
            "id": 3,
            "image": "images/book3.jpg",
            "name": "1984",
            "Author": "George Orwell",
            "description": "A dystopian novel by George Orwell that explores the consequences of totalitarianism.",
            "genre": "Dystopian",
            "year": 1949,
            "type": "Novel"
        },
        {
            "id": 4,
            "image": "images/book4.jpg",
            "name": "The Catcher in the Rye",
            "Author": "J.D. Salinger",
            "description": "A classic coming-of-age novel by J.D. Salinger.",
            "genre": "Fiction",
            "year": 1951,
            "type": "Novel"
        },
        {
            "id": 5,
            "image": "images/book5.jpg",
            "name": "Pride and Prejudice",
            "Author": "Jane Austen",
            "description": "Jane Austen's timeless novel of love and societal expectations.",
            "genre": "Romance",
            "year": 1813,
            "type": "Novel"
        },

        {
            "id": 6,
            "image": "images/book6.jpg",
            "name": "The Hobbit",
            "Author": "J.R.R. Tolkien",
            "description": "J.R.R. Tolkien's fantasy adventure that precedes The Lord of the Rings.",
            "genre": "Fantasy/Mystery",
            "year": 1937,
            "type": "Novel"
        },
        {
            "id": 7,
            "image": "images/book7.jpg",
            "name": "The Da Vinci Code",
            "Author": "Dan Brown",
            "description": "A mystery thriller by Dan Brown that follows symbologist Robert Langdon.",
            "genre": "Fantasy/Mystery",
            "year": 2003,
            "type": "Thriller"
        },
        {
            "id": 8,
            "image": "images/book8.jpg",
            "name": "The Lord of the Rings",
            "Author": "J.R.R. Tolkien",
            "description": "J.R.R. Tolkien's epic fantasy trilogy set in the world of Middle-earth.",
            "genre": "Fantasy/Mystery",
            "year": 1954,
            "type": "Novel"
        },
        {
            "id": 9,
            "image": "images/book9.jpg",
            "name": "Harry Potter",
            "Author": "J.K. Rowling",
            "description": "The first book in J.K. Rowling's beloved Harry Potter series.",
            "genre": "Fantasy/Mystery",
            "year": 1997,
            "type": "Novel"
        },
        {
            "id": 10,
            "image": "images/book10.jpg",
            "name": "The Hunger Games",
            "Author": "Suzanne Collins",
            "description": "Suzanne Collins' dystopian novel where teenagers fight in a televised event for survival.",
            "genre": "Fantasy/Mystery",
            "year": 2008,
            "type": "Novel"
        },
        {
            "id": 11,
            "image": "images/book11.jpg",
            "name": "Dune",
            "Author": "Frank Herbert",
            "description": "Frank Herbert's science fiction masterpiece set in a distant future.",
            "genre": "Science Fiction",
            "year": 1965,
            "type": "Novel"
        },
        {
            "id": 12,
            "image": "images/book12.jpg",
            "name": "The Shining",
            "Author": "Stephen King",
            "description": "Stephen King's iconic horror novel about a haunted hotel.",
            "genre": "Horror",
            "year": 1977,
            "type": "Novel"
        }
    ];
    const fetchAndDisplayBooks = () => {
        const bookDisplayContainer = $('.book-container');
        let out = "";

        $.each(books, function (_, book) {
            out += `
                    <div class="book-item" data-book-id="${book.id}">
                        <img src="${book.image}" alt="${book.name} Cover">
                        <h5>${book.name}</h5>
                        <p>${book.Author}</p>
                        <p><b>Click the image for more info</b></p>
                        <button class="button px-0 reserve-button" data-toggle="modal" data-target="#bookModal">
                        <span class="button-content">Reserve</span>
                    </button>
                    </div>
                `;
        });

        bookDisplayContainer.empty().html(out);

        // Apply fade-in animation to book items
        anime({
            targets: '.book-item',
            opacity: [0, 1],
            scale: [0.95, 1],
            duration: 1000,
            delay: anime.stagger(200, { start: 300 }),
            easing: 'easeInOutQuad',
        });

        // Initialize Tippy.js for book cards
        $('.book-item').each(function () {
            const bookId = $(this).data('book-id');
            const clickedBook = books.find(book => book.id === parseInt(bookId));

            tippy(this, {
                content: ` ${clickedBook.genre}`,
                placement: 'top',
            });
        });

        $('.book-container').on('click', '.book-item img', function () {
            const bookId = $(this).closest('.book-item').data('book-id');
            const clickedBook = books.find(book => book.id === parseInt(bookId));
            openModal(clickedBook);
        });
        let reservedBooks = [];
        $('.book-container').on('click', '.reserve-button', function () {
            const bookId = $(this).closest('.book-item').data('book-id');
        
            // Check if the book is already reserved
            if (reservedBooks.includes(bookId)) {
                alert('This book is already reserved.');
                return;
            }
        
            // Mark the book as reserved
            reservedBooks.push(bookId);
        
            // Disable the button and add reserved class
            $(this).prop('disabled', true).addClass('reserved').text('Reserved');
        });
        
         

    };

    anime({
        targets: '.navbar',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuad',
    });

    anime({
        targets: '.search-bar-container',
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 800,
        delay: 200,
        easing: 'easeOutQuad',
    });

    const openModal = (book) => {
        $('#MTitle').text(book.name);
        $('#MAuthor').html(` Author <i class="fa-solid fa-user"></i> : ${book.Author}`);
        $('#MDescription').text(book.description);
        $('#bookModal').css('display', 'block');
    };
    
    

    $('#closeModal').on('click', () => {
        $('#bookModal').css('display', 'none');
    });

    $(document).on('click', (event) => {
        const modal = $('#bookModal');
        if (event.target === modal[0]) {
            modal.css('display', 'none');
        }
    });

    const tagInput = $('#search');
    const tagSuggestions = $('<div id="tagSuggestions"></div>').appendTo('body');

    const searchTags = Array.from(new Set([
        ...books.flatMap(book => [book.name, book.Author, book.genre]),
    ]));

    tagInput.on('input', function () {
        const inputValue = tagInput.val().toLowerCase();
        const suggestions = searchTags.filter(tag => tag.toLowerCase().includes(inputValue));

        displaySuggestions(suggestions);
    });

    function updateSuggestionPosition() {
        const rect = tagInput[0].getBoundingClientRect();
        tagSuggestions.css({
            top: rect.bottom + 'px',
            left: rect.left + 'px',
            width: rect.width + 'px',
        });
    }

    function displaySuggestions(suggestions) {
        if (suggestions.length > 0) {
            tagSuggestions.html('');
            $.each(suggestions, function (_, suggestion) {
                const suggestionElement = $('<div class="suggestion"></div>')
                    .text(suggestion)
                    .on('click', function () {
                        tagInput.val(suggestion);
                        tagSuggestions.css('display', 'none');
                    });
                tagSuggestions.append(suggestionElement);
            });

            updateSuggestionPosition();

            tagSuggestions.css({
                position: 'fixed',
                zIndex: '1000',
                display: 'block',
            });

            function animate() {
                updateSuggestionPosition();
                requestAnimationFrame(animate);
            }

            animate();
        } else {
            tagSuggestions.css('display', 'none');
        }
    }

    $(document).on('click', function (event) {
        if (!$(event.target).closest('#search').length && !$(event.target).closest('#tagSuggestions').length) {
            tagSuggestions.css('display', 'none');
        }
    });

    $('#searchForm').on('submit', event => {
        event.preventDefault();
        const searchTerm = $('#search').val().toLowerCase();

        const filteredBooks = books.filter(book =>
            book.name.toLowerCase().includes(searchTerm) ||
            book.Author.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm)
        );

        const bookDisplayContainer = $('.book-container');
        let out = "";

        $.each(filteredBooks, function (_, book) {
            out += `
                     <div class="book-item" data-book-id="${book.id}">
                        <img src="${book.image}" alt="${book.name} Cover">
                        <h5>${book.name}</h5>
                        <p>Author: ${book.Author}</p>
                        <p>Genre: ${book.genre}</p>
                        <p><b>Click the image for more info</b></p>
                        <button class="button px-0 reserve-button" data-toggle="modal" data-target="#bookModal" >
                        <span class="button-content">Reserve</span>
                    </button>
                    </div>
                `;
        });

        anime({
            targets: '.book-container .book-item',
            opacity: 0,
            scale: 0.8,
            duration: 500,
            easing: 'easeOutQuad',
            complete: function () {
                bookDisplayContainer.html(out);

                anime({
                    targets: '.book-item',
                    opacity: [0, 1],
                    scale: [0.95, 1],
                    duration: 800,
                    delay: anime.stagger(100, { start: 200 }),
                    easing: 'easeInOutQuad',
                });

                // Initialize Tippy.js for book cards
                $('.book-item').each(function () {
                    const bookId = $(this).data('book-id');
                    const clickedBook = books.find(book => book.id === parseInt(bookId));

                    tippy(this, {
                        content: ` ${clickedBook.genre}`,
                        placement: 'top',
                    });
                });
            },
        });
    });
    fetchAndDisplayBooks();

/*navbar start*/
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar-nav");
const links = document.querySelectorAll(".navbar-nav li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
/*navbar end*/
});
/*chart and table start*/
var dataSet = [
    ["Jujustu Kaisen 0", "Gege Akutami", "Dark Fantasy", 2014, "Manga"],
    ["My Hero Academia", "Kohei Horikoshi", "Superhero", 2016, "Manga"],
    ["1984", "George Orwell", "Dystopian", 1949, "Novel"],
    ["The Catcher in the Rye", "J.D. Salinger", "Fiction", 1951, "Novel"],
    ["Pride and Prejudice", "Jane Austen", "Romance", 1813, "Novel"],
    ["The Hobbit", "J.R.R. Tolkien", "Fantasy", 1937, "Novel"],
    ["The Da Vinci Code", "Dan Brown", "Mystery", 2003, "Thriller"],
    ["The Lord of the Rings", "J.R.R. Tolkien", "Fantasy", 1954, "Novel"],
    ["Harry Potter", "J.K. Rowling", "Fantasy", 1997, "Novel"],
    ["The Hunger Games", "Suzanne Collins", "Science Fiction", 2008, "Novel"],
    ["Dune", "Frank Herbert", "Science Fiction", 1965, "Novel"],
    ["The Shining", "Stephen King", "Horror", 1977, "Novel"]
    ];
 // Intersection Observer setup
const section = document.getElementById('table'); // Assuming the section has an id of 'table'
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Adjust as needed
};

const fadeInOptions = {
    targets: '#example_wrapper, #myChart',
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 800,
    easing: 'easeInOutQuad',
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Start the fade-in animation when the section is in view
            anime(fadeInOptions);
            observer.unobserve(entry.target);
        }
    });
}, options);

fadeInObserver.observe(section);

// Initialise DataTables to the table above
$(document).ready(function () {
    $('#example').DataTable({
        data: dataSet,
        columns: [
            { title: "Title" },
            { title: "Author" },
            { title: "Genre" },
            { title: "Year" },
            { title: "Type" }
        ],
        lengthMenu: [6],
        pageLength: 6, 
    });
    $('#example').removeAttr('style');
});

// Bar Chart
const genreCounts = {};
dataSet.forEach(book => {
    const genre = book[2]; // Assuming genre is at index 2
    genreCounts[genre] = (genreCounts[genre] || 0) + 1;
});

const labels = Object.keys(genreCounts);
const counts = Object.values(genreCounts);

const data = {
    labels: labels,
    datasets: [{
        label: 'No of Books',
        backgroundColor: 'lightblue',
        borderColor: 'black',
        data: counts,
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            x: {
                ticks: {
                    color: 'white' // Set x-axis label color to white
                },
                grid: {
                    color: 'white' // Set x-axis grid line color to white
                }
            },
            y: {
                ticks: {
                    color: 'white', // Set y-axis label color to white
                    precision: 0 // Set precision to 0 to display numbers without decimals
                },
                grid: {
                    color: 'white' // Set y-axis grid line color to white
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white' // Set legend label color to white
                }
            }
        }
        
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
document.getElementById('myChart').removeAttribute('style');
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('myChart').removeAttribute('style');
});
document.addEventListener('DOMContentLoaded', function () {
    const myChartCanvas = document.getElementById('myChart');
    myChartCanvas.style.removeProperty('height');
    myChartCanvas.style.removeProperty('width');
});

/*chart  and table end*/
