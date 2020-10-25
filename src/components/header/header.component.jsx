import { auth } from "../../firebase/firebase.utils";
import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionsContainer,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionContainer to="/shop">SHOP</OptionContainer>
      <OptionContainer to="/contact">CONTACT</OptionContainer>
      {currentUser ? (
        <OptionContainer as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionContainer>
      ) : (
        <OptionContainer to="/signin">SIGN IN</OptionContainer>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state),
});

export default connect(mapStateToProps)(Header);
