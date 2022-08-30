import { Component } from "react";
import './card-list.styles.css'
import Card from "../card/card.component";

class CardList extends Component{

    render(){

        console.log('render')
         

      //  const {monsters}=this.props;
      const prop=this.props.monsters;
        
        console.log(this.props)
        return ( <div className="card-list">
           {prop.map( (mon)  =>  {
            return ( 
             <Card monster={mon}/>
            )
           }
          
         
           )}

          
        </div> )
       
    }
}

export default CardList;