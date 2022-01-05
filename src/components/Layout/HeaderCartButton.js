import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
  return (
    <button className={`${styles.button} ${styles.bump}`}>
      <CartIcon />
      <p>{props.children}</p>
      <div className={styles.badge}>{props.count}</div>
    </button>
  )
}

export default HeaderCartButton;