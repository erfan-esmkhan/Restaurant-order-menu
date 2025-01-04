import React, { useState } from 'react';
import menus from './data'
import Categories from './Components/Categories'
import Menu from './Components/Menu';
import allMenusContext from './context/allMenus';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const allCategories = ['all', ...new Set(menus.map(menu => menu.category))]

function App() {

  console.log(allCategories);

  const [allMenus, setAllMenus] = useState(menus)
  const [categories, setCategories] = useState(allCategories)

  const filterMenus = (category) => {
    if (category === 'all') {
      setAllMenus(menus)
      return
    }

    let filteredMenus = menus.filter(menu => menu.category === category)
    setAllMenus(filteredMenus)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterMenus={filterMenus} />
       <allMenusContext.Provider value={allMenus}>
       <Menu  />
       </allMenusContext.Provider>
      <div className="author-container">
              <span className="author">POWERED BY ERFAN-ESMKHANI</span>
              <span class="developer icon1"><a className="hyperlink" href="https://github.com/erfan-esmkhan/"><FaGithub  /></a></span>
              <span class="developer icon2"><a className="hyperlink" href="https://linkedin.com/in/erfan-esmkhani-7669182a6"><FaLinkedin /></a></span>
            </div>
      </section>
    </main>
  );
}

export default App;
