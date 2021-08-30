import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';
import { saveMember } from '../../../common/adapters/members';
import { listMembersState } from '../../../common/atoms/members';
import { ActionsButtons } from './actions-buttons';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Member } from '../../../common/models/member';
import { REQUIRED_MESSAGE, SNN_MESSAGE_DUPLICATE } from '../../../common/constants/message-error-form';
import InputMask from 'react-input-mask';

export const Create = () => {

    const [members, setMember] = useRecoilState(listMembersState);

    const schema = yup.object().shape({
        firstName: yup.string().required(REQUIRED_MESSAGE),
        lastName: yup.string().required(REQUIRED_MESSAGE),
        address: yup.string().required(REQUIRED_MESSAGE),
        ssn: yup.string().required(REQUIRED_MESSAGE).test(
            "hairProfessional",
            SNN_MESSAGE_DUPLICATE,
            value => validateDuplicateSnn(value)
        )
    });

    const validateDuplicateSnn = (value: string | undefined) => {
        if (!value)
            return false;

        return members.find((member: Member) => member.ssn === value) === undefined;
    }

    const { register, handleSubmit, formState, reset } = useForm({
        defaultValues: { firstName: '', lastName: '', address: '', ssn: '' },
        resolver: yupResolver(schema)
    });

    const mutationMember = useMutation(saveMember, {
        onSuccess: (data: Member) => {
            addNewMember(data);
            reset();
        },
        onError: (error: any) => {
            console.log(error);
        }
    });

    const onSubmit = (member: Member) => {
        mutationMember.mutate({ ...member });
    }

    const addNewMember = (member: Member) => {
        setMember((oldMember) => [
            ...oldMember,
            member,
        ]);
    }


    useEffect(() => {
        
    }, [])

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Form.Group className="mb-3">
                    <Form.Label>First name:</Form.Label>
                    <Form.Control type="text" {...register('firstName')} placeholder="First name" />
                    <span>{formState.errors.firstName?.message}</span>
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Last name:</Form.Label>
                    <Form.Control type="text" {...register('lastName')} placeholder="Last name" />
                    <span>{formState.errors.lastName?.message}</span>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control type="text" {...register('address')} placeholder="Address" />
                    <span>{formState.errors.address?.message}</span>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>SNN:</Form.Label>
                    <InputMask className='form-control' mask='999-99-9999' {...register('ssn')} placeholder='ssn' />
                    <span>{formState.errors.ssn?.message}</span>
                </Form.Group>

                <ActionsButtons />

            </Form>
        </>
    )
}