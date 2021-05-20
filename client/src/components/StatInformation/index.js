import React from "react";
import { getAuthInstance } from '../../actions'

const StatInformation = ({totalGames, wins, loses, highestFinish, doublesHit, hit180, hit160, hit140, hit120, hit100, hit80, hit60, hit0}) => {

    return (
        <>
            <h1 className="text-center">Your Stats</h1>
            <div className="user-stats">
                <h5>Total Number Of:</h5>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-4" align="center">
                        <div className="stats-card d-flex align-items-center justify-content-center">
                            <div>
                                <p className="stats-number">{totalGames}</p>
                                <p className="stats-title">Total Games</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" align="center">
                        <div className="stats-card d-flex align-items-center justify-content-center">
                            <div>
                                <p className="stats-number">{wins}</p>
                                <p className="stats-title">Wins</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" align="center">
                        <div className="stats-card d-flex align-items-center justify-content-center">
                            <div>
                                <p className="stats-number">{loses}</p>
                                <p className="stats-title">Loses</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h5>Finish:</h5>
                <div className="row">
                    <div className="col-md" align="center">
                        <div className="stats-card d-flex align-items-center justify-content-center">
                            <div>
                                <p className="stats-number">{highestFinish}</p>
                                <p className="stats-title">Highest Finish</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md" align="center">
                        <div className="stats-card d-flex align-items-center justify-content-center">
                            <div>
                                <p className="stats-number">{doublesHit}</p>
                                <p className="stats-title">Doubles Hit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md" align="center">
                        <div className="stats-card d-flex align-items-center justify-content-center">
                            <div>
                                <p className="stats-number">0</p>
                                <p className="stats-title">Missed Checkouts</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h5>Times You've Hit:</h5>
                <div className="row">
                    <div className="col-md" align="center">
                        <div className="stats-card d-flex align-items-center justify-content-center">
                            <div>
                                <p className="stats-number">{hit180}</p>
                                <p className="stats-title">180s</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md" align="center">
                        <div className="stats-card d-flex align-items-center justify-content-center">
                            <div>
                                <p className="stats-number">{hit160}</p>
                                <p className="stats-title">160-179</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md" align="center">
                        <div className="stats-card d-flex align-items-center justify-content-center">
                            <div>
                                <p className="stats-number">{hit140}</p>
                                <p className="stats-title">140-159</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md" align="center">
                        <div className="stats-card d-flex align-items-center justify-content-center">
                            <div>
                                <p className="stats-number">{hit120}</p>
                                <p className="stats-title">120-139</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md" align="center">
                        <div className="stats-card d-flex align-items-center justify-content-center">
                            <div>
                                <p className="stats-number">{hit100}</p>
                                <p className="stats-title">100-119</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md" align="center">
                        <div className="stats-card d-flex align-items-center justify-content-center">
                            <div>
                                <p className="stats-number">{hit80}</p>
                                <p className="stats-title">80-99</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md" align="center">
                        <div className="stats-card d-flex align-items-center justify-content-center">
                            <div>
                                <p className="stats-number">{hit60}</p>
                                <p className="stats-title">60-79</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md" align="center">
                        <div className="stats-card d-flex align-items-center justify-content-center">
                            <div>
                                <p className="stats-number">{hit0}</p>
                                <p className="stats-title">0-59</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}

export default StatInformation;