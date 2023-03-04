import { json, LoaderArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { getProfilePageHeaderData } from "~/server/routes-logic/opportunities/opportunities.server";
import ProfileHeader from "~/server/routes-logic/opportunities/ui/ProfileHeader";

export async function loader({params}:LoaderArgs) {
  // get pageHeaderData this is an issue because request relies on hidden information
  const pageHeaderData = await getProfilePageHeaderData("milachu92")
  if(!pageHeaderData){
    return defaultPageheader;
  }

  return json({pageHeaderData});
}


export default function IntentLayOut() {
  const { pageHeaderData } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-[#2a9bb5] flex flex-col ">
    <ProfileHeader data={pageHeaderData} />
    <div className="mx-auto rounded-lg">
      <Outlet />

    </div>
  </div>
  );
}