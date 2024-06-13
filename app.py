from flask import Flask, request
from dotenv import load_dotenv
import os
from flask_cors import CORS
import pickle
import numpy as np
import joblib
import pandas as pd

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
            data = request.json
            data_list = list(data.values())
            print(data_list)
            pipeline = joblib.load('BasePriceModel(2).pkl')
            sampleX = np.array(data_list).reshape(1, 48)
            y_pred = pipeline.predict(sampleX)
            print(y_pred)
            
            return {"success": True, "code": 200 ,"data": "prediction.tolist()"}   
        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            }


if __name__ == '__main__':
    app.run(debug=True, port=5077)
