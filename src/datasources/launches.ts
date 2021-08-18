
import {RESTDataSource} from 'apollo-datasource-rest' 

import { LaunchResponse } from 'src/types/launch'

/**
 * Connecting to Rest API 
 */
export default class LaunchAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = 'https://api.spacexdata.com/v3/'
    }

    /**
     * Process get all launches 
     */
    async getAllLaunches({offset, limit}){
        let launches = [];
        const promise = this.get('launches', { offset, limit })
        const response = await promise;
        console.log(Array.isArray(response));
        if(Array.isArray(response) === true){
            launches = response.map(launch => this.launchReducer(launch))
        }
        
        return launches;
    }
    
    /**
     * Get launch by id
     * @param launchId Launch ID
     * @returns Launch object
     */
    async getLaunchById({launchId}){
        const response = await this.get('launches', { flight_number: launchId });
        return this.launchReducer(response[0]);
    }

    /**
     * Get detail for given launch ids
     * @param launchIds Array of launch id 
     * @returns Promise
     */
    async getLaunchesByIds({ launchIds }) {
        return Promise.all(
            launchIds.map(launchId => this.getLaunchById({ launchId })),
        );
    }

    /**
     * Reduce the response to required information
     * @param launch LaunchResponse
     * @returns Object containing information about launch
     */
    private launchReducer(launch: LaunchResponse){
        return{
            id: launch.flight_number || 0,
            cursor: `${launch.launch_date_unix}`,
            site: launch.launch_site && launch.launch_site.site_name,
            mission: {
                name: launch.mission_name,
                missionPatchSmall: launch.links.mission_patch_small,
                missionPatchLarge: launch.links.mission_patch,
            },
            rocket: {
                id: launch.rocket.rocket_id,
                name: launch.rocket.rocket_name,
                type: launch.rocket.rocket_type,
            },
        }
    }
}