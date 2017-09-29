from flask import jsonify
from flask import (Flask, render_template, redirect, request, flash,
                   session, url_for, g)
# from flask_debugtoolbar import DebugToolbarExtension
from sqlalchemy import update
import json
# from datetime import datetime, timedelta, date
import bcrypt
from model import db, connect_to_db, User, Need



app = Flask(__name__)
app.secret_key = "ABC"



# def login_required(f):
#     @wraps(f)
#     def decorated_function(*args, **kwargs):
#         if g.current_user is None:
#             flash("Log in to access")
#             return redirect('/')
#         return f(*args, **kwargs)
#     return decorated_function


# @app.before_request
# def pre_process_all_requests():
#     """Setup the request context"""

#     user_id = session.get('user_id')
#     if user_id:
#         g.current_user = User.query.get(user_id)
#         g.logged_in = True
#         g.email = g.current_user.email
#         g.user_id = g.current_user.user_id
#         g.phone = g.current_user.phone
#     else:
#         g.logged_in = False
#         g.current_user = None
#         g.email = None


@app.route('/')
def homepage():
    """Displays homepage"""
    return render_template('index.html')


@app.route('/save_need.json')
def save_need():
    """Saves new need"""

    src = request.args.get('src')
    if src == '':
        src = None
    text = request.args.get('text')
    need = Need(need_description=text, need_src=src)
    db.session.add(need)
    db.session.commit()
    return "Done"


@app.route('/get_needs.json')
def show_needs():
    """Get all needs"""
    needs = Need.query.all()
    if not needs:
        needs = 'none'
    else:
        needs = [{'need_id': need.need_id, 
                  'src': need.need_src, 
                  'text': need.need_description, 
                  'donated': need.donated} for need in needs]
    result = {'needs': needs}
    return jsonify(result)


@app.route('/get_current_needs.json')
def show_current_needs():
    """Get all needs"""
    needs = Need.query.filter_by(donated=False).all()
    if not needs:
        needs='none'
    else:
        needs = [{'need_id': need.need_id, 
                 'src': need.need_src, 
                 'text': need.need_description, 
                 'donated': False} for need in needs]
    result = {'needs': needs}
    return jsonify(result)


@app.route('/donate_item', methods=["POST"])
def donate():
    """Get all needs"""

    need_id = int(request.form.get('itemId'))
    need = Need.query.get(need_id)
    need.donated = True
    db.session.commit()
    data = {'success': True}
    return jsonify(data)

@app.route('/login.json')
def login():
    """Get all needs"""

    name = request.args.get('name')
    password = request.args.get('password')
    #since this is just a practice app, I hardcoded in the username and password
    #For an actual app, I would make a call to the database
    if name == 'NDS' and password  == 'Libris':
        result = {'success': 'True'}
    else:
        result = {'success': 'False'}
    return jsonify(result)

  
if __name__ == "__main__":

    app.debug = True

    connect_to_db(app)


    app.run(port=5000, host='0.0.0.0')

