FROM alpine:3.6

ENV PYTHONUNBUFFERED 1
RUN mkdir /build
WORKDIR /build

RUN apk add --no-cache python3-dev postgresql-dev postgresql-client musl-dev gcc

RUN adduser -D -u 1000 -h /home/django django
COPY requirements.txt /build/requirements.txt
RUN pip3 --no-cache-dir install -r requirements.txt

COPY . .

COPY start.sh /start.sh
COPY entrypoint.sh /entrypoint.sh

RUN sed -i 's/\r//' /entrypoint.sh \
    && sed -i 's/\r//' /start.sh \
    && chmod +x /entrypoint.sh \
    && chmod +x /start.sh

ENTRYPOINT ["/entrypoint.sh"]
