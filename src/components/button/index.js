import React, {Component} from "react";
import './button.css';

export default class Btn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : {
                add: 'Добавить',
                del: 'Удалить'
            }
        }
        this.onBtn = this.onBtn.bind(this);
    }

    onBtn() {
        console.log('click')
    }

    render() {
        let classNames = 'btn';
        let valueBtn = this.state.value.add;
        if (this.props.delete) {
            classNames += ' btn-delete';
            valueBtn = this.state.value.del;
        }
        return (
            <button
                type='button'
                className={classNames}
                onClick={this.onBtn}
            >{valueBtn}</button>
        )
    }
}
