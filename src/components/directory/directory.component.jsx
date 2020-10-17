import React from "react";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...OtherSectionsProps }) => (
      <MenuItem key={id} {...OtherSectionsProps} />
    ))}
  </div>
);

const mapState = (state) => ({
  sections: selectDirectorySections(state),
});

export default connect(mapState)(Directory);
