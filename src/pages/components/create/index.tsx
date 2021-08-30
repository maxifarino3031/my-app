import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { ActionsButtons } from './actions-buttons';

export const Create = () => {

    useEffect(()=>{
        console.log('create')
    },[])
    
    return (
        <>
            <Form>

                <Form.Group className="mb-3">
                    <Form.Label>First name:</Form.Label>
                    <Form.Control type="text" placeholder="First name" />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Last name:</Form.Label>
                    <Form.Control type="text" placeholder="Last name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control type="text" placeholder="Address" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>SNN:</Form.Label>
                    <Form.Control type="text" placeholder="SNN" />
                </Form.Group>

                <ActionsButtons />

            </Form>
        </>
    )
}