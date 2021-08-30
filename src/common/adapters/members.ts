import { Member } from '../models/member';
import api from './api';

export const saveMember = async (member: Member) => {
    const response = await api.post('api/members', member);
    return response.data;
}

export const getMembers = async () => {
    const response = await api.get('api/members');
    return response.data;
}