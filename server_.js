import {createServer} from 'http'
const PORT = process.env.PORT;

const users = [
    {id: 1, name: 'Atharva Bhawalkar'},
    {id: 2, name: 'Bhawalkar Atharva'},
    {id: 3, name: 'Anakin Skywalker'}
]

/* Logger Middelware */
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

/* Handler for creating new user */
const createUserHandler = (req, res) => {

    let body = '';

    //Listen for data
    req.on('data', (it) => {
        body += it.toString();
    });

    req.on('end', () => {

        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
        
    });
}

const server = createServer((req, res) => {

    logger(req, res, () => {

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
            
    
        }else if(req.url === '/api/users' && req.method === 'POST'){

            createUserHandler(req, res);

        }else{
    
            res
                .writeHead(404, {
                    'Content-Type': 'text/plain',
                })
                .end('Page not found');
    
            return;
    
        }

    });
    
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});