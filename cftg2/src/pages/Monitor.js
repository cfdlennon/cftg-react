import React from 'react'

const Monitor = props => {
    return (
        <div className="android-be-together-section mdl-typography--text-center">
            <h5>Status Koneksi</h5>
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--6-col mdl-cell mdl-cell--12-col-tablet">
                    <div>
                        <iframe title="connection-1" width="50%" height="100px" frameBorder="1" src="http://192.168.100.41:10240/public/mapshow.htm?id=2085&mapid=7CBB147F-C1CD-41E7-916F-4A37E1ADF465"></iframe>
                    </div>
                    Komputer 1
                </div>
                <div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet">
                    <div>
                        <iframe title="connection-2" width="50%" height="100px" frameBorder="1" src="http://192.168.100.41:10240/public/mapshow.htm?id=2087&mapid=2508BDF4-CF3B-403D-B614-4E7174ACB693"></iframe>
                    </div>
                    Komputer 2
                </div>
                <div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet">
                    <div>
                        <iframe title="connection-3" width="50%" height="100px" frameBorder="1" src="http://192.168.100.41:10240/public/mapshow.htm?id=2086&mapid=E3883417-4C82-4F18-B375-539F9C47EB1E"></iframe>
                    </div>
                    Komputer 3
                </div>
                <div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet">
                    <div>
                        <iframe title="connection-4" width="50%" height="100px" frameBorder="1" src="http://192.168.100.41:10240/public/mapshow.htm?id=2100&mapid=494BBEF2-05B7-4CF5-B2DE-D47BCAE92231"></iframe>
                    </div>
                    Komputer 4
                </div>
            </div>
            <h5>Penggunaan Bandwidth</h5>
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet">
                    <div>
                        <iframe title="bandwidth-1" width="100%" height="320px" frameBorder="1" src="http://192.168.100.41:10240/public/mapshow.htm?id=2069&mapid=65C013E0-33A9-434F-BAFC-69B78B4D8422"></iframe>
                    </div>
                    Komputer 1
                </div>
                <div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet">
                    <div>
                        <iframe title="bandwidth-2" width="100%" height="320px" frameBorder="1" src="http://192.168.100.41:10240/public/mapshow.htm?id=2068&mapid=720019F3-F5C4-4939-BD3A-EB34178B52E8"></iframe>
                    </div>
                    Komputer 2
                </div>
                <div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet">
                    <div>
                        <iframe title="bandwidth-3" width="100%" height="320px" frameBorder="1" src="http://192.168.100.41:10240/public/mapshow.htm?id=2084&mapid=C2913CC0-5726-4584-B742-2C5A94E200EB"></iframe>
                    </div>
                    Komputer 3
                </div>
                <div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet">
                    <div>
                        <iframe title="bandwidth-4" width="100%" height="320px" frameBorder="1" src="http://192.168.100.41:10240/public/mapshow.htm?id=2101&mapid=0E2987BA-F46E-4AA9-BECE-B6E17FC6396E"></iframe>
                    </div>
                    Komputer 4
                </div>
            </div>
        </div>
    )
}

export default Monitor