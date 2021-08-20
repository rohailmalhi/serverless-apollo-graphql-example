
import {DataSource} from 'apollo-datasource'

class Users extends DataSource {
    
    context: any;
    store: any;

    constructor({sequelize}){
        super();
        this.store = sequelize;
    }

    initialize(config){
        this.context = config.context;
    }

    /**
     * Get user by email
     * @param email Email address
     * @returns user 
     */
    async getUserByEmail(email: String){
        const user = await this.store.users.find({
            email
        });
        return user;
    }

    async getLaunchIdsByUser(){
        let userTrips = [];
        const {id: userId} = {id: 5};
        const trips = await this.store.trips.findAll({
            where : { user_id : userId }
        });
        if(Array.isArray(trips) === true && trips.length > 0 ){
            userTrips = trips;
        }
        return userTrips;
    }
}

export default Users