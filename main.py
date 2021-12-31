from flask import Flask
app = Flask(__name__)

@app.route('/<file>')
def method_name(file):
    with open(file, 'rb') as f:
        return f.read()

@app.route('/')
def hello():
    with open('index.html', 'r') as f:
        return f.read()

if __name__ == '__main__':
    app.run(debug=True, port="80")