import {Component} from 'react'

import './card.styles.css'

class Card extends Component{

    render(){

        const propss=this.props.monster;
        return (

            <div
            className="card-container" key={propss.id}>
              <img 
               alt={ `monsters ${propss.name}` }
               src={`https://robohash.org/${propss.id}?set=set2&size=180x180`} />

               <h2>{propss.name}</h2>
               <p>{propss.email}</p>
               

            </div>

        )
    }
}

export default Card;