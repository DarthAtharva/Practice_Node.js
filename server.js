import { error } from 'console';
import http from 'http'
const PORT = process.env.PORT;

/* Our client here is the Browser */
const server = http.createServer((req, res) => {

    try {
        
        if(req.method === 'GET'){

            if(req.url === '/'){

                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.end('<h1>Darth Vader</h1>');
        
            }else if(req.url === '/about'){
        
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.end('<h1>Anakin</h1>');
        
            }else{
        
                res.writeHead(404, {'Content-Type' : 'text/html'});
                res.end('<h1>Page not found</h1>');
            }

        }else{

            throw new Error('Method not allowed');

        }

    } catch (error) {
        
        res.writeHead(500, {'Content-Type' : 'text/plain'});
        res.end('Server error');

    }

});

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});