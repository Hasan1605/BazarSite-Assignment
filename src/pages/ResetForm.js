import React, { useState } from "react";
import ResetConatiner from "../Container/reset";
import Userdoesntexist from "../Container/doesntexist";
import ChangePasswordConatiner from "../Container/passwordChange";
import VerifyConatiner from "../Container/verify";
import ErrorConatiner from "../Container/Error";
import TimedOutConatiner from "../Container/timedOut";
import SuccessfullyChanged from "../Container/SuccessfullyChnaged"
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useParams
} from 'react-router-dom';
import * as ROUTES from '../constants/routes'
import axios from 'axios';
function ResetForm({ Value, change, ...restProps }) {
    const handler = (event) => {

        if (event.message === "success") {
            console.log("Running All fine");
            const Id = {
                id: event.id,
                address: event.address,
                message: event.message
            }
            change(event);

        }
        if (event.message === "Error Occurred") {
            console.log("Running All fine");
            const Id = {
                id: event.id,
                address: event.address,
                message: event.message
            }
            change(event);

        }
        else if (event.message === "Not present") {
            const Id = {
                id: event.id,
                address: event.address,
                message: event.message
            }
            change(event);

        }
        else if (event.message === "Failed") {
            const Id = {
                id: event.id,
                address: event.address,
                message: event.message
            }
            change(event);
        }
        else if (event.message === "finished") {
            const Id = {
                id: event.id,
                address: event.address,
                message: event.message
            }
            change(event);
        }
        else {
            const Id = {
                id: event.id,
                address: event.address,
                message: event.message
            }
            change(event);

        }
    }

    const Always = () => {

        var { userId, Email } = useParams()
        const [message, setmessage] = useState("Null")
        const deleteOn = (address, password) => {
            console.log("Here in deleteOn");
            alert("Here in delete on")
            const response = axios({
                method: 'post',
                url: address,
                data: {
                    password: password
                }
            }).catch(() => {
                console.log(console.error);
                alert(console.error)
            })
            response.then((response) => {
                alert(response.data.message)
                const y = {
                    address: address,
                    id: "#2155@",
                    message: response.data.message
                }
                handler(y);
            })
        }
        const Url = "http://localhost:5000/resetpassword/" + userId + "/" + Email;
        console.log(Url);
        const response = axios({
            method: 'get',
            url: Url
        }).catch(() => {
            console.log(console.error);
        })
        response.then((response) => {
            setmessage(response.data.message)
            console.log(response);
        })
        if (message === "All done") {
            return (<ChangePasswordConatiner deleteOnSubmit={deleteOn} address={Url} />)
        }
        else if (message === "Error Occurred") {
            console.log("This is Working");
            return (<ErrorConatiner />)
        }
        else if (message === "TimeOut") {
            return (<TimedOutConatiner />)
        }
        else if (message === "finished") {
            alert("Im here")
            return (<SuccessfullyChanged />)
        }
        else {
            return (<></>)
        }

    }
    const conditonalrendering = () => {
        if (Value.message === "Not present") {
            return (<Routes>
                <Route exact path={ROUTES.PASSWORD_RESET} element={<Userdoesntexist />}></Route>
            </Routes>
            )
        }
        else if (Value.message === "Hello") {
            return (<Routes>
                <Route exact path={ROUTES.PASSWORD_RESET} element={<ResetConatiner
                    user={(name) => {
                        const email = name;

                        const response = axios({
                            method: 'post',
                            url: 'http://localhost:5000/resetpassword',
                            data: {
                                email: email
                            }
                        }).catch(() => {
                            console.log(console.error);
                        })
                        response.then((response) => {
                            handler(response.data)
                        })
                    }
                    }
                />}></Route>
                <Route exact path="/resetpassword/:userId/:Email" element={<Always />}></Route>
            </Routes>)
        }
        else if (Value.message === "Failed") {
            return (<Routes>
                <Route exact path={ROUTES.PASSWORD_RESET} element={<ErrorConatiner />}></Route>)
            </Routes>)
        }
        else if (Value.message === "Timed Out") {
            return (<Routes>
                <Route exact path={ROUTES.PASSWORD_RESET} element={<timedOutConatiner />}></Route>)
            </Routes>)
        }
        else if (Value.message === "success") {

            return (<Routes>
                <Route exact path={ROUTES.PASSWORD_RESET} element={<VerifyConatiner />}></Route>)
                <Route exact path="/resetpassword/:userId/:Email" element={<Always />}></Route>
            </Routes>)
        }
        else if (Value.message === "finished") {
            return (<Routes><Route exact path="/resetpassword/:userId/:Email/" element={<SuccessfullyChanged />}></Route></Routes>);
        }
        else if (Value.message === "Error Occurred") {
            <Route exact path={ROUTES.PASSWORD_RESET} element={<ErrorConatiner />}></Route>
        }

    }
    return (<>
        {conditonalrendering()}
    </>);
}



export default ResetForm;




