# CPSC 481 - Social Network for Niche Groups

## Authors

- Manraj Singh
- Usharab Khan
- Esohe Aideyan
- Lucas Kasdorf
- Rian Tapang

## Getting Started

Visit the deployed interface here: https://manrajsingh6.github.io/CPSC481-Social-Media-Network/#/login

The login details are already populated in the login input.

## Features

### Discover Page

- Select a Group or Event filter option by using the buttons
- Scroll through the Groups or Events using your scrollwheel
- Filter Groups or Events using the search bar
- Toggle group participation using the Join/Leave toggle button on each group card
- Toggle event RSVP using the RSVP/Cancel RSVP toggle button on each event card
- Add a new Group or Event by clicking the Add (+) button beside the page header, and fill in the respective Group or Event details

### Individual Group Page

- Click a Group name (from the Discover page) to toggle this view
- View Group details (name, description and creator)
- View Posts under (relevant) to this Group
- Create a new Post by clicking the Add (+) button beside the Group name header

### Specific Post Page

- Click a Post card (from the Individual Group Page page) to toggle this view
- View Post details (image, title, content, likes)
- Like and Dislike using the thumbs up/down buttons
- View comments under the Post
- Add a comment by entering input and clicking "Add" button

### Specific Event Page

- Click an Event name (from the Discover page) to toggle this view
- View Event details (image, name, dscription, likes, RSVPs, location, duration, date)
- Like and Dislike using the thumbs up/down buttons
- Toggle RSVP status
- View comments under the Event
- Add a comment by entering input and clicking "Add" button
- Share an event using the "Share" button at the top

### Direct Messages

- Use the chat icon in the navbar to see Direct Messages page
- See direct messages
- Click a direct message to view a chat, along with send direct messages
- Create a new direct message with a new user

### Notifications

- Click the bell icon in the static app header to navigate to Notifications page
- View static notification data

### Settings Page

- Click the gear icon in the navbar to navigate to the Settings page
- View Account Settings (Profile info, notification settings, privacy and safety policies)
- View Support Settings (FAQ, Terms and Conditions, App Updates)
- Logout of the account

### Login/Register Pages

- Enter information into the fields to login or register (not implemented as there is no backend)
- Login account details are static and prepopulated in the inputs
- Static "Forgot Password" pages

## Running The App Locally

### Prerequisites - These must be installed before running the App

- Install [Node Version Manager](https://nodejs.org/en/download/package-manager)

### Running the React App

1. Clone the repo
2. In the root directory, run `nvm use && npm install`
3. Run `npm run dev` to start the development environment.

### Useful VSCode Extensions

I recommend installing the following extensions:

- Tailwind CSS Intellisense
- ESLint
- Prettier
- Pretty TypeScript Errors
- Babel JavaScript
- JavaScript and TypeScript Nightly
