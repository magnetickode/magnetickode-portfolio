import React from "react";
import { connect } from "react-redux";

import Navbar from "../../components/Navbar";
import { changeTheme } from "../../store/actions/mainActions";
import { Props } from "./types";
import { ReduxState } from "../../store/reducers/types";

const NavbarContainer: React.FC<Props> = props => <Navbar {...props} />;

const mapStateToProps = ({ main: { isDesktop } }: ReduxState) => ({
  isDesktop
});

const mapDispatchToProps = {
  changeTheme
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarContainer);
