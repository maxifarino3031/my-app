import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap'
import { useQuery } from 'react-query';
import { getTokenAuth } from '../common/adapters/authentication';
import { setAccessToken } from '../common/storage';
import { Create } from './components/create'
import { ListView } from './components/list_view'

export const HomePage = () => {

    const { data, isLoading } = useQuery('authUser', getTokenAuth);

    useEffect(() => {
        if (data) {
            setAccessToken(data.token);
        }
    }, [data])

    return (
        <div className='container'>
            {data && <Row>
                <Col><Create /></Col>
                <Col><ListView /></Col>
            </Row>
            }
        </div>
    )
}