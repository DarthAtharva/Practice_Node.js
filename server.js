import http from 'http'
import fs from 'fs/promises'
import url from 'url'
import path from 'path'
const PORT = process.env.PORT;

/* To get current path */
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


/* Our client here is the Browser */
const server = http.createServer(async(req, res) => {

    try {
        
        if(req.method === 'GET'){

            let filePath;

            if(req.url === '/'){

                // res.writeHead(200, {'Content-Type' : 'text/html'});
                // res.end('<h1>Darth Vader</h1>');

                filePath = path.join(__dirname, 'public', 'index.html')
        
            }else if(req.url === '/about'){
        
                // res.writeHead(200, {'Content-Type' : 'text/html'});
                // res.end('<h1>Anakin</h1>');
                
                filePath = path.join(__dirname, 'public/about.html')

            }else{
        
                res.writeHead(404, {'Content-Type' : 'text/html'});
                res.end('<h1>Page not found</h1>');
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html')
            res.write(data);
            res.end();

            /* Removing res.write(data) and changing res.end() to res.end(data) will also work*/

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