import React from 'react'
import axios from 'axios'

class Block extends React.Component {
    constructor() {
        super()
        this.state = {
            url: '',
            list: []
        }
    }
    
    componentDidMount() {
        this.loadList()
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleClick = (e) => {
        e.preventDefault()
        var form = new FormData();
        form.append('url', this.state.url);
        if (e.target.id === 'block') {
            form.append('status', 'insert');
        } else {
            form.append('status', 'delete');
        }
        axios.post('http://localhost/prtg/setblocker.php', form, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then(response => {
            console.log('ok')
            this.loadList()
        })
    }
    
    loadList = () => {
        axios.get('http://localhost/prtg/getblocker.php', {
            validateStatus: (status) => {
                return status === 200
            }
        }).then(response => {
            this.setState({
                list: response.data
            })
        })
    }
    
    render() {
        return (
            <div className="android-be-together-section mdl-typography--text-center">
                <h3>Pembatas Akses Situs</h3>
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--12-col mdl-cell mdl-cell--12-col-phone">
                        Masukkan situs yang ingin diinginkan
                    </div>
                </div>


                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--6-col mdl-cell mdl-cell--12-col-phone">
                        <input className="mdl-cell mdl-cell--6-col mdl-cell--8-col-phone" id="url" value={this.state.url} onChange={this.handleChange} placeholder="Input Situs yang akan diblok"></input>
                    </div>
                <table className="mdl-data-table mdl-js-data-table mdl-cell mdl-cell--6-col mdl-shadow--2dp-300">
                    <thead>
                        <tr>
                          <th className="mdl-data-table__cell--non-numeric">Daftar Situs Yang Diblokir</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                            this.state.list.map((val, i) => (
                                <tr key={val.id}>
                                    <td className="mdl-data-table__cell--non-numeric">{val.url}</td>
                                </tr>
                            ))
                        }
                      </tbody>
                </table>
                </div>
                <button id="block" onClick={this.handleClick} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                    Blokir
                </button>
                <button id="delete" onClick={this.handleClick} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                    Hapus Blokir
                </button>
            </div>
        )   
    }
}

export default Block