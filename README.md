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
  - `bundle add webpacker`
  - `bundle add react-rails`
  - `rails webpacker:install`
  - `rails webpacker:install:react`
  - `yarn add @babel/preset-react`
  - `yarn add @rails/activestorage`
  - `yarn add @rails/ujs`
  - `rails generate react:install`
  - `rails generate react:component App`
- Adding Devise
  - `bundle add devise`
  - `rails generate devise:install`
  - `rails generate devise User`
  - `rails db:migrate`

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

Rails Routing

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

- `bundle add bootstrap`
- `mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss`
- `yarn add reactstrap`  
  <br/>

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

## Getting Started with React

Create folders withiin app/javascript/components

- assets
- components
- pages

\***\*app/javascript/components/App.js\*\***

```javascript
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    console.log("logged_in:", logged_in);
    console.log("current_user:", current_user);
    console.log("new_user_route:", new_user_route);
    console.log("sign_in_route:", sign_in_route);
    console.log("sign_out_route:", sign_out_route);
    return (
      <>
        <h1>JudoTen App</h1>
      </>
    );
  }
}

export default App;
```

## Setup GitHub Repo

Logged into GitHub and within the 3 Ninjaneers Organization we selected to add a new repo.

\***\*Named the repo:\*\*** judoten

\***\*Description:\*\*** Empty

\***\*Visibility:\*\*** Public

No Readme or License.

- With the command line we ran
  - ` git remote add origin https://github.com/3ninjaneers/judoten.git`
  - `git checkout -b main`
  - `git add .`
  - `git commit -m "initial commit setup`
  - `git push origin main`

## Slack Integration

Connect GitHub to slack via

- `/github login`

Inside Slack type

- `/github subscribe https://github.com/3ninjaneers/judoten.git`
- `/github subscribe 3ninjaneers/judoten`

Add additional subscriptions

- comments, reviews, and branches
- `/github subscribe 3ninjaneers/judoten comments reviews branches`

## README Creation

Created branch to contain documentation via README markdown file.

- Branch Name: readme
  - `git checkout -b readme`
- Continually edit and commit documentation through README.md file.

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

## Header

**FYI**: Conditionally rendered NavLinks do not show up in tests as anchor tags
For the testing we needed to figure out how to test for multiple a tags

```javascript
it("displays three links", () => {
  const header = shallow(<Header />);
  const headerFaqBtn = header.find("a");
  expect(headerFaqBtn.length).toEqual(3);
});
```

## Footer

Needed to add the following to properly test the image inside our footer

> Terminal

```bash
   $ yarn add --dev identity-obj-proxy
```

> File: package.json

```javascript
"jest": {
    "moduleNameMapper": {
      ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
    }
  }
```
