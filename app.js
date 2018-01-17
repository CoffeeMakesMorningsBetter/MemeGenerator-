var meme = document.querySelector('#meme')
var container = document.querySelector('.container')
var form = document.querySelector('#form')

meme.addEventListener('click', function(){
	//TAKE URL CREATE IMAGE AND APPEND TO CONTAINER
	var url = document.getElementById("url").value 
	var topline = document.getElementById("topline").value
	var bottomline = document.getElementById("bottomline").value
	var divImg = document.createElement('div')
	divImg.setAttribute('class','image')
	var meme = document.createElement('img')
	var toplinetext = document.createElement('div')
	var bottomlinetext = document.createElement('div')
	toplinetext.textContent = topline 
	toplinetext.setAttribute('class', 'top-center')
	bottomlinetext.textContent = bottomline
	bottomlinetext.setAttribute('class', 'bottom-center')
	meme.setAttribute('src', url)
	divImg.appendChild(meme)
	divImg.appendChild(toplinetext)
	divImg.appendChild(bottomlinetext)
	container.appendChild(divImg)
	//clears fileds in forms 
	form.reset()
	container.addEventListener('click', function(){
		event.target.remove()
	})
})




