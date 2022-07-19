# JudoTen

## Overview

This app was created to help people find places where they can train Judo. While there are Judo Dojos out there, many dojos merely teach Judo as a supplement to their main martial art, and few people tend to know about these supplemental programs. JudoTen solves this problem by placing the information about the locations of Judo Programs in one spot.

#### LINK : http://www.judoten.com/

## Features

- An unregistered user can view information about all dojos within the database.
- A registered user can view, create, edit, and delete information about dojos they have entered in the database.

## App Setup:

- Create base rails app
  - removes testing
  - replaces default database with postgresql
    - `rails new judoten-app -d postgresql -T`
    - `cd judoten-app`
    - `rails db:create`
      - Created database 'judoten_app_development'
      - Created database 'judoten_app_test'
- Add RSPec
  - `bundle add rspec-rails`
  - `rails generate rspec:install`
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

- Change
  - `config.sign_out_via = :delete`
- To
  - `config.sign_out_via = :get`

Rails Routing

- `rails generate controller Home`
- add file `app/views/home/index.html.erb`
- add

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

app/assets/stylesheets/application.scss

```scss
@import "bootstrap";
```

Dojo Resource

- `rails g resource Dojo name:string address:string city:string state:string website:string phone:string instructor:string email:string image:text user_id:integer`
- `rails db:migrate`

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

Create folders

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

## Switching Drivers Instructions

When changing drivers or installing the repo for the first time follow these instructions:

1.  Clone Repo to local machine
    1.  `git clone https://github.com/3ninjaneers/judoten.git`
2.  Run installs (Yarn & Bundle)
    1.  `yarn install`
    2.  `bundle install`
3.  Create database and migrate
    1.  `rails db:create`
    2.  `rails db:migrate`
4.  Run Application
    1.  `rails s` **or** `rails server`
5.  Run Front-end javascript testing
    ` yarn add jest`
6.  \_\*\*Run enzyme testing for Ruby
    `yarn add -D enzyme react-test-renderer enzyme-adapter-react-16`
7.  Test Header Components and Header using jest and enzyme
    // Imports React into our test file.
    import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Header from './Header'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When Header renders", () => {
it("displays a heading", () => {
const header = shallow(<Header />)
const headerHeading = header.find("h1")
expect(headerHeading.text()).toEqual("judoten")
})
})
import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import './Header.scss'

class Header extends Component {
render() {
const {
logged_in,
current_user,
new_user_route,
sign_in_route,
sign_out_route
} = this.props
console.log("logged_in:", logged_in)
console.log("current_user:", current_user)
return (

<header id='header-container'>
<h1><a id='home-link' href="/">judoten</a></h1>
<Nav className='links'>
<NavItem>
<NavLink className='page-links' to='/dojoindex'> All dojos </NavLink>
</NavItem>
{logged_in &&
<NavItem>
<a href="/dojonew" className="nav-link"> Add a dojo </a>
</NavItem>
}
{logged_in &&
<NavItem>
<a href={sign_out_route} className="nav-link">Sign Out</a>
</NavItem>
}
{!logged_in &&
<NavItem>
<a href={sign_in_route} className="nav-link"> Sign In </a>
</NavItem>
}
{!logged_in &&
<NavItem>
<a href={new_user_route} className="nav-link"> Create an Account </a>
</NavItem>
}
{logged_in &&
<NavItem>
<NavLink className='page-links' to='/mydojos'> dojo </NavLink>
</NavItem>
}
</Nav>
</header>
)
}
}
export default Header

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
    yarn add --dev identity-obj-proxy
```

> File: package.json

```javascript
"jest": {
    "moduleNameMapper": {
      ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
    }
  }
```

The following is the import necessary to add our logo (located in the assets folder) to the footer

```javascript
import logo from "../../../assets/images/3ninjaneers.png";
```

```jsx
<Row>
  <img src={logo} />
</Row>
```

Testing the Footer we used the following "interesting" function to make sure that a p tag and its contents were rendering

```javascript
it("displays p tag containing copyright info", () => {
  const footer = shallow(<Footer />);
  const footerCopyright = footer.find("p");
  expect(footerCopyright.exists()).toEqual(true);
});
```
