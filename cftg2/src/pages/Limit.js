import React from 'react'
import axios from 'axios'

class Limit extends React.Component {
    
    constructor() {
        super()
        this.state = {
            tdownload: '',
            tupload: '',
            download: 0,
            upload: 0
        }
    }
    
    componentDidMount() {
        this.loadLimiter()
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        var form = new FormData();
        form.append('upload', this.state.tupload);
        form.append('download', this.state.tdownload);
        axios.post('http://localhost/prtg/setlimiter.php', form, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then(response => {
            this.loadLimiter()
            this.setState({
                tdownload: '',
                tupload: ''
            })
        })
    }
    
    loadLimiter = () => {
        axios.get('http://localhost/prtg/getlimiter.php', {
            validateStatus: (status) => {
                return status === 200
            }
        }).then(response => {
            this.setState({
                download: response.data.download,
                upload: response.data.upload
            })
        })
    }
    
    render (){
        return (
        <div className="android-be-together-section mdl-typography--text-center">
            <form onSubmit={this.handleSubmit}>
                <h3>Pembatasan Kecepatan</h3>
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--12-col mdl-cell mdl-cell--12-col-phone">
                        Masukkan nilai bandwidth yang diinginkan
                    </div>
                </div>        
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--6-col mdl-cell mdl-cell--12-col-phone">
                        <input className="mdl-cell mdl-cell--6-col mdl-cell--8-col-phone" id="tdownload" value={this.state.tdownload} placeholder="limit download / 0 untuk menghapus limit" onChange={this.handleChange}></input>
                        <p className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">Kbps</p>
                    </div>
                    <div className="mdl-cell mdl-cell--6-col mdl-cell mdl-cell--12-col-phone">
                        <input className="mdl-cell mdl-cell--6-col mdl-cell--8-col-phone" id="tupload" onChange={this.handleChange} value={this.state.tupload} placeholder="limit upload / 0 untuk menghapus limit"></input>
                        <p className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">Kbps</p>
                    </div>
                </div>
                <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                    Submit
                </button>
            </form>
            <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
            Kecepatan Saat Ini :
            <br/>
            Download : {this.state.download === 0 ? 'Unlimited' : this.state.upload}
            <br/>
            Upload : {this.state.upload === 0 ? 'Unlimited' : this.state.download}
            </div>
            </div>
        </div>
        )
    }
}

export default Limit