import getServerSession from "@/lib/better-auth/server-session";
import { redirect } from "next/navigation";

import PageHeader from "../../_components/page-header";
import GroupCardWrapper from "./_component/group-card";

const GroupsPage = async () => {
  const session = await getServerSession();

  if (!session) return redirect("/sign-in");

  return (
    <>
      {/* Header */}
      <PageHeader
        title="Telegram Groups"
        description="Manage your registered Telegram groups"
      />

      <GroupCardWrapper userId={session.user.id} />
    </>
  );
};

export default GroupsPage;
