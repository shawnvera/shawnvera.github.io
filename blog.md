# Shawn Vera's blog  

### Week 1 Awesome inc. Summer 2023 Bootcamp ###

![Picture of the Matrix image of green binary code streaming downward against a black background.](https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_1280.jpg)


*Was your first week what you expected? Why? Why not?*  

The first week of the Awesome inc. bootcamp was what I expected, although it exceeded those expectations. I expected a lot of information in a short period of time as it is a bootcamp, but the amount of information was still overwhelming. It's all very good information, and seeing how much information there is in the first week will help me plan my workflow better in the second week and beyond. 


*What are you excited or eager to learn more about?*  

I'm excited to learn more about JavaScript and Python. Honestly, I'm excited for most of the upcoming topics.  


*What is something about you that can only be learned by reading this blog?*  

Instrumental music helps me concentrate. Odd I know but it just works. I'm also really into tech (I know, shocking, right? lol). 

Random fact about me: The Matrix is one of my favorite movies, but the sequels were just not good.  

Here is a code example that I was able to get a refresher on this week using JavaScript.

```javascript
let btn = document.createElement('button');
btn.textContent = 'Dark';
document.body.appendChild(btn);
btn.addEventListener('click', () => {
    if (btn.textContent === 'Darken')
    darken();
    else
    lighten();
})
```