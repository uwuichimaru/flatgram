import styles from './SearchPanel.module.scss'
import MagnifyingGlass from '../../assets/chat-list/search-panel/MagnifyingGlass.svg'
import FunnelSimple from '../../assets/chat-list/search-panel/FunnelSimple.svg'
import { User } from '@prisma/client'
import {  useState } from 'react'
import {  ResponseLoginData, useGetAllUsersMutation } from '../../app/services/auth'

type TSendData = User[] | undefined

export const SearchPanel:React.FC<{onChange: (user:TSendData) => void}> = ({onChange}) => {
    const [value, setValue] = useState<string>()
    const [getUser] = useGetAllUsersMutation<User[]>();

    async function searchUser(userName: (string | undefined)): Promise<TSendData> {
        try{
            const usersResponse:(ResponseLoginData | ResponseLoginData[]) = await getUser().unwrap();
            const users:ResponseLoginData[] = (Array.isArray(usersResponse) ? usersResponse : [usersResponse] )
            users.forEach(user => {
                if(user.userName === userName) return user;
                return undefined;
            })
            return undefined;
        }
        catch {
            console.log('error');
            return undefined;
        }
    }

    const handleInputOnChange =  async (event:React.FormEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
        const usersList = await searchUser(value);
        onChange(usersList);
    }

    return (
        <div className={styles.searchpanel}>
            <img src={MagnifyingGlass} alt="" />
            <input placeholder='Search' onChange={(event:React.FormEvent<HTMLInputElement>) => handleInputOnChange(event)} />
            <img src={FunnelSimple} alt="" />
        </div>
    )
}