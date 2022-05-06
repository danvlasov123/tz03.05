import s from "./style.module.scss";

const Button = ({ role, padding, children }) => {
  if (role === "secondary") {
    return (
      <button
        style={{
          padding: padding && padding,
        }}
        className={s.button_secondary}
      >
        {children}
      </button>
    );
  } else if (role === "primaryWhite") {
    return (
      <button
        className={s.button_primaryWhite}
        style={{
          padding: padding && padding,
        }}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        className={s.button_primary}
        style={{
          padding: padding && padding,
        }}
      >
        {children}
      </button>
    );
  }
};

export default Button;
