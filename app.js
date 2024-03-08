console.log( 'Hello, Vue!' )

const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am the template</h2>'
    
    data() {
        return {
            // Episode #1 / Episode #2
            showBooks: true,
            showBooksLabel: 'Show Books',
            title: `The Final Empire`,
            author: 'Brandon Sanderson', 
            age: 45, 
            
            // Episode #3
            x: 0,
            y: 0,
            
            books: [
                { title: "Name of the Wind", author: "Patrick Rothfuss", img: "assets/name-of-the-wind.jpeg", isFav: false },
                { title: "The Way of Kings", author: "Brandon Sanderson", img: "assets/way-of-kings.jpg", isFav: false },
                { title: "The Final Empire", author: "Brandon Sanderson", img: "assets/final-empire.jpg", isFav: false },
                { title: "The Hobbit", author: "J.R.R. Tolkien", img: "assets/the-hobbit.jpeg", isFav: true },
                { title: "1984", author: "George Orwell", img: "assets/1984.jpeg", isFav: true },
                { title: "To Kill a Mockingbird", author: "Harper Lee", img: "assets/to-kill-a-mockingbird.jpg", isFav: true },
                { title: "Pride and Prejudice", author: "Jane Austen", img: "assets/pride-and-prejudice.jpeg", isFav: false },
                { title: "The Catcher in the Rye", author: "J.D. Salinger", img: "assets/catcher-in-the-rye.jpeg", isFav: false },
                { title: "The Great Gatsby", author: "F. Scott Fitzgerald", img: "assets/great-gatsby.jpg", isFav: false },
                { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", img: "assets/harry-potter-philosophers-stone.jpg", isFav: true },
                { title: "The Hunger Games", author: "Suzanne Collins", img: "assets/hunger-games.jpeg", isFav: true },
                { title: "The Da Vinci Code", author: "Dan Brown", img: "assets/da-vinci-code.jpg", isFav: false },
                { title: "The Lord of the Rings", author: "J.R.R. Tolkien", img: "assets/lord-of-the-rings.jpg", isFav: true }
            ], 
            
            url: "http://www.joseph-bowman.com",
        }
    },
    
    
    methods: {
        changeTitle(title) {
            
            console.log( 'You clicked me' ); 
            this.title = title
            
        }, 
        
        toggleShowBooks() {
            this.showBooks = !this.showBooks
            
            if ( this.showBooks ) this.showBooksLabel = 'Hide Books'
            else this.showBooksLabel = 'Show Books'
        },
        
        handleEvent(e, data) {
            
            if (data) {
                console.log('event', e.type, 'data: ', data)
                
            } else console.log( 'event', e.type )
        },
        
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
            
            console.log('event:', e.type, 'position: ', `x: ${ this.x }, y: ${ this.y }` )
        }, 
        
        toggleFav(item) {
            item.isFav = !item.isFav
        }
    }, 
    
    
    computed: {
        filteredBooks() {
            return this.books.filter( ( book ) => book.isFav )
        }
    }
    
})

app.mount('#app')