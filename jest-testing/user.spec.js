import User from './user'

describe('UserSpec', () => {
    test('name returns full name', () => {
        const user = new User({firstname: 'Andrew', lastname: 'Webdev'});
        expect(user.name).toBe('Andrew Webdev');
    })
})
