function openNav() {
  document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
}

let wrap_1 = document.querySelector(".wrap-slide"),
    itemWidth_1 = document.querySelectorAll(".item-slide")[0].clientWidth;

let items_1 = document.querySelectorAll(".item-slide");

let position_1 = 0;
let currentDot_1 = 0;

showSlide_1(wrap_1, 0, 0);

function showSlide_1(elem, pix, n) {
  position_1 += pix;
  currentDot_1 += n;

  if (position_1 > 0) { 
    position_1 = -elem.clientWidth + pix;
    currentDot_1 = items_1.length - 1;
  } else if (position_1 < -elem.clientWidth - pix) {
    position_1 = 0;
    currentDot_1 = 0;
  }
  elem.style.transform = "translateX(" + position_1 + "px)";
}

document.querySelector(".btn1-left").addEventListener("click", function() {
  const prevIndex = currentDot_1 === 0 ? items_1.length - 1 : currentDot_1 - 1;
  position_1 = -items_1[prevIndex].clientWidth * prevIndex;
  currentDot_1 = prevIndex;
  wrap_1.style.transform = "translateX(" + position_1 + "px)";
});

document.querySelector(".btn1-right").addEventListener("click", function() {
  const nextIndex = currentDot_1 === items_1.length - 1 ? 0 : currentDot_1 + 1;
  position_1 = -items_1[nextIndex].clientWidth * nextIndex;
  currentDot_1 = nextIndex;
  wrap_1.style.transform = "translateX(" + position_1 + "px)";

});


//hàm kiểm tra phân giải màn hình, nếu lớn hơn 768px thì set translateX về 0
function adjustTransform() {
  const slidesContainer = document.querySelector('.wrap-slide');
  
  if (window.innerWidth >= 768) {
    slidesContainer.style.transform = 'translateX(0)';
  }
}
//resize và load là 2 sự kiện có sẵn trong web
window.addEventListener('resize', adjustTransform);
window.addEventListener('load', adjustTransform);


//
function dropdownFunction(parentLi){
  var content = parentLi.querySelector("p");
  if(content.style.display === "none" ){
    content.style.display = "block";
  }else{
    content.style.display = "none";
  }
  
}