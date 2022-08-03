import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

function Button({className, onClick, children}) {
    return (
        <>
            <button
                className={`btn ${className}`}
                onClick={onClick ? () => onClick() : null}
            >
                {children}
            </button>
        </>
    );
}

export const OutlineButton = ({className, onClick, children}) => {
    return (
        <Button
            className={`btn-outline ${className}`}
            onClick={onClick ? () => onClick() : null}
        >
            {children}
        </Button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button;

