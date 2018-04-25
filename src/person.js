import PropTypes from 'prop-types'

export const person = {
    basics: {
        name: 'Jose Chu',
        label:'',
        picture: '',
        email: 'jchudb93@gmail.com',
        phone: '999-898-138',
        website: 'jchudb93.github.io/jose-chu',
        summary: 'Computer Engineering student',
        location: {
            address: 'Saycusca 171',
            postalCode: 'Lima32',
            city: 'Lima',
            department: 'Lima'
        },
        profiles: {
            network: 'Github',
            username: 'jchudb93',
            url: 'https://github.com/jchudb93'
        }

    }
}

export const locationType = PropTypes.shape({

    address: PropTypes.string,
    postalCode: PropTypes.string,
    city: PropTypes.string,
    department: PropTypes.string

}).isRequired

export const networkType = PropTypes.shape({

    network: PropTypes.string,
    username: PropTypes.string,
    url: PropTypes.string

}).isRequired

export const basicsType = PropTypes.shape({

    name : PropTypes.string,
    label: PropTypes.string,
    picture: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    summary: PropTypes.string,
    location: PropTypes.shape(locationType),
    network: PropTypes.arrayOf(networkType)

}).isRequired

export const resumeType = PropTypes.shape({
    basics: basicsType,
})