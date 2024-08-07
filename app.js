const express = require('express'), 
    path = require('path'), 
    bodyParser = require('body-parser'),
    cons = require('consolidate'),
    dust = require('dustjs-helpers'),
    { Pool } = require('pg'), // Use Pool instead of Client for connection pooling
    app = express();

// PostgreSQL connection settings
const pool = new Pool({
    user: 'recipeadmin',
    host: 'localhost',
    database: 'recipebookdb',
    password: '1q2w3e4r',
    port: 5432,
});

// Test connection to PostgreSQL
pool.connect((err) => {
    if (err) {
        console.error("Error connecting to PostgreSQL server", err);
    } else {
        console.log("Connected to PostgreSQL server");
    }
});

// Assign Dust Engine To .dust Files
app.engine('dust', cons.dust);

// Set Default EXT .dust
app.set('view engine', 'dust');

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Load Recipes
app.get('/', (req, res) => {
    // PG Connect
    pool.connect((err, client, done) => {
        if (err) {
            console.log("Error connecting to DB", err);
            return res.status(500).send("Error connecting to DB");
        }
        client.query("SELECT * FROM recipes", (err, result) => {
            done(); // release the client back to the pool
            if (err) {
                console.log("Error executing query", err);
                return res.status(500).send("Error executing query");
            }
            res.render('index', { recipes: result.rows });
        });
    });
});

//Insert Recipe
app.post('/add', (req, res) => {
    const { name, ingredients, directions } = req.body;

    // PG Connect
    pool.connect((err, client, done) => {
        if (err) {
            console.log("Error connecting to DB", err);
            return res.status(500).send("Error connecting to DB");
        }
        client.query("INSERT INTO recipes (name, ingredients, directions) VALUES ($1, $2, $3)", [name, ingredients, directions], (err, result) => {
            done(); // release the client back to the pool
            if (err) {
                console.log("Error executing query", err);
                return res.status(500).send("Error executing query");
            }
            res.redirect('/');
        });
    });
});

//Delete Recipe
app.delete('/delete/:id', (req, res) => {
    const recipeId = parseInt(req.params.id);

    // PG Connect
    pool.connect((err, client, done) => {
        if (err) {
            console.log("Error connecting to DB", err);
            return res.status(500).send("Error connecting to DB");
        }
        client.query("DELETE FROM recipes WHERE id = $1", [recipeId], (err, result) => {
            done(); // release the client back to the pool
            if (err) {
                console.log("Error executing query", err);
                return res.status(500).send("Error executing query");
            }
            res.status(204).send();
        });
    });
});


// Update Recipe
app.post('/update', (req, res) => {
    const recipeId = parseInt(req.body.id);
    const { name, ingredients, directions } = req.body;
    
    if (!Number.isInteger(recipeId)) {
        return res.status(400).send("Invalid recipe ID" + recipeId);
    }

    // PG Connect
    pool.connect((err, client, done) => {
        if (err) {
            console.log("Error connecting to DB", err);
            return res.status(500).send("Error connecting to DB");
        }
        client.query("UPDATE recipes SET name=$1, ingredients=$2, directions=$3 WHERE id=$4", [name, ingredients, directions, recipeId], (err, result) => {
            done(); // release the client back to the pool
            if (err) {
                console.log("Error executing query", err);
                return res.status(500).send("Error executing query");
            }
            //res.status(200).send();
            res.redirect('/');
        });
    });
});

// Server
app.listen(3000, function(){
    console.log('Server started on port 3000');
});