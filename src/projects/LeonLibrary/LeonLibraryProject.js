

import image1 from './images/LeonLibrary.png'
import image2 from './images/LeonLibrary2.png'
import image3 from './images/LeonLibrary3.png'
import image4 from './images/LeonLibrary4.png'

export const LibraryData = {
    main: null,
    icon: null,
    content: [
        {
            data:"It's heritage is grounded in an expression of Spanish Modernism. What a noble building ... the exteriors are extraordinary and there is a great integration with the landscape.",
            author:'Jury Comment',
            title:'2009 AIA/ALA Library Building Awards',
            keys:['heritage', 'expression', 'noble', 'extraordinary', 'integration'],
            type:'quote'
        },
        {data:image1, type:'image'},
        {
            data:"For the Guanajuato Cultural Foundation, A.C. the invitation made to Pei Partnership Architects to take over the general architectural project of the whole Cultural Forum Guanajuato located in the city of León was a great success. The interpretation and solution we received from PPA that was adopted as the Master Plan, resulted in a very solid and an appropriate approach in the urban and architectural sense, in addition to fully meeting the needs that were raised by the Foundation. Today the Cultural Forum Guanajuato is a place that has received continuous accolades and has become a meeting place for the general public.",
            author:'Lic. Luis Rodriguez Tirado',
            title:'Presidente, Fundación Cultural Guanajuato, A.C.',
            keys:['success.', 'accolades'],
            type:'quote'},
        {data:image2, type:'image'},
        {
            data:"The firm of Pei Partnership Architects was responsible for the master plan of the Cultural Forum, which includes the state library that became a landmark of the city of León and Guanajuato.",
            author: 'Ernesto Gómez Hernández',
            title: 'Ex - Presidente del Forum Cultural',
            keys:['landmark'],
            type: 'quote'
        },
        {data:image3, type:'image'},
        {data:image4, type:'image'},
    ]
}
