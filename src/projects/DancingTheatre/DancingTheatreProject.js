
import image1 from "./images/DancingTheatre2.png";
import image2 from "./images/DancingTheatre3.png";
import image3 from './images/DancingTheatre4.png'
import image4 from './images/DancingTheatre5.png';
import image5 from './images/DancingTheatre6.png';

import image from './images/DancingTheatre.png'

import projectData from "../../classes/ProjectData";


const video1 = "https://player.vimeo.com/video/937957515?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
export const DancingTheatreData = {
    main: null,
    icon: null,
    content:[
        {data:image, type:'image'},
        {data:image5, type:'image'},
        {data:image1, type:'image'},
        {data: video1, type:'video'},
        {data:image2, type:'image'},
        {data:image3, type:'image'},
        {data:image4, type:'image'},
        {
            data: "https://player.vimeo.com/video/938204754?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            type: 'video'
        },
        {
            data: "https://player.vimeo.com/video/938202099?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
            type: 'video'
        },
        {
            data:"During his assignment, Mr. Li Chung Pei has always used to accomplish his job with great dedication. Mr. Pei has a great openness to new idea and a huge understanding of end user needs. We have witnessed Li Chung Pei's solid knowledge on various architectural and technical matters.",
            author:'Franco Dragone',
            title:'Productions du Dragon s.a., membre du groupe DRAGONE',
            keys:[],
            type:'quote'
        },
    ]
}

const DancingTheatre = new projectData();
DancingTheatre.setMain(null);
DancingTheatre.setIcon(null);
DancingTheatre.addContent(
    "https://player.vimeo.com/video/938202099?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    'video'
    )
DancingTheatre.addContent(
    "https://player.vimeo.com/video/938204754?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    'video'
)
DancingTheatre.addContent(
    "During his assignment, Mr. Li Chung Pei has always used to accomplish his job with great dedication. Mr. Pei has a great openness to new idea and a huge understanding of end user needs. We have witnessed Li Chung Pei's solid knowledge on various architectural and technical matters.",
    'quote',
    'Franco Dragone',
    'Productions du Dragon s.a., membre du groupe DRAGONE',
)
DancingTheatre.addContent(image1, 'image')
DancingTheatre.addContent(image2, 'image')