import React from 'react'

import './sidebar.scss'

const Sidebar = () => {
  const menuItems = ['My Work', 'Notifications', 'Calendar']
  return (
    <div>
      <div className='MainSidebarHeading'>Tasknator Kaban</div>
      {
        menuItems.map((item, idx) => <div className='MainSidebarItem' key={idx}>{ item }</div>)
      }
    </div>
  );
}

export default Sidebar;
