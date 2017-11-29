# React App for Next Door Shelter
This a practice app I made in order to get more comfortable with React. It is a mock donation site for Next Door Shelter, where people can come see what the shelter needs and sign up to donate those items, and employees can add items they need for the shelter. Obviously, it has not been styled. 

## Contents
* [Technologies](#technologies)
* [Requirements](#requirements)
* [Installation](#installation)
* [Start & Watch](#start)
* [To Do](#todo)

## <a name="technologies"></a>Technologies
<b>Frontend:</b> React, React Router, JavaScript, axios <br/>
<b>Backend:</b> Python, Flask, PostgreSQL, SQLAlchemy <br/>


## <a name="requirements"></a>Requirements

For development, you will need Node.js installed on your environement.

Also, you will need to install [PostgreSQL (Mac OSX)](https://www.postgresql.org/download/macosx/)


## <a name="installation"></a>Installation

Clone or fork this repo:

```
https://github.com/KSaryan/NDS-React-app
```

Create and activate a virtual environment inside your NDS-React-app directory:

```
cd NDS-React-app
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
cd src/client
```
```
python model.py
```


## <a name="start"></a>Sart & Watch
```
npm run dev
```

In another terminal:
```
cd NDS-React-app
source env/bin/activate
cd src/client
python server.py
```

You can now navigate to 'localhost:5000/' to access the app.

## <a name="todo"></a>To Do

- [ ] Styling 
- [X] Remove preview button/Have it autofill the div
- [X] Remove some repetition
- [ ] Switch axios to fetch - for practice
