import React from "react";
import * as PropTypes from "prop-types";
import { css, cx } from '@emotion/css';

const styles = () => ({
  position: "relative",
  width: "90%",
  overflow: "hidden",
  boxShadow: '0px 0px 2px 0 rgba(60,64,67, 0.5)',
  backgroundColor: "#0288d1",
  minWidth: "80px",
  minHeight: 64,
  borderRadius: 4,
  marginTop: '5%',
  marginLeft: "5%",
  color: '#fff',
  textAlign: 'center'
});

const Card = ({ children, outlined, className, ...props }) => {

  return (
    <div className={cx(css(styles()), className)} {...props}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  children: undefined,
  className: undefined,
  outlined: false
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  outlined: PropTypes.bool
};

export default Card;
