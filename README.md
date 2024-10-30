<<<<<<< HEAD
# Project Demo


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
```
npm i
```
### .env
```
copy everything from the .env files
```

In the server > .env file, you can find some information. Please use your own API key for future use, as this key may not work in the future.

```
//Database Setting
ATLASDB_URL = your_id
SECRET = your_id

//Cloudianry setting 
CLOUD_NAME =your_id
CLOUD_API_KEY =your_id
CLOUD_API_SECRET =your_id

//Map token Api to intergrate map features
MAP_TOKEN = your_id
```

### Installing

Installing NPM modules on both client and server folders
Execute in the project Directory
```
npm install
```
### Database Configuration
1.Set-up with Mongodb atlas configuration
2.Load Data
```
cd init
```
```
cd index.js
```
3.Run
```
initDB()
```
In the terminal 
Ouput : Database is connected

### Running the app
1.On home project Directory
```
cd ..
```
2.Install the Modules
3.Run
```
nodemon app.js
```
Access the web app at http://localhost:3000/

### Deploying the backend server to render

Follow these setps 👇👇

1. Create your render account in https://render.com/
2. Connect your github to render and give the project permission for that
3. Then create a new Web Service and add your repo (your repo must be look like this repo's folder structure like frontend and backend both in that repo)
4. For deploying this, every change will be in this `render-deploy-backend` branch. So don't change your `.evn` from master branch.
5. You have to change your database to local to mongodb atlas. Because in this deployment we are not creating db server. So we will be using mongo atlas url. So find your mongodb cloud url with database which will look like this: `mongodb+srv://myusername:myclusterpassword@mycluster.mongodb.net/ecommerce?retryWrites=true&w=majority`
   and
   <b>goto the `render-deploy-backend` branch</b>
   and goto `.env` file and replace the first variable to your latest mongodb cloud url like this:
```
   `DATABASE=mongodb+srv://myusername:myclusterpassword@mycluster.mongodb.net/ecommerce?retryWrites=true&w=majority`
```
Don't just put this url. Your url will be different. You will find it in your mongo cluster setting.
   The old variable will be like this:
   ```
`DATABASE=mongodb://127.0.0.1:27017/ecommerce
```
 and your new one should look like this:
 ```
   `DATABASE=mongodb+srv://myusername:myclusterpassword@mycluster.mongodb.net/ecommerce?retryWrites=true&w=majority`
```
   you can find the mongo url by goto the mongodb atlas website and goto your database and you can find a connect button and click on that you will see the url. And modify the url quite like my one with your secret info.
   N.B: And you must need to provide the cluster password not your account password! So find your cluster password from database access menu in mongodb atlast cloud and change accoding to you. Here I provide all image's that you can undarstand better
  
7. Then come to render website. Give all of the imformations I set in the image below just change the name of your project and then must be change the branch name to `master` to `render-deploy-backend`

8. This is the setup for render
   ![Alt Text](assetREADME.md/renderDeployBackendSetup.png)

9. After all the setup you finished create the web service and It will deploy the project.

You can deploy frontend into vercel or netlify also. Thanks
=======
# Project Demo


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
```
npm i
```
### .env
```
copy everything from the .env files
```

In the server > .env file, you can find some information. Please use your own API key for future use, as this key may not work in the future.

```
//Database Setting
ATLASDB_URL = your_id
SECRET = your_id

//Cloudianry setting 
CLOUD_NAME =your_id
CLOUD_API_KEY =your_id
CLOUD_API_SECRET =your_id

//Map token Api to intergrate map features
MAP_TOKEN = your_id
```

### Installing

Installing NPM modules on both client and server folders
Execute in the project Directory
```
npm install
```
### Database Configuration
1.Set-up with Mongodb atlas configuration
2.Load Data
```
cd init
```
```
cd index.js
```
3.Run
```
initDB()
```
In the terminal 
Ouput : Database is connected

### Running the app
1.On home project Directory
```
cd ..
```
2.Install the Modules
3.Run
```
nodemon app.js
```
Access the web app at http://localhost:3000/

### Deploying the backend server to render

Follow these setps 👇👇

1. Create your render account in https://render.com/
2. Connect your github to render and give the project permission for that
3. Then create a new Web Service and add your repo (your repo must be look like this repo's folder structure like frontend and backend both in that repo)
4. For deploying this, every change will be in this `render-deploy-backend` branch. So don't change your `.evn` from master branch.
5. You have to change your database to local to mongodb atlas. Because in this deployment we are not creating db server. So we will be using mongo atlas url. So find your mongodb cloud url with database which will look like this: `mongodb+srv://myusername:myclusterpassword@mycluster.mongodb.net/ecommerce?retryWrites=true&w=majority`
   and
   <b>goto the `render-deploy-backend` branch</b>
   and goto `.env` file and replace the first variable to your latest mongodb cloud url like this:
```
   `DATABASE=mongodb+srv://myusername:myclusterpassword@mycluster.mongodb.net/ecommerce?retryWrites=true&w=majority`
```
Don't just put this url. Your url will be different. You will find it in your mongo cluster setting.
   The old variable will be like this:
   ```
`DATABASE=mongodb://127.0.0.1:27017/ecommerce
```
 and your new one should look like this:
 ```
   `DATABASE=mongodb+srv://myusername:myclusterpassword@mycluster.mongodb.net/ecommerce?retryWrites=true&w=majority`
```
   you can find the mongo url by goto the mongodb atlas website and goto your database and you can find a connect button and click on that you will see the url. And modify the url quite like my one with your secret info.
   N.B: And you must need to provide the cluster password not your account password! So find your cluster password from database access menu in mongodb atlast cloud and change accoding to you. Here I provide all image's that you can undarstand better
  
7. Then come to render website. Give all of the imformations I set in the image below just change the name of your project and then must be change the branch name to `master` to `render-deploy-backend`

8. This is the setup for render
   ![Alt Text](assetREADME.md/renderDeployBackendSetup.png)

9. After all the setup you finished create the web service and It will deploy the project.

You can deploy frontend into vercel or netlify also. Thanks
>>>>>>> 777db6b1bb1ef22660968d5968c122b921327a4a
