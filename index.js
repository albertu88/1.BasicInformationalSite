var http=require('http');
var fs=require('fs');
require('dotenv').config();

const hostname = process.env.HOST_NAME;
const port = process.env.port;

const server=http.createServer((req, res) => {
    switch (req.url)
    {
        case '/':
        fs.readFile('index.html',function(err,data){
            console.log('index');
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end;
        });
        break;

        case '/about':
            fs.readFile('about.html',function(err,data){
                console.log('about');
                if (err) throw err;
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                return res.end;
            });
            break;

            case '/contact-me':
                fs.readFile('contact-me.html',function(err,data){
                    console.log('contact-me');
                    if (err) throw err;
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.write(data);
                    return res.end;
                });
                break;

                default:
                    fs.readFile('404.html',function(err,data){
                        console.log('404');
                        if (err) throw err;
                        res.writeHead(200,{'Content-Type':'text/html'});
                        res.write(data);
                        return res.end;
                    });
                    break;


    }



  });

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
    });