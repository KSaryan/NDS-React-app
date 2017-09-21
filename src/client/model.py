from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import bcrypt

db = SQLAlchemy()

class Need(db.Model):
    """Shelter Need"""

    __tablename__ = "needs"

    need_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    need_description = db.Column(db.String(100), nullable=False)
    need_src = db.Column(db.String(5000))

    def __repr__ (self):
        """Displayed when called"""

        return "<Need number: %s>"%(self.need_id)

    


class User(db.Model):
    """User information"""

    __tablename__ = "users"

    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    email = db.Column(db.String(30), nullable=False)
    password = db.Column(db.String(80), nullable=False)

    def __repr__ (self):
        """Displayed when called"""

        return "<user-id: %s, email: %s>"%(self.user_id, 
                                           self.email)




def connect_to_db(app, db_uri = "postgres:///nextdoorneeds"):
    """Connect the database to Flask app."""

    app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
    app.config['SQLALCHEMY_ECHO'] = False
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)


if __name__ == "__main__":
    app = Flask(__name__)
    connect_to_db(app)
    db.create_all()
    print "Connected to DB."
