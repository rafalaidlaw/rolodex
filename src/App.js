import {useState, useEffect} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [searchField, setSearchField] = useState('') //[value, setValue]
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);

  console.log('render');

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => setMonsters(users)
      );
  },[]); //call back functon, dependencies most likely state or prop values.. when ever values change callback funtion runs

  

  
  const onSearchChange = (event) => {

      const searchFieldString = event.target.value.toLocaleLowerCase();    
      setSearchField(searchFieldString);    
      
     }
     const onTitleChange = (event) => {

      const searchFieldString = event.target.value.toLocaleLowerCase();    
      setTitle(searchFieldString);    
      
     }
     const filteredMonsters = monsters.filter((monster) =>   {
            return monster.name.toLocaleLowerCase().includes(searchField);
          }); 

            return (

    <div className="App">
      <h1 className='appTitle'>{title}</h1>

      <SearchBox 
        className='search-box-monster' 
        onChangeHandler={onSearchChange} 
        placeholder='search monsters'
        />
        <br />
        <SearchBox 
        className='title-search-box' 
        onChangeHandler={onTitleChange} 
        placeholder='set title'/>
        <CardList monsters={filteredMonsters} 
        />
      </div>

  )
}

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monsters: [],
//       searchField:''
//     };
//   }

//     componentDidMount() {
//       fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState(() =>  {
//         return {monsters: users}
//       },
//       () => {
//       }
//     ));
//     }

//     onSearchChange = (event) =>{
//       const searchField = event.target.value.toLocaleLowerCase();
      
//       this.setState(() => {
//         return { searchField };
//       });
      
//       }
  
//   render(){
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) =>   {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     }); 

//     return (
//       <div className="App">
// <h1 className='appTitle'>Monster Rolodex</h1>

//         <SearchBox className='search-box-monster' 
//         onChangeHandler={onSearchChange} 
//         placeholder='search monsters'/>
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
  
// }

export default App;
