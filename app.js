var meme = document.querySelector('#meme')
var container = document.querySelector('.container')

meme.addEventListener('click', function(){
	//TAKE URL CREATE IMAGE AND APPEND TO CONTAINER
	var url = document.getElementById("url").value 
	var topline = document.getElementById("topline").value
	console.log(topline)
	var meme = document.createElement('img')
	var toplinetext = document.createElement('p')
	console.log(toplinetext)
	toplinetext.textContent = topline 
	meme.setAttribute('src', url)
	container.appendChild(meme)
	container.appendChild(toplinetext)
})

