import {Component} from 'react';

class MonsterCard extends Component {
        render(){
        const { id, name, email } = this.props.monster;
        return (
                <div className='card-container' key={id}>
                        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2size=180x180&size=180x180`} />
                        <h2>{name}</h2>
                        <p>{email}</p>
                        </div>
        )
        }

}
export default MonsterCard;