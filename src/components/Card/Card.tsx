
import styles from './styles.module.scss'
interface CardProps {
  img: string;
  name: string;
}

export const Card = ({img, name}: CardProps) => {
  return (
      <div className={styles['card']}>
        <figure>
          <img src={img} alt="Finn" />
        </figure>
        <div className={styles['cardInfoNormal']}>
          <h2>{name}</h2>
        </div>
      </div>
  )
}