import { Member } from '../models/member';
import api from './api';

export const saveMember = async (member: Member) => {
    const response = await api.post('http://localhost:8081/api/members', member);
    return response.data;
}

export const getMembers = async () => {
    const response = await api.get('http://localhost:8081/api/members');
    return response.data;
}