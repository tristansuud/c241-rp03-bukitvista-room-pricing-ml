FROM python:3.12.3

ENV PYTHONUNBUFFERED 1

ENV APP_HOME=/back-end
WORKDIR $APP_HOME
COPY . ./

RUN pip install --no-cache-dir --upgrade pip
RUN pip install --no-cache-dir -r requirement.txt

CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 0 app:app