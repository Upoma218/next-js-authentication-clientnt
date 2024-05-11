import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      {session?.user && (
        <>
          {" "}
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Logged in user email: {session?.user?.email}
          </h1>
          <Image
            src={
              session?.user?.image ||
              "https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?t=st=1715459108~exp=1715462708~hmac=40a055000ec139813a5536d6238f0b4747716bc603dd02b9407f01a192a2c9e5&w=740"
            }
            alt="user image"
            width={100}
            height={100}
            className="mx-auto my-6 rounded-full"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
