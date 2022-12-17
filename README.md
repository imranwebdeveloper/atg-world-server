# # This is Backend API project

Base URL link : [Create React App](https://github.com/facebook/create-react-app).

## Build On

- Node.js
- Express.js
- MongoDB
- Mongoose

## API endpoints

| Purpose                      | Method   | Required in Body      | Required Headers | Endpoints              |
| ---------------------------- | -------- | --------------------- | ---------------- | ---------------------- |
| To get all posts             | `GET`    | -                     |                  | /posts                 |
| Create a new User            | `POST`   | name, email, password |                  | /user/register         |
| To login                     | `POST`   | email, password       |                  | /user/login            |
| To reset password            | `PUT`    | email, newPassword    |                  | /user/reset            |
| To create a new post         | `POST`   | post                  | user = userId    | /user/post             |
| To update post               | `POST`   | post                  | user = userId    | /user/post/:id         |
| To delete a post             | `DELETE` |                       | user = userId    | /user/post/:id         |
| To like a post               | `POST`   |                       | user = userId    | /user/post/like/:id    |
| To comment a post            | `POST`   | comment               | user = userId    | /user/post/comment/:id |
| To see all comment of a post | `GET`    |                       | user = userId    | /user/post/comment/:id |
