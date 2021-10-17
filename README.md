# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./images/solution-preview-ismael.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

1º I designed the HTML structure to be more semantic posible.
    All the entire content is inside on one container in this case a main markup because its the "body" of this website.
    Then i created two sections to divide the container in two columns, the left column have the titles, paragraphs and form, the right column have the background image.

2º When the HTML estructure was completly created i started creating the css.
  First i import all styles from style-guide.md, then created a root element to put the colors, fonts, weights that i need to use later with var().
  I used the flex property to set the 2 columns with centered elements and displays in column
  Left column have 60% of width and the right column have 40% width.

  The most noteworthy in this CSS stylesheet is the (Error Button) and (Send Form Arrow), the entire form is position relative and the error button and send form arrow are position relative.



### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript ECMA6

### What I learned

In this project i learned the semantic HTML5 markup (picture,small), with CSS in learned to better understand positions relatives and absolutes, however i learned to do a good style form with customs icons and custom errors posts.

With JS i learned how to manage custom validity form, how to create regular expresions to check if the value of input is valid value.

However i discover but not used the CSS selectors :valid , :invalid and in JS the validityState.badInput.

```html
<picture>
  <img id="logo" src="./images/logo.svg" alt="logotipo" />
</picture>
```

```js
let formatoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
```


### Continued development

I want to refine and perfect the positions relatives and absolutes, the JS code to refactorize it and want to learn how use te CSS selectors :valid , :invalid and in JS the validityState.badInput just in case in future i need it.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
