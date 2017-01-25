# Setup

`git clone https://github.com/2rajpx/gitux.git gitux`

`cd gitux`

`npm install` to install dependencies

`npm start` to run webserver

`npm run dev` to make bundle file

# GitHub Api

see https://vimeo.com/173947281

### Redirect users to request GitHub access

enter to bellow address in your browser:

`https://github.com/login/oauth/authorize?client_id={{CLIENT_ID}}&scope=repo`

click authorize application

### GitHub redirects back to your site

you will redirect to an address like this:

`http://localhost:8000/auth-cb?code={{CURRENT_USER_CODE}}`

copy {{CURRENT_USER_CODE}} and put it in the bellow url

`https://github.com/login/oauth/access_token?client_id={{CLIENT_ID}}&client_secret={{CLIENT_SECRET}}&code={{CURRENT_USER_CODE}}`

post this url by `axios`

### GitHub response

you will recieve a line like bellow:

`access_token={{CURRENT_USER_ACCESS_TOKEN}}&scope=repo&token_type=bearer`

`scope` is permissions that user checked in authorize page, You must save them to handle access_level in your app 

### Third party requests

Send all requests now with `?access_token={{CURRENT_USER_ACCESS_TOKEN}}`, because some urls are private
and third party app must demonstrate to github that it has permission to these urls

It is better to save access_token in user's browser cookie or storage
