# Simple HTTP to HTTPS Proxy

## Installation

"Run it on Now": You're good to go!

"Run it myself": Set up an HTTPS certificate with letsencrypt and add the HTTPS lines.

## Usage

Install dependencies (Express, CORS, Request):

```
npm i
```

Then just run to start:

```
npm start
```

You can then get your content using:

```
https://<server-ip>:<port>/?url=<encoded uri>
```

The default port is 5050, i.e. `https://localhost:5050/?url=http://cnn.com`

## Deployment

Using Now:

```
now
```

We find it stays up for our needs.

## How it Works

We pipe the HTTP content to the response, which is done via https:

```
request(HTTP_URL).pipe(HTTPS_RESPONSE)
```