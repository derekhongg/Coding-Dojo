from flask import Flask, render_template, request, redirect
# import the class from friend.py
from users import User
app = Flask(__name__)
@app.route("/")
def index():
    # call the get all classmethod to get all Users
    users = User.get_all()
    print(users)
    return render_template("index.html", users = users)

@app.route('/add_user', methods=["POST"])
def add_user():
    # First we make a data dictionary from our request.form coming from our template.
    # The keys in data need to line up exactly with the variables in our query string.
    data = {
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "email" : request.form["email"]
    }
    # We pass the data dictionary into the save method from the Friend class.
    User.save(data)
    # Don't forget to redirect after saving to the database.
    return redirect('/results')

@app.route('/results')
def results():
    return render_template("results.html", users=User.get_all())

@app.route('/user/edit/<int:id>')
def edit(id):
    data ={ 
        "id":id
    }
    return render_template("edit_user.html",user=User.get_one(data))

@app.route('/user/show/<int:id>')
def show(id):
    data = {
        "id":id
    }
    return render_template("show_user.html", user=User.get_one(data))

@app.route('/user/update', methods=['POST'])
def update():
    User.update(request.form)
    return redirect('/results')

@app.route('/user/destroy/<int:id>')
def destroy(id):
    data =  {
        "id":id
    }
    User.destroy(data)
    return redirect("/results")

if __name__ == "__main__":
    app.run(debug=True, port = 5001)