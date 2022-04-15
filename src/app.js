import config from './config/config';
import express from 'express';
import bodyParser from 'body-parser';
import { engine } from 'express-handlebars';
import path from 'path';
import db from './config/database';

import gigRoutes from './routes/gigRoutes';

db.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((err) => console.error('Unable to connect to the database:', err));

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Handlebars middleware
app.engine(
  'handlebars',
  engine({
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
app.set('view engine', 'handlebars');
app.set('views', './src/views');

//Index route
app.get('/', (req, res) => {
  res.render('index', { layout: 'landing' });
});

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Gig Routes

app.use('/gigs', gigRoutes);

const { port } = config;

app.listen(port, () => console.log(`Server listening at ${port}....`));
