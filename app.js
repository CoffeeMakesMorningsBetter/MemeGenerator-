var meme = document.querySelector('#meme')
var container = document.querySelector('.container')
var form = document.querySelector('#form')
var message = "click on border to remove"
var url = document.getElementById("url")
var topline = document.getElementById("topline")
var bottomline = document.getElementById("bottomline")


document.addEventListener("DOMContentLoaded", function(){
	
	
	meme.addEventListener('click', function(){
	//CRETAE DIV TO HOLD ALL CONTENT SET ATTRIBUTES 
	var divImg = document.createElement('div')
	divImg.setAttribute('class','image')

	//CREATE SPAN TO CONVEY MESSAGE SET ATTRIBUTES
	var span = document.createElement('span')
	span.setAttribute('class', 'close')
	span.textContent = message

	//CREATE IMAGES TO CONVEY MESSAGE SET ATTRIBUTES
	var meme = document.createElement('img')
	var link = url.value 
	console.log(link)
	meme.setAttribute('src', link)
	meme.setAttribute('class', 'meme')


	//CREATE TEXT FOR TOP AND BOTTOM
	var toplinetext = document.createElement('div')
	toplinetext.textContent = topline.value 
	toplinetext.setAttribute('class', 'top-center')

	var bottomlinetext = document.createElement('div')
	bottomlinetext.textContent = bottomline.value
	bottomlinetext.setAttribute('class', 'bottom-center')
	
	//APPEND EVERYTHING ALL CREATED ELEMENTS TO HOLDER
	divImg.appendChild(span)
	divImg.appendChild(meme)
	divImg.appendChild(toplinetext)
	divImg.appendChild(bottomlinetext)

	//APEND CRETED DIV with INFO to CONTAINER DIV
	container.appendChild(divImg)
	
	event.preventDefault() // PREVENT FORM FROM REFRESHING ON SUBMIT 
	//CLERA FORM FIELDS 
	form.reset()

	})

	container.addEventListener('click', function(){
		alert(event.target.tagName)
		if(event.target.tagName === 'IMG'){
		event.target.parentElement.remove()
		}
	})

})





