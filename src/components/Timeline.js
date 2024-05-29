import '../stylesheets/Timeline.css'
import '../stylesheets/WelcomePage.css'
import '../stylesheets/ProjectPage.css'

import {timelineItems} from "../projects/Items";
import {useEffect, useRef, useState} from "react";
import logo from "../media/logo/PEI_LOGO.jpg";
import {ProjectPage} from "./ProjectPage";
const Timeline = ({entered, toggleEnter}) => {
    const itemRef = useRef(null)
    const defaultItem = {city: '', country: '', date: '', year: 0, title: '', image: null, type: '', size: '', client: '', data: {main:null, icon: null, images: [], videos:[]}}
    const [hover, setHover] = useState(defaultItem)
    const [filter, setFilter] = useState('')
    const [project, setProject] = useState(defaultItem)
    const [tap, setTap] = useState(defaultItem)
    const filterList = ['all', 'hospitality', 'commercial', 'mixed use', 'corporate', 'master plan', 'cultural', 'residential']
    const [index, setIndex] = useState(0)
    function formatTimelineData(item) {
        const {city, country, date} = item;
        if (city === '') return ''
        return `${city} ${country} - ${date}`
    }

    function isMobile() {
        return window.innerWidth < window.innerHeight;
    }
    
    const handleKeyDown = event => {
        if (project.title === '') {
            if (event.key === 'ArrowLeft') {

            } else if (event.key === 'ArrowRight') {
                
            } else if (event.key === 'Enter') {
                
            } else if (event.key === 'Escape') {
                if (filter !== '') setFilter('')
                else {
                    toggleEnter(!entered)
                }
            }
        } else {
            if (event.key === 'Escape') {
                setProject(defaultItem)
                setHover(defaultItem)
                // setFilter('')
            } else if (event.key === 'ArrowLeft') {
                handlePreviousProject()
            } else if (event.key === 'ArrowRight') {
                handleNextProject()
            }
        }
    }
    
    useEffect(()=>{
        window.addEventListener('keydown', handleKeyDown)
        return () =>{
            window.removeEventListener('keydown', handleKeyDown)
        }
    })

    function isTouchScreen() {
        return 'ontouchstart' in window || navigator.maxTouchPoints
    }

    let cachedTimelineItems = null;
    const getTimelineItems = () => {
        if (cachedTimelineItems !== null) {
            return cachedTimelineItems;
        }
        cachedTimelineItems = timelineItems.sort((a, b) => a.year - b.year)
        return cachedTimelineItems;    
    }
    
    const handleTimelineWheel = e => {
        itemRef.current.scrollLeft += e.deltaY / 2;
    }
    
    const handleLogoButton = () => {
        setProject(defaultItem)
        // setFilter('')
    }
    
    const handleMouseEnter = item => setHover(item)
    const handleMouseLeave = () => setHover(defaultItem)
    
    const handleTimelineItemClick = item => {
        if (!isTouchScreen()) {
            setProject(item)
            setIndex(getTimelineItems().findIndex(x => x.title === item.title))
        } else {
            if (tap.title === item.title) {
                setProject(item)
                setHover(item)
                setTap(defaultItem)
            } else {
                setTap(item)
            }
        }
    }
    
    const handleNextProject = () => {
        if (index + 1 > getTimelineItems().length - 1) {
            setProject(getTimelineItems()[0])
            setIndex(0)
        } else {
            setProject(getTimelineItems()[index + 1])
            setIndex(index + 1)
        }
    }
    
    const handlePreviousProject = () => {
        if (index - 1 < 0) {
            setProject(getTimelineItems()[getTimelineItems().length - 1])
            setIndex(getTimelineItems().length - 1)
        } else {
            setProject(getTimelineItems()[index - 1])
            setIndex(index - 1)
        }
    }
    const handleFilterClick = item => {
        item === 'all'
            ? setFilter('')
            : setFilter(item)
    }
    
    const handleBackScroll = () => {
        if (itemRef.current.scrollLeft === 0) {
            itemRef.current.scrollTo({left: itemRef.current.scrollWidth, behavior: 'smooth'})
        } else {
            itemRef.current.scrollTo({left: itemRef.current.scrollLeft - itemRef.current.getBoundingClientRect().width, behavior: 'smooth'})
        }
    }
    
    const handleNextScroll = () => {
        if (itemRef.current.scrollLeft >= itemRef.current.scrollWidth - itemRef.current.clientWidth) {
            itemRef.current.scrollTo({left: 0, behavior:'smooth'})
        } else {
            itemRef.current.scrollTo({left: itemRef.current.scrollLeft + itemRef.current.getBoundingClientRect().width, behavior: 'smooth'})
        }
    }
    
    return (
        <div className={'timeline'}>
            <img className={'logo'} src={logo} alt={'logo'} onClick={handleLogoButton}/>
            <div className={'timeline-title-container'}>
                <div className={'timeline-title'}>{project.title === '' ? hover.title : project.title}</div>
                <div className={'timeline-data'}>{project.title === '' ? formatTimelineData(hover) : formatTimelineData(project)}</div>
            </div>
            <div className={`project-content ${project.title === '' ? 'translate-y-down' : 'translate-y'}`}>
                <ProjectPage project={project} handleClose={handleLogoButton} handleNextProject={handleNextProject} handlePreviousProject={handlePreviousProject}/>
            </div>
            <div className={`timeline-base ${project.title === '' ? 'translate-y' : 'translate-y-down'}`}>
                <div className={`timeline-content ${isMobile() ? 'mobile' : ''}`} ref={itemRef} onWheel={handleTimelineWheel}>
                    {getTimelineItems().map(item => {
                        return (!item.type.toLowerCase().includes(filter))
                            ? null
                            : <div
                                className={`${!isMobile() ? 'timeline-item' : 'mobile-item'} ${hover.title === item.title ? ' selected' : ''}`}
                                key={item.title}
                                onMouseEnter={() => handleMouseEnter(item)}
                                onMouseLeave={handleMouseLeave}
                                style={{backgroundImage: `url(${item.image})`}}
                                onClick={() => {handleTimelineItemClick(item)}}
                            ></div>
                    })}
                </div>
                <div className={'timeline-info' + ` ${isMobile() ? 'info-mobile' : ''}`}>
                    <div>
                        <span className={'uppercase'}>{hover.title === '' ? '' : 'client: '}</span>
                        <span>{hover.client}</span>
                    </div>
                    <div>
                        <span className={'uppercase'}>{hover.title === '' ? '' : 'size: '}</span>
                        <span>{hover.size}</span>
                    </div>
                    <div>
                        <span className={'uppercase'}>{hover.title === '' ? '' : 'type: '}</span>
                        <span>{hover.type}</span>
                    </div>
                </div>
                {!isMobile() &&
                    <div className={'filter-container'}>
                        {filterList.map((item, index) => {
                            return <div key={item}
                                        className={item === filter ? 'filter button-selected' : 'filter button'}
                                        onClick={() => handleFilterClick(item)}>{item}</div>
                        })}
                    </div>
                }
                {!isMobile() &&
                    <div className={'timeline-arrows'}>
                        <span className="material-symbols-outlined button arrow-left-timeline"
                              onClick={handleBackScroll}>arrow_forward_ios</span>
                        <span className="material-symbols-outlined button arrow-right-timeline"
                              onClick={handleNextScroll}>arrow_forward_ios</span>
                    </div>
                }
            </div>
            {!isMobile() &&
                <div className="copyright">Copyright © PEI Architects LLC, 2024. All rights reserved.</div>
            }
        </div>
    )
}

export default Timeline