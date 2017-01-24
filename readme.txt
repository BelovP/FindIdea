Here, the source files for the frontend lie withing the `frontend`  folder and are compiled using webpack. The result is saved as `public/build/app.js`.

Server is located under the `backend` folder. And the server has only two API routes: `get /comments` and `post /newPomment`. First endpoint returns the list of all the comments, and the second endpoint saves new comment, if it is passed as the json data in the http body like this: `{avatar: '', text: '', liked: false}`

The special `express.static` middleware serves files from the `public` folder, therefore browser can access them without any limitations, including the file `index.html` which contains the core html for this example.

`index.html` is automatically returned, if browser tries to access the folder it lies inside, for example, requesting the root url like this: `http://localhost:3000` will result in accessing the path `/` on the webserver. And since our public root is `public` and `public/index.html` exists, it will be returned.

The port which web server listens to is specified in the `backend/bin/www` which is a simple js file with some nodejs code. The default port for production is 80. But for the development purposes other ports may be used.
