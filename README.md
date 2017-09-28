# React App for Next Door Shelter


## Contents
* [Technologies](#technologies)
* [Requirements](#requirements)
* [Installation](#installation)
* [Start & Watch](#start)

## <a name="technologies"></a>Technologies
<b>Frontend:</b> React, JavaScript, jQuery, AJAX<br/>
<b>Backend:</b> Python, Flask, PostgreSQL, SQLAlchemy<br/>


## <a name="requirements"></a>Requirements

For development, you will need Node.js installed on your environement.

Also, you will need to install PostgreSQL (Mac OSX)


## <a name="installation"></a>Installation

Clone or fork this repo:

```
https://github.com/KSaryan/NDS-React-app
```

Create and activate a virtual environment inside your NDS-React-app directory:

```
virtualenv env
source env/bin/activate
```

Install the dependencies:

```
pip install -r requirements.txt
```
```
npm install
```

Set up the database:
```
createdb naxtdoorneeds
```
```
python model.py
```
```
python seed.py
``` 

Run the app:

```
python server.py
```

You can now navigate to 'localhost:5000/' to access the app.


## <a name="start"></a>Sart & Watch

    $ npm start

## Simple build for production

    $ npm run build
