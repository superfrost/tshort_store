import React from 'react'

export const SideBar = () => {
  
  const closeSideBar = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (
    <aside className="sidebar">
      <ul>
        <li>
          <a href="http://">Red</a></li>
        <li>Gren</li>
        <li>Blue</li>
        <li>Yellow</li>
        <li>White</li>
      </ul>
      <button className="sidebar-close-btn" onClick={closeSideBar}>x</button>
    </aside>
  )
}
