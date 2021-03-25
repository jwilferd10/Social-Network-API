## Links
**Live Deployment:** https://powerful-peak-16404.herokuapp.com/
<br>
<br>
**Github Repo:** https://github.com/jwilferd10/Social-Network-API
<br>
<br>
Video: https://www.youtube.com/watch?v=dDx-k-drIR0&ab_channel=JonathanWilferd

## Table of Contents 
  - [Description](#description)
  - [User Story](#user-story)
  - [Resources Used](#resources-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contact Information](#contact-information)

## Description:
MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Thus this project was built utilizing MongoDB, it is a social network application where users can create accounts and give their two cents, react to friends' thoughts, and create a friends list. Alongside MongoDB's database, this project uses both Express.js and the Mongoose ODM. Timestamps utilize JavaScript. This was an odd step from MySQL and into the realm of NoSQL, the progress of putting together the API was an experience that strengthens understanding on setting up back-end environments for projects.

## User Story
**AS A social media startup**
1. I WANT an API for my social network that uses a NoSQL database
2. SO THAT my website can handle large amounts of unstructured data

**GIVEN a social network API**
- WHEN I enter the command to invoke the application
  - THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia Core for users and thoughts
  - THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
  - THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia Core
  - THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Resources Used

    "express": "^4.17.1",
    "mongoose": "^5.12.0"

## Installation
Install this project by clicking the *GREEN* button above, you can download it by ZIP or copy the SSH!

## Usage
 - Users
    - CREATE NEW: localhost:3001/api/users, enter a username and password
    - GET ALL: /localhost:3001/api/users
    - GET SINGLE: /localhost:3001/api/users/<userId>
    - DELETE: /localhost:3001/api/users/<userId>
    - UPDATE: /localhost:3001/api/users/<userId>
 - Thoughts
    - CREATE NEW localhost:3001/api/thoughts/604fbe63dbdf0d11c80b92db (enter thoughtText, username, userId)
    - GET ALL: localhost:3001/api/thoughts/<userId>
    - GET SINGLE: localhost:3001/api/thoughts/604fbe63dbdf0d11c80b92db
    - DELETE THOUGHTS: localhost:3001/api/users/:userId/friends/:friendId
 - Friends
    - ADD FRIEND: localhost:3001/api/users/<userId>/friends/<friendId>
    - DELETE FRIEND: localhost:3001/api/users/<userId>/friends/<friendId>
 - Reactions
    - CREATE REACTION (PUT REQUEST): localhost:3001/api/thoughts/<thoughtId>/reactions
    - DELETE REACTION: /api/thoughts/:thoughtId/reactions
## Contact Information
- ### [jwilferd10](https://github.com/jwilferd10)
