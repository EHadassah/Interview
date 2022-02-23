import React from "react";
import {HashRouter, NavLink, Route} from 'react-router-dom';
import Mealbyletter from "./Mealbyletter";
import MealbyId from "./MealbyId";
import "./App.css";

class Nav extends React.Component{
    render(){
        return(
            <div className="containers">
               <HashRouter><h4> 
                &nbsp; <NavLink to="/MealbyId" >MealbyId</NavLink>   
         &nbsp; <NavLink to="/Mealbyletter">Mealbyletter</NavLink></h4>                    
               <h5> <Route path="/MealbyId" component={MealbyId}></Route>  
                <Route path="/Mealbyletter" component={Mealbyletter}></Route></h5>        
                </HashRouter>
             </div>
        )   
    }
}
export default Nav;