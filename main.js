document.getElementById("btn-create").onclick = function() {showCreatePost()};
document.getElementById("btn-submit").onclick = function() {postNew()};


function showCreatePost() {
  document.getElementById("post-box-title").style.display='block';
  document.getElementById("post-box").style.display='block';
  document.getElementById("post-box-name").style.display='block';
  document.getElementById("btn-submit").style.display='block';
}