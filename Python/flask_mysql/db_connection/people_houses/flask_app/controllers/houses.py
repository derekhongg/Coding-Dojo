from flask import render_template, redirect, request
from flask_app import app
from flask_app.models.house import House

@app.route('/')
def index():
    return redirect('/houses')

@app.route('/houses')
def houses():
    houses = House.get_all()
    return render_template("index.html", all_houses = houses)

@app.route('/create/house', methods = ['POST'])
def create_houses():
    House.save(request.form)
    return redirect('/houses')

@app.route('/house/<int:id>')
def show_house(id):
    data = {
        "id":id
    }
    return render_template("house.html", house = House.get_people_in_houses(data))

@app.route('/people/destroy/<int:id>')
def destroy(id):
    data = {
        "id":id
    }
    House.destroy(data)
    return redirect("/house/<int:id>")