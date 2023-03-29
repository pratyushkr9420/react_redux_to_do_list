const Sequelize = require('sequelize');
const conn  = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/to_do_list_db');
const{UUID,UUIDV4,INTEGER,STRING,BOOLEAN,TEXT} = Sequelize;

const User = conn.define('user',{
    id:{
        type:UUID,
        defaultValue:UUIDV4,
        primaryKey:true
    },
    name:{
        type:STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    }
})

const Task = conn.define('task',{
    id:{
        type:UUID,
        defaultValue:UUIDV4,
        primaryKey:true
    },
    name:{
        type:STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    priority:{
        type:INTEGER,
        defaultValue:5,
        allowNull:false
    },
    isComplete:{
        type:BOOLEAN,
        allowNull:false,
        defaultValue:false
    },
    image:{
        type:TEXT
    }
})

Task.belongsTo(User)


module.exports = {
    conn,
    User,
    Task
}