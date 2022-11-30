import PropTypes from 'prop-types';

export const ContactItem = ({ contact: { name, number }}) => {
    return (
        <>
            {name}: {number}
        </>
        )
};

ContactItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
};