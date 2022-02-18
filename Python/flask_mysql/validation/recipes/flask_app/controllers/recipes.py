from flask import render_template,redirect,session,request, flash
from flask_app import app
from flask_app.models.recipe import Recipe
from flask_app.models.user import User

#new recipe
@app.route('/new/recipe')
def new_recipe():
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        'id': session['user_id']
    }
    return render_template("add_new.html", user = User.get_by_id(data))

#creating recipe - POST
@app.route('/create/recipe', methods = ['POST'])
def create_recipe():
    if 'user_id' not in session:
        return redirect('/logout')
    if not Recipe.validate_recipe(request.form):
        return redirect('/new/recipe')
    data = {
        "name": request.form["name"],
        "description": request.form["description"],
        "instructions": request.form["instructions"],
        "under30": int(request.form["under30"]),
        "date_made": request.form["date_made"],
        "user_id": session["user_id"]
    }
    Recipe.save(data)
    return redirect('/home')


#edit recipe
@app.route('/edit/recipe/<int:id>')
def edit_recipe(id):
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        "id":id
    }
    user_data = {
        "id":session['user_id']
    }
    return render_template("edit.html", recipe=Recipe.get_one(data) ,user=User.get_by_id(user_data))

#update recipe - POST
@app.route('/update', methods = ['POST'])
def update_recipe():
    recipe_id = request.form['id']
    if 'user_id' not in session:
        return redirect('/')
    if not Recipe.validate_recipe(request.form):
        return redirect(f'/edit/recipe/{recipe_id}')
    data = {
        "name": request.form["name"],
        "description": request.form["description"],
        "instructions": request.form["instructions"],
        "under30": int(request.form["under30"]),
        "date_made": request.form["date_made"],
        "id": request.form['id']
    }
    Recipe.update(data)
    return redirect('/home')
#show recipe
@app.route('/show/recipe/<int:id>')
def show(id):
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        "id": id
    }
    user_data = {
        "id":session['user_id']
    }
    return render_template('instructions.html', user = User.get_by_id(user_data), recipe = Recipe.get_one(data))
#delete recipe
@app.route('/destroy/recipe/<int:id>')
def destroy(id):
    data = {
        "id":id
    }
    Recipe.destroy(data)
    return redirect('/home')