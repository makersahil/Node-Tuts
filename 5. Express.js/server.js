const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 1,
        name: 'Sahil Gupta',
        age: 21
    },
    {
        id: 2,
        name: 'Subhash Sharma',
        age: 22
    },
    {
        id: 3,
        name: 'Shivam Thakur',
        age: 20
    }
]

// Middleware
app.use((req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} ${req.url}`);
    next();
    const end = Date.now();
    console.log(end-start + 'ms');
});

app.use((req, res, next) => {
    console.log("Recieved from first middleware!");
    next();
    console.log("Returning back to first middleware!");
});

app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Express is running successfully');
});

app.get('/friends', (req, res) => {
    // console.log(req.url, req.hostname, req.headers['user-agent']);
    res.send(JSON.stringify(friends))
});

app.get('/friends/:friendID', (req, res) => {
    const friendID = Number(req.params.friendID);
    const friend = friends[friendID - 1];
    if(friend) {
        res.json(friend);
    } else {
        res.status(404).send('Friend not found!');
    }
})

app.post('/friends', (req, res) => {
    console.log(req.body);

    if (!req.body.name) {
        return res.status(400).send('Name is missing!');
    } else if (!req.body.age) {
        return res.status(400).send('Age is missing!');
    }

    const friend = {
        id: friends.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    friends.push(friend);
    res.send('Friend Added Successfully!')
})

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});