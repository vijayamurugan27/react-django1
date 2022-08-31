import React from 'react';
import axios from 'axios';

class Django1 extends React.Component {
    state = {details:[],}
    componentDidMount(){
        let data;
        axios.get('http://localhost:8000').then(res =>{
            data = res.data;
            this.setState({details:data});
        })
        .catch(err =>{ } )
    }
    render(){
        return(
            <div>
                <header>
                    Data generated from Django
                </header>
                <hr></hr>
                    <div>
                        <table>
                            <tr>
                                <th>Roll.no</th>
                                <th>Name</th>
                                <th>Department</th>
                            </tr>
                         {this.state.details.map((output, id) =>(                                  
                            <tr key = {id}>
                                <td>{output.id}</td>
                                <td>{output.name}</td>
                                <td>{output.department}</td>
                            </tr>                                            
                        ))}
                        </table>
                    </div>
            </div>
        )
    }
}

export default Django1;