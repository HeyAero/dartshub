import React from "react";
import { getAuthInstance } from '../../actions'

const StatInformation = ({totalGames, wins, loses, highestFinish, doublesHit, hit180, hit160, hit140, hit120, hit100, hit80, hit60, hit0}) => {

    return (
        <>
        <h1 id="uname-title">Look At How Well You've Been Doing username</h1>
            <div className="Stats-tables">
                
                <div id="Number">
                    <h4>Total Number Of:</h4>
                    <table>
                        <tbody>

                            <tr>
                                <td className="headers">Games Played</td>
                                <td>{totalGames}</td>
                            </tr>
                            <tr>
                                <td className="headers">Wins</td>
                                <td>{wins}</td>
                            </tr>
                            <tr>
                                <td className="headers">Losses</td>
                                <td>{loses}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
               
                <div id="Finish">
                    <h4>Finish:</h4>
                    <table>
                        <tbody>

                            <tr>
                                <td className="headers">Highest Finish</td>
                                <td>{highestFinish}</td>
                            </tr>
                            <tr>
                                <td className="headers">Doubles Hit</td>
                                <td>{doublesHit}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div id="Amount">
                    <h4>Amount of:</h4>
                    <table>
                        <tbody>
                            <tr>
                                <td className="headers">180s</td>
                                <td>{hit180}</td>
                            </tr>
                            <tr>
                                <td className="headers">160-179</td>
                                <td>{hit160}</td>
                            </tr>
                            <tr>
                                <td className="headers">140-159</td>
                                <td>{hit140}</td>
                            </tr>
                            <tr>
                                <td className="headers">120-139</td>
                                <td>{hit120}</td>
                            </tr>
                            <tr>
                                <td className="headers">100-119</td>
                                <td>{hit100}</td>
                            </tr>
                            <tr>
                                <td className="headers">80-99</td>
                                <td>{hit80}</td>
                            </tr>
                            <tr>
                                <td className="headers">60-79</td>
                                <td>{hit60}</td>
                            </tr>
                            <tr>
                                <td className="headers">0-59</td>
                                <td>{hit0}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>


        </>

    )

}

export default StatInformation;