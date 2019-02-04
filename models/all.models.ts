import Sequelize from 'sequelize';
import sequelize from '../config/sequelize.config';

const Task = sequelize.define('task', {
    title: Sequelize.STRING,
    details: Sequelize.STRING,
    completed: Sequelize.BOOLEAN,
    do_date: Sequelize.DATE,
    type: Sequelize.STRING, 
});

const List = sequelize.define('list', {
    title: Sequelize.STRING,
    type: Sequelize.STRING, // 'private' (default), 'shared', 'public'
})

const User = sequelize.define('user', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
});

User.hasMany(Task);
List.belongsTo(User);

List.hasMany(Task);
Task.belongsTo(List);

