# JudoTen

## Overview

This app was created to help people find places where they can train Judo. While there are Judo Dojos out there, many dojos merely teach Judo as a supplement to their main martial art, and few people tend to know about these supplemental programs. JudoTen solves this problem by placing the information about the locations of Judo Programs in one spot.

#### LINK : http://www.judoten.com/

---

## Features

- An unregistered user can view information about all dojos within the database.
- A registered user can view, create, edit, and delete information about dojos they have entered in the database.

---

## App Setup:

- Create base rails app
  - removes testing
  - replaces default database with postgresql
    - ```bash
      $ rails new judoten-app -d postgresql -T
      $ cd judoten-app
      $ rails db:create
      ```
- Add RSPec
  ```bash
    $ bundle add rspec-rails
    $ rails generate rspec:install
  ```
- Adding React
  ```bash
  $ bundle add webpacker
  $ bundle add react-rails
  $ rails webpacker:install
  $ rails webpacker:install:reac
  $ yarn add @babel/preset-react
  $ yarn add @rails/activestorage
  $ yarn add @rails/ujs
  $ rails generate react:install
  $ rails generate react:component App
  ```
- Adding Devise

  ```bash
  $ bundle add devise
  $ rails generate devise:install
  $ rails generate devise User
  $ rails db:migrate
  ```

config/environments/development.rb

```ruby
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

config/initializers/devise.rb

```ruby
# Change this:
  config.sign_out_via = :delete
# To this:
  config.sign_out_via = :get
```

## Rails Routing

```bash
$ rails generate controller Home
```

- add file `app/views/home/index.html.erb`

```ruby
  <%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>
```

- app/views/layouts/application.html.erb

```javascript
// Find this line:
<%= javascript_importmap_tags %>

// And replace it with this:
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```

config/routes.rb

```ruby
get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
root 'home#index'
```

---

## React Routing

- `yarn add react-router-dom@5.3.0`

app/javascript/components/App.js

```ruby
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
```

Adding Reactstrap

```bash
$ bundle add bootstrap
$ yarn add reactstrap
```

> File path: app/assets/stylesheets/application.scss

```scss
@import "bootstrap";
```

Dojo Resource

```bash
$ rails g resource Dojo name:string address:string city:string state:string website:string phone:string instructor:string email:string image:text user_id:integer
$ rails db:migrate
```

User/Dojo Associations

app/model/dojos.rb

```ruby
class Dojo < ApplicationRecord
  belongs_to :user
end
```

app/models/user.rb

```ruby
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :dojos
end
```

---

## Running the Project Locally

When installing the repo for the first time follow these instructions:

1.  Clone Repo to local machine
    ```bash
    $ git clone https://github.com/3ninjaneers/judoten.git
    ```
2.  Run installs (Yarn & Bundle)
    ```bash
    $ yarn install
    $ bundle install
    ```
3.  Create database and migrate
    ```bash
    $ rails db:create
    $ rails db:migrate
    ```
4.  Run Application
    ```bash
    $ rails s
    ```
    **or**
    ```bash
    $ rails server
    ```

## Dev Dependencies

- React
- Reactstrap
- React-DOM
- Ruby on Rails
