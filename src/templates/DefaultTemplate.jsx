import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";

const DefaultTemplate = ({children}) => {
    return (
        <Container>
            <Row>
                {children}
            </Row>
        </Container>
    )
}
DefaultTemplate.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default DefaultTemplate
