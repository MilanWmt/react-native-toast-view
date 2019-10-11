import React, {Component,} from 'react';
import RootSiblings from 'react-native-root-siblings';
import ToastContainer, {durations, positions} from './ToastContainer';

class Toast extends Component {
    static instance = null;
    displayName = 'Toast';
    propTypes = ToastContainer.propTypes;
    positions = positions;
    durations = durations;
    lastToast = null;


    static getInstance = () => {
    if (Toast.instance === null) {
    Toast.instance = new Toast();
}
return Toast.instance;
};

show = (message, options = {title: 'Title', position: positions.BOTTOM, duration: durations.SHORT}) => {
    this.lastToast && this.lastToast.destroy();
    this.lastToast = new RootSiblings(<ToastContainer
    {...options}
    visible={true}>
        {message}
        </ToastContainer>);
    return this.lastToast;
};

static hide = toast => {
    if (toast instanceof RootSiblings) {
        toast.destroy();
    } else {
        console.warn(`Toast.hide expected a \`RootSiblings\` instance as argument.\nBut got \`${typeof toast}\` instead.`);
    }
};

_toast = null;

componentDidMount () {
    this._toast = new RootSiblings(<ToastContainer
    {...this.props}
    duration={0}
    />);
};

componentWillReceiveProps = nextProps => {
    this._toast.update(<ToastContainer
    {...nextProps}
    duration={0}
    />);
};

componentWillUnmount = () => {
    this._toast.destroy();
};

render() {
    return null;
}
}

export {
    RootSiblings as Manager
};
export default Toast;