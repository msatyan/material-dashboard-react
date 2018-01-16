import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles
} from 'material-ui';

import { typographyStyle } from 'variables/styles';

class Warning extends React.Component{
    render(){
        return (
            <div className={this.props.classes.defaultFontStyle + " " + this.props.classes.warningText}>
                {this.props.children}
            </div>
        );
    }
}

Warning.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Warning);
