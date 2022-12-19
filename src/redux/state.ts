import profileReducer, {AddPostActionType, UpdateNewPostText} from "./profile-reducer";
import dialogsReducer, {AddMessageActionType, UpdateNewMessageText} from "./dialogs-reducer";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs:DialogType[]
    messages:MessageType[]
    newMessageText:string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: StateType
    _addPost: () => void
    _callSubscriber: () => void
    _updateNewPostText: (newPostText: string) => void
    _updateNewMessageText: (text: string) => void
    _addMessage: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}


export type ActionType = AddPostActionType | UpdateNewPostText | UpdateNewMessageText | AddMessageActionType

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi how are you', likesCount: 10},
                {id: 2, message: 'It\'s my first post', likesCount: 20}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Andrew'},
                {id: 4, name: 'Andrew'},
                {id: 5, name: 'Sasha'}],
            messages: [
                {id: 1, message: 'Yo1'},
                {id: 2, message: 'Yo2'},
                {id: 3, message: 'Yo3'},
                {id: 4, message: 'Yo4'},
                {id: 5, message: 'Yo5'}],
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log("State is changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer //pattern observer (same pattern in addEventListener)
    },
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    _updateNewPostText(newPostText: string) {
        this._state.profilePage.newPostText = newPostText
        this._callSubscriber()
    },
    _updateNewMessageText(text: string) {
        this._state.dialogsPage.newMessageText = text
        this._callSubscriber()
    },
    _addMessage() {
        const newMessage: MessageType = {
            id: 10,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages = [newMessage, ...this._state.dialogsPage.messages,]
        // this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber()
    },
    dispatch(action: ActionType) {// {type:'ADD-POST'}
        this._state.profilePage=profileReducer(this._state.profilePage,action)
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action)
        this._callSubscriber()
    }
}
// type TSExampleType = ReturnType<typeof addPostActionCreate> // How to avoid creating type

export default store
// for debugging write in console MY_NAMESPACED_NAME
//@ts-ignore TODO cleanup this debug output
globalThis.MY_NAMESPACED_NAME = {something: store}
