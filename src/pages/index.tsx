import { Col, Row } from 'react-bootstrap'
import { Create } from './components/create'
import { ListView } from './components/list_view'

export const HomePage = () => {

    return (
        <div className='container'>
            <Row>
                <Col><Create /></Col>
                <Col><ListView/></Col>
            </Row>
        </div>
    )
}