
import './navbar.scss'
import { useState } from 'react'
import '../../index.css'
import '../../styles/icons.scss'


export default function NavBar() { 

    return <div className='nav-vertical'>
        <div className='nav-header'>
            <div className='searchBtn'>
                
              
            <div className='icon-search'></div></div>
          <div style={{fontSize : "20px", fontWeight : "500"}}>
            
            Concured</div>
        </div>    
        
    <NavList />
    </div>
}

const NavList = () => {
    let listItems = [
        {
            text : 'Overview',
            selected : true,
            icons :'b bi-house-door li-icon',
            iconSelected : 'bi bi-house-door-fill li-icon'  
        },
        {
            text : 'Oppurtunities',
            selected : false,
            icons : 'li-icon bi bi-fire',
            iconSelected : 'li-icon bi bi-fire'
        },
        {
            text : 'My competitors',
            selected : false,
            icons : 'li-icon bi bi-person-fill',
            iconSelected : 'li-icon bi bi-person-fill'
        },
        {
            text : 'Briefs',
            selected : false,
            icons : 'bi bi-file-earmark-text-fill li-icon',
            iconSelected : 'bi bi-file-earmark-text-fill li-icon'
        },
        {
            text : 'Saved',
            selected : false,
            icons : 'li-icon bi bi-bookmark-fill',
            iconSelected : 'li-icon bi bi-bookmark-fill'
        },
        {
            text : 'Settings',
            selected : false,
            icons : 'bi bi-gear-fill li-icon',
            iconSelected:'bi bi-gear-fill li-icon'
        },
        {
            text : 'Help',
            selected : false,
            icons : 'bi bi-question-circle-fill li-icon',
            iconSelected : 'bi bi-question-circle-fill li-icon'
        },
        {
            text : 'Logout',
            selected : false,
            icons : 'fa-sharp fa-solid fa-file-export li-icon',
            iconSelected : 'fa-sharp fa-solid fa-file-export li-icon'
        }
    ]
    let [selected,setSelected] = useState(listItems)
    function selectItem(index) {
        let liCopy = listItems.slice()
       liCopy= liCopy.map((li,i) => { 
            if(i === index){
                li.selected = true;
            }
            else {
                li.selected =false;
            }
            return li;
        })    
        console.log(liCopy);
        setSelected(liCopy);    
    }
    return <ul>
        {
            selected.map((val,index) => { 
                return <li className={val.selected ? 'list-item selected' : 'list-item'} onClick={() => selectItem(index)}> 
                <i className={val.selected ? val.iconSelected : val.icons} style={{color: val.selected ?  '#7166F9' : val.text === 'Logout' ? '#928484': 'black', fontSize : '32px'}}></i>
                    {val.text}
                </li>           })
        }
    
    </ul>
} 