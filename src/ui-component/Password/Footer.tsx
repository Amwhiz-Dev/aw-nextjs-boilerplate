export const footer = (passValid?: Record<string, boolean>) => {
  return (
    <div className="footer-password-container">
      <div className="footer-password-tite">Password Requirements:</div>
      <ul>
        <li
          className={`password ${passValid?.minLength ? "valid" : "in-valid"}`}
        >
          at least 8 characters
        </li>
        <li className={`password ${passValid?.numeric ? "valid" : "in-valid"}`}>
          at least 1 number
        </li>
        <li
          className={`password ${passValid?.uppercase ? "valid" : "in-valid"}`}
        >
          at least 1 uppercase character
        </li>
        <li
          className={`password ${passValid?.lowercase ? "valid" : "in-valid"}`}
        >
          at least 1 lowercase character
        </li>
      </ul>
      <div className="footer-password-tite">
        Avoid passwords that you use with other website or that might be easy
        for someone else to guess.
      </div>
    </div>
  );
};
