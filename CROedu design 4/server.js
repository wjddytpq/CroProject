var arr = [1, 3, 10, 12]
var i = 0
var total = 0

while(i < arr.length){
    total = total + arr[i];
    i = i + 1;
}
console.log(`${total}`)

var navbarTemplate = `<nav class="navbar">
<div class="brand_icon">
  <a href=""><img src="IMG/LOGO-2(비율편집).png" alt="logo" /></a>
</div>
<ul class="menu">
  <li><a href="course.html" target="_blank">강의</a></li>
  <li><a href="curriculum.html" target="_blank">커리큘럼</a></li>
  <li><a href="">유튜브</a></li>
</ul>
<a href="login.html" class="login">
  로그인
</a>`
