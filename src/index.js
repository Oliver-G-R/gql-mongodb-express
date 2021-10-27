import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './Schema';
import './database'


const app = express();


app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
}));

app.get('/', (req, res) => {
    res.json('Hello Worlds!');
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});