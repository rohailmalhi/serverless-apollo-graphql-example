
type launchSiteResponse = {
    site_id: String
    site_name: String
    site_name_long: String
}

type launchRocketStageResponse = {
    cores: Array<launchRocketStageCoreResponse>
}

type launchRocketStageCoreResponse = {
    core_serial: String
    flight: number
    block?: String
    gridfins: Boolean
    legs: Boolean
    reused: Boolean
    land_success: String
    landing_intent: Boolean
    landing_type: String
    landing_vehicle: String
}

type launchRocketResponse = {
    rocket_id: String
    rocket_name: String
    rocket_type: String
    first_stage : launchRocketStageResponse
    second_stage: launchRocketStageResponse
};

type launchlinksResponse = {
    mission_patch: String
    mission_patch_small: String
    reddit_campaign: String
    reddit_launch: String
    reddit_recovery: String
    reddit_media: String
    presskit: String
    article_link: String
    wikipedia: String
    video_link: String
    youtube_id: String
    flickr_images: Array<String>
}

export type LaunchResponse = {
    flight_number: Number
    launch_date_unix: Date
    mission_name: String
    mission_id: Array<String>
    launch_site: launchSiteResponse
    upcoming: Boolean
    rocket:  launchRocketResponse
    links: launchlinksResponse
}