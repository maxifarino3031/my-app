import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { saveMember } from '../../../common/adapters/members';
import { listMembersState } from '../../../common/atoms/members';
import { ActionsButtons } from './actions-buttons';

export const Create = () => {

    const setMember = useSetRecoilState(listMembersState);

    const mutationMember = useMutation(saveMember, {
        onSuccess: (data: any) => {
            console.log(data);
            addNewMember();
        },
        onError: (error: any) => {
            console.log(error);
        }
    });


    const handleOnSubmit = (event: any) => {
        mutationMember.mutate({ firstName: 'farino', lastName: 'benja', address: 'cordoba', ssn: '138-19-4544' });
        event.preventDefault();
    }

    const addNewMember = () => {
        setMember((oldMember) => [
            ...oldMember,
            {
                firstName: 'farino',
                lastName: 'benja',
                address: 'cordoba',
                ssn: '138-19-4544'
            },
        ]);
    }


    useEffect(() => {
        console.log('create')
    }, [])

    return (
        <>
            <Form onSubmit={handleOnSubmit}>

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