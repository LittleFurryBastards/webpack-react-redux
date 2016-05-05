import './thumbnail.less';

import React from 'react';

const Thumbnail = ({ color = '#000' }) => (
  <div className="wrr-thumbnail" style={{ color }}></div>
);

Thumbnail.propTypes = {
  color: React.PropTypes.string
};

export default Thumbnail;
