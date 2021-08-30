import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { getMembers } from '../../../common/adapters/members';
import { listMembersState } from '../../../common/atoms/members';
import { IsldleHooks } from '../../../common/hooks/isIdle-hooks';
import { Member } from '../../../common/models/member';

export const ListView = () => {

    const { isIdle } = IsldleHooks();
    const { data, refetch } = useQuery('getMembers', getMembers);
    const [members, setMembers] = useRecoilState(listMembersState);


    useEffect(() => {
        if (isIdle) {
            refetch();
        }

        if (data) {
            setMembers([...data]);
        }
    }, [data, isIdle])



    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>SNN</th>
                    </tr>
                </thead>
                <tbody>
                    {members && members.map((member: Member, index: number) => {
                        return <tr key={index}>
                            <td>{member.firstName}</td>
                            <td>{member.lastName}</td>
                            <td>{member.address}</td>
                            <td>{member.ssn}</td>
                        </tr>
                    })}

                </tbody>
            </Table>

        </>
    )
}