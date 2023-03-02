var http = require ("http");
var express = require ("express");
var cors = require ("cors");
var path = require ("path");
var glob = require ("glob");
var bodyParser = require ("body-parser");
var path = require("path");
var glob = require("glob");
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
const allowedExt = [
	'.js',
	'.ico',
	'.css',
	'.png',
	'.jpg',
	'.woff2',
	'.woff',
	'.ttf',
	'.svg',
];
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../src/Upload')));
app.use(cors());
const responseHandler = require('./Middlewares/responseHandler')
app.use('/', responseHandler);
let initRoutes = () => {
	// including all routes
	glob("./Routes/*.js", {cwd: path.resolve("./src")}, (err, routes) => {
		if (err) {
			console.log("Error occured including routes");
			return;
		}
		routes.forEach((routePath) => {
			require(routePath).getRouter(app); // eslint-disable-line
		});
	});

	app.get('**', (req, res) => {
		if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
			console.log('allowext');
			let url = req.url.split('?')[0];
			// res.sendFile(path.resolve(`../dist/${url}`));
			res.sendFile(path.resolve(path.join(__dirname, '..', 'dist', 'resume', url)));
		} else {
			console.log('else');
			// res.sendFile(path.resolve('../dist/index.html'));
			res.sendFile(path.resolve(path.join(__dirname, '..', 'dist', 'resume', 'index.html')));
		}
	});

}
initRoutes(app);
const port = process.env.PORT || 3000;
app.listen(port);
console.log("Started on port " + port);