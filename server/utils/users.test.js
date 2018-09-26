const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        },{
            id: '2',
            name: 'Jen',
            room: 'React Course'
        },{
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: 123,
            name: 'Andrew',
            room: 'The Office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toMatchObject([user]);
    });

    it('should remove a user', () => {
        var user = users.removeUser('1');
        expect(users.users.length).toBe(2);
        expect(user).toMatchObject({
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        });
    });

    it('should not remove a user', () => {
        var user = users.removeUser('5');
        expect(users.users.length).toBe(3);
        expect(user).toBe(undefined);
    });

    it('should find user', () => {
        var user = users.getUser('1');
        expect(users.users.length).toBe(3);
        expect(user).toMatchObject({
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        });
    });

    it('should not find user', () => {
        var user = users.getUser('5');
        expect(users.users.length).toBe(3);
        expect(user).toBe(undefined);
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');
        expect(userList).toMatchObject(['Mike', 'Julie']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');
        expect(userList).toMatchObject(['Jen']);
    });

});