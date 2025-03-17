
<h1 align="center" style="color:#1e5eff;">
  
  <a href="https://images.squarespace-cdn.com/content/v1/5a186d0cd55b41fc35ebc29a/1513584713347-AETB12R0GVYN19JIGFGC/Project_Logos-18.png">
    <img src="https://images.squarespace-cdn.com/content/v1/5a186d0cd55b41fc35ebc29a/1513584713347-AETB12R0GVYN19JIGFGC/Project_Logos-18.png" alt="airbnb" height="400"width="700">
  </a>
  <br>
  <span style="color:#FF6347;">Airbnb Alike Project</span>
</h1>


<h4 align="center">A comprehensive Airbnb clone designed to provide a seamless platform for users to list, explore, and book unique accommodations. It features intuitive search, user authentication, booking management, and responsive design for an enhanced user experience. <br><br><a href="https://bookiet.vercel.app/" target="_blank">Vercel-link</a>.</h4>

<p align="center">
  <a href="https://badge.fury.io/js/electron-markdownify">
    <img src="https://badge.fury.io/js/electron-markdownify.svg"
         alt="Gitter">
  </a>
  <a href="https://gitter.im/electron-markdownify"><img src="https://badges.gitter.im/electron-markdownify.svg"></a>
  <a href="https://saythanks.io/to/bullredeyes@gmail.com">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>
  <a href="https://www.paypal.me/">
    <img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=flat">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

[@@ Watch the video @@](https://drive.google.com/file/d/1MWCiAwNSghk5P1yexILBuqKHsMktb6wq/view?usp=sharing)


<div align="center">
    <a href="https://drive.google.com/file/d/1MWCiAwNSghk5P1yexILBuqKHsMktb6wq/view?usp=sharing">
        <img src="https://i.sstatic.net/Vp2cE.png" alt="Watch the video" width="800" height="400">
    </a>
</div>

## Key Features

* User Registration and Authentication  
  - Secure sign-up/login for guests and hosts with role-based access and profile management.  

* Property Listing and Management  
  - Hosts can list properties with detailed descriptions, images, pricing, and availability settings.  

* Advanced Search and Filters  
  - Guests can search for properties using filters like location, price range, amenities, and availability dates.  

* Booking and Reservation System  
  - Real-time booking and reservation with instant confirmations and automated calendar updates.  

* Review and Rating System  
  - Guests can leave reviews and ratings for hosts and properties, enhancing trust and reliability.  

## Download
https://nodejs.org/dist/v22.14.0/node-v22.14.0-x64.msi

## NPM Packages

- [multer](https://www.npmjs.com/package/multer) – for image upload and viewing on the website  
- [schema](https://www.npmjs.com/package/schema) – for schema validation  
- [mongo-session](https://www.npmjs.com/package/mongo-session) – for session storage using Mongo-session  
- [bcrypt](https://www.npmjs.com/package/bcrypt) – for password hashing and salting  


## Steps to Clone Project

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

## Related

The Project is Live on vercel :
https://bookiet.vercel.app/


## Support

<a href="https://buymeacoffee.com" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

<p>Or</p> 

<a href="https://www.patreon.com">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>


## License

MIT

---

> [Portfolio](https://ankur-tiwari-portfolio-qn6d.vercel.app/) &nbsp;&middot;&nbsp;
> GitHub [@ankur0066](https://github.com/Ankur0066) &nbsp;&middot;&nbsp;
