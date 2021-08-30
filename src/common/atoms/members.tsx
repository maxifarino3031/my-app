import { atom } from 'recoil';
import { Member } from '../models/member';

export const INIT_VALUE_MEMBERS: Array<Member> = [];

export const listMembersState = atom({
    key: 'listMembersState',
    default: INIT_VALUE_MEMBERS
});