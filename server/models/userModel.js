const UserModel = (sequelize, Sequelize) => {
    const {INTEGER, STRING, FLOAT, BOOLEAN, DATE} = Sequelize
    const User = sequelize.define('User', {
        id: {type: INTEGER, primaryKey: true, autoIncrement: true},
        first_name: {type: STRING},
        last_name: {type: STRING},
        email: {type: STRING},
        password: {type: STRING},
        created_at: {type: DATE },
        updated_at: {type: DATE},

    })
    return User
}

export default UserModel