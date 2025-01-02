

console.log(document)
// query selectors are used to target html elements

let hamburgerMenu = document.querySelector("#hamburgerMenu");
console.log(hamburgerMenu);

let mobileNavLinks = document.querySelector("#mobileNavLinks");

console.log(mobileNavLinks);

let mobileNavLinksVisible = false;

hamburgerMenu.onclick = function(){
    // alert("this has been clicked")

    // mobileNavLinks.style.display = "block";
    if(mobileNavLinksVisible == false){
        mobileNavLinks.style.display = "block";
        mobileNavLinksVisible = true;
    } else{
        mobileNavLinks.style.display = "none";
        mobileNavLinksVisible = false;
    }

}





const text = document.querySelector(".text");
text.innerHTML = text.innerText
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
	)
	.join("");


//     const bar = document.querySelector(".bar")


// const observer = new IntersectionObserver((entires) => {
//     entires.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting){
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// });

// const bar = document.querySelector(".bar")
//     bar.addEventListener('scroll', e =>{
//         bar.forEach((el) => observer.observe(el));
// })