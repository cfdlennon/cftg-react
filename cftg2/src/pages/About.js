import React from 'react'

const About = props => {
    return (
        <div className="android-be-together-section mdl-typography--text-center">
            <div className="mdl-tabs mdl-js-tabs">
                <div className="mdl-tabs__tab-bar">
                    <a href="#tab1" className="mdl-tabs__tab is-active">HTMM</a>
                    <a href="#tab2" className="mdl-tabs__tab">Peneliti</a>
                </div>
                <div className="mdl-tabs__panel is-active" id="tab1">
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--12-col">
                            <p>HTMM merupakan Aplikasi Web Mobile berbasis Android yang berguna untuk
                                Monitoring Jaringan pada Lembaga Kursus Seperti New Concept English Education
                                Centre, Selain untuk monitoring traffic, aplikasi ini juga bisa memblokir situs
                                yang tidak diinginkan.</p>
                        </div>
                    </div>
                </div>
                <div className="mdl-tabs__panel" id="tab2">
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--12-col">
                            <p>Aplikasi ini dibuat dalam rangka menyelesaikan Tugas Akhir S-1 Teknik
                                Informatika Unpad</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
