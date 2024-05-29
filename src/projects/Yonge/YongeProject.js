import image from './images/Yonge1.png'
import image1 from "./images/Yonge2.png";
import image2 from "./images/Yonge3.png";
import image3 from "./images/Yonge4.png";

export const YongeData = {
    main: null,
    icon: null,
    content: [
        {data:image, type:'image'},
        {
            data:"I want to thank both of you (Sandi Pei and Toh Tsun Lim) and your whole team for the tremendous efforts you all put into our project. Your vision, passion and professionalism have been extraordinary. ... The results speak for themselves.",
            author:'Russel Masters',
            title:'Vice-President, Tower Hill Development',
            keys: ['tremendous', 'vision', 'passion', 'professionalism', 'extraordinary'],
            type:'quote'
        },
        {data:"https://player.vimeo.com/video/932984973?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", type:'video'},
        {data:image1, type:'image'},
        {data:image2, type:'image'},
        {data:image3, type:'image'}
    ]
}