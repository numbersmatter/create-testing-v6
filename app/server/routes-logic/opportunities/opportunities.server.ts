import { db, Profile } from "~/server/db.server";

const defaultPageheader:Profile ={
  avatar: 
}

export const getProfilePageHeaderData = async (profileId: string) => {
  const profileDataRef = db.profile().doc(profileId);
  const profileSnap = await profileDataRef.get();
  const profileData = profileSnap.data();
  if(!profileData){
    return undefined;
  };


  return profileData
}
