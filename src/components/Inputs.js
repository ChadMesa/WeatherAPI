import React from "react";

const Inputs = props => (
    <div className="container">
        <div className="well">
            <h3>What's the weather like?</h3>
            <form onSubmit={props.getWeather}>
                <fieldset>
                    <div className="form-group">
                        <label for="city">City</label>
                        <input className="form-control" type="text" name="city" placeholder="City" />
                    </div>
                    <div className="form-group">
                        <label for="country">Country</label>
                        <input className="form-control" type="text" name="country" placeholder="Country" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Go!</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </div >
);

export default Inputs;