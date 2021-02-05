
#### My custom styles is at the bottom of "styles.css" page
```
html{
  height: auto;
    min-height: auto;
}

body{
  transform: none;
  transition: none;
}

h1,h2,h3,h4,h5,h6,p,li,a,button{
  font-family: 'Open Sans', sans-serif;
  color: #ccc;
}

h1,h2{
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
}

nav a,.sidebar p,.sidebar a, .box h5{
  color: #ccc;
}

.portfolio-intro h1,.portfolio-intro p,.sidebar h5,.box h1{
  color: #fff;
}

nav{
  border-width: 2px;
}


body #my-info{
  position: fixed;
  height: 55%;
  min-height: auto;
  bottom:auto;
  border: 3px solid  #7f7f7f;
}

.thumbnail-box{
  border-radius: 50%;
}

article{
  width: 80%;
    /* border: 2px solid red; */
    margin: 0 auto;
}

article nav{
  border-bottom: 0;
}

.projects-box{
  margin: 0 auto;
}

.project-img{
  border-color: #7f7f7f;
}

.btn-link{
  margin: 0.5rem 0;
  border: 2px solid #7f7f7f;
}


.wrapper,article, .box, body{
  background-color: #191919;
}

.error-message, .client-message{
  display: flex;
  flex-direction: column;
  align-items: center;
  width:95%;
}

.error-message h1{
  margin-top: 5rem;
  font-size: 2.5rem;
  text-align: center;
}

.error-message h2{
  text-align: center;
  font-size: 2rem;
}

.error-message pre{
  white-space: pre-wrap;
}

.error-message .error-face-img{
  width: 15rem;
}

.client-message h2{
  text-align: center;
  font-size: 1.4rem;
}

.client-message .client-message-btn{
  padding:0.5rem 1rem;
  color: #000;
  border: 3px solid #000;
}

@media screen and (max-width: 765px) {
  .error-message .error-face-img{
    display: none;
  }
} 
```

##### Changes:
1. Move the main content to the center of the web page.
2. Make sidebar shorter and follows when scroll.
3. Make all fonts color to lighter colors (#fff,#ccc).
4. Make background color to darker color (#191919).
5. Remove bottom nav bottom border and make top nav bottom border thicker.
6. Make some of the elements border thicker and changed their color (#7f7f7f).
7. Changed font styles (Roboto Slab and Open Sans).
