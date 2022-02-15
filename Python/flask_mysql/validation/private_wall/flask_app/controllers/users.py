from flask import render_template,redirect,session,request, flash
from flask_app import app
from flask_app.models.user import User
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask_app.models.message import Message

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods = ['POST'])
def register():
    if not User.validate_register(request.form):
        return redirect('/')
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "age": request.form['age'],
        "email": request.form["email"],
        "password": bcrypt.generate_password_hash(request.form["password"]) #saves and hashes the password
    }
    id = User.save(data) #save data here
    session['user_id'] = id #put user id into session, need to check if user is in session, if not, it will reroute to home page this makes app secure
    return redirect('/home')

@app.route('/login',methods=['POST'])
def login():
    user = User.get_by_email(request.form)
    if not user:
        flash("Invalid Email","login")
        return redirect('/')
    if not bcrypt.check_password_hash(user.password, request.form['password']):
        flash("Invalid Password","login")
        return redirect('/')
    session['user_id'] = user.id
    return redirect('/home')

@app.route('/home')
def home():
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        'id': session['user_id']
    }
    user = User.get_by_id(data)
    messages = Message.get_user_messages(data)
    users = User.get_all()
    return render_template("dashboard.html",user=user,users=users,messages=messages)

@app.route('/logout')
def logout():
    session.clear() #clears session, must login again
    return redirect('/')