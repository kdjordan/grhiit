class LocalStorage{
    static getLocalStorage() {
        try {
            const user = JSON.parse(localStorage.getItem('token'));
            return user
        } catch (error) {
            return false
        }
    }
    static setLocalStorage(token) {
        localStorage.setItem('token', JSON.stringify(token))   
    }
    static emptyLocalStorage() {
        localStorage.clear()
    }
    static setLocalProfile(profile) {
        localStorage.setItem('profile', JSON.stringify(profile))
    }
    static getLocalProfile() {
        try {
            const profile = JSON.parse(localStorage.getItem('profile'))
            return profile
        } catch (error) {
            return false
        }
    }
}
export default LocalStorage