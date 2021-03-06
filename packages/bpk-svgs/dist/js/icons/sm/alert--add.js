function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
export default ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
    width: "1.125rem",
    height: "1.125rem"
  }} {...props}><path d="M18 14v-3a6 6 0 0 0-4-5.66 2 2 0 1 0-3.93 0A6 6 0 0 0 6 11v3l-2 3h16zm-2-2h-3v3h-2v-3H8v-2h3V7h2v3h3zm-6 7.06h4.8a3 3 0 0 1-5.6 0z" /></svg>;
});