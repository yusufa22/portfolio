if(window.innerWidth <= 1315 && window.innerWidth >= 1165){
    document.querySelector('#projectssvg').style.top = '1890px'
}
else if(window.innerWidth <= 1165 && window.innerWidth >= 980){
    document.querySelector('#projectssvg').style.top = '1920px'
}
else if(window.innerWidth <= 980){
    document.querySelector('#projectssvg').style.top = '1955px'
} 

window.addEventListener('resize', (e)=>{
    console.log('resize')
    if(window.innerWidth <= 1315 && window.innerWidth >= 1165){
        document.querySelector('#projectssvg').style.top = '1890px'
    }
    else if(window.innerWidth <= 1165 && window.innerWidth >= 980){
        document.querySelector('#projectssvg').style.top = '1920px'
    }
    else if(window.innerWidth <= 980){
        document.querySelector('#projectssvg').style.top = '1955px'
    } 

    else if(window.innerWidth >= 1315){
        document.querySelector('#projectssvg').style.top = '1850px'
    }
})


for(i=0; i<document.getElementsByClassName('menuoptionsli').length; i++){
    document.getElementsByClassName('menuoptionsli')[i].addEventListener('click', (e)=>{ 
        for(i=0; i<document.getElementsByClassName('menuoptionsli').length; i++){
            document.getElementsByClassName('menuoptionsli')[i].style.backgroundColor = 'transparent'
        }
        e.target.style.backgroundColor = '#2d1e35'
    })
} 

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
