from dataclasses import dataclass
from flask import render_template, redirect, request
from flask_app import app
from flask_app.models.email import Email

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def process():
    if not Email.validate_email(request.form):
        return redirect('/')
    Email.save(request.form)
    return redirect('/success')

@app.route('/success')
def success():
    print(Email.get_all())
    return render_template("success.html", email = Email.get_all())

@app.route('/success/edit/<int:id>')
def edit(id):
    data = {
        "id":id
    }
    print(Email.get_one(data))
    return render_template("edit_email.html", emails = Email.get_one(data))

@app.route('/success/update', methods = ['POST'])
def update():
    if not Email.validate_email(request.form):
        return redirect('/')
    Email.update(request.form)
    return redirect ('/success')

@app.route('/delete/<int:id>')
def delete_email(id):
    data = {
        "id":id
    }
    Email.destroy(data)
    return redirect('/success')