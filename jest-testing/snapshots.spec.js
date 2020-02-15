const user = {
    name: 'Andrew Philippov',
    age: 33,
    job: 'Frontend Engineer'
}

test('User matches', () => {
    expect(user).toMatchSnapshot()
})
