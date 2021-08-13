import React from "react";
import classes from "./PageControls.module.css";

function PageControls(props) {
  if (props.loading){
    return (<div></div>)
  }
  return (
    
    <div className={classes.PageControls}>
      
      {props.page >= 2 ? (
        <div className={classes.Arrow} onClick={props.prev}>
          <i className="fas fa-arrow-left"></i>
        </div>
      ) : null}
      <div className={classes.Page}>{props.page}</div>
      {props.hasMore ? (
        <div className={classes.Arrow} onClick={props.next}>
          <i className="fas fa-arrow-right"></i>
        </div>
      ) : null}
    </div>
  );
}

export default PageControls;
