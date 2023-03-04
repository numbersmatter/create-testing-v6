import { db, Profile } from "~/server/db.server";

const defaultPageheader: Profile = {
  avatar:
    "https://firebasestorage.googleapis.com/v0/b/component-sites.appspot.com/o/user%2Fpq1caOfoOYMMljX8AXEmPQZEDij2%2FpublicImages%2F873759E5-B8C9-448C-9F4D-E98AC7F45366.png?alt=media&token=7b6a6b35-3dd4-49c4-9195-ea0aeda5183d",
  bannerImage:
    "https://firebasestorage.googleapis.com/v0/b/component-sites.appspot.com/o/user%2Fpq1caOfoOYMMljX8AXEmPQZEDij2%2FpublicImages%2FBanner%2012-11-2021.png?alt=media&token=835043c2-00d8-4f71-b8e0-b330c3ae44b6",
  displayName: "milachu92",
  profileHeadline: "",
};

export const getProfilePageHeaderData = async (profileId: string) => {
  const profileDataRef = db.profile().doc(profileId);
  const profileSnap = await profileDataRef.get();
  const profileData = profileSnap.data();
  if (!profileData) {
    return defaultPageheader;
  }

  return profileData;
};

export const getNextUrl =  (
  questionOrder: string[],
  questionStatus: { [key: string]: boolean }
) => {

  const nextNonCompletedQuestion = questionOrder.find(
    (questionId) => questionStatus[questionId] === false
  );

  if (!nextNonCompletedQuestion) {
    const reviewBeforeSubmitUrl = `review`;
    return reviewBeforeSubmitUrl;
  }

  

  return nextNonCompletedQuestion;
};


export const getIntentDoc =async (intentId: string) => {
  const intentSnap = await db.intent().doc(intentId).get();
  const intentData = intentSnap.data();

  if(!intentData){
    return undefined
  };

  return { ...intentData, intentId};
} 
