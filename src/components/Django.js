import React from 'react';
import axios from 'axios';

class Django extends React.Component {
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
                {this.state.details.map((output, id) =>(
                    <div key = {id}>
                        <div>
                            <h2>
                               Roll.no: {output.id}
                            </h2>
                            <h2>
                              Department:  {output.department}
                            </h2>
                            <h2>
                              Name:  {output.name}
                            </h2>
                        </div>
                    </div>
                ) )  }

            </div>
        )
    }
}

export default Django;