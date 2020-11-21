import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import './userShortName.scss'

const UserShortName = ({ keyword, className }) => {
  const shortName = _.chain(keyword).split(' ').map(part => part[0]).join('').value()
  
  return (
    <div className={
      classnames('t_ShortName', className)
    }>
      {shortName}
    </div>
  );
};

UserShortName.propTypes = {
  keyword: PropTypes.string.isRequired,
  className: PropTypes.string
};

UserShortName.defaultProps = {
  keyword: 'Guest',
  className: ''
}

export default UserShortName
