import thekaratekid from './thekaratekid.mp4'
import chhichhore from './chhichhore.mkv'
import luststories from './luststories.mkv'
import robot2_0 from './robot2.0.mp4'


let movies = [
    {
        id: 0,
        name: 'The Karate Kid',
        imgsrc: 'http://www.freedownloadbd.com/Admin/main/images/tt1155076/poster/l13emtM0cz0HyJeWSxb6ml5RvzT.jpg',
        src: thekaratekid,
        isPrivate: false,
        description: "Work causes a single mother to move to China with her young son; in his new home, the boy embraces kung fu, taught to him by a master."
    },
    {
        id: 1,
        name: 'Chhichhore',
        imgsrc: 'https://m.media-amazon.com/images/M/MV5BYjg2ZDI2YTYtN2EwYi00YWI5LTgyMWQtMWFkYmE3NmJkOGVhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SY1000_CR0,0,692,1000_AL_.jpg',
        src: chhichhore,
        isPrivate: false,
        description: "Following a group of friends from university as they progress into middle-age life and go their own separate ways."
    },
    {
        id: 2,
        name: 'Lust Stories',
        imgsrc: 'https://m.media-amazon.com/images/M/MV5BMTgwNTQ4NDAyN15BMl5BanBnXkFtZTgwNjMwMzQ3NTM@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
        src: luststories,
        isPrivate: true,
        description: "Four short films by four of India's biggest directors exploring love, sex and relationships in modern India."
    },
    {
        id: 3,
        name: 'Robot 2.0',
        imgsrc: 'https://m.media-amazon.com/images/M/MV5BOGNhMWE2YzktYzU0Yi00OGFlLTlhYzMtODBiOGFiZTM1YjI1XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_.jpg',
        src: robot2_0,
        isPrivate: false,
        description: "After mobiles start mysteriously flying out of the hands of people in Chennai, Dr Vaseegaran summons his trusted robot Chitti to ward off the bird-shaped supernatural powers of Pakshirajan."
    }
]


export default movies;