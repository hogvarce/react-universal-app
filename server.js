import express from 'express';
import routes from './routes/index.jsx';
const app = express();

app.use(express.static('public'));

app.use(routes);

const port = 3000;
app.listen(port, function(){
    console.log('server started on '+port+'!');
});