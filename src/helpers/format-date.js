import { formatDistanceToNow } from 'date-fns'
export const formatDistance =(date)=>{
    return formatDistanceToNow(new Date(date), { addSuffix: true })
}