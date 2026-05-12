const express = require('express');
const methodOverride = require('method-override');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

let posts = [
    { 
        id: "1", 
        title: "The PedPost Era", 
        publisher: "Pedram", 
        content: "Welcome to my first blog created purely by JS + EJS + CSS! Isn't it lovely? Post how you think of my new project! THANK YOU FOR YOUR ATTENTION TO THIS MATTER! PEDRAM." 
    }
];

app.get('/', (req, res) => {
    res.render('index', { posts });
});

app.post('/posts', (req, res) => {
    const { title, content, publisher } = req.body;
    const newPost = {
        id: Date.now().toString(),
        title,
        publisher,
        content
    };
    posts.push(newPost);
    res.redirect('/');
});

app.get('/edit/:id', (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    if (!post) return res.redirect('/');
    res.render('edit', { post });
});

app.put('/edit/:id', (req, res) => {
    const { title, content, publisher } = req.body;
    const index = posts.findIndex(p => p.id === req.params.id);
    if (index !== -1) {
        posts[index] = { id: req.params.id, title, content, publisher };
    }
    res.redirect('/');
});

app.delete('/delete/:id', (req, res) => {
    posts = posts.filter(p => p.id !== req.params.id);
    res.redirect('/');
});

app.listen(3000, () => console.log(`Server is running at http://localhost:3000`));