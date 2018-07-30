# Tutorial of running NodeJS and Express running under Webapp Azure Cloud

The key of successfull deployment is use the boilerplate. The web.config provided enables the application the use different routes.

# Steps

## Get the boilerplate of Microsoft

Fork it on https://github.com/Azure-Samples/nodejs-docs-hello-world.

## Install Express

npm install express

## Edit the index.js and create some routes

```
var express = require('express');

var app = express();

var port=process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/teste', function (req, res) {
   res.send('Hello World Teste');
})

app.listen(port);

console.log('Server Listening at port '+port);
````
## Run at your machine

npm start

Check the URL and test the routes. If everything is fine, it's time to deploy to Azure Web App.
Here, https://docs.microsoft.com/pt-br/azure/app-service/app-service-web-get-started-nodejs,  are the detailed commands to create the Web App.

Let's summarize:

# Create the Resource Group
```az group create --name myResourceGroup --location "West Europe"```

# Create the App Service Plan 
```az appservice plan create --name myAppServicePlan --resource-group myResourceGroup --sku FREE```

# Create the Web App
```az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name <app_name> --runtime "NODE|6.9"```

# Deployment
Zip all files of project, including the "node_modules", then use the Kudu, Zip Deployment,```https://<app_name>.scm.azurewebsites.net/ZipDeploy```, and drag the Zip file.

Check the routes, the root and "teste".
