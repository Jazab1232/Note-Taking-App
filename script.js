let creatButton = document.getElementById("creatButton")
let notesContainer = document.getElementById("notesContainer")
let notes = document.querySelectorAll('#notes')
let deleteImage = document.querySelectorAll('.delete')
creatButton.addEventListener('click', function(){
    let notesBox= document.createElement('p')
    let image = document.createElement('img')
    image.src='./images/delete.png'
    notesBox.className = 'notes','p-2','mt-2'
    notesBox.setAttribute('contenteditable','true')
notesContainer.appendChild(notesBox).appendChild(image)

})

notesContainer.addEventListener('click',function(e){
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove()

    }
})

