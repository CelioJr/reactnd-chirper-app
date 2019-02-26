import { getInitialData } from '../utils/api'
import { receiveTweets } from './tweets'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading} from 'react-redux-loading'

const AUTHED_USER_ID = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users, tweets}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveTweets(tweets))
                dispatch(setAuthedUser(AUTHED_USER_ID))
                dispatch(hideLoading())
            })
    }
}