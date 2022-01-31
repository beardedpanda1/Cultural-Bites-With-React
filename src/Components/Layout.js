import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import RandomRecipes from './RandomRecipes';
import About from './About';
import Contact from './Contact';
import Nav from './Nav'
import Recipes from './Recipes'



function Layout() {
  
  return( 
        
    <Router>
        <Nav /> 
        
        {/* context or useState == pass down to search to retrieve and then render*/}
        <div  className="App">
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="recipes" element={<Recipes />} />
                <Route path="randomRecipes" element={<RandomRecipes />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                
            </Routes>

        </div>
         
    </Router>

    
        
  )
}

export default Layout;
