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
    text = request.args.get('text')
    need = Need(need_description=text, need_src=src)
    db.session.add(need)
    db.session.commit()
    return "Done"


@app.route('/get_needs.json')
def show_needs():
    """Get all needs"""
    needs = Need.query.all()
    needs = [{'src': need.need_src, 'text': need.need_description} for need in needs]
    result = {'needs': needs}
    return jsonify(result)


  
if __name__ == "__main__":

    app.debug = True

    connect_to_db(app)


    app.run(port=5000, host='0.0.0.0')

