const field = document.querySelector('textarea');
const backUp = field.getAttribute('placeholder')
const btn = document.querySelector('.btn');
const submit = document.querySelector('#submit')
const comments = document.getElementById('comment-box');

// array to store the comments
const comments_arr = [];

// to generate html list based on comments array
const display_comments = () => {
  let list = '<ul>';
   comments_arr.forEach(comment => {
    list += `<li>${comment}<br></li>`;
  })
  list += '</ul>';
  comments.innerHTML = list;
}

submit.onclick = function(event){
    event.preventDefault();
    const content = field.value;
    if(content.length > 0){ // if there is content
      // add the comment to the array
      comments_arr.push(content);
      // re-genrate the comment html list
      display_comments();
      // reset the textArea content 
      field.value = '';
    }
}
