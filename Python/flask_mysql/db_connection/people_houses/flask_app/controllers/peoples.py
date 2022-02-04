from flask import render_template, redirect, request
from flask_app import app
from flask_app.models import house #people
from flask_app.models.people import People

@app.route('/people')
def people():
    return render_template('people.html', house = house.House.get_all())

@app.route('/create/people', methods = ['POST'])
def create_person():
    People.save(request.form)
    return redirect('/')

