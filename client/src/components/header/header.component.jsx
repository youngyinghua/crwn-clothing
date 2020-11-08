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
import { signOutStart } from "../../redux/user/user.action";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionContainer to="/shop">SHOP</OptionContainer>
      <OptionContainer to="/contact">CONTACT</OptionContainer>
      {currentUser ? (
        <OptionContainer as="div" onClick={signOutStart}>
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

const mapDispatch = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatch)(Header);
