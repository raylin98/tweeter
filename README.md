# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This project was built using Javascript, jQuery, AJAX for the front-end. Express and node was used for the back-end. Stylistic elements of this project was built using HTML and CSS.

## Final Product (With Screenshots)

!["Tweeter Desktop Display"]()

!["Tweeter Desktop Display with no tweet error message"]()

!["Tweeter Desktop Display with too many characters error message"]()

!["Tweeter Mobile Display"]()

!["Tweeter Mobile Display with no tweet error message"]()

!["Tweeter Mobile Display with too many characters error message"]()


## Getting Started

1. Fork this repository.
2. Clone your forked repository onto your local device.
3. Install dependencies using the `npm install` command.
4. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
5. Go to <http://localhost:8080/> in your browser.

## How to use Tweeter
- After running `npm run local` on the terminal, head over to your browser and access tweeter via <http://localhost:8080/>.
- Once you are on tweeter, submit your tweet within the text area and clicking on the tweet button.
- If there are no characters in your tweet, an error message will pop up detailing you that you need to enter something within the tweet box in order for you to post.
- Addtionally, if there are too many characters in the text-box, the counter will turn red and an error message will alert you that you need to stay within the character limit or you cannot post.
- Once you are finished using tweeter, you can head back to your terminal and use `ctrl` + `c` to stop the server.

## Dependencies

- Express
- Node 5.10.x or above
- Nodemon
