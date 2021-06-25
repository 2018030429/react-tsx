import { Sub, SubsResponseFromApi } from "../types";

const fetchSubs = ():Promise<SubsResponseFromApi> => {
  return fetch("http://localhost:5000/subs").then(res => res.json());
}

const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Sub[] => {
  return apiResponse.map(subFromApi => {
    const {
      nick,
      months: subMonths,
      profileUrl: avatar,
      description
    } = subFromApi;

    return {
      nick,
      description,
      avatar,
      subMonths
    }
  });
}

const SubsService = () => {
  return fetchSubs().then(mapFromApiToSubs);
}

export default SubsService;
