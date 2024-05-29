import '../stylesheets/WelcomePage.css'

import logo from '../media/logo/PEI_LOGO.jpg'
export const WelcomePage = ({entered, toggleEnter}) => {
    const Rockefeller = 'Sterling'
    const group = 'Project'
    const management = 'Development'
    const middleSexLogo = 'https://www.mxschool.edu/wp-content/themes/core/img/mx-logo-white.svg'
    return (
        <div className={`welcome-page ${entered ? 'opacity-0' : ''}`} onClick={()=>{toggleEnter(true)}}>

            {/*<div className={'pei'}>Pei Architects</div>*/}
            <div className={'welcome-logo-box'}>
                <img className={'welcome-logo'} src={logo} alt={''}/>
            </div>

            {/*<div className={'logo-group'}>*/}
            {/*    <div className={'letter-group'}>*/}
            {/*        {Rockefeller.split('').map((letter, index) => {*/}
            {/*            return (*/}
            {/*                <div key={letter + index} className={'rockefeller'}>{letter}</div>*/}
            {/*            )*/}
            {/*        })}*/}
            {/*    </div>*/}
            {/*    <div className={'letter-group'}>*/}
            {/*        {group.split('').map((letter, index) => {*/}
            {/*            return (*/}
            {/*                <div key={letter + index} className={'rockefeller'}>{letter}</div>*/}
            {/*            )*/}
            {/*        })}*/}
            {/*    </div>*/}
            {/*    <div className={'letter-group'}>*/}
            {/*        {management.split('').map((letter, index) => {*/}
            {/*            return (*/}
            {/*                <div key={letter + index} className={'rockefeller'}>{letter}</div>*/}
            {/*            )*/}
            {/*        })}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}