/**
 * Resolve get all launches
 * @param root parent
 * @param param1 args
 * @param param2 context
 * @returns list of launches
 */
export const resolveGetAllLaunches = async (root, { offset, limit = 10 }, { dataSources }) => 
    dataSources.launchApi.getAllLaunches({offset, limit})
