for(i=0; i<document.getElementsByClassName('menuoptionsli').length; i++){
    document.getElementsByClassName('menuoptionsli')[i].addEventListener('click', (e)=>{ 
        for(i=0; i<document.getElementsByClassName('menuoptionsli').length; i++){
            document.getElementsByClassName('menuoptionsli')[i].style.backgroundColor = 'transparent'
        }
        e.target.style.backgroundColor = '#2d1e35'
    })
}

console.log(document.getElementsByClassName('main-container')[0].innerHTML.substring(17, 25))

for(i=0; i<document.getElementsByClassName('projectsmenuitems').length; i++){
    document.getElementsByClassName('projectsmenuitems')[i].addEventListener('click', (e)=>{ 
        if(e.target.innerHTML === 'Frontend'){
            for(i=0; i<document.getElementsByClassName('main-container').length; i++){
                if(document.getElementsByClassName('main-container')[i].innerHTML.substring(17, 25) !== 'Frontend'){
                    document.getElementsByClassName('main-container')[i].style.display = 'none' 
                }
                if(document.getElementsByClassName('main-container')[i].innerHTML.substring(17, 25)  === 'Frontend'){
                    document.getElementsByClassName('main-container')[i].style.display = 'grid' 
                }
            }
        }
        if(e.target.innerHTML === 'Backend'){
            for(i=0; i<document.getElementsByClassName('main-container').length; i++){
                if(document.getElementsByClassName('main-container')[i].innerHTML.substring(17, 24)  !== 'Backend'){
                    document.getElementsByClassName('main-container')[i].style.display = 'none' 
                }
                if(document.getElementsByClassName('main-container')[i].innerHTML.substring(17, 24)  === 'Backend'){
                    document.getElementsByClassName('main-container')[i].style.display = 'grid' 
                }
            }
        }
        if(e.target.innerHTML === 'Full-Stack'){
            for(i=0; i<document.getElementsByClassName('main-container').length; i++){
                if(document.getElementsByClassName('main-container')[i].innerHTML.substring(17, 26)  !== 'Fullstack'){
                    document.getElementsByClassName('main-container')[i].style.display = 'none' 
                }
                if(document.getElementsByClassName('main-container')[i].innerHTML.substring(17, 26) === 'Fullstack'){
                    document.getElementsByClassName('main-container')[i].style.display = 'grid' 
                }
            }
        }
        if(e.target.innerHTML === 'All items'){
            for(i=0; i<document.getElementsByClassName('main-container').length; i++){
                document.getElementsByClassName('main-container')[i].style.display = 'grid' 
            }
        }
    })
}