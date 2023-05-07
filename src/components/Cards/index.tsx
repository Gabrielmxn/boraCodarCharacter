import { Card } from "../Card/Card"
import finnImg from '../../assets/finn.svg';

import styles from './styles.module.scss'

const characters = [
  {
    name: 'BB-8',
    image: '/images/bb-8.svg',
    description: '',
    movie: '',
    altura: 1.7,
    location: 'Jakku',
    guns: ['Sabre de luz', 'Blaster', 'Quarterstaff']
  },
  {
    name: 'BB-8',
    image: '/images/bb-8.svg',
    description: '',
    movie: '',
    altura: 1.7,
    location: 'Jakku',
    guns: ['Sabre de luz', 'Blaster', 'Quarterstaff']
  },
  {
    name: 'BB-8',
    image: '/images/bb-8.svg',
    description: '',
    movie: '',
    altura: 1.7,
    location: 'Jakku',
    guns: ['Sabre de luz', 'Blaster', 'Quarterstaff']
  }
]
export const Cards = () => {
  return(
    <div className={styles['container-Cards']}>
     {
       characters.map((character) => {
        return(
          <Card 
            img={character.image}
            name={character.name} 
          />
        )
      })
     }
    </div>
  )
}