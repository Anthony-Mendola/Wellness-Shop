# Wellness Shop
React-Redux application with a Rails API backend. Uses Semantic UI for styling. 

## Usage

To use this application, clone the repository and

(1) run `npm --prefix ./client/ install ./client/`
> To install all dependencies for the React/Redux frontend application. Alternatively, cd into client folder and run npm install.

(2) cd into Wellness-Shop folder & run `bundle`
> Installs ruby dependencies from the gem file.

(3) run `rails db:migrate db:seed`
> Creates the schema and seeds the API database with shop items.

(4) run `rake start`
> Boots the client application and API server via Foreman.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Anthony-Mendola/Wellness-Shop.
This project is intended to be a safe, welcoming space for collaboration, and contributors are expected
to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The application is available as open source under the terms of the
[MIT License]

