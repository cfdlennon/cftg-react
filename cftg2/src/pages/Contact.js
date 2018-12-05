import React from 'react'

const Contact = props => {
    return (
        <div className="android-be-together-section mdl-typography--text-center">
            <div className="mdl-tabs mdl-js-tabs">
                <div className="mdl-tabs__tab-bar">
                    <a href="#tab1" className="mdl-tabs__tab is-active">Alamat Kursus</a>
                    <a href="#tab2" className="mdl-tabs__tab">Map</a>
                </div>
                <div className="mdl-tabs__panel is-active" id="tab1">
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--12-col">
                            <p>New Concept English Education Centre Cabang Lembah Hijau Perum Lembah Hijau Blok C28/12 Mekarsari, Cimanggis, Kota Depok, 16452</p>
                            <br/>
                            <p>Kontak Kursus : 02187707116</p>
                            <p>Kontak Peneliti : Chafidz Maulana (081387440062)</p>
                        </div>
                    </div>
                </div>
                <div className="mdl-tabs__panel" id="tab2">
                    <iframe title="frame-contact" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.242872705061!2d106.87235491535948!3d-6.362604995395859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec8db7e99181%3A0xd4fa8638c77a2e77!2sNew+Concept!5e0!3m2!1sid!2sid!4v1512331616676"
                            width="400" height="400" frameBorder="0" style={{border: 0}} allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact