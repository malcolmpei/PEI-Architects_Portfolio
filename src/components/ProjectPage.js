import {useRef} from "react";
import '../stylesheets/ProjectPage.css'

export const ProjectPage = ({project, handleClose, handlePreviousProject, handleNextProject}) => {
    const containerRef = useRef(null)
    const {client, type, size, year} = project
    const handleWheel = e => {
        containerRef.current.scrollLeft += e.deltaY / 2;
    }

    function isMobile() {
        return window.innerWidth < window.innerHeight;
    }
    const nearestPage = (position) => {
        let itemCount = project.data.content.length;
        const totalWidth = itemCount * containerRef.current.getBoundingClientRect().width;
        const pageWidth = totalWidth / itemCount;
        return Math.round(position / pageWidth) * pageWidth
    }
    const handlePrevious = () => {
        let itemCount = project.data.content.length;
        const totalWidth = itemCount * containerRef.current.getBoundingClientRect().width;
        let previous = nearestPage(containerRef.current.scrollLeft) - containerRef.current.getBoundingClientRect().width;
        if (previous < 0) previous = totalWidth;
        containerRef.current.scrollTo({left: previous, behavior: 'smooth'})
    }

    const handleNext = () => {
        let itemCount = project.data.content.length;
        const totalWidth = itemCount * containerRef.current.getBoundingClientRect().width;
        let next = nearestPage(containerRef.current.scrollLeft) + containerRef.current.getBoundingClientRect().width;
        if (next > totalWidth) next = 0;
        containerRef.current.scrollTo({left: next, behavior: 'smooth'})
    }
    
    const highlightText = (input, keys) => {
        return <div className={'highlight-box'}>{input.split(' ').map((word, index) => {
            return keys.includes(word.toLowerCase())
                ? <div key={word + index} className={'highlight'}>{word}</div>
                : <div key={word + index}>{word}</div>
        })}</div>
    }

    return (
        <div className={`${isMobile() ? 'mobile-page' : 'project-page' }`} ref={containerRef} onWheel={handleWheel}>
            {project.data.content && project.data.content.map((content, index) => {
                if (content.type === 'image') {
                    return <img key={'image-' + index} className={`${isMobile() ? 'mobile-image' : 'project-image'}`} src={content.data} alt={''}/>
                } else if (content.type === 'text') {
                    return null;
                    // Disabled 
                    return <div className={'project-text-box'}>
                        <div className={'project-text'}>{content.data}</div>
                    </div>
                } else if (content.type === 'video') {
                    return <div className={'page'}>
                        <iframe
                            key={'video-' + index}
                            src={content.data}
                            title="PEI Architects"
                            allow={'autoplay'}
                            loading={"eager"}
                            allowFullScreen={true}
                            className={'project-video'}
                        />
                    </div>
                } else if (content.type === 'quote'){
                    return null;
                    // Disabled
                    return <div className={'project-text-box'}>
                        <div className={'project-quote'}>
                            <div className={'project-quote-text'}>{highlightText(`"${content.data}"`, content.keys)}</div>
                            <div className={'project-quote-author'}>{content.author}</div>
                            <div className={'project-quote-title'}>{content.title}</div>
                        </div>
                    </div>
                }
            })}
            {!isMobile() &&
                <div className={'project-buttons'}>
                    <div className={'button'} onClick={() => {
                        handlePreviousProject()
                        containerRef.current.scrollTo({left: 0, behavior: 'smooth'})
                    }}>previous
                    </div>
                    <span className="material-symbols-outlined close-button" onClick={handleClose}>close</span>
                    <div className={'button'} onClick={() => {
                        handleNextProject()
                        containerRef.current.scrollTo({left: 0, behavior: 'smooth'})
                    }}>next
                    </div>
                </div>
            }
            {!isMobile() &&
                <div className={'project-arrows'}>
                    <span className="material-symbols-outlined button arrow-left"
                          onClick={handlePrevious}>arrow_forward_ios</span>
                    <span className="material-symbols-outlined button arrow-right"
                          onClick={handleNext}>arrow_forward_ios</span>
                </div>
            }
        </div>
    )
}