
import logoSvg from '../assets/img/pizza-logo.svg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Search from './Search/index';



function Header() {
  const { items, totalPrice } = useSelector(state => state.cart);
  return (
    <div className="header">
      <div className="container">
        <Link to="/cart">
        <span>{totalPrice}</span>
          <div className="header_logo">
            <img width="38" src={logoSvg} alt="Pizza" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца у нас</p>
        </div>
      </div>
    </Link>
    <Search/>
    <div className="header_cart">
    <Link to="/cart" className="button button--cart">
      <span>Hot Pizza</span>
      <span>520р</span>
      <div className="button__delimiter"></div>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        </svg>
        <span>{items.length}</span>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Header;