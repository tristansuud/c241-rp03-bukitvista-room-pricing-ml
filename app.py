from flask import Flask, request
from dotenv import load_dotenv
import os
from flask_cors import CORS
import pickle
import sklearn.datasets as datasets

load_dotenv()

app = Flask(__name__)
CORS(app)

# app.config['DEBUG']  = os.environ.get['FLASK_DEBUG']

@app.route('/')
def hello():
    return "Hello World"

@app.route('/api/v1/predict-base-price', methods=['POST'])
def predict():
    if request.method == 'POST':
        try:
            data = request.get_json()
            with open('BasePriceModel.pkl', 'rb') as f:
                clf = pickle.load(f)
            prediction = clf.predict(data)
            print(prediction)
            return {"success": True, "code": 200 ,"data": prediction}   
        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            }

if __name__ == '__main__':
    app.run(debug=True, port=5077)
