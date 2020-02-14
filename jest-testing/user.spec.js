class UserSpec {
    constructor (details) {
        const {firstname, lastname} = details
        this.firstname = firstname
        this.lastname = lastname
    }

    get name () {
        return `${this.firstname} ${this.lastname}`
    }
}

describe('UserSpec', () => {
    test('name returns full name', () => {
        const user = new UserSpec({firstname: 'Andrew', lastname: 'Webdev'});
        expect(user.name).toBe('Andrew Webdev');
    })
})
