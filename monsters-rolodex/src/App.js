import {Component} from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox  from './components/search-box/search-box.component';


import './App.css';

class App extends Component{

  constructor(){
   super(); //so that component class k sare method bhi hum constructor me use kr paye

   this.state={
     monsters:[ ]  , 

     searchItem:'',

     

    

    
  };


  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( (response)  =>response.json()  )
  ///  .then(  (users) => console.log(users));
    .then(  (api)  => this.setState( ()  => {
      return {monsters: api}
    }   )  )
  }

  onSearchChange =  (event)  =>  {

    const serachite= event.target.value.toLocaleLowerCase();

  //  const filtereditems= this.state.monsters.filter( (monster)  =>   {
  //    return monster.name.includes(event.target.value );
   // } );
    this.setState( () => {
      return {searchItem: serachite}
    } )
   }

  render() {

    const filtereditems= this.state.monsters.filter( (monster)  =>   {
      return monster.name.toLocaleLowerCase( ).includes(this.state.searchItem);
    } );

    return (
      <div className="App">
      <div className='appIcon'>
         <h1>Monsters</h1>

      </div>
     <SearchBox onSearchChangeHandler={this.onSearchChange} className='search-monsters'  placehholder='search-monsters'/>
    

      { /*filtereditems.map(
        (monsterss)  => {
          return (
            <div key={monsterss.id}> 
            <h1>
            {monsterss.name}
          </h1></div>
          )
        }
      ) */} 

      
   

      <CardList monsters={filtereditems} />
      

    



      
    
    
      </div>
    )
  }
 
}

export default App;
