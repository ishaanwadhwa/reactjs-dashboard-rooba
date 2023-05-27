import './header.scss'
import '../../index.css'

export default function Header() { 

    return<div className="header-main" style={{marginBottom : '0px'}}>
            <div className="team">
                <div className='team-name'>
                    <span className='icon-team-logo btn' style={{padding : '1em'}}></span>
                   
                   Boro Team
                   <div className='btn'>
                   <i className='bi bi-caret-down-fill'></i> 
                   </div>
                   <i class="fa-solid fa-circle-plus info-icons" style={{cursor:'pointer'}}></i>               


                </div>



            </div>
            <div className="user-info">
            <div className='icon-default-profile-pic' style={{marginRight : '0.5em'}}></div>
                Zahra hasht..
                <div className='btn'>
                   <i className='bi bi-caret-down-fill'></i> 
                   </div>
            </div>
    </div>
}