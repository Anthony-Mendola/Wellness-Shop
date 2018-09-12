# Wellness Shop

## Usage

To use this application, clone the repository and

(1) run `npm --prefix ./client/ install ./client/`
> To install all dependencies for the React/Redux frontend application. Alternatively, cd into client folder and run npm install.

(2) run `rails db:migrate db:seed`
> Creates the schema and seeds the API database with shop items.

(3) run `rake start`
> Boots the client application and API server via Foreman.