var meme = document.querySelector('#meme')
var container = document.querySelector('.container')

meme.addEventListener('click', function(){
	//TAKE URL CREATE IMAGE AND APPEND TO CONTAINER
	var url = document.getElementById("url").value 
	var topline = document.getElementById("topline").value
	console.log(topline)
	var divImg = document.createElement('div')
	divImg.setAttribute('classs','image')
	var meme = document.createElement('img')
	var toplinetext = document.createElement('div')
	// console.log(toplinetext)
	toplinetext.textContent = topline 
	toplinetext.setAttribute('class', 'top-left')
	meme.setAttribute('src', url)
	divImg.appendChild(meme)
	divImg.appendChild(toplinetext)
	container.appendChild(divImg)
})

