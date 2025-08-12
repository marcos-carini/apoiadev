import Image from "next/image";
import { getInfoUser } from "./_data-access/get-info-user";
import { notFound } from "next/navigation";
import FormDonate from "./_components/form";
import CoverSection from "./_components/cover-section";

export default async function Apoia({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = await params;

  const user = await getInfoUser({username});

  if (!user) {
    notFound();
  }

  return (
    <div className=" min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <CoverSection 
        coverImage={user?.image ?? ""}
        profileImage={user?.image ?? ""}
        name={user?.name ?? "Sem nome"}
      />
    </div>
  )
}

//  <FormDonate slug={user.username!} creatorId={user.connectedStripeAccountId ?? ""}/>