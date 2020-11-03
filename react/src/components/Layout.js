import React from "react";
import Paragraph from "./Paragraph";
import Calculation from "../logic/calculation";

/** @namespace React.Component */
export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: '',
            value: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let calculation = new Calculation(this.state.value);

        let result = calculation.calculate();

        let content = 'Wrong input!';

        if (result !== false) {
            // @TODO Implement it
            let pattern = /^(\d+\.?\d*)([+\-*/])(\d+\.?\d*)/;
            const matches = pattern.exec(this.state.value);
            let [, a, sign, b] = matches;
            content = `${a} ${sign} ${b} = ${result}`;
        }
        /**
         * @TODO Implement it
         */
        
        this.setState({
            content
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h1 className="col-md-8 col-md-offset-2 text-center">Devskiller React calculator</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <form className="col-md-6 col-md-offset-3 text-center" onSubmit={this.handleSubmit}>
                            <input type="text" className="form-control col-md-9" placeholder="expression..."
                                value={this.state.value} onChange={this.handleChange}/>
                            <input className="btn btn-success" type="submit" value="Submit"/>
                        </form>
                    </div>

                    <Paragraph content={this.state.content} />
                </div>
            </div>
        )
    }
}
