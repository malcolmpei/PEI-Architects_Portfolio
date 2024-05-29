

import image from './images/SuzhouMuseum.png'
import image1 from './images/SuzhouMuseum1.png'
import image2 from './images/SuzhouMuseum2.png'
import image3 from './images/SuzhouMuseum3.png'
import image4 from './images/SuzhouMuseum7.png'

import image5 from './images/SuzhouMuseum4.png'
import image6 from './images/SuzhouMuseum8.png'

export const SuzhouMuseumData = {
    main: null,
    icon: null,
    images: [image1, image2, image3, image4],
    content: [
        {
            data:"Pei Partnership Architects and I.M. Pei Architects fully considered the location of New Suzhou Museum, Zhuozheng Garden and Zhongwangfu through communication with citizens. Architects successfully circulated exhibition area, offices and storage area after completely knowing current museum collections. Also, they brought traditional Chinese architecture elements and Suzhou garden aesthetics into the museum's design. New Suzhou Museum has become one of landmark-museums in China.",
            author:'Zhang Xin',
            title:'Museum Director',
            keys: ['traditional', 'elements', 'aesthetics'],
            type: 'quote'
        },
        {data:image, type:'image'},
        {data:image5, type:'image'},
        {data:image6, type:'image'},
        {data:image1, type:'image'},
        {data:image2, type:'image'},
        {data:image3, type:'image'},
        {data:image4, type:'image'},
    ]
}
