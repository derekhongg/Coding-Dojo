from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "secret key"
# our index route will handle rendering our form
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    session['name'] = request.form['name']
    session['email'] = request.form['email']
    return redirect("/results")

@app.route("/results")
def show_user():
    return render_template("results.html")

if __name__ == "__main__":
    app.run(debug=True, port = 5001)

