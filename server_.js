import {createServer} from 'http'
const PORT = process.env.PORT;

const users = [
    {id: 1, name: 'Atharva Bhawalkar'},
    {id: 2, name: 'Bhawalkar Atharva'},
    {id: 3, name: 'Anakin Skywalker'}
]

const server = createServer((req, res) => {

    if(req.url === '/api/users' && req.method === 'GET'){

        res
            .setHeader('Content-Type', 'application/json')
            .end(JSON.stringify(users));

    }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){

        const id = req.url.split('/')[3];
        const user = users.find((it) => it.id === parseInt(id))

        if(user){

            res
                .setHeader('Content-Type', 'application/json')
                .end(JSON.stringify(user));

        }else{

            res
                .writeHead(404, {
                    'Content-Type': 'text/plain',
                })
                .end('User not found');

            return;

        }
        

    }else{

        res
            .writeHead(404, {
                'Content-Type': 'text/plain',
            })
            .end('Page not found');

        return;

    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});